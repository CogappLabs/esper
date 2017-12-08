
var recognition;

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;  //interperate pauses as end of command
  recognition.interimResults = true;


  recognition.onstart = function() {
    alert('start');
    recognizing = true;
    start_img.src = 'mic-animate.gif';
  };
  
  recognition.onresult = function(event) {
    alert('result');

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        console.log( event.results[i][0].transcript);
      }
    }
  };
  

  recognition.onerror = function(event) {
  	alert('error');
  };
  
  recognition.onend = function() {
    alert('end');
  }
}

function startButton(event) {
  recognition.start();
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}