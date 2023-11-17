var charactersData = {};

function exibePersonagem(){

    // Get the results array from the response object
    var resp_obj = JSON.parse(localStorage.getItem('characterData'));
    var results = resp_obj['results'];
    console.log(results)

    // Create a container for the cards
    var cardsContainer = document.getElementById("cardContainer");
   
    // Get the card template
    var cardTemplate = document.getElementById("cardTemplate");
   
    // Loop through the results array
   // Loop through the results array
for (var i = 0; i < results.length; i++) {
    // Get the current result
    var result = results[i];
   
    // Clone the card template
    var card = cardTemplate.cloneNode(true);
    console.log(result['id'])
    card.querySelector("#characterId").textContent = result['id']; // Store the character id
   
    // Fill the information in the cloned card
    card.querySelector("img").src = result['image']['medium_url'];
    card.querySelector(".card-title").textContent = result['name'];
    card.querySelector(".list-group-item:nth-child(1)").innerHTML += result['real_name'];
    card.querySelector(".list-group-item:nth-child(2)").innerHTML += result['publisher']['name'];
    card.querySelector(".card-text").textContent += result['deck'];
   
    // Wrap the card in a .col div
    var col = document.createElement('div');
    col.className = 'col';
    col.appendChild(card);


    // Append the .col div to the cards container
    card.style.display = 'flex';
    charactersData[result['id']] = result;
    console.log(card);
    card.addEventListener('click', function() {
      localStorage.setItem('selectedCharacter', JSON.stringify(charactersData[this.querySelector("#characterId").textContent]));
      // Redirect to the character info page
      window.location.href = 'personagem.html';
    });
    cardsContainer.appendChild(col);
   }
    }
   

   window.onload = exibePersonagem;
  
