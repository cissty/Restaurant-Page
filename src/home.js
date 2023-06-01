 import loadMenu from "./menu";
 
 function createHome() {

        const home = document.createElement('div');
        home.classList.add('home')

        const restaurantName = document.createElement('h1');
        restaurantName.setAttribute('class', 'restaurant-name');
        restaurantName.textContent = 'Fire & Forks';
        
        const button = document.createElement('button');
        button.setAttribute('class', 'menu-button')
        button.textContent = 'SEE MENU'
        
        button.addEventListener('click', () =>{
            const home = document.getElementById('home');
            home.setAttribute('class', 'button-nav');
            const menu = document.getElementById('menu');
                menu.setAttribute('class', 'button-nav active')
                loadMenu();
        });

        const checkMenu = document.createElement('p')
        checkMenu.textContent = 'Check the menu!';
        checkMenu.classList.add('check-menu-p')
        checkMenu.style.fontStyle = 'italic';

        home.appendChild(restaurantName)
        home.appendChild(createParagraph('Grilling with Intensity'));
        home.appendChild(checkMenu);
        home.appendChild(button)
        return home;
    }


        function createParagraph(text){
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            return paragraph;
        }
        
       export default function loadHome(){
        const main = document.getElementById('main');
        main.textContent = '';
        main.appendChild(createHome());
    }
        

   
