
var recognition;
var recognizing = false;
var start_timestamp;


if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;


  recognition.onstart = function() {
    recognizing = true;
    if (document.getElementById('start_img')) {
	    start_img.src = 'mic-animate.gif';
	}
  };
  
  recognition.onresult = function(event) {
  console.log('result');
	var command;
	var commandTrigger;
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      //if (event.results[i].isFinal) {
        console.log( event.results[i][0].transcript);
        //switch(event.results[i][0].transcript.trim()) {
        	command = event.results[i][0].transcript.trim().toLowerCase();
        	commandTrigger = false;
        	if ( command.indexOf('stop') >= 0
			  || command.indexOf('hold') >= 0
			  || command.indexOf('wait') >= 0
			  || command.indexOf('weight') >= 0
			  || command.indexOf('star') >= 0) {
				esperStop();
				commandTrigger = true;
			}
			else if ( command.indexOf('enhance') >= 0 
			  || command.indexOf('in harness') >= 0
			  || command.indexOf('in harmony') >= 0
			  || command.indexOf('move in') >= 0
			  || command.indexOf('center in') >= 0
			  || command.indexOf('centre in') >= 0
			  || command.indexOf('zoom in') >= 0
			  || command.indexOf('do men') >= 0) {
				enhance();
				commandTrigger = true;
			}
			else if ( command.indexOf('pull out') >= 0
			  || command.indexOf('pull back') >= 0
			  || command.indexOf('zoom out') >= 0
			  || command.indexOf('Holbeck') >= 0
			  || command.indexOf('back') >= 0
			  || command.indexOf('out') >= 0) {	
				pullOut();
				commandTrigger = true;
			}
			else if ( command.indexOf('pan right') >= 0
			  || command.indexOf('and right') >= 0
			  || command.indexOf('pam right') >= 0
			  || command.indexOf('hang right') >= 0
			  || command.indexOf('right') >= 0
			  || command.indexOf('handwrite') >= 0
			  | command.indexOf('write') >= 0) {
				panRight();
				commandTrigger = true;
			} 
			else if ( command.indexOf('pan left') >= 0
			  || command.indexOf('and left') >= 0
			  || command.indexOf('pam left') >= 0
			  || command.indexOf('hang left') >= 0
			  || command.indexOf('left') >= 0) {
				panLeft();
				commandTrigger = true;
			} 
			else if ( command.indexOf('pan up') >= 0
			  || command.indexOf('and up') >= 0
			  || command.indexOf('pam up') >= 0
			  || command.indexOf('hang up') >= 0
			  || command.indexOf('up') >= 0
			  || command.indexOf('hannah') >= 0
			  || command.indexOf('anna') >= 0) {
				panUp();
				commandTrigger = true;
			} 
			else if ( command.indexOf('pan down') >= 0
			  || command.indexOf('and down') >= 0
			  || command.indexOf('pam down') >= 0
			  || command.indexOf('hang down') >= 0
			  || command.indexOf('down') >= 0
			  || command.indexOf('panda') >= 0) {
				panDown();
				commandTrigger = true;
			}  				
			else if ( command.indexOf('hard copy') >= 0
			  || command.indexOf('print') >= 0
			  || command.indexOf('printout') >= 0) {
				hardCopy();
				commandTrigger = true;
			}
			else if ( command.indexOf('f***') >= 0) {
				alert('F*** you too');
				commandTrigger = true;
			}
			
			if (commandTrigger) {
				break;  
				//recognition.stop();
				//recognition.start();
			}
	//	}
     // }
    }
  };
  

  recognition.onerror = function(event) {
    alert(event.error);
    if (event.error == 'no-speech') {
      if (document.getElementById('start_img')) {
     	 start_img.src = 'mic.gif';
      }
      alert('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      if (document.getElementById('start_img')) {
        start_img.src = 'mic.gif';
      }
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
    if (document.getElementById('start_img')) {
      start_img.src = 'mic.gif';
    }
  }
}


function startButton(event) {
  if (recognizing == false) {
	recognition.start();
  	start_timestamp = event.timeStamp;
  } else {
  	esperStop();
  	recognition.stop();
  }
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  alert('you must be using chrome 44 or higher');
}