# Guía de Administración - TCA4SHOP

Como TCA4SHOP está alojado en **GitHub Pages**, no cuentas con un panel de administración tradicional (como WordPress o Shopify). Sin embargo, el sitio fue diseñado para ser **fácil de actualizar**. Toda la información de tus productos y reseñas vive en un solo archivo: `js/script.js`.

Aquí aprenderás cómo editarlo.

---

## 1. Dónde editar los productos

Todos los productos están definidos en la variable `productsDatabase` dentro del archivo **`js/script.js`**.

Busca esta sección (cerca de la línea 6):
```javascript
const productsDatabase = {
  "airpods-pro-3": {
    name: "AirPods Pro 3",
    price: 399,
    // ...
```

### Cómo agregar un producto nuevo
1. Copia un bloque existente (desde el nombre clave `"airpods-pro-3": {` hasta su `},`).
2. Pégalo justo debajo y cámbiale el nombre clave (por ejemplo: `"mi-nuevo-reloj": {`).
3. Modifica los datos interiores:
   - `name`: El nombre que verá el cliente.
   - `price`: El precio en Quetzales.
   - `images`: La ruta de la imagen. **Asegúrate de subir la imagen a la carpeta `assets/img/` primero y de preferencia en formato `.webp`.**
   - `features`: La lista de beneficios.
   - `inTheBox`: Lo que incluye la caja.

---

## 2. Dónde editar las reseñas

De manera similar, las reseñas de la página principal están en el mismo archivo `js/script.js`, dentro de la variable `reviewsData` (cerca de la línea 125).

```javascript
const reviewsData = [
  {
    name: "Carlos M.",
    product: "AirPods Pro 2",
    rating: 5,
    text: "Excelente calidad de sonido y la cancelación de ruido es brutal.",
    productId: "airpods-pro-2"
  },
  // ...
```

### Cómo agregar una reseña nueva
Simplemente agrega un nuevo bloque al inicio o final de la lista `reviewsData`:
```javascript
  {
    name: "Nombre del Cliente",
    product: "Nombre del Producto",
    rating: 5, /* De 1 a 5 estrellas */
    text: "El comentario del cliente va aquí.",
    productId: "el-id-del-producto-arriba" /* Ej. "airpods-pro-3" */
  },
```

---

## 3. ¿Cómo subo los cambios?

Si estás editando esto desde tu computadora local:
1. Abre tu terminal o **GitHub Desktop**.
2. Haz "Commit" de tus cambios (ej. "Actualizando precio de AirPods").
3. Haz "Push" al repositorio de GitHub.
4. Espera 1 a 2 minutos y tu página web en `tca4shop.com` se actualizará automáticamente con los nuevos datos.

> [!TIP]
> **Rendimiento:** Siempre que agregues una foto nueva, te recomiendo usar páginas gratuitas como `squoosh.app` o convertidores online para transformar tus fotos a `.webp` antes de subirlas a la carpeta `assets/img`. Esto mantendrá tu página cargando en 1 segundo.
