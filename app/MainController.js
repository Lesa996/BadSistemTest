app.controller("MainCtrl", ['$scope','$http','$location','$rootScope', 'MainCtrlService', function ($scope,$http,$location,$rootScope,MainCtrlService) {
    $scope.users = [];
	$scope.jobs = ["KANBANSI","REMASI","HHM","BeRESI","BAD CAN","LARUM","VIP"];
	
	$scope.procesUsers = function (data) {
		var users = [];
		angular.forEach(data, function(value, key) {
			value.days = [];
  			for (var i = 0; i < 6; i++) {
  				value.days[i] = [];
  			}
  			users.push(value);
		});
		$scope.users = users;
	}
    MainCtrlService.getUsers().then(function(response) {
      	
      	$scope.procesUsers(response.data.results);
		console.log($scope.users);
	  },function(response) {
	    console.log(response);
	  });
	}]);
