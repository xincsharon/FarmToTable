farmApp.factory("AuthService", function ($scope, $firebaseAuth) {
    "use strict";
    var firebaseAuth = $firebaseAuth(), authService = {};
    
    authService.login = function (credentials) {
        return firebaseAuth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password);
    };
    
    authService.createUser = function (credentials) {
        return firebaseAuth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password);
    };
    
});



                                                                                                                                                                                                                                                                                                                                                          
