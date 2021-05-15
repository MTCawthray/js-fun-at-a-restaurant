function takeOrder(newOrder, deliveryOrders) {
    if (deliveryOrders.length < 3) {
      deliveryOrders.push(newOrder);
  };
  return deliveryOrders;
};

function refundOrder(orderNumToRefund, deliveryOrders) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNumToRefund) {
    deliveryOrders.splice([i], 1);
  };
};
};

function listItems(deliveryOrders) {
  var newOrders = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    newOrders.push(deliveryOrders[i].item);

  };
  return newOrders.join(", ");
};

function searchOrder(deliveryOrders, order) {
  var orderItems = [];
  for (var i = 0; i < deliveryOrders.length; i++){
    orderItems.push(deliveryOrders[i].item);
  }
  return orderItems.includes(order);
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
