//使用component方法创建指令,调用模板页student_list_template.html
angular.module('student_list').
  component('studentList',{
  	templateUrl:'student_list/student_list_template.html',
  	//调用的控制器
  	controller:'stu_list'
  });