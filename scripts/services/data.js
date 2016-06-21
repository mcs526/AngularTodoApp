'use strict';

angular.module('todoListApp')
.service('dataService', function($http){

	this.helloConsole = function(){
		console.log("this is the helloConsole service!");
	};

	this.getTodos = function(callback){
		$http.get('mock/todos.json')
		.then(callback)
	}

	this.deleteTodo = function(todo){
		console.log("The " + todo.name + " todo has been deleted!");
		//other logic to remove entry from database, etc
	}	

	this.saveTodos = function(todos){
		console.log(todos.length + " todos have been saved!");
		//other logic to save entry in database
	}
});