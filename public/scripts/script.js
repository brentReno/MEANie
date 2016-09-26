//ng app
var myApp=angular.module( 'myApp', [] );
//ng controller
myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
  $scope.addRecord = function(){
    event.preventDefault();
    var objectToSend ={
      name: $scope.nameIn,
      location: $scope.locationIn,
    };// end objectToSend
  $http({
    method: 'POST',
    url: '/testPost',
    data: objectToSend
  }).then( function(response){
      console.log("back from server with",response);
      $scope.nameIn ='';
      $scope.locationIn='';
  });//end then

};// end add record

$scope.getRecords = function(){
  $http({
    method: 'GET',
    url: '/getRecords'
  })
  .then( function( response ){
      $scope.allTheRecords = response.data;
      console.log( $scope.allTheRecords );
      function myError( response ){
        console.log( response.statusText );
      }// end error function
    });//end then
  };// end get records function
}]);// end controller
