import './styles.css';
import initLandingPage from './landing-page.js';
import initMenu from './menu.js';
import initContact from './contact.js';

function createHeader() {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Sushi Bar';

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
            return
        }
        setActiveButton(homeBtn);
        initLandingPage();
    })

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
            return
        }
        setActiveButton(menuBtn);
        initMenu();
    })

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (event) => {
        if (event.target.classList.contains('active')) {
            return
        }
        setActiveButton(contactBtn);
        initContact();
    })

    header.appendChild(h1)
    header.appendChild(homeBtn)
    header.appendChild(menuBtn)
    header.appendChild(contactBtn)

    return header;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createMain() {
    const main = document.createElement('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');

    const copyright = document.createElement('p');
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} Tyler Montgomery <a href='https://github.com/ArKaes13' <i class='fa-brands fa-github'>`

    footer.appendChild(copyright)

    return footer;
}

function initWebsite() {
    const content = document.querySelector('.content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('button'));
    initLandingPage();
}

initWebsite();

