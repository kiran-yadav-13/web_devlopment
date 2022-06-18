
var currentIndex=1;
displaySlides(currentIndex);

function setslides(num){
    displaySlides(currentIndex+=num);
}

function displaySlides(num){
 var slides=document.getElementsByClassName("slides");
 console.log(slides)
 if(num<1){
    currentIndex=slides.length;
 }
 if(num>slides.length){
    currentIndex=1;
 }
 var x;
 for(x=0; x<slides.length; x++){
    slides[x].style.display="none";
 }
 slides[currentIndex-1].style.display="block";
}