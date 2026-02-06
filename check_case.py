import os
import re
import sys

def check_case_sensitivity(root_dir):
    issues = []
    
    # Store all files on disk with their actual case
    files_on_disk = {}
    for root, dirs, files in os.walk(root_dir):
        if 'node_modules' in root or '.git' in root:
            continue
        for name in files + dirs:
            full_path = os.path.join(root, name)
            files_on_disk[full_path.lower()] = full_path

    # Regex to find imports
    import_re = re.compile(r'(?:import|from|require)\s+[\'"](.+?)[\'"]')

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
                # Only check relative imports
                if match.startswith('.'):
                    # Resolve relative path
                    target_path = os.path.normpath(os.path.join(root, match))
                    
                    # Try with various extensions if not provided
                    possible_paths = [target_path]
                    if not any(target_path.endswith(ext) for ext in ['.js', '.jsx', '.ts', '.tsx', '.css', '.png', '.jpg', '.jpeg', '.svg', '.JPG']):
                        possible_paths.extend([
                            target_path + '.js',
                            target_path + '.jsx',
                            target_path + '/index.js',
                            target_path + '/index.jsx'
                        ])
                    
                    found = False
                    for p in possible_paths:
                        p_lower = p.lower()
                        if p_lower in files_on_disk:
                            actual = files_on_disk[p_lower]
                            if actual != p:
                                # Check if it's just a case difference in the filename/path
                                if actual.lower() == p.lower():
                                    issues.append(f"File: {file_path}\n  Import: {match}\n  Resolved: {p}\n  Actual on disk: {actual}\n")
                            found = True
                            break
                    # If not found, it might be an external lib or alias, skip for now

    return issues

if __name__ == "__main__":
    src_dir = os.path.join(os.getcwd(), 'frontend', 'src')
    print(f"Checking {src_dir}...")
    issues = check_case_sensitivity(src_dir)
    if issues:
        print(f"Found {len(issues)} potential case-sensitivity issues:")
        for issue in issues:
            print(issue)
    else:
        print("No obvious case-sensitivity issues found in relative imports.")
