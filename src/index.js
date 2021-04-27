import menu from './menu.json';
import './styles.css';
import menuCardsTpl from './templates/menu-cards.hbs';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    checkbox: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('.js-menu'),
    body: document.querySelector('body'),
}

const menuMarkup = createMenuCardsMarkup(menu);
refs.menu.insertAdjacentHTML('beforeend', menuMarkup)

function createMenuCardsMarkup(menu) {
    return menu.map(menuCardsTpl).join('');
    //return menuCardsTpl(menu);
};

//---------------------------------------------------

refs.checkbox.addEventListener('change', onChangeThemeClick);
refs.body.addEventListener('change', saveValueInLocalStorage);


function onChangeThemeClick(e) {
    if (e.target.checked === true) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        localStorage.removeItem('theme', Theme.DARK)
        localStorage.setItem('theme', Theme.LIGHT);
        

        // console.log(localStorage);
    }
};

saveValueInLocalStorage();

function saveValueInLocalStorage() {
    const themeInLocalStorage = localStorage.getItem('theme');

    if (themeInLocalStorage === Theme.LIGHT) {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        refs.checkbox.checked = false;
    } else if (themeInLocalStorage === Theme.DARK) {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        refs.checkbox.checked = true;
    }
};
//localStorage.setItem('theme', 'dark-theme');