var btn = document.getElementById("clickme");
// this variable contains the element with id='clickme'

btn.addEventListener("click", animate());
// this listener waits for a click to call the animate() function

function animate(event){
  // the function contains an event (parameter) provided by the listener!

  var target = event.target
  // this event contains in particular the targeted element...

  target.classList.add('animated');
  target.classList.add('infinite');
  target.classList.add('pulse');
  // the .classList property allows to add or remove new CSS classes dynamically
}
