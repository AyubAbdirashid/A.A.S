let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelector('.sidebar .toggle-btn');
toggle.onclick = function(){
  sidebar.classList.toggle('active');
};
