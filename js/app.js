function FirstCtrl($scope, $rootScope) {
    console.log($rootScope)
    $scope.root = $rootScope

    $scope.resetMessage = function() {
        delete $scope.message;
    }
}

function SecondCtrl($scope) {
    $scope.message = 'The second controller'
    $scope.resetMessage = function() {
        delete $scope.message;
    }
}

function ThirdCtrl($scope) {

}