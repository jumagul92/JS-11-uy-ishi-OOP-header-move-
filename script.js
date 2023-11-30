
class Header{
    constructor({title, nav}){
this.title = document.querySelector(title);
// console.log(this.title);
// console.log(this.title.clientWidth);
this.nav = document.querySelector(nav);
this.title.addEventListener('mouseover', ()=>{
// console.log(this.moveHorizontal(15,20));
    this.title.style.marginLeft = `${this.moveHorizontal(this.title.clientWidth, window.innerWidth-this.title.clientWidth)}px`
    this.title.style.marginTop = `${this.moveVertical(this.title.clientHeight, window.innerHeight-(this.title.clientHeight+ this.nav.clientHeight))}px`
})
    }
    
moveHorizontal(min,max){
return Math.random()*(max-min)+min
}
moveVertical(min,max){
    return Math.random()*(max-min)+min
    }
}



new Header({
title: '.header__content',
nav: '.header__nav'
}
)