angular.module('searchCtrl',[]).
   controller('searchCtrl',function($scope,classifySer){
         classifySer.get({id:'product'},function(data){
         	$scope.searchItems=data.all_products;     	
         })
        });



