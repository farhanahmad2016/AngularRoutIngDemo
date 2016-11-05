/// <reference path="../Views/Home/Data.cshtml" />
/// <reference path="../Views/Home/Data.cshtml" />
/// <reference path="../Views/Home/Data.cshtml" />
/// <reference path="Ang.js" />

        var app = angular.
            module('myApp', []).
            filter('gender',function()
            {
                return function(gender)
                {
                    switch(gender)
                    {
                        case 1: return "Male";
                        case 2: return "Female";
                        case 3: return "Not disclosed";

                    }
                }
            })
                       
            .controller('myCtrl', function ($scope, CustomService) {

                var technologies = [{ name: "mohit", likes: 0, dislikes: 0,DateOfbirth:new Date("11 may 2016"),Salary :44000,gender:1 },
                                  { name: "rohit", likes: 0, dislikes: 0, DateOfbirth: new Date("12 may 2016"), Salary: 34000.8787,gender:2 },
                                  { name: "ishan", likes: 0, dislikes: 0, DateOfbirth: new Date("13 may 2016"), Salary: 45000,gender:3 }];
               
                $scope.technology = technologies;
                $scope.incrementlikes = function (tech) {
                                        
                    tech.likes++;                   
                }
                $scope.decrementlikes = function (tech) {
                    // $scope.dislikes++;
                    tech.dislikes++;
                    
                }
                //$scope.rowlimit = 3;
                //   $scope.sortcolumn = 'name';
                $scope.reverseSort = false;
                $scope.sortData= function(column)
                {
                    $scope.reverseSort = ($scope.sortcolumn == column) ? !$scope.reverseSort : false;
                    $scope.sortcolumn = column;
                }
                $scope.getSortclass= function(column)
                {
                    if($scope.sortcolumn==column)
                    {
                        return $scope.reverseSort ?'arrow-down':'arrow-up';
                    }
                    return '';
                }
               // $scope.Data = "~/Views/Home/Data.cshtml";
                $scope.TransformString = function (input) {
                    $scope.output = CustomService.ProcessString(input);

                }
            
            });

