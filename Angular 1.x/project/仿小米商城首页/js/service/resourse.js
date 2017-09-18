angular.module('core',['ngResource'])
.factory('classifySer',function($resource){
	return $resource('data/:id.json',{},{

	}

);

}).factory("getProduct",function($q,$http){
	var getRequest=function(){
				var deferred=$q.defer();//创建deferred对象
				$http({
					url:'data/product.json',
					method:'GET'
				}).success(function(data){
					deferred.resolve(data);

				}).error(function(reason){
					deferred.reject(reason);
				});

				return deferred.promise;
			}
			return {
				getRequest:getRequest
			}

		});