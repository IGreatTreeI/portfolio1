const hambuger = document.querySelector('.navbar_hambuger');
const menu = document.querySelector('.navbar_menu');
const adress = document.querySelector('.navbar_adress');
const adress_list = document.querySelector('.navbar_adress_list');

hambuger.addEventListener('click', ()=> {
  menu.classList.toggle('active');
  adress.classList.toggle('active');
});

adress.addEventListener('click', ()=> {
  adress_list.classList.toggle('active');
});
