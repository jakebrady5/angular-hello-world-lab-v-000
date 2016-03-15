function MainController($scope) {
  $scope.contact = {
    name: 'jake brady',
    phone: '8675309'
  };

  $scope.year = "2016";
}

angular
  .module('app')
  .controller('MainController', MainController);