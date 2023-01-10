var submit_btn = document.getElementById('submit')
var time_span = document.getElementById('time')

var countDown = 120
var setCountDown = setInterval(function() {
    countDown -= 1
    time_span.innerHTML = countDown
}, 1000)