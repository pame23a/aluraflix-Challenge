const listaVideos = () => {
  return fetch('https://aluraflix-api.vercel.app/videos')
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        }
        throw new Error('No fue posible listar los videos.');
      });
}

const cadastraVideo = (titulo, url, img, categoria, descripcion, codigo) => {
  return fetch('https://aluraflix-api.vercel.app/videos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      url: url,
      img: img,
      categoria: categoria,
      descripcion: descripcion,
      codigo: codigo,
    })
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error('No fue posible registrar un video.');
  })
}

const video = (id) => {
  return fetch(`https://aluraflix-api.vercel.app/videos/${id}`)
      .then(respuesta => {
        if (respuesta.ok) {
          return respuesta.json();
        }
        throw new Error('No fue posible encontrar el video.')
      });
}

const listaCategorias = () => {
  return fetch('https://aluraflix-api.vercel.app/categoria')
      .then(respuesta => respuesta.json())
      .catch(error => console.log(error))
}

const cadastraCategoria = (nombre, descripcion, color, codigo) => {
  return fetch('https://aluraflix-api.vercel.app/categoria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      color: color,
      codigo: codigo
    })
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error('No fue posible registrar una categoría.');
  })
}

const removeCategoria = (id) => {
  return fetch(`https://aluraflix-api.vercel.app/categoria/${id}`, {
    method: 'DELETE'
  }).then(respuesta => {
    if (!respuesta.ok) {
      throw new Error('No fue posible eliminar la categoría.');
    }
  })
}

const editaCategoria = (id, nombre, descripcion, color, codigo) => {
  return fetch(`https://aluraflix-api.vercel.app/categoria/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descripcion,
      color: color,
      codigo: codigo
    })
  }).then(respuesta => {
    if (respuesta.ok) {
      return respuesta.json();
    }
    throw new Error('No fue posible editar la categoría.');
  })
}

export const videosService = {
  listaVideos,
  cadastraVideo,
  listaCategorias,
  cadastraCategoria,
  removeCategoria,
  editaCategoria,
  video
};
