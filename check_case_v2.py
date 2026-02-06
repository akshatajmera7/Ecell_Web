import os
import re

def check_case_sensitivity(root_dir):
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
                    target_path = os.path.normpath(os.path.join(root, match))
                    
                    # Extensions to probe
                    probes = [target_path]
                    exts = ['.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.jpg', '.jpeg', '.svg', '.JPG', '.PNG']
                    if not any(target_path.lower().endswith(e) for e in exts):
                        for e in ['.js', '.jsx', '/index.js', '/index.jsx']:
                            probes.append(target_path + e)
                    
                    for p in probes:
                        p_lower = p.lower()
                        if p_lower in files_on_disk:
                            actual = files_on_disk[p_lower]
                            # Only report if the casing is different
                            # We need to compare specific part of the path
                            if os.path.basename(actual) != os.path.basename(p):
                                issues.append((file_path, match, os.path.basename(p), os.path.basename(actual)))
                            break
    return issues

if __name__ == "__main__":
    src_dir = os.path.join(os.getcwd(), 'frontend', 'src')
    issues = check_case_sensitivity(src_dir)
    for f, imp, resolved, actual in issues:
        print(f"[{f}]")
        print(f"  Import: {imp}")
        print(f"  Using:  {resolved}")
        print(f"  Disk:   {actual}")
        print("-" * 20)
