var home = angular.module('Home',['firebase','firebaseData','cart']);

home.controller('homeCtrl',['$scope','$firebaseObject','$firebaseArray','firedata','cartfactory',function($scope,$firebaseObject,$firebaseArray,firedata,cartfactory)
{
this.data = $firebaseArray(firedata.getAllCategory());
this.showVal = false;

this.submenu = function(submenu)
{
    this.selectedcategory = submenu;
  this.subMenuData = (firedata.getCategory(submenu));
  if(this.showVal==false)
  {
    this.showVal= true;
  }
  else {
      this.showVal=false;
  }
};

//Selecting product of subMenu
$scope.ProductsArray = [];
this.selectProducts = function(section)
{

   $scope.Products = (firedata.getProducts(section));
/*   for(i=0;i<$scope.Productsbase.length;i++)
   {
     $scope.ProductsArray.Push(
       {
         "Product":$scope.Productsbase[i],
         "Fav": false
       }
     );
   }*/


};


//Selecting a single Product

this.selectProduct = function(ProductId)
{

  firedata.setProduct(ProductId)

};

$scope.setFav = function(P)
{
  if(P.fav === undefined || P.fav==false){
      P["fav"] = true;
        cartfactory.addToFav(P);
  }
  else {
      P["fav"] = false;
      cartfactory.removeFav(P);
  }


};
}]);

home.directive('subMenu', function()
{
  return{
    restrict:'EA',
    templateUrl:'templates/submenu.html'
  }
})
