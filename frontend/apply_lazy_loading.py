
import os
import re

# Logic:
# 1. Walk through src/ directory
# 2. Exclude files with 'hero', 'navbar', 'menu', 'loader' in the name (case insensitive)
# 3. For each file, read content
# 4. Find <img tags that don't have loading= attribute
# 5. Replace with <img loading="lazy" ...>
# 6. Save file

ROOT_DIR = r"c:\Users\DIVVIJ\Ecell_Web\frontend\src"
EXCLUDE_PATTERNS = ["hero", "navbar", "menu", "loader", "logo"]

def should_process(filename):
    name_lower = filename.lower()
    for pattern in EXCLUDE_PATTERNS:
        if pattern in name_lower:
            return False
    return name_lower.endswith(".js") or name_lower.endswith(".jsx")

def add_lazy_loading(content):
    # Regex to find <img ...> tags
    # We look for <img followed by anything up to />
    # We verify it doesn't already have loading=
    
    # Pattern explanation:
    # <img\s+               : Match <img and at least one whitespace
    # (?!.*loading=)        : Negative lookahead to ensure 'loading=' is NOT present before the closing > or />
    # ([^>]+)               : Match attributes
    # >                     : Match closing > (handling /> is tricky with this simple regex, but let's try)
    
    # Better approach: Match the tag, then check if it has loading.
    
    pattern = re.compile(r'(<img\s+)([^>]*)(>)', re.IGNORECASE | re.DOTALL)
    
    def replacer(match):
        prefix = match.group(1) # <img<space>
        attrs = match.group(2)  # attributes
        suffix = match.group(3) # >
        
        # Check if loading is already there
        if "loading=" in attrs:
            return match.group(0)
            
        # Insert loading="lazy"
        # We'll put it right after <img 
        return f'{prefix}loading="lazy" {attrs}{suffix}'

    new_content = pattern.sub(replacer, content)
    return new_content

def main():
    modified_count = 0
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if not should_process(file):
                continue
                
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check directly if <img is in file to save regex time
                if "<img" not in content:
                    continue
                    
                new_content = add_lazy_loading(content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {path}")
                    modified_count += 1
            except Exception as e:
                print(f"Error processing {path}: {e}")

    print(f"\nTotal files modified: {modified_count}")

if __name__ == "__main__":
    main()
