(function() {
  (function(window) {
    var main;
    main = function(event) {
      window.removeEventListener('load', main);
      return alert('loaded!!!');
    };
    return window.addEventListener('load', main);
  })(window);

}).call(this);
