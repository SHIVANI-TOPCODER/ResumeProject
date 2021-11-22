var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 5);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}
 
//---------------- for progress of skills bar----------------------------//

var progressBar=document.querySelectorAll('.mb-blue > div');
var skillsContainer =  document.getElementById('skills-container');
window.addEventListener('scroll',checkscroll);
var visible=false;


function checkscroll(){
    //check wether skill sec is visible 
    var cordinate=skillsContainer.getBoundingClientRect();
    if(!visible && cordinate.top<window.innerHeight){
        visible=true;
        console.log('skill-section visible');
        fillbar();
    }else if(cordinate.top>window.innerHeight){
        visible=false;
        fillbar();
    }
}
function initialBars(){
    for(let bar of progressBar){
        bar.style.width = 0 + '%' ;
    }
}
initialBars();

function fillbar(){

    for(let bar of progressBar){
        let targetbar=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval =  setInterval(function(){
            if(currentWidth>targetbar){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },8);
    }
}

//------------- scroll bar function-------------//
//document.getElementById("myViewFunc").onscroll = function() {myViewFunc()};
// var d=0;
// function myViewFunc(){
//     d+=1;
//     document.getElementById("percent").innerHTML=d;
// }
// window.addEventListener('scroll',myViewFunc);
document.getElementById("view").onscroll = function() {myViewFunc()};
var scrolledBar = document.getElementById("percent");
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight
    );
}
var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

function setScrolled() {
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    scrolledBar.innerText = scrolled;
}
window.addEventListener("scroll", setScrolled);  

