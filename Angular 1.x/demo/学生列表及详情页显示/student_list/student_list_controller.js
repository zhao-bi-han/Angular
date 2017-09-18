//注入自己定义的服务student
angular.module('student_list').
     controller('stu_list',function(student,$scope){
     	//调用student服务中自己定义的myStu()方法，获取数据
     	$scope.students=student.myStu();
     });