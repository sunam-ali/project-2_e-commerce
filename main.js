const menuIcon = document.getElementById('menu_icon');
const navMenu = document.getElementById('menu');

menuIcon?.addEventListener('click', ()=> {
    if(navMenu?.className === 'hide'){
        navMenu.classList.remove('hide');
    }
    else{
        navMenu.classList.add('hide');
    }
})
