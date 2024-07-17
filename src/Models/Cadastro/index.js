function validaCampos(campo) {
  if (campo.length < 4) {
    return {valido: false, texto: "O campo no puede estar vacio"}
  } else {
    return {valido: true, texto: ""}
  }
}

export{ validaCampos }