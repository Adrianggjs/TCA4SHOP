import os

html_files = ['index.html', 'productos.html', 'producto.html']

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = content.replace('YOUR_PIXEL_ID', '1706951260353673')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
