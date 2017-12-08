
var recognition;
var recognizing = false;
var start_timestamp;


if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;  //interperate pauses as end of command
  recognition.interimResults = false;


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
        if (event.results[i][0].transcript) {
        	enhance.click();
        }
      }
    }
  };
  

  recognition.onerror = function(event) {
    alert(event.error);
    if (event.error == 'no-speech') {
      start_img.src = 'mic.gif';
      alert('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      start_img.src = 'mic.gif';
      alert('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        alert('info_blocked');
      } else {
        alert('info_denied');
      }
      ignore_onend = true;
    }
    
  };
  
  recognition.onend = function() {
    alert('end');
  }
}

function startButton(event) {
  recognition.start();
  start_timestamp = event.timeStamp;
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}