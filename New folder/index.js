function countdown(number, callback) {
  setTimeout(function () {
    document.getElementById('countdown').innerText = number;
    if (number > 1) {
      countdown(number - 1, callback);
    } else {
      callback();
    }
  }, 1000);
}

countdown(10, function () {
  setTimeout(function () {
    document.getElementById('countdown').innerText = "Happy Independence Day";
  }, 1000);
});
