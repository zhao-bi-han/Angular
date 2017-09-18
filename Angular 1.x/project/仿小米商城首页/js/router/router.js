angular.module('myRouter',['ui.router']).
config(function($stateProvider,$urlRouterProvider){
 $urlRouterProvider.otherwise('home');
 $stateProvider.state('home',{
  url:'/home',
  abstract:true,
  templateUrl:'template/home.html'

}).state('home.main',{
  url:'',
  templateUrl:'template/pages/home.main.html'
}).state('home.product',{
  url:'/product/:id',
  templateUrl:'template/pages/home.product.html',
  resolve:{
   productsObj:function(getProduct){
    return getProduct.getRequest().then(function(data){
      return data;
    });      
  }
},
controller:function($scope,$stateParams,productsObj,$window,funSer,$state){

  $scope.all_product=funSer.ItemId(productsObj.all_products,$stateParams.id);
  $scope.nav_product=funSer.ItemId(productsObj.nav_products,$stateParams.id);
  if($scope.all_product){
    $scope.product=$scope.all_product;
  }else if($scope.nav_product){
    $scope.product=$scope.nav_product;
  }
  console.log($scope.product);
  $scope.productInfo=funSer.ItemId(productsObj.procduct_info,$stateParams.id);
  $scope.flag=false;
            //设置滚动条的位置
            document.body.scrollTop=140;
            //监测滚动条的位置，控制导航的样式
            $window.onscroll=function(){

              var offsetY=document.body.scrollTop;
              $scope.$apply(function(){
                if(offsetY>=140){
                 $scope.flag=true;
                 
               }else{
                 $scope.flag=false;

               }
             })
              
            }
          }

        }).state('home.cart',{
          url:'/cart',
          views:{
           'main@home':{
            templateUrl:'template/cart.html'
          }
        }        
      }).state("login",{
        url:"/login",
        templateUrl:"template/login.html"
      }).state("register",{
        url:"/register",
        templateUrl:"template/register.html"
      })
      })
