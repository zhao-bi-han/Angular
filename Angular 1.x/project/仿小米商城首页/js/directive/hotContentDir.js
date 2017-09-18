angular.module('hotContent',[]).
directive('hotContent',function(){
	return {
		restrict:"AE",
		replace:true,
		templateUrl:"js/view/hotContent.html"
	}
}).directive('moveStep',function(){
	return {
		restrict:"AE",
		link:function(scope,elem,attrs){
			scope.old=0;
            scope.flag=false;

            scope.show=function(){
            	scope.flag=true;
            	console.log(scope.flag);
            }
            scope.hide=function(){
            	 scope.flag=false;
            }
			scope.step=function(index){
				move(index);
			}

			scope.left=function(){
				if(scope.old!=0){
					move(scope.old-1);
				}else{
					scope.old=0;
				}

			}
			scope.right=function(){
				if(scope.old!=2){
					move(scope.old+1);
				}else{
					scope.old=2;
				}
				
			}


		function move(index){
			elem.find("ul").eq(0).toggleClass('move-step-'+scope.old);
			elem.find("ul").eq(1).find("li").eq(scope.old).toggleClass('radius');
			scope.addclass='move-step-'+index;
			elem.find("ul").eq(0).addClass(scope.addclass);
			elem.find("ul").eq(1).find("li").eq(index).addClass('radius');
			scope.old=index;
		}
	}
}
});