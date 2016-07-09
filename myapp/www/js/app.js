// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });

  
});

app.controller('MainCtrl', function($scope, $ionicModal, $ionicPopover) {
  
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  

// Model View
  $ionicModal.fromTemplateUrl('view-model.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });


// Model Review
  $ionicModal.fromTemplateUrl('review.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.ModalB= modal;
        });

        $scope.ShowModalB= function (){
         $scope.ModalB.show()
    }
    $scope.CloseModalB = function() {
    $scope.ModalB.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.ModalB.remove();
  });

// Model Rate Now

$ionicModal.fromTemplateUrl('ratethis.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.ModalC= modal;
        });

        $scope.ShowModalC= function (){
         $scope.ModalC.show()
    }
    $scope.CloseModalC = function() {
    $scope.ModalC.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.ModalC.remove();
  });

//Model Search

$ionicModal.fromTemplateUrl('search.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.ModalD= modal;
        });

        $scope.ShowModalD= function (){
         $scope.ModalD.show()
    }
    $scope.CloseModalD = function() {
    $scope.ModalD.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.ModalD.remove();
  });



  $scope.doctorProfiles = [{id:1,name:"Poonam Verma",speciality:"Audiologist",city : "jaipur", experince:"13", fees:"500", qualification:"MBBS, BDS, MS, MDS", services:"Braces,Orthodonics, Orthodontic Alighnment"},                     
                           {id:2,name:"Yogesh Verma",speciality:"Physiologist",city : "Delhi", experince:"23", fees:"5000", qualification:"MBBS, BDS, MS, MDS", services:"Bimarri , Check , Karni "}] 


});


app.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top


}]);

app.config(['$compileProvider', function($compileProvider){        
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(geo|mailto|tel|maps):/);
}]);


