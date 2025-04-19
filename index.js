
function aplicarLogicaMovil() {
    if (window.innerWidth < 768) {
        
const btnProyecto = document.getElementById("btnProyecto");
const navProyecto = document.getElementById("listaProyectos");
const container = document.getElementById("container");

const WorkExperience = document.getElementById("WorkExperience");
const btnExperience = document.getElementById("btnExperience");
 
let bandera = false;
let bandera2 = false;

btnProyecto.addEventListener("click", function () {
    
    const isVisible = window.getComputedStyle(navProyecto).display !== "none";
    if (isVisible) {
        container.style.gridTemplateRows = '150px 50px 50px 300px 200px';
        navProyecto.style.display = "none";  
        bandera = false;
    }else{
        navProyecto.style.display = "block";
        container.style.gridTemplateRows = '150px 200px 50px 300px 200px';
        bandera = true;
        validar();
    }
 });

 btnExperience.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(WorkExperience).display !== "none";

    if (isVisible) {
        WorkExperience.style.display = "none";
        container.style.gridTemplateRows = '150px 50px 50px 300px 200px';
        bandera2 = false;
    } else {
        WorkExperience.style.display = "block";
        container.style.gridTemplateRows = '150px 50px 270px 300px 200px';
        bandera2 = true;
        validar();
    }
   
});

function validar (){
    if(bandera && bandera2){
        container.style.gridTemplateRows = '150px 200px 270px 300px 200px';
} 

}
    } 
}
window.addEventListener("load", aplicarLogicaMovil);
window.addEventListener("resize", aplicarLogicaMovil);