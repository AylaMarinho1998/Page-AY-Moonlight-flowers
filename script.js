const menu = document.querySelector('.menu-circ');
const x = document.querySelector('.menu-x');


const nav = document.querySelector('.aparecer');


function mostrar (){
    nav.classList.toggle('ocultar')
    menu.classList.toggle('ocultar')
}

menu.addEventListener('click', () =>{
    mostrar()
});

function sumir() {
    nav.classList.toggle('ocultar')
    menu.classList.toggle('ocultar')
}

x.addEventListener('click', () =>{
         sumir()
        console.log(x);
});

/*-----------------------------------------------*/

const img = document.querySelectorAll(".item-img");

const passar = (p) =>{
    p.classList.add('hide');       
  
}

const passar1 = (p) =>{
    p.classList.remove('hide');
}

img.forEach(item => {

    item.addEventListener('mouseover', (e) => {
    
        console.log(e.target);
        
        const index = e.target;
        passar(index);

    } );
})

img.forEach(item => {

    item.addEventListener('mouseout', (e) => {
        
    
        console.log(e.target); //e.target está procurando o alvo/elemento
        
        
        const index = e.target;
        passar1(index);

    } );
})