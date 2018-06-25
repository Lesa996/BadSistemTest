app.factory('MainCtrlService', function($http,$q) {
  return{
    getUsers: function() {
            var deferred = $q.defer();
            $http({
                  method: 'GET',
                  url: 'https://randomuser.me/api/?results=5&seed=bad'
              }).then(function successCallback(response) {
                  console.log(response);
                  deferred.resolve(response);
                  return response;
            }, function errorCallback(response) {
                  return deferred.reject(response);
            });
                 return deferred.promise; 
          }
  }
});