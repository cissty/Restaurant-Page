function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Barbecue beef burger",
        "A classic beef burger with Pack blue cheese in the centre to make it a little more special"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Chicken shish kebabs",
        "Offer some chilli sauce on the side for those who like heat, and serve with flatbread"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Maple-glazed hot wings",
        "The sticky maple and butter glaze on these wings adds extra succulence"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Miso mushroom halloumi burgers",
        "Tomato sauce, Bacon, Pineapple, Olives, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Piri-piri pork ribs",
        "Pork ribs with smoky piri-piri spices and a sticky barbecue sauce."
      )
    );
    menu.appendChild(
      createMenuItem(
        "Spatchcock gochujang chicken",
        "Forget run-of-the-mill sausages and and burgers"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Black bean veggie burger",
        "Try making these satisfying veggie burgers as a meat-free treat"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Lamb kebab burger",
        "Jazz up a shop-bought lamb burger with garlic mayo, gherkins and chilli for a hot and spicy twist."
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");

    const modifiedName = name.replace(/\s+/g, '-');

    foodImage.src = 'images/items/' + modifiedName + '.webp';
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  export default function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  