function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(menuItemName, price, type) {
  return menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
};

function addIngredients(ingredient1, ingredients) {
  for(var i = 0; i < ingredients.length; i++) {
    if (ingredient1 === ingredients[i]) {
      return;
    };
  };
  ingredients.push(ingredient1);
};

  function formatPrice(price) {
    return `$${price}`
  };

function decreasePrice(price) {
  return (price * 0.9 );
};

function createRecipe(title, ingredients, type) {
  var recipe = {
      title: title,
      ingredients: ingredients,
      type: type
  };
  return recipe;
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
