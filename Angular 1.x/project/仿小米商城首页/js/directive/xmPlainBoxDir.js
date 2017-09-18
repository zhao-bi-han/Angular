angular.module('xmPlainBox',[]).
directive('xmPlainBox',function($interval,$timeout){
	return {
		restrict:'AE',
		replace:true,
		templateUrl:'js/view/xmPlainBox.html',
		scope:{
			xmPlain:'=',
			allProduct:'=',
			boxProducts:'='
		},
		link:function(scope,elem,attrs){

			scope.flag=false;
			move();

			scope.left_move=function(){
				$interval.cancel(scope.timeval);
				if(scope.flag){
					scope.flag=false;
				}
			}
			scope.right_move=function(){
				$interval.cancel(scope.timeval);
				if(!scope.flag){
					scope.flag=true;
				}
			}
            scope.start_move=function(){
               scope.timeout=$timeout(function() {
                	move();
                	$timeout.cancel(scope.timeout);
                }, 1000);
            }
			function move(){
				scope.timeval=$interval(function(){
					scope.flag=!scope.flag;
				},4000);
			}
		}
	}

	
})