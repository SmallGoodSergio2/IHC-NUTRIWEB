const nombre = document.getElementById("nombre");
const linkPerfil = document.getElementById("Perfil");
const recomendaciones = document.getElementById("recomendacion");
const metasalimentarias = document.getElementById("linkMetaAlimentaria");
const comida = document.getElementById("linkinfocomida");
alert("bienvenido a la página");

nombre.addEventListener("mouseover", function()  {

  nombre.style.color = "green" ;

}
);

nombre.addEventListener("mouseout", function()  {

  nombre.style.color = "black" ;

}
);

linkPerfil.addEventListener("mouseover", function()  {

  linkPerfil.style.backgroundColor = "green" ;
  linkPerfil.style.color = "black" ;

}
);
linkPerfil.addEventListener("mouseout", function()  {

  linkPerfil.style.backgroundColor = "transparent" ;
  linkPerfil.style.color = "black" ;

}
);

recomendaciones.addEventListener("mouseover", function()  {

  recomendaciones.style.backgroundColor = "green" ;
  recomendaciones.style.color = "black" ;

}
);


recomendaciones.addEventListener("mouseout", function()  {

  recomendaciones.style.backgroundColor = "transparent" ;
  recomendaciones.style.color = "black" ;

}
);

metasalimentarias.addEventListener("mouseover", function()  {

  metasalimentarias.style.backgroundColor = "green" ;
  metasalimentarias.style.color = "black" ;

}
);

metasalimentarias.addEventListener("mouseout", function()  {

  metasalimentarias.style.backgroundColor = "transparent" ;
  metasalimentarias.style.color = "black" ;

}
);

comida.addEventListener("mouseover", function()  {

  comida.style.backgroundColor = "green" ;
  comida.style.color = "black" ;

}
);


comida.addEventListener("mouseout", function()  {

  comida.style.backgroundColor = "transparent" ;
  comida.style.color = "black" ;

}
);