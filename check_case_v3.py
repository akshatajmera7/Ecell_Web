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
            content = ""
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except:
                try:
                    with open(file_path, 'r', encoding='latin-1') as f:
                        content = f.read()
                except:
                    continue
            
            matches = import_re.findall(content)
            for match in matches:
                if match.startswith('.'):
                    # Relative path resolution
                    parts = match.split('/')
                    current_path = root
                    
                    found = False
                    for part in parts:
                        if part == '.':
                            continue
                        elif part == '..':
                            current_path = os.path.dirname(current_path)
                        else:
                            # Check if the folder/file exists with this case
                            # This is the tricky part!
                            pass

                    # Simplified: just check if the final target exists with different casing
                    target_path = os.path.normpath(os.path.join(root, match))
                    p_lower = target_path.lower()
                    
                    exts = ['', '.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.jpg', '.jpeg', '.svg', '.JPG', '.PNG', '.mp4']
                    for ext in exts:
                        p_ext = p_lower + ext
                        if p_ext in files_on_disk:
                            actual = files_on_disk[p_ext]
                            # Compare local parts
                            actual_name = os.path.basename(actual)
                            import_name = os.path.basename(match)
                            # If the match has an extension, compare directly.
                            # If not, compare before extension
                            if '.' in import_name:
                                if actual_name != import_name:
                                     issues.append(f"Mismatch in {file_path}:\n  Import: {match}\n  On disk: {actual_name}")
                            else:
                                actual_base = os.path.splitext(actual_name)[0]
                                if actual_base != import_name:
                                     issues.append(f"Mismatch in {file_path}:\n  Import: {match}\n  On disk: {actual_name}")
                            found = True
                            break
                    
                    if not found and '/' in match and not any(match.endswith(e) for e in ['.css', '.png', '.jpg', '.jpeg', '.svg', '.JPG', '.PNG', '.mp4']):
                         # Check if it's a directory (index.js)
                         if os.path.isdir(target_path):
                             p_idx = os.path.join(target_path, "index.js").lower()
                             if p_idx in files_on_disk:
                                 found = True
    return issues

if __name__ == "__main__":
    src_dir = os.path.join(os.getcwd(), 'frontend', 'src')
    issues = list(set(check_imports(src_dir))) # Unique issues
    for issue in issues:
        print(issue)
        print("-" * 10)
