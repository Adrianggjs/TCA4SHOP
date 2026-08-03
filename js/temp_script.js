function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  if (!productId) return;
  const product = productsDatabase[productId];
  if (!product) return;

  const container = document.getElementById('single-product-container');
  if (!container) return;

  const imgHtml = product.images.map((img, i) => `<img src='${img}' style='width:100%; border-radius:12px; margin-bottom:1rem; cursor:pointer; border:1px solid var(--divider-color);'>`).join('');
  const featHtml = product.features.map(f => `<li>${f}</li>`).join('');
  const boxHtml = product.inTheBox ? product.inTheBox.map(b => `<li>${b}</li>`).join('') : '';

  let reviewsHtml = '';
  const prodReviews = reviews.filter(r => r.productId === productId);
  if (prodReviews.length > 0) {
    prodReviews.forEach(review => {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) { starsHtml += i <= review.rating ? '★' : '☆'; }
      const initial = review.name.charAt(0).toUpperCase();
      reviewsHtml += `
        <div style='margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--divider-color);'>
          <div style='display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 0.5rem;'>
            <div style='width: 40px; height: 40px; font-size: 1.1rem; background: var(--green-brand); color: white; display: flex; align-items: center; justify-content: center; border-radius: 50%;'>${initial}</div>
            <div>
              <div style='font-size: 1rem; font-weight: 600;'>${review.name}</div>
              <div style='font-size: 0.9rem; color: var(--accent-gold); margin-top: 0.2rem;'>${starsHtml}</div>
            </div>
            <div style='margin-left: auto; font-size: 0.85rem; color: #888;'>${review.date}</div>
          </div>
          <p style='font-size: 1rem; color: #444; line-height: 1.5; margin-left: 3.5rem;'>"${review.comment}"</p>
        </div>
      `;
    });
  } else {
    reviewsHtml = '<p style="color: #666; font-size: 1rem;">Aún no hay reseñas para este producto.</p>';
  }

  container.innerHTML = `
    <div class='shopify-product-grid'>
      <div>
        <div class='shopify-image-col'>
          <img src='${product.images[0]}' style='width: 100%; display: block; border-radius: 8px;'>
          ${product.images.length > 1 ? `<div style='display:grid; grid-template-columns: repeat(4, 1fr); gap:1rem; margin-top:1rem;'>${imgHtml}</div>` : ''}
        </div>
      </div>
      <div class='shopify-info-col'>
        <div class='shopify-card' style='padding: 2rem;'>
          <h2 class='shopify-title'>${product.name}</h2>
          <div class='shopify-price'>Q${product.price}</div>
          <p class='shopify-text' style='margin-bottom: 2rem;'>${product.desc}</p>
          <h3 class='shopify-section-title'>Evolución</h3>
          <p class='shopify-text' style='margin-bottom: 2rem;'>${product.evolution || 'Un paso adelante en tecnología.'}</p>
          <h3 class='shopify-section-title'>Características Principales</h3>
          <ul class='shopify-text' style='list-style-type: disc; margin-left: 1.5rem; margin-bottom: 2rem;'>
            ${featHtml}
          </ul>
          <h3 class='shopify-section-title'>¿Qué incluye la caja?</h3>
          <ul class='shopify-text' style='list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem;'>
            ${boxHtml}
          </ul>
        </div>
        <div class='shopify-card order-form-container' style='background: var(--bg-crema); border: 2px solid var(--green-brand);'>
          <h3 class='shopify-section-title' style='text-align: center; font-size: 1.5rem; margin-bottom: 1.5rem;'>¡Completa tu pedido ahora!</h3>
          <form id='page-order-form' style='display: flex; flex-direction: column; gap: 1rem;'>
            <input type='hidden' id='page-order-product-id' value='${productId}'>
            <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;'>
              <input type='text' id='page-order-fname' placeholder='Nombre' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
              <input type='text' id='page-order-lname' placeholder='Apellido' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: grid; grid-template-columns: 1fr; gap: 1rem;'>
              <input type='tel' id='page-order-phone' placeholder='Teléfono' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;'>
              <select id='page-order-depto' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
                <option value='' disabled selected>Departamento</option>
                ${Object.keys(guatemalaLocations).map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
              <select id='page-order-muni' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
                <option value='' disabled selected>Municipio</option>
              </select>
            </div>
            <div style='display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;'>
              <input type='text' id='page-order-address' placeholder='Dirección exacta' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
              <input type='text' id='page-order-zone' placeholder='Zona' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem; padding: 1rem; background: white; border-radius: 8px;'>
              <label style='font-weight: 600; color: var(--green-dark);'>Cantidad a ordenar:</label>
              <input type='number' id='page-order-qty' min='1' value='1' style='width: 80px; padding: 0.8rem; border-radius: 8px; border: 1px solid #ddd; text-align: center; font-weight: 600; font-family: inherit;' required>
            </div>
            <button type='submit' class='btn btn-primary' style='margin-top: 1.5rem; width: 100%; padding: 1.2rem; font-size: 1.2rem; font-weight: 700; border-radius: 12px; letter-spacing: 1px; display:flex; justify-content:center; gap: 10px; align-items:center;'>
              Confirmar pedido por WhatsApp
            </button>
          </form>
        </div>
        <div class='shopify-card' style='padding: 2rem;'>
          <h3 class='shopify-section-title' style='font-size: 1.8rem; margin-bottom: 2rem;'>Reseñas de Clientes</h3>
          <div id='page-reviews-list'>
            ${reviewsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById('page-order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const qty = document.getElementById('page-order-qty').value;
      const fname = document.getElementById('page-order-fname').value.trim();
      const lname = document.getElementById('page-order-lname').value.trim();
      const phone = document.getElementById('page-order-phone').value.trim();
      const depto = document.getElementById('page-order-depto').value.trim();
      const muni = document.getElementById('page-order-muni').value.trim();
      const address = document.getElementById('page-order-address').value.trim();
      const zone = document.getElementById('page-order-zone').value.trim();
      
      const total = product.price * qty;
      const message = `Nuevo pedido TCA4SHOP\n\nProducto: ${product.name}\nCantidad: ${qty} unidad(es)\n\nCliente:\n- Nombre: ${fname} ${lname}\n- Teléfono: ${phone}\n\nDirección de entrega:\n- Departamento: ${depto}\n- Municipio: ${muni}\n- Dirección: ${address}\n- Zona: ${zone}\n\nTotal estimado: Q${total.toLocaleString()}`;
      
      window.open(`https://wa.me/50254102510?text=${encodeURIComponent(message)}`, '_blank');
    });
  }
}

document.addEventListener("DOMContentLoaded", initProductPage);
