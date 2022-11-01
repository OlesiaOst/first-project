var but = document.getElementById("sin");
sin.addEventListener("click", function () {
  var n = parseInt(input.value, 10);
  function sin(n) {
    var s = Math.sin((n * Math.PI) / 180);
    return s.toFixed(3);
  }
  input.value = sin(n);
});

var but = document.getElementById("cos");
cos.addEventListener("click", function () {
  var n = parseInt(input.value, 10);
  function cos(n) {
    var s = Math.cos((n * Math.PI) / 180);
    return s.toFixed(3);
  }
  input.value = cos(n);
});

var but = document.getElementById("tg");
tg.addEventListener("click", function () {
  var n = parseInt(input.value, 10);
  function tg(n) {
    var s = Math.tan((n * Math.PI) / 180);
    return s.toFixed(3);
  }
  input.value = tg(n);
});

var but = document.getElementById("ctg");
ctg.addEventListener("click", function () {
  var n = parseInt(input.value, 10);
  function ctg(n) {
    var s = 1 / Math.tan((n * Math.PI) / 180);
    return s.toFixed(3);
  }
  input.value = ctg(n);
});
var clean = document.getElementById("clean");
clean.addEventListener("click", function () {
  input.value = "";
});
