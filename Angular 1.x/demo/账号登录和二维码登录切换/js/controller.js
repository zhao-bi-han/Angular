angular.module('myCtrl',[]).
controller('loginCtrl',function($scope){
	$scope.login_way=true;
	$scope.change_z=function(){
		$scope.login_way=false;

	}
	$scope.change_e=function(){
		$scope.login_way=true;
	}
});