var johnny = require('johnny-five');

var board = new johnny.Board({ repl: false });

board.on('ready', function() {
	var pin = new johnny.Pin(10); 
	console.log('board ready');

	var count = 10;

	function tick() {
	    count = count - 1;

	    if (count === 0) { 
	        console.log('BLASTOFF!');
	        pin.high();
	        return;
	    }

	    console.log(count);
	    setTimeout(tick, 1000);
	}

	console.log(count);
	
	setTimeout(tick, 1000)

	process.on('exit', function(){
		pin.low()
	})

})

