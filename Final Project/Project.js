
//setting images in array and index
let ShowImage = document.getElementById('CurrentCactus');
let CactucsArray = ["assets/baby_cactus.jpg", "assets/watering_cactus.jpg", "assets/healthy_cactucs.jpeg", "assets/dying_cactus.jpg"];
let index = 1;
let CactusCaptions = ["A baby cactus, the cactus will grow from the root within 6 weeks to several months."
    , "Make sure to water your cactus at least once a week. Proper hydration and sunlight are key for cacti to be healthy."
    , "Here are some healthy cacti, This is what you can look forward to seeing if you take care of the plants properly."
    , "Cacti in their natural habitat can survive for around 200 years! A cactus as a house plant is expected to live for 10-15 years."]
//swap to next
function PreviousImage() {
   
    ShowImage.setAttribute("src", CactucsArray[index]);
    document.getElementById("Caption").innerHTML = CactusCaptions[index];
    index--;
    if (index < 0) {
        index = 3;
    }
}
function NextImage() {
    ShowImage.setAttribute("src", CactucsArray[index])
    document.getElementById("Caption").innerHTML = CactusCaptions[index];
    index++;
    if (index > 3) {
        index = 0;
    }
}



