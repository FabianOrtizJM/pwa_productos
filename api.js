const API_URL = 'http://localhost:3000/api'; // URL de tu API local

export async function getCategorias() {
  const response = await fetch(`${API_URL}/categories`);
  return response.json();
}

export async function addCategoria(data) {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Error: ${response.status} - ${error.message}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error en addCategoria:', err);
    throw err;
  }
}

export async function getProductos() {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
}

export async function addProducto(data) {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}

// Actualizar una categoría
export async function updateCategoria(id, data) {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: 'PUT', // Método HTTP para actualizar
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  // Eliminar una categoría
  export async function deleteCategoria(id) {
    const response = await fetch(`${API_URL}/categories/${id}`, {
      method: 'DELETE', // Método HTTP para eliminar
    });
    return response.json();
  }
  
  // Actualizar un producto
  export async function updateProducto(id, data) {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT', // Método HTTP para actualizar
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  // Eliminar un producto
  export async function deleteProducto(id) {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE', // Método HTTP para eliminar
    });
    return response.json();
  }
  