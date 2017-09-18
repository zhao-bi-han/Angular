//使用component方法创建指令，调用模板页
angular.module('student_detail').
component('studentDetail',{
	templateUrl:'student_detail/student_detail_template.html',
	controller:'stu_detail'
});

