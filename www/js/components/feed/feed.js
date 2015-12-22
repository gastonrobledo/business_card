(function (angular) {

  angular.module('businessCard.feed', [])
    .config(configModule)
    .controller('feedController', feedController);

  configModule.$inject = ['$stateProvider'];
  function configModule($stateProvider){
    $stateProvider.state('feed', {
      url: '/',
      templateUrl: 'js/components/feed/feed.html',
      controller: 'feedController as Ctrl'
    });
  }

  feedController.$inject = ['$scope', 'ionicMaterialInk', 'ionicMaterialMotion'];
  function feedController($scope, ionicMaterialInk, ionicMaterialMotion) {
    $scope.isExpanded = true;
    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
      selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
      selector: '.animate-fade-slide-in .item'
    });

  }

})(angular);
