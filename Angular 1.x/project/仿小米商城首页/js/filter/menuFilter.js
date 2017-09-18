angular.module('menuFilter',[])
  .filter('productFil',function(){
  	return function(input,page){
  		//input 是要过滤的内容，page是传过来的参数
  		//slice()函数  开始，结束
       return input.slice(((page-1)*6),6*page);
  	}
  });