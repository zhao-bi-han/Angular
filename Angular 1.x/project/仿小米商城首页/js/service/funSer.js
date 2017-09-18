angular.module('funSer',[]).
factory('funSer',function(){
	return {
            //通过ID查询某个产品
            ItemId: function (arr, id) {
            	var obj = null;
            	angular.forEach(arr, function (item) {
            		if (item.productId == id) {
            			obj = item;
            			return;
            		}
            	})
            	return obj;
            }
        }
    });