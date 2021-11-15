let theme =  localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode;
    setTheme(mode);
  })
}

function setTheme(mode) {
  let fileName = 'css/default.css';
  if (mode != 'light') {
    fileName = `css/${mode}.css`;
  }
  document.getElementById('theme-style').href = fileName;

  localStorage.setItem('theme', mode);
}