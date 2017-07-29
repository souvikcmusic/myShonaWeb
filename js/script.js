///<reference path="angular.js" />

var app = angular
        .module("myModule", [])
        .controller("myController",function ($scope,$location) {
        	var username="jhum";
        	var password="jhum@941";
            var credentials = [
                {
                    username: "jhum", password:"jhum@941"
                },
                {
                    name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    gender: 2, salary: 68000
                },
                {
                    name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                    gender: 1, salary: 57000
                },
                {
                    name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                    gender: 2, salary: 53000
                },
                {
                    name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                    gender: 3, salary: 60000
                }
            ];
            $scope.myFunc = function() {
            	
               if($scope.username==username && $scope.password==password){
            	   
            	   window.location = "https://souvikcmusic.github.io/myShonaWeb/home.html";
               }
            };
            

        });