import Chef from './sushi-chef.jpg';

function createLandingPage() {
    const landingPage = document.createElement('div');

    const chefImage = document.createElement('img');
    chefImage.src = Chef;
    chefImage.alt = 'Sushi Chef';

    const p1 = document.createElement('p')
    p1.textContent = 'Authentic Sushi since 1950'

    const p2 = document.createElement('p');
    p2.textContent = 'Order Online or Dine In!'

    landingPage.appendChild(p1)
    landingPage.appendChild(chefImage)
    landingPage.appendChild(p2)

    return landingPage;
}

function initLandingPage() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createLandingPage());
}

export default initLandingPage;