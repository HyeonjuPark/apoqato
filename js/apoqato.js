(function(){
  var app = angular.module('apoqato',['ngAnimate']);
  app.controller("helloWorld", function(){
    this.test="Hello World!";
    this.hasAttribute=true;
    this.step = 1;
    this.selectStep = function(s){
      this.step = s;
    };
  });
})();
