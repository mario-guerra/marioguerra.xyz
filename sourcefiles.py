import os

def should_ignore(path, ignore_list):
    """Checks if a path or filename should be ignored."""
    for item in ignore_list:
         if path == item or path.startswith(item + os.sep):
                return True
         if os.path.basename(path) == item:
            return True
    return False


def process_directory(root_dir, output_file, ignore_list):
    """Recursively processes directories and extracts text to the markdown file, ignoring specified files/directories."""
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, dirs, files in os.walk(root_dir, topdown=True):
            
            # Modify dirs in-place to prune ignored directories
            dirs[:] = [d for d in dirs if not should_ignore(os.path.join(root, d), ignore_list)]


            for filename in files:
                filepath = os.path.join(root, filename)

                if should_ignore(filepath, ignore_list) or filename == os.path.basename(__file__):
                  continue
                

                relative_path = os.path.relpath(filepath, root_dir)
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                    
                    outfile.write(f"/{relative_path}\n")
                    outfile.write("```\n")
                    outfile.write(content)
                    outfile.write("```\n\n")
                    
                except UnicodeDecodeError:
                    print(f"UnicodeDecodeError with file {filepath}, assuming binary.")
                except Exception as e:
                    print(f"Error reading file {filepath}: {e}")

if __name__ == "__main__":
    root_directory = "."  # Start from the directory the script is in
    output_markdown_file = "source.md"
    ignore_items = [
        ".astro",
        ".github",
        ".vscode",
        ".gitignore",
        ".prettierrc",
        "dist",
        "node_modules",
        "README.md",
        "source.md",
    ]
    process_directory(root_directory, output_markdown_file, ignore_items)
    print(f"Markdown file '{output_markdown_file}' created.")