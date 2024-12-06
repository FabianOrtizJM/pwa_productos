// const API_URL = 'http://localhost:3000'; // URL de tu API local

// export async function getCategorias() {
//   const response = await fetch(`${API_URL}/categorias`);
//   return response.json();
// }

// export async function addCategoria(data) {
//   const response = await fetch(`${API_URL}/categorias`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// export async function getProductos() {
//   const response = await fetch(`${API_URL}/productos`);
//   return response.json();
// }

// export async function addProducto(data) {
//   const response = await fetch(`${API_URL}/productos`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// // Actualizar una categoría
// export async function updateCategoria(id, data) {
//     const response = await fetch(`${API_URL}/categorias/${id}`, {
//       method: 'PUT', // Método HTTP para actualizar
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }
  
//   // Eliminar una categoría
//   export async function deleteCategoria(id) {
//     const response = await fetch(`${API_URL}/categorias/${id}`, {
//       method: 'DELETE', // Método HTTP para eliminar
//     });
//     return response.json();
//   }
  
//   // Actualizar un producto
//   export async function updateProducto(id, data) {
//     const response = await fetch(`${API_URL}/productos/${id}`, {
//       method: 'PUT', // Método HTTP para actualizar
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }
  
//   // Eliminar un producto
//   export async function deleteProducto(id) {
//     const response = await fetch(`${API_URL}/productos/${id}`, {
//       method: 'DELETE', // Método HTTP para eliminar
//     });
//     return response.json();
//   }
const API_URL = 'http://localhost:3000/api'; // URL de tu API local

// Obtener las categorías
function getCategorias() {
  return $.ajax({
    url: `${API_URL}/categories`,
    method: 'GET',
    dataType: 'json'
  });
}

// Agregar una nueva categoría
// Función para agregar la categoría
function addCategoria(data) {
  return $.ajax({
    url: `${API_URL}/categories`,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json'
  });
}

// Evento para manejar el envío del formulario
$('#formCrearCategoria').on('submit', function(e) {
  e.preventDefault(); // Evitar el envío tradicional del formulario

  // Obtener los valores de los campos del formulario
  const nombreCategoria = $('#nombreCategoria').val().trim();
  const descripcionCategoria = $('#descripcionCategoria').val().trim();

  // Validar que los campos no estén vacíos
  if (!nombreCategoria || !descripcionCategoria) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Crear el objeto con los datos de la nueva categoría
  const categoriaData = {
    name: nombreCategoria,
    description: descripcionCategoria
  };

  // Llamar a la API para agregar la categoría
  addCategoria(categoriaData)
    .done(function(response) {
      alert('Categoría creada con éxito!'); 
      // Opcional: limpiar los campos del formulario
      $('#nombreCategoria').val('');
      $('#descripcionCategoria').val('');
    })
    .fail(function(error) {
      alert('Hubo un error al crear la categoría.');
      console.error('Error:', error);
    });
});

// Obtener los productos
function getProductos() {
  return $.ajax({
    url: `${API_URL}/productos`,
    method: 'GET',
    dataType: 'json'
  });
}

// Agregar un nuevo producto
function addProducto(data) {
  return $.ajax({
    url: `${API_URL}/productos`,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json'
  });
}

// Actualizar una categoría
function updateCategoria(id, data) {
  return $.ajax({
    url: `${API_URL}/categories/${id}`,
    method: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json'
  });
}

// Eliminar una categoría
function deleteCategoria(id) {
  return $.ajax({
    url: `${API_URL}/categories/${id}`,
    method: 'DELETE',
    dataType: 'json'
  });
}

// Actualizar un producto
function updateProducto(id, data) {
  return $.ajax({
    url: `${API_URL}/productos/${id}`,
    method: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(data),
    dataType: 'json'
  });
}

// Eliminar un producto
function deleteProducto(id) {
  return $.ajax({
    url: `${API_URL}/productos/${id}`,
    method: 'DELETE',
    dataType: 'json'
  });
}
