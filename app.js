(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;
  console.log("Buy controller");
  buyer.itemName = "";
  buyer.itemQuantity = "";
  buyer.items = ShoppingListCheckOffService.getBuyItems()
  buyer.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;
  console.log("Bought controller");
  showList.items = ShoppingListCheckOffService.getBoughtItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buyitems = [
    {
      name: "Hotdogs",
      quantity: 2
    },
    {
      name: "Hot dog buns",
      quantity: 3
    },
    {
      name: "Barbeque sauce",
      quantity: 1
    },
    {
      name: "Potato Salad",
      quantity: 2
    },
    {
      name: "Fruit platter",
      quantity: 1
    }

  ];
  var boughtitems = [];



  service.buyItem = function (itemIdex) {
    var item = buyitems[itemIdex];
    buyitems.splice(itemIdex, 1);
    boughtitems.push(item);
  };

  service.getBuyItems = function () {
    return buyitems;
  };
  service.getBoughtItems = function () {
    return boughtitems;
  };
}

})();
