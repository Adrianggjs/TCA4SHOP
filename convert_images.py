import os
from PIL import Image

src_dir = r"C:\Users\yolit\.gemini\antigravity\brain\0e6dfb57-e7dd-4936-aec4-bfed9b52c416\.user_uploaded"
dest_dir = r"C:\Users\yolit\OneDrive\Escritorio\Proyectos\Emprendimiento\PAGINANUEVA\assets\img"

src = "media_1785869943206.jpg"
out = "airpods_pro3_5.webp"

src_path = os.path.join(src_dir, src)
out_path = os.path.join(dest_dir, out)

if os.path.exists(src_path):
    with Image.open(src_path) as img:
        img.thumbnail((1000, 1000))
        img.save(out_path, "WEBP", quality=85)
        print(f"Saved {out_path}")
else:
    print(f"Not found: {src_path}")
