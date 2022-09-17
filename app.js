const navlst = document.getElementById("navbarlst");

 createlstitem= ()=> {
    const items = document.querySelectorAll("section");
    let sctions = Array.from(items);
    for (let value=0; value<sctions.length; value++){
        item = document.createElement("li");
        item.innerHTML = 
        `<li><a href="#${sctions[value].id}" 
                data-nav="${sctions[value].id}" 
                class= "menu__link">${sctions[value].dataset.nav}</a></li>`
        navlst.appendChild(item);
    }
}
createlstitem();


// styling for the active states with getBoundingClientRect
this.movePage= ()=> {
    let scroll = document.querySelectorAll("section");
    let numone = -400;
    let numtwo = 150;
    scroll.forEach (function(val) {

        val.getBoundingClientRect().top >= numone && 
        val.getBoundingClientRect().top <= numtwo ?
         val.classList.add("active-class") : val.classList.remove("active-class");
});
};
// when clicking an item from the navigation menu, the link should scroll to the appropriate section.
navlst.addEventListener("click", sec => {
sec.preventDefault();

 sec.target.dataset.nav ? document
.getElementById(`${sec.target.dataset.nav}`)
.scrollIntoView({behavior:"smooth"}) : "you have error in syntax";
});