farmApp.controller("farmCtrl", function ($scope, $routeParams) {
    "use strict";
    
});


farmApp.controller("signupCtrl", function ($scope, $firebaseAuth, $location, $firebaseArray) {
 
    'use strict';
    $scope.user = {};
    $scope.submit = function () {
        $scope.authObj = $firebaseAuth();
    
        $scope.authObj.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
            .then(function (firebaseUser) {      
                firebase.database().ref('User/' + $scope.user.userName).set({
                    FirstName : $scope.user.firstName,
                    LastName : $scope.user.lastName,
                    Email : $scope.user.email,
                    UserName : $scope.user.userName,
                    Password : $scope.user.password,
                    Address : $scope.user.address
                });
                alert("Successfully registered!");
                $location.path('/Login');
            }).catch(function (error) {
                alert("Already registered!"); 
            }); 
    };
});


farmApp.controller("loginCtrl", function ($scope, $firebaseAuth, $location, $firebaseArray) {
    'use strict'; 
    $scope.user = {};
    $scope.submit = function () {
        $scope.authObj = $firebaseAuth();
        $scope.authObj.$signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(function (firebaseUser) {
            alert("Successfully Signed in");
            $location.path('/Home');
        }).catch(function (error) {
            alert("Invalid email or password");
        });
    };
});

                                                                                                                                                                                                                                                                                                                                                          
                                                                                           
                                                                                           
    
    
    
    
//    $scope.user = {};
//    $scope.submit = function () {        
//        firebase.database().ref('User/' + $scope.user.userName).set({
//            FirstName : $scope.user.firstName,
//            LastName : $scope.user.lastName,
//            Email : $scope.user.email,
//            UserName : $scope.user.userName,
//            Password : $scope.user.password,
//            Address : $scope.user.address
//        });
//        console.log("success");
//        $location.path('/Login');
 
