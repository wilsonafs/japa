const getParam = name => {
  const url = new URL(location.href)
  return url.searchParams.get(name)
}

const paraEl = document.getElementById('para')
const para = getParam('para')
if (para) paraEl.innerText = para

const quando = getParam('quando')

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

const countDown = new Date(quando || 'Jan 10, 2019 12:00:00').getTime()

setInterval(function() {

  const now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / (day)),
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

  //do something later when date is reached
  //if (distance < 0) {
  //  clearInterval(x);
  //  'Hora do Japa!;
  //}

}, second)
