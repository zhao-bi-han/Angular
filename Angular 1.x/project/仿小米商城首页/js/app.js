angular.module('myApp',[
	'ui.router',
	'myRouter',
	'myClassifyDir',
	'core',
  'mySearch',
  'searchCtrl',
  'menuFilter',
  'showImg',
   'xmPlainBox',
   'productsList',
   'hotContent',
   'funSer',
   'loginCtrl'
  	])
////配置系统初始需要的数据
  .run(function($rootScope,classifySer){
  classifySer.get({id:'classify'},function(data){
           $rootScope.items=data.classify;
           $rootScope.itemMenu=data.classifyMenu; 
           $rootScope.listClassifys=data.listClassify;      
         })   
  classifySer.get({id:'product'},function(data){
           $rootScope.navChild=data.nav_products;
           $rootScope.menuProduct=data.menu_products;
           $rootScope.boxProducts=data.all_products;
           $rootScope.productInfo=data.procduct_info;
          });
  classifySer.get({id:'classify'},function(data){
           $rootScope.images=data.show_img;
           $rootScope.xmPlain=data.xm_plain;
          });
   classifySer.get({id:'other'},function(data){
           $rootScope.contents=data.content;
          });
 });