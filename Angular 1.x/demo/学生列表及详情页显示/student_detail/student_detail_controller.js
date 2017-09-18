angular.module('student_detail').
   controller('stu_detail',function($scope,student,$routeParams){
   	//调用$resource中的get方法，获取数据
   	student.get({id:$routeParams.id},function(data){
   		$scope.student=data;
   	});
   })
;