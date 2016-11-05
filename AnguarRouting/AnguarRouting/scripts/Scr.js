/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

//<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>


//<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>

var app = angular.module("myApp", ["ui.router"])
                 .config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
                     $urlRouterProvider.otherwise("/Home");

                     $urlMatcherFactoryProvider.caseInsensitive(true);
                     $urlMatcherFactoryProvider.strictMode(false);

                     $stateProvider

                     .state("home", {
                         url: "/home",
                         //template:"<p>Welcome to home page</p>",
                         templateUrl: "Template/Home.html",
                         controller: "homecontroller",
                         controllerAs: "hmc",
                         data: {
                             data1: "Home dsdfds1",
                             data2: "Homesdfd 2"
                         }
                     })
                    .state("courses", {
                        url: "/courses",
                        templateUrl: "Template/Courses.html",
                        controller: "coursescontroller as corctrl",
                        data: {
                            data1: "Course sdfdsf1",
                            data2: "Course sdfsdfd2"
                        }
                    })
                    .state("students", {
                        url: "/students",
                        templateUrl: "Template/Student.html",
                        controller: "studentscontoller as stuc"

                    })
                   .state("studentDetails", {
                       url: "/studentDetails/:id",
                       templateUrl: "Template/StudentDetails.html",
                       controller: "studentsdetailscontroller as sdc"
                   })
                     //.otherwise({
                     //       redirectTo: "/home"
                     //   })
                     $locationProvider.html5Mode(true);
                     $locationProvider.hashPrefix('!');

                 })

               // homecontroller
                    .controller("homecontroller", function ($state) {
                        this.message = "Home Page";

                        this.home1 = $state.current.data.data1;
                        this.home2 = $state.current.data.data2;

                        this.course1 = $state.get("courses").data.data1;
                        this.course2 = $state.get("courses").data.data1;

                    })



                    .controller("coursescontroller", function () {
                        this.courses = ["c#", "java", "asp.net", "tester"];
                        console.log(this.courses);
                    })


                  //studentscontoller  
                    .controller("studentscontoller", function ($state, $http) {
                        var vm = this;
                        vm.students;



                        vm.reloadPage = function () {
                            $state.reload();
                        }


                        $http.get("StudentService.asmx/GetAllStudents")
                             .then(function (response) {
                                 vm.students = response.data;
                             })
                    })

                //studentsdetailscontroller



                    .controller("studentsdetailscontroller", function ($http, $stateParams) {
                        var vm = this;
                        $http({
                            url: "StudentService.asmx/GetStudents",
                            params: { id: $stateParams.id },
                            method: "get"

                        }).then(function (response) {
                            vm.student = response.data;
                            console.log($scope.student);

                        })


                    });
