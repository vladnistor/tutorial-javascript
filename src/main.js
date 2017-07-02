var a = 5;

(function() {
    var a = [1,2,3];

    console.log('original array', a);
    a.map(function(value) {
       return value*2;
    });
    console.log('doubled array', a);
})();