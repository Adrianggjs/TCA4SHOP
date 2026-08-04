import os
from PIL import Image

src_dir = r"C:\Users\yolit\.gemini\antigravity\brain\0e6dfb57-e7dd-4936-aec4-bfed9b52c416\.user_uploaded"
dest_dir = r"C:\Users\yolit\OneDrive\Escritorio\Proyectos\Emprendimiento\PAGINANUEVA\assets\img"

files = ["media_1785868391752.jpg", "media_1785868391784.jpg", "media_1785868391903.jpg"]
output_names = ["airpods_pro3_1.webp", "airpods_pro3_2.webp", "airpods_pro3_3.webp"]

for src, out in zip(files, output_names):
    src_path = os.path.join(src_dir, src)
    out_path = os.path.join(dest_dir, out)
    if os.path.exists(src_path):
        with Image.open(src_path) as img:
            img.thumbnail((1000, 1000))
            img.save(out_path, "WEBP", quality=85)
            print(f"Saved {out_path}")
