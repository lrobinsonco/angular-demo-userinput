// (function() {
  angular.module("app", [])
  .component('nameDisplay', {
    controller: "InputController",
    templateUrl: './templates/mytemplate.html'
  })
  .component("goodbye", {
    controller: 'goodbyeController',
    templateUrl: './templates/goodbyeTemplate.html'
  })
// })()

  // angular.module("app", [])
  //   .component("nameDisplay", {
  //     controller: function(){
  //       const vm = this
  //       vm.username = ""
  //       vm.updateName = function(name){
  //         vm.username = name
  //       }
  //     },
  //
  //     template: `
  //       <h3>{{$ctrl.username}}</h3>
  //       <input type="text" ng-model="username">
  //       <input type="submit" value="submit" ng-click="$ctrl.updateName(username)">
  //
  //     `
  //   })
