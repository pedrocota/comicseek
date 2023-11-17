var charactersData = {};

function exibeErro(){
    document.getElementById("myForm").innerHTML = "Página não encontrada.";
}

function recuperaDados(event){
  event.preventDefault();
  var req = new XMLHttpRequest();
  req.onloadend = function(){
  var resp = req.responseText;
  var resp_obj = JSON.parse(resp);
  if (resp_obj['status_code'] == 1){
      localStorage.setItem('characterData', JSON.stringify(resp_obj));
      window.location.href = 'resultados.html';
    }
  else {
      exibeErro();
    }
  };
  
  req.open('GET', "https://corsproxy.io/?https://comicvine.gamespot.com/api/search/?api_key=8629b2b179918dadbedac326f562a75511a48094&format=json&resources=character&query=" + nomePersonagem.value + "&sort=popularity");
  req.send(null);
}

document.getElementById("formulario").addEventListener("submit", recuperaDados);
