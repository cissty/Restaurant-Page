function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'

    const address = document.createElement('p')
    address.textContent = '🏠 Fire & Forks, Zoo Road, Dakka, Banglades'

    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/map.jpg'
    restaurantLocation.alt = 'restaurant location'

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact
}

export default function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
  }
  