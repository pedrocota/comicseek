function showCharacterInfo(){

    var characterData = JSON.parse(localStorage.getItem('selectedCharacter'));    
    // Get the info container
// Get the info container
    var infoCard = document.querySelector(".card");



    // Populate the card with characterData
    infoCard.querySelector(".card-img-top").src = characterData['image']['medium_url'];
    infoCard.querySelector(".card-title").textContent = characterData['name'];
    infoCard.querySelector(".list-group-item:nth-child(1)").textContent = characterData['real_name'];
    infoCard.querySelector(".list-group-item:nth-child(2)").textContent = characterData['publisher']['name'];
    infoCard.querySelector(".card-text").textContent = characterData['deck'];
    // Show the infoContainer
    descriptionContainer.querySelector("#descriptionText").innerHTML = characterData['description'];
    descriptionContainer.style.display = 'flex';
  
    // Show the info container
    var keyword = characterData['name'] + " lore";
    var apiKey = 'AIzaSyCw5Zf-UxQ81Klzz3fAzUmUrjsLcgy27uE';
    console.log(keyword)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyword}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
  // existing code...

  // Get the carousel indicators container
  var indicatorsContainer = document.querySelector('.carousel-indicators');

  data.items.forEach((item, index) => {
    const videoId = item.id.videoId;

    // Create a new carousel item
    var carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');

    // Create a responsive embed container
    var embedContainer = document.createElement('div');
    embedContainer.className = 'embed-responsive embed-responsive-16by9';

    // Create an iframe for the YouTube video
    var iframe = document.createElement('iframe');
    iframe.className = 'embed-responsive-item';
    iframe.src = `https://www.youtube.com/embed/${videoId}`;

    // Append the iframe to the embed container
    embedContainer.appendChild(iframe);

    // Append the embed container to the carousel item
    carouselItem.appendChild(embedContainer);

    // Append the carousel item to the carousel
    document.querySelector('.carousel-inner').appendChild(carouselItem);

    // Create a new carousel indicator
    var indicator = document.createElement('li');
    indicator.setAttribute('data-target', '#myCarousel');
    indicator.setAttribute('data-slide-to', index);
    if (index === 0) {
      indicator.className = 'active';
    }

    // Append the carousel indicator to the indicators container
    indicatorsContainer.appendChild(indicator);
});



  // Initialize the carousel after the videos have been added
  $('.carousel').carousel();

})
.catch(error => console.error('Error fetching YouTube data:', error));


}


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.onload = showCharacterInfo;

