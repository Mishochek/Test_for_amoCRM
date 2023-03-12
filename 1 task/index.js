const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const id = setInterval(() => { 
      let allSeconds = Number(seconds);

      // how time works
      const second = 1;
      const minute = second * 60;
      const hour = minute * 60;

      //calculate
      let spanHour = Math.floor(allSeconds / hour);
      let spanMinute = Math.floor((allSeconds % hour) / minute);
      let spanSecond = Math.floor((allSeconds % minute) / second);

      //for a beatiful timer
      if(spanHour<10) {
        spanHour = '0' + String(spanHour)
      }
      if(spanMinute<10) {
        spanMinute = '0' + String(spanMinute)
      }
      if(spanSecond<10) {
        spanSecond = '0' + String(spanSecond)
      }

      //Output
      timerEl.innerText = spanHour + ':' + spanMinute + ':' + spanSecond;

      seconds = Number(seconds) - 1;
      //for optimisation
      if(seconds < 0) {
        clearInterval(id);
        alert("time's over!")
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const value = inputEl.value;
  inputEl.value = value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
