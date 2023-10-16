import axios from "axios"

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

    axios.post('http://localhost:3000/aluno', dadosDoFormulario)
    .then(response => {
      console.log('Solicitação POST bem-sucedida:', response.data);
    })
    .catch(error => {
      console.error('Erro na solicitação POST:', error);
    });
  
  }
  
  document.getElementById("meu-formulario").addEventListener("submit", function (event) {
    event.preventDefault(); 
    obterDadosDoFormulario();
  });
  

