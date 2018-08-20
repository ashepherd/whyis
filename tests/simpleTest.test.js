//karma.conf.js is set to look for tests in /tests folder 
//named *.test.js

//most simple test ever
describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
});



describe('Testing the main controller', function(){
    var $controller 

    // define(['angular'], function(angular){ 
    //     // here angular is just a reference, might not be fully loaded
    //     // Point_1
    //     angular.module('App', ['ngSanitize', 'ngMaterial', 'lfNgMdFileInput', 'ui.bootstrap', 'seco.facetedSearch','jsonLdEditor']);
    //     // other stuff...
    // })

    //set up for all tests
    beforeEach(function(){
        //load app module
        // module('App', ['ngSanitize', 'ngMaterial', 'lfNgMdFileInput', 'ui.bootstrap', 'seco.facetedSearch','jsonLdEditor']);
        // var app = angular.mock.module('App', []);
        var app = angular.module('App', []);       
        angular.bootstrap(document, ['App']); //manually bootstrap angular, on Dom ready
        console.log("inside simple test")

        inject(function(_$controller_){
            // inject removes the underscores and finds the $controller Provider
            console.log("inside inject function")
            $controller = _$controller_;
            // $rootScope = _$rootScope_;
        });
    });

    //Test (spec) to test if $scope.nanopub exists
    it('$scope.nanopub should be truthy', function(){
        var $scope = {}

        var controller = $controller('NewInstanceController', {$scope: $scope});
        expect($scope.nanopub).toBeTruthy();
    })

})
