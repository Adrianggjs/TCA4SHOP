import os

html_files = ['index.html', 'productos.html', 'producto.html', 'mayoristas.html', 'resenas.html']

injection = """  <!-- PWA & SEO -->
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#081C15">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tca4shop.com/">
  <meta property="og:image" content="https://tca4shop.com/assets/img/airpods_pro3.png">
"""

sw_script = """
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
      });
    }
  </script>
</body>
"""

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Inject in head
        if 'manifest.json' not in content:
            content = content.replace('</head>', injection + '</head>')
        
        # Inject at end of body
        if 'serviceWorker.register' not in content:
            content = content.replace('</body>', sw_script)
            
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
