import os
import json
from pathlib import Path

def build_index():
    base_dir = Path(__file__).parent.parent
    stories_dir = base_dir / 'stories'
    output_file = base_dir / 'data' / 'stories.json'
    
    stories_data = []

    if not stories_dir.exists():
        print(f"Directory {stories_dir} does not exist.")
        return

    # Iterate through each item in the stories directory
    for item in stories_dir.iterdir():
        if item.is_dir():
            metadata_file = item / 'metadata.json'
            if metadata_file.exists():
                try:
                    with open(metadata_file, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        stories_data.append(data)
                except Exception as e:
                    print(f"Error reading {metadata_file}: {e}")
            else:
                print(f"Warning: No metadata.json found in {item}")

    # Sort stories by id or date (assuming id for now to keep the sequence)
    stories_data.sort(key=lambda x: x.get('id', 0))

    # Ensure data directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)

    # Write the combined data to stories.json
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(stories_data, f, indent=2)
    
    print(f"Successfully built {output_file} with {len(stories_data)} stories.")

if __name__ == '__main__':
    build_index()
