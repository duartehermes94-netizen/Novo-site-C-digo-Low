import os
import re

files_to_process = [
    'src/components/FaqFooter.tsx',
    'src/components/Offer.tsx',
    'src/components/Problem.tsx',
    'src/components/Solution.tsx'
]

url_pattern = re.compile(r'"https://i.postimg.cc/([^/]+)/([^"]+)"')

for file_path in files_to_process:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = url_pattern.findall(content)
    if not matches:
        continue
    
    imports = []
    for idx, (folder, filename) in enumerate(matches):
        var_name = f'localImg{idx}'
        import_stmt = f'import {var_name} from "../assets/images/{filename}";'
        if import_stmt not in imports:
            imports.append(import_stmt)
        # Replace only the first occurrence or specific match to be safe, but global is fine here if it's the exact URL
        old_str = f'"https://i.postimg.cc/{folder}/{filename}"'
        content = content.replace(old_str, f'{{{var_name}}}')
        
    if imports:
        # insert imports after the last import statement
        import_lines = []
        other_lines = []
        for line in content.split('\n'):
            if line.startswith('import '):
                import_lines.append(line)
            else:
                other_lines.append(line)
        
        # some imports could be multi-line but typically they end with ; and this is a hacky script
        # a better way is to just prepend them
        final_content = '\n'.join(imports) + '\n' + content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_content)

