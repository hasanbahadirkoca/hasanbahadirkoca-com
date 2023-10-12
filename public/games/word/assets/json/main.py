import json

def convert_to_json(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    formatted_lines = [line.strip() for line in lines]

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(formatted_lines, f, ensure_ascii=False, indent=2)

input_file = "input.txt"  # İlk başta verdiğiniz dosyanın adı
output_file = "output.json"  # JSON formatına çevrildikten sonraki dosyanın adı

convert_to_json(input_file, output_file)
