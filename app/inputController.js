angular.module("app")
  .controller("InputController",
    function() {
      const vm = this
            vm.username = ""
            vm.updateName = function(name){
              vm.username = name
            }
  })
