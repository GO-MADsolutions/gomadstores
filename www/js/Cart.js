var cart = angular.module('cart',[]);

cart.factory('cartfactory',function()
{
  var cart =[];
  var fav=[];
  var price=0;
  return{
      addToCart : function(Product)
      {
        cart.push(Product);
        price = price + Product.Price;
      },
      addToFav: function(Product)
      {
        fav.push(Product);
      },

      removeFav: function(Product)
      {
        for(i=0;i<fav.length;i++)
        {
          if(JSON.stringify(Product)===JSON.stringify(fav[i]))
          {

              fav.splice(i,1);
          }
        }
      },
      removeFromCart: function(Product)
      {
        for(i=0;i<cart.length;i++)
        {
          if(JSON.stringify(Product)===JSON.stringify(cart[i]))
          {

            price = price - Product.Price;

              cart.splice(i,1);
          }
        }
      },

      getFav: function()
      {
        return fav;
      },

      getPrice : function()
      {

        return price;
      },
      getTotalItems: function()
      {
        var item =0;
        angular.forEach(cart, function(value)
      {
        item = item+1;
      });
        return item;
      },
      getAllCartItems: function()
      {
        return cart;
      }
  }
});
cart.directive('cartItems', function()
{
  return{
    restrict:'EA',
    templateUrl:'templates/Cart.html',
  
    controller: ['$scope','cartfactory', function($scope, cartfactory)
  {
    $scope.Total = cartfactory.getPrice();
    $scope.TotalItems = cartfactory.getTotalItems();

  }]

  }
});

cart.controller('cartCtrl',['$scope','cartfactory', function($scope,cartfactory)
{


  $scope.Products = cartfactory.getAllCartItems();
  $scope.Favourites = cartfactory.getFav();

  $scope.RemoveFromCart = function(Product)
  {
      cartfactory.removeFromCart(Product);

  }
}]);
