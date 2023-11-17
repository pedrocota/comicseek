function showCharacterInfo(){

   var characterData = JSON.parse(localStorage.getItem('selectedCharacter'));    
   var infoCard = document.querySelector(".card");
    
   infoCard.querySelector(".card-img-top").src = characterData['image']['medium_url'];
   infoCard.querySelector(".card-title").textContent = characterData['name'] || "Desconhecido";
   infoCard.querySelector(".list-group-item:nth-child(1)").textContent = characterData['real_name'] || "Desconhecido";
   infoCard.querySelector(".list-group-item:nth-child(2)").textContent = characterData['publisher']['name'] || "Desconhecido";
   infoCard.querySelector(".card-text").textContent = characterData['deck'] || "Desconhecido";
   descriptionContainer.querySelector("#descriptionText").innerHTML = characterData['description'] || "Desconhecido";
   descriptionContainer.style.display = 'flex';
  
   var keyword = characterData['name'] + " " + characterData['publisher']['name'] + " lore";
   var apiKey = 'AIzaSyCw5Zf-UxQ81Klzz3fAzUmUrjsLcgy27uE';
   console.log(keyword)
   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyword}&key=${apiKey}`)
   .then(response => response.json())
   .then(data => {

   var indicatorsContainer = document.querySelector('.carousel-indicators');

   data.items.forEach((item, index) => {
   const videoId = item.id.videoId;

   var carouselItem = document.createElement('div');
   carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');

   var embedContainer = document.createElement('div');
   embedContainer.className = 'embed-responsive embed-responsive-16by9';

   var iframe = document.createElement('iframe');
   iframe.className = 'embed-responsive-item';
   iframe.src = `https://www.youtube.com/embed/${videoId}`;

   iframe.addEventListener('playing', function() {
       $('.carousel').carousel('pause');
       $('.carousel-control-prev, .carousel-control-next').attr('disabled', true);
   });

   embedContainer.appendChild(iframe);
   carouselItem.appendChild(embedContainer);
   document.querySelector('.carousel-inner').appendChild(carouselItem);

   var indicator = document.createElement('li');
   indicator.setAttribute('data-target', '#myCarousel');
   indicator.setAttribute('data-slide-to', index);
   if (index === 0) {
     indicator.className = 'active';
   }

   indicatorsContainer.appendChild(indicator);
});

$('.carousel').carousel();
})
.catch(error => console.error('Error fetching YouTube data:', error));
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = showCharacterInfo;

