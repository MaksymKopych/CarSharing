const header = document.querySelector('.menu');

if ( window.scrollY > 200){
    header.classList.add("menu__sticky")
} else {
     header.classList.remove("menu__sticky")
};

window.addEventListener('scroll', ()=>{
   if ( window.scrollY > 200){
       header.classList.add("menu__sticky")
   } else {
        header.classList.remove("menu__sticky")
   }
});