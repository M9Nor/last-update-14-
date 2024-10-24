// This is class For Header "active"
let Header = document.querySelector("header")
window.onscroll = function(){
    if(this.scrollY >=50) {
        Header.classList.add("active")
    }else{
        Header.classList.remove("active")
    }
}

//on taplet menu

let 