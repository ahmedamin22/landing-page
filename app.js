const navlst = document.getElementById("navbar__list");
const sctions = Array.from(document.querySelectorAll("section"));

function createlstitem(){
    for (value of sctions){
        lstItm = document.createElement("li");
        lstItm.innerHTML=`<li><a href="#${value.id}" data-nav="${value.id}" class= "menu__link">${value.dataset.nav}</a></li>`
        navlst.appendChild(lstItm);
    }
}
createlstitem();
// styling for the active states with getBoundingClientRect
window.onscroll= ()=> {
    document.querySelectorAll("section").forEach ((actv)=>{
if ( 
    actv.getBoundingClientRect().top >= -400 &&
    actv.getBoundingClientRect().top <= 150
)
    {
      actv.classList.add("active-class");  
    }
     else {
        actv.classList.remove("active-class");
     }
});
};
// when clicking an item from the navigation menu, the link should scroll to the appropriate section.
navlst.addEventListener("click",function(sec) {
sec.preventDefault();
if (sec.target.dataset.nav){
document
.getElementById(`${sec.target.dataset.nav}`)
.scrollIntoView({behavior:"smooth"});
setTimeout(function(){
    Location.hash = `${sec.target.dataset.nav}`;
}, 165);
}
});