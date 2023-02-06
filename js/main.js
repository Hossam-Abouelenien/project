//get slider items | array.from [es6 feature]
var sliderItems = Array.from(document.querySelectorAll('.reviews .slider-container .customers'));


//get number of slides
var slidesCount = sliderItems.length;

//first slide [current index] , set current slide
var currentSlide = 1;


//prev and next buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

//handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create ul element
var indicatorsElement = document.createElement('ul');

//set id on created ul element
indicatorsElement.setAttribute('id', 'indicators-ul')

//create li [list items] based on slides count
for (var i = 1; i <= slidesCount; i++) {

    //create the li
    var indicatorsItem = document.createElement('li');

    //set custom attribute 
    indicatorsItem.setAttribute('data-index', i);

    //append items to the main ul list
    indicatorsElement.appendChild(indicatorsItem);

}

// add the created ul elemnt to the page
document.getElementById('indicators').appendChild(indicatorsElement);

//get the new created ul
var indicatorsCreatedUl = document.getElementById('indicators-ul');

//get indicators items | array.from [es6 feature]
var indicatorsBullets = Array.from(document.querySelectorAll('#indicators-ul li'));

//trigger the checker function
theChecker();

// next slide function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // do nothing
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

//previous slide function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // do nothing
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

//loop throudh all bullets items
for(var i = 0; i<indicatorsBullets.length; i++){
    indicatorsBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

//create the checker function
function theChecker() {

    //remove all active classes
    removeAllActive();

    //set active class on current slide
    sliderItems[currentSlide - 1].classList.add('active');

    //set active class on current indicators item
    indicatorsCreatedUl.children[currentSlide - 1].classList.add('active');


    //check if current slide is the last
    if (currentSlide == slidesCount) {

        //add disabled class on next button
        nextButton.classList.add('disabled');

    } else {

        //remove disabled class on next button
        nextButton.classList.remove('disabled');
    }

    //check if current slide is the first
    if (currentSlide == 1) {

        //add disabled class on previos button
        prevButton.classList.add('disabled');

    } else {

        //remove disabled class on previos button
        prevButton.classList.remove('disabled');
    }


}

//remove all active classes from imagesand indicators bullets
function removeAllActive() {

    //loop throught images
    sliderItems.forEach(function (customers) {
        customers.classList.remove('active');
    });

    //loop  through indicators bullets
    indicatorsBullets.forEach(function (bullets) {
        bullets.classList.remove('active');
    });
}



