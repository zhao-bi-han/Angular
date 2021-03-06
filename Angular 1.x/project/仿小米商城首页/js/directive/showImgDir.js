angular.module('showImg',[]).
directive('showImg',function($interval){
	return {
		restrict:'AE',
		replace:true,
		scope:{
			showImages:'=',
			imgId:'='
		},
		templateUrl:'js/view/showImg.html',
		link:function(scope,elem,attr){
			scope.liList=[1,2,3,4,5];
			scope.i=0;
            show();
            //当鼠标移到图片上轮播停止
			elem.bind('mouseover',function(){
				$interval.cancel(scope.timeOut);
			});
			elem.bind('mouseleave',function(){
				show();
			});
			//当鼠标点击那个li就显示对应的图片
             scope.imgshow=function(index){
             	$interval.cancel(scope.timeOut);
             	   scope.$applyAsync(function(){
             	   	 scope.i=index;
             	   })     
             	           
             }
		//图片轮番显示
		function show(){
			scope.timeOut=$interval(function(){
				scope.i++;
				if(scope.i==5){
					scope.i=0;
				}	
			},3000);
		}
	}
}
});