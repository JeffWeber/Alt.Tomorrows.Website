import shutil
import json
from pathlib import Path

def duplicate_stories(source_id, target_count):
    base_dir = Path(r'c:\Users\jeffw\Jeff.Weber.Source\Alt.Tomorrows.Website\stories')
    source_dir = base_dir / str(source_id)
    
    if not source_dir.exists():
        print(f"Source directory {source_dir} not found.")
        return

    for i in range(2, target_count + 1):
        target_dir = base_dir / str(i)
        
        # Remove existing if any (to be clean)
        if target_dir.exists():
            shutil.rmtree(target_dir)
        
        # Copy the whole directory
        shutil.copytree(source_dir, target_dir)
        
        # Update metadata.json with the new ID
        metadata_path = target_dir / 'metadata.json'
        if metadata_path.exists():
            with open(metadata_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            data['id'] = i
            data['title'] = f"{data.get('title', 'Story')} #{i}"
            
            with open(metadata_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
        
        if i % 10 == 0:
            print(f"Created story {i}...")

if __name__ == '__main__':
    duplicate_stories(1, 100)
    print("Finished duplicating 100 stories.")
