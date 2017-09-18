angular.module('mySearch',[]).
  directive('mySearch',function(){
    return {
    	restrict:'AE',
    	templateUrl:'js/view/mySearch.html',
    	replace:true,
    	controller:'searchCtrl',
    }
}).directive('clickLi',function(){
	return {
		restrict:'AE',
		link:function(scope,elem,attrs){
            elem.bind('click',function(){
                var text=elem.children().eq(0).text();
                  scope.$apply(function(){
                  	scope.search=text;
                  }); 	
           
            });
		}
	}
});