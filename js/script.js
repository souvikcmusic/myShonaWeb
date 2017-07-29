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
            
            $scope.setSession=function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            $scope.getSession=function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            $scope.myFunc = function() {
            	
                if($scope.username==username && $scope.password==password){
             	   
             	   
             	   $scope.setSession("loggedin","yes",1);
             	   alert($scope.getSession("loggedin"));
             	   window.location = "https://souvikcmusic.github.io/myShonaWeb/home.html";
             	   //window.location="file:///Users/souvikchakraborty/git/myShonaWeb/home.html";
                }
             };
             $scope.isLoggedIn=function isLoggedIn(){
             	if($scope.getSession!=undefined && $scope.getSession!=null && $scope.getSession!=""){
             		return true;
             	}
             	return false;
             }

        });