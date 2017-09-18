angular.module('myClassifyDir',[]).
directive('myNav',function(){
 return {
  restrict:'AE',
  replace:true,
  scope:{
    itemUl:'=',
    navChildProduct:"=",
    //判断是导航还是下面的菜单
    navClass:'@'
  },
  templateUrl:'js/view/navClassify.html',
  link:function(scope,elem,attrs){
    //导航和中间菜单，通过type来判断
    if (attrs.type == 'nav') {
      scope.typeSeq = 1
    } else if (attrs.type == 'menu') {
      scope.typeSeq = 0
    }
  }
}


}).directive('myNavChild',function(){
  return{
   restrict:'AE',
   templateUrl:'js/view/navChild.html',
   replace:true,
   require: '^?',
   scope:{
        // 将父级的信息赋给parentItem
      parentItem:'=',
      navChildProduct:'=',
      navClass:'@'
          },
   link:function(scope,elem,attrs){
      /*定义一个数组，用来判断有没有商品,如果没有商品列表就不显示*/
      scope.productArray=[];
      scope.productList=[];
      //每一列最多能显示6个商品
      scope.pageSize=6;
       //鼠标移入移出,控制列表的显示和隐藏
      scope.flag=false;
      scope.show=function(){
          scope.flag=true;   
      }
      scope.hide=function(){
           scope.flag=false;
      }
                
     //用来判断有没有商品列表
     angular.forEach(scope.navChildProduct,function(childItem){
             if(scope.parentItem.id==childItem.fl_id){
                scope.productArray.push(childItem);
             }
      });
     //左侧菜单商品显示列数
      scope.page=Math.ceil(scope.productArray.length/scope.pageSize);
       for(var i=1;i<=scope.page;i++){
          scope.productList.push(i);
       }

       scope.getClass=function(){
        return 'col_'+scope.page; 
       }
   }
 }
});
