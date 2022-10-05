// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this,data)
    }
    
    setHtmlRender(){
        return`
			${this.hasBeenLiked ? '<img src= "./images/badge-like.png" class="islike" />' : ""}
            ${this.hasBeenSwiped ? '<img src= "./images/badge-nope.png" class="islike" />' : ""}
			<div class="img-bottom-content">
				<h3>Teddy, 30</h3>
				<p>How you doin?</p>
			</div>
        `
    }
}

export default Dog