var Product = angular.module('Product', ['firebaseData','firebase','cart','ionic-toast']);

Product.controller('ProductCtrl',['firedata','$scope','$firebaseObject','cartfactory','ionicToast',function(firedata,$scope,$firebaseObject,cartfactory,ionicToast)
{
  $scope.Product= (firedata.getProductData());

  $scope.setImageUrl = function(url)
  {

    $scope.ImageUrl=url;

  };
  $scope.addtocart = function(Product)
  {
      ionicToast.show(Product.Name+' is added to your cart.', 'middle',false,2000);
      cartfactory.addToCart(Product);

  };
  $scope.hideToast = function(){
  ionicToast.hide();
};
}]);
