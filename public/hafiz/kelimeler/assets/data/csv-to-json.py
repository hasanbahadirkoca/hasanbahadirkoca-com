import csv
import json

csv_file_path = 'data.csv'
json_file_path = 'data.json'

data = []

with open(csv_file_path, mode='r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    for row in csvreader:
        # Convert id from string to int if applicable
        if row[0].isdigit():
            row[0] = int(row[0])
        else:
            # Skip the row and print a warning
            print('Warning: id is not an integer' + str(row))
            continue
        
        entry = {
            'id': row[0],
            'arabic': row[1],
            'translation': row[2:]
        }
        data.append(entry)

with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, ensure_ascii=False)
