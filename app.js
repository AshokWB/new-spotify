const burger=document.querySelector(".burger");
const navToggle=document.querySelector(".nav-links-ul")
const NavLinks=document.querySelectorAll(".nav-links-ul li");


burger.addEventListener("click",()=>{
    navToggle.classList.toggle("nav-active");

    NavLinks.forEach((link,index)=>{
        // console.log(index);
        if(link.style.animation){
            link.style.animation=""
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/10 }s`;
        }
    })

    // burger animation
    burger.classList.toggle('toggle');
});