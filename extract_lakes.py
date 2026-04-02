import zipfile
import xml.etree.ElementTree as ET
import json
import re

def extract_docx_data(docx_path):
    z = zipfile.ZipFile(docx_path)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    
    paragraphs = []
    for p in root.findall('.//w:p', ns):
        texts = [t.text for t in p.findall('.//w:t', ns) if t.text]
        if texts:
            paragraphs.append(''.join(texts))
            
    lakes = []
    current_lake = None
    
    for p in paragraphs:
        p = p.strip()
        if not p: continue
        
        # New lake detection (Names ending in "Lake" or containing "Lake ")
        if "Lake" in p and not any(k in p for k in ["Area", "Bots", "Time", "Approximated"]):
            if current_lake:
                lakes.append(current_lake)
            current_lake = {"name": p, "details": []}
        elif current_lake:
            if "Area =" in p:
                current_lake["area"] = p.split("=")[-1].strip()
            elif "Bots required =" in p:
                current_lake["bots"] = p.split("=")[-1].strip()
            elif "Approximated time =" in p:
                current_lake["time"] = p.split("=")[-1].strip()
            elif "° N" in p or "° E" in p:
                current_lake["coords"] = p.strip()
            else:
                current_lake["details"].append(p)
                
    if current_lake:
        lakes.append(current_lake)
        
    return lakes

if __name__ == "__main__":
    data = extract_docx_data('Lake_Imagess.docx')
    print(json.dumps(data, indent=2))
