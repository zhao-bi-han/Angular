angular.module('productsList',[]).
directive('productsList',function(){
	return {
		restrict:"AE",
		replace:true,
		templateUrl:"js/view/productsList.html",
		link:function(scope,elem,attrs){
			scope.listArray=[];
			scope.childArray=[];
			scope.active=0;

			scope.proShow=function(index){
				scope.$applyAsync(function(){
					scope.active=index;
				})
			}
			angular.forEach(scope.boxProducts,function(item){
				if(scope.listclassify.classifyId==item.classifyId){
					scope.listArray.push(item);
				}
			});

		}
	}
}).directive('showInfo',function(){
	return {
		restrict:'AE',
		link:function(scope,elem,attrs){
			scope.flag=false;
			scope.show=function(){
				scope.flag=true;
			}
			scope.hide=function(){
				scope.flag=false;
			}	 
		}
	}
})