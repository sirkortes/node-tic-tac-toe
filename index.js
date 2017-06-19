const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var title = "\n\nTic Tac Toes\n\n";
var player = 0;
var players = ['X','O'];
var moves = 0;
var game = [ 
            ['   ','   ','   '], 
            ['   ','   ','   '], 
            ['   ','   ','   '] 
           ]; // 9 


var render = function(){
  var b = game.reduce(function(board,row){
    board.push(row.join('|'));
    return board;
  },[]).join('\n-----------\n');
  return title + b;
}

var reset = function () {
  return process.stdout.write('\033c');
}

var swicthPlayer = function(){
  player = player === 0 ? 1 : 0;
}

var getMove = function(){
  reset();
  console.log(render());
  rl.question('\n\nEnter Player '+ players[player]+'\'s Move:  ', (block) => {
    // do move
      // get row

      var row;
      if ( block === '1' || block === '2' || block === '3' ){
        row = 0;
      } else if ( block === '4' || block === '5' || block === '6' ){
        row = 1;
        block -= 3;
      } else if ( block === '7' || block === '8' || block === '9' ){
        row = 2;
        block -= 6;
      } else {
        console.log("Wrong input")
      }
      // replace value
      // get index in array ( block - 1 );
      game[row][block - 1] = (' ' + players[player] + ' ');

    // change player and add to moves
    
    swicthPlayer();
    moves++;

    // if not end of game ( moves 9 ) ask again
    if ( moves < 9 ){
      getMove();
    }
    
  });


}

var endGame = function(){

}
 
render();
getMove();
  
// dont close until finished
// rl.close();
// if full determine winner ( would be tie )