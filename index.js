// netlify link : https://profound-dasik-56075b.netlify.app/ 

import Dog from "./Dog.js"
import dogs from "./data.js"

let body = document.querySelector(".img-container")
let btnLikeEl = document.querySelector(".btn-like");
let btnRejectEl = document.querySelector(".btn-reject");

let imageCount = dogs.length - 1;
let imageCurrent = 0;

let module = new Dog(dogs[imageCurrent]) 

function render(){
    body.style.background = `url(${module.avatar})`
    body.style.backgroundSize ="cover"
    body.innerHTML = module.setHtmlRender()
}
render()

function nextImage(){
    if(imageCurrent < imageCount){
       imageCurrent++;
    }
    else{
        imageCurrent = 0;   
    }
    module = new Dog(dogs[imageCurrent]) 
    render()  
}
function like(){
    module.hasBeenLiked = true;
    render() 
    setTimeout(nextImage,3000)  
}
function reject(){
    module.hasBeenSwiped = true;
    render() 
    setTimeout(nextImage,3000)
}


btnLikeEl.addEventListener("click",like)
btnRejectEl.addEventListener("click",reject)




