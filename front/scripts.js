
function obterDadosDoFormulario() {
    const formulario = document.getElementById("meu-formulario");
  
    const elementosDeEntrada = formulario.elements;
  
    const dadosDoFormulario = {};
  
    for (let i = 0; i < elementosDeEntrada.length; i++) {
      const elemento = elementosDeEntrada[i];


      if (elemento.type !== "submit" && elemento.type !== "reset") {
        dadosDoFormulario[elemento.name] = elemento.value;
      }
    }
  
    console.log(dadosDoFormulario);
  
  }
  
  document.getElementById("meu-formulario").addEventListener("submit", function (event) {
    event.preventDefault(); 
    obterDadosDoFormulario();
  });
  