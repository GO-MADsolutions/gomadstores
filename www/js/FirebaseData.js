var firebaseData = angular.module('firebaseData',['firebase']);

firebaseData.factory('firedata',function($firebaseArray,$firebaseObject)
{
  var ref=[];
  var Category=[];
  var section=[];
 var productDetails=[];
return{
  getAllCategory: function()
  {

     ref = firebase.database().ref().child("Category");

     return ref;
  },
  getCategory: function(subMenu)
  {

     Category = firebase.database().ref().child("Category/"+subMenu);;

    return $firebaseArray(Category);
  },
  getProducts: function(sections)
  {
    section = (Category.child(sections));
    return $firebaseArray(section);
  },
  getProduct: function(ProductId)
  {
    return $firebaseObject(section.child(ProductId));
  },
  setProduct: function(Product)
  {
    productDetails.push(Product);

  },
  getProductData: function()
  {
    if(productDetails.length==1)
    {
      return productDetails;
    }
    else {
    productDetails.splice(0,1)
      return productDetails;
    }

  }
}
});
