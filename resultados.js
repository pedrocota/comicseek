var charactersData = {};

function exibePersonagem(){
    
    var resp_obj = JSON.parse(localStorage.getItem('characterData'));
    var results = resp_obj['results'];
    console.log(results)
    var cardsContainer = document.getElementById("cardContainer");
    var cardTemplate = document.getElementById("cardTemplate");

for (var i = 0; i < results.length; i++) {

    var result = results[i];
    var card = cardTemplate.cloneNode(true);
    console.log(result['id'])
    card.querySelector("#characterId").textContent = result['id']; // Store the character id
   
    card.querySelector("img").src = result['image']['medium_url'];
    card.querySelector(".card-title").textContent = result['name'] || "Desconhecido";
    card.querySelector(".list-group-item:nth-child(1)").innerHTML += result['real_name'] || "Desconhecido";
    card.querySelector(".list-group-item:nth-child(2)").innerHTML += result['publisher']['name'] || "Desconhecido";
    card.querySelector(".card-text").textContent += result['deck'] || "Desconhecido";
   
    var col = document.createElement('div');
    col.className = 'col';
    col.appendChild(card);

    card.style.display = 'flex';
    charactersData[result['id']] = result;
    console.log(card);
    card.addEventListener('click', function() {
      localStorage.setItem('selectedCharacter', JSON.stringify(charactersData[this.querySelector("#characterId").textContent]));
      window.location.href = 'personagem.html';
    });
    cardsContainer.appendChild(col);
   }
    }
   
window.onload = exibePersonagem;
  
