import menu from './menu.json';
import './styles.css';
import menuCardTpl from './templates/menu-cards.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    checkbox: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('.js-menu'),
}

const menuMarkup = createMenuCardsMarkup(menu);
refs.menu.insertAdjacentHTML('beforeend', menuMarkup)

function createMenuCardsMarkup(menu) {
    return menu.map(menuCardTpl).join('');
}

//refs.checkbox.addEventListener('change', )