//自定义服务student，获取数据的接口
angular.module('core',['ngResource']).
 factory('student',function($resource){
	return $resource('data/:id.json',{},{
		//自己定义的方法
		myStu:{
			method:'GET',
			params:{
				id:'student'
			},
			isArray:true
		}
	})
});
 
