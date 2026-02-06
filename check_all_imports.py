import os
import re

def check_imports(root_dir):
    files_on_disk = {}
    for root, dirs, files in os.walk(root_dir):
        if 'node_modules' in root or '.git' in root or 'build' in root:
            continue
        for name in files:
            full_path = os.path.join(root, name)
            files_on_disk[full_path.lower()] = full_path

    import_re = re.compile(r'(?:import|from|require)\s+[\'"](.+?)[\'"]')
    
    issues = []
    for root, dirs, files in os.walk(root_dir):
        if 'node_modules' in root or '.git' in root or 'build' in root:
            continue
        for name in files:
            if not name.endswith(('.js', '.jsx', '.ts', '.tsx', '.css')):
                continue
            
            file_path = os.path.join(root, name)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            matches = import_re.findall(content)
            for match in matches:
                if match.startswith('.'):
                    # Resolve path
                    target_path = os.path.normcase(os.path.normpath(os.path.join(root, match)))
                    
                    # Extensions to probe
                    probes = [target_path]
                    exts = ['.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.jpg', '.jpeg', '.svg', '.JPG', '.PNG', '.mp4']
                    
                    found = False
                    for ext in exts:
                        p = target_path + ext
                        if p.lower() in files_on_disk:
                            found = True
                            actual = files_on_disk[p.lower()]
                            # Case match check
                            if actual != p:
                                issues.append(f"Case mismatch: {file_path} imports {match} but disk has {os.path.basename(actual)}")
                            break
                        # Also check if it's the exact path (e.g. import with extension)
                        if target_path.lower() in files_on_disk:
                            found = True
                            actual = files_on_disk[target_path.lower()]
                            if actual != target_path:
                                issues.append(f"Case mismatch: {file_path} imports {match} but disk has {os.path.basename(actual)}")
                            break
                        # Also check index.js
                        p_index = os.path.join(target_path, "index.js")
                        if p_index.lower() in files_on_disk:
                            found = True
                            break
                        p_index_jsx = os.path.join(target_path, "index.jsx")
                        if p_index_jsx.lower() in files_on_disk:
                            found = True
                            break
                    
                    if not found:
                        # Might be a library or something else, but if it looks like a local file, report it
                        if any(match.endswith(e) for e in exts) or '/' in match:
                             # Double check if it's just missing
                             issues.append(f"Missing import: {file_path} cannot find {match}")
    return issues

if __name__ == "__main__":
    src_dir = os.path.join(os.getcwd(), 'frontend', 'src')
    issues = check_imports(src_dir)
    for issue in issues:
        print(issue)
