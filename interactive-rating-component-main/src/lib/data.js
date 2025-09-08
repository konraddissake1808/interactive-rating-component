import fs from 'fs';

export function getData() {
  try {
    const data = fs.readFileSync(process.cwd + '../../data/data.json', 'utf8');
    const content = JSON.parse(data);
    return content
  } catch (error) {
    return [];
  }
}
