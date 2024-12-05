const API_URL = 'http://localhost:3000'; // URL de tu API local

export async function getCategorias() {
  const response = await fetch(`${API_URL}/categorias`);
  return response.json();
}

export async function addCategoria(data) {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function getProductos() {
  const response = await fetch(`${API_URL}/productos`);
  return response.json();
}

export async function addProducto(data) {
  const response = await fetch(`${API_URL}/productos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

// Actualizar una categoría
export async function updateCategoria(id, data) {
    const response = await fetch(`${API_URL}/categorias/${id}`, {
      method: 'PUT', // Método HTTP para actualizar
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  // Eliminar una categoría
  export async function deleteCategoria(id) {
    const response = await fetch(`${API_URL}/categorias/${id}`, {
      method: 'DELETE', // Método HTTP para eliminar
    });
    return response.json();
  }
  
  // Actualizar un producto
  export async function updateProducto(id, data) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'PUT', // Método HTTP para actualizar
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  // Eliminar un producto
  export async function deleteProducto(id) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'DELETE', // Método HTTP para eliminar
    });
    return response.json();
  }
  