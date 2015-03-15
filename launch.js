// Coundown

// var count =10
// function next() {
// 	count -= 1
// 	console.log(count);
// 	if (count === 0) {
// 		console.log('BLAST OFF');
// 		return;
// 	}
// 	setTimeout(next, 1000)
// }
// console.log(count)
// setTimeout(next, 1000)


var five = require("johnny-five"),
    board = new five.Board({repl: false});

board.on("ready", function() {
	var pin = new five.Pin(10); 
	console.log('board ready')

  	pin.high()

	process.on('exit', function(){
		pin.low()
	})
});