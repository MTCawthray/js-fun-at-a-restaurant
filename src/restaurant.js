
function createRestaurant(restaurantName,) {

    var restaurant = {
      name: restaurantName,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
    };
    return restaurant;
    };

function addMenuItem(restaurant, newMenuItem) {
  if (newMenuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(newMenuItem)) {
     restaurant.menus.breakfast.push(newMenuItem);
  } else if (newMenuItem.type === "lunch" && !restaurant.menus.lunch.includes(newMenuItem)) {
    return restaurant.menus.lunch.push(newMenuItem);
  } else if (newMenuItem.type === "dinner" && !restaurant.menus.dinner.includes(newMenuItem)) {
     restaurant.menus.dinner.push(newMenuItem);
  } else {
    return restaurant;
  };
};


function removeMenuItem(restaurant, menuItem, menuType) {

  if (restaurant.menus[menuType].length === 0) {
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;

} else {
    restaurant.menus[menuType].splice(0, 1);
    return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
  };
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
