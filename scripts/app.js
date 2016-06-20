angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.learningNgChange = function(){
    console.log("The input changed!");
    
  };

  $scope.todos = [
  	{'name': 'clean the house'},
  	{'name': 'water the plants'},
  	{'name': 'do the laundry'},
  	{'name': 'wash the dishes'},
  	{'name': 'mop the floor'},
  	{'name': 'pay the bills'}
  ]

});