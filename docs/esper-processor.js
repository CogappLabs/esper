
var recognition;
var recognizing = false;
var start_timestamp;


if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;


  recognition.onstart = function() {
    recognizing = true;
    start_img.src = 'mic-animate.gif';
  };
  
  recognition.onresult = function(event) {

    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        console.log( event.results[i][0].transcript);
        switch(event.results[i][0].transcript) {
			case 'enhance':
				document.getElementById('enhance').click();
				break;
			case 'pan right':
				document.getElementById('pan-right').click();
				break;
			case 'pan left':
				document.getElementById('pan-left').click();
				break;
			case 'pan up':
				document.getElementById('pan-up').click();
				break;
			case 'pan down':
				document.getElementById('pan-down').click();
				break;
			case 'stop':
				document.getElementById('stop').click();
				break;
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
    recognizing = false;
    start_img.src = 'mic.gif';
  }
}

function startButton(event) {
  if (recognizing == false) {
	  recognition.start();
  	start_timestamp = event.timeStamp;
  } else {
  	recognition.stop();
  }
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}