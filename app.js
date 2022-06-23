
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close");
const features = document.getElementById("features");
const company = document.getElementById("company");
const featureDesktop = document.getElementById("desktop-ft");
const companyDesktop = document.getElementById("desktop-cp");


openMenu.addEventListener("click", ()=> {
    document.getElementById("menu").classList.add("active");
     closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", ()=> {
    document.getElementById("menu").classList.remove("active");
})

features.addEventListener("click", ()=> {
    document.getElementById("flist").classList.toggle("active");
   
})

company.addEventListener("click", ()=> {
    document.getElementById("clist").classList.toggle("active");
})

featureDesktop.addEventListener("click", ()=> {
    document.getElementById("cc-feature-menu").classList.toggle("active");
   
})

companyDesktop.addEventListener("click", ()=> {
    document.getElementById("company-menu").classList.toggle("active");
   
})