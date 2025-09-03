import fs from 'fs';
import path from 'path';

//const dataFilePath = path.join(process.cwd(), '/interactive-rating-component-main/data', 'data.json');

export function getData() {
  try {
    const data = fs.readFileSync(process.cwd + '../../data/data.json', 'utf8');
    const content = JSON.parse(data);
    return content
  } catch (error) {
    return [];
  }
}

export function saveData(data) {
  try {
    // Ensure directory exists
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
}