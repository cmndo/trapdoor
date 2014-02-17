(function() {

  var Trapdoor;
  var fs = require('fs');

  if (global.__door == null) {
     global.__door = {};
  }

  function registerCommands(){
    // setup the commands
    global.t = {};

    // for every command we find, require it
    var files = fs.readdirSync(__dirname + '/commands');
    for (var i = files.length - 1; i >= 0; i--) {
      var name = '.'+files[i].split('.')[0];
      require(__dirname + '/commands/' + files[i]).register();
    };

  }

  // register command modules so we can use them
  registerCommands();

  // register readlinesync so we can use it later
  global.__door.readlinesync = require.resolve('readlinesync');

  Trapdoor = (function() {

    function Trapdoor() {}

    Trapdoor.open = function(context) {

      console.log("    ||   |   ||   ");
      console.log("     ||  |  ||    ");
      console.log("      || V ||     ");
      console.log("        |||       ");
      console.log("   /-------------/");
      console.log("  /  Trapdoor:  / ");
      console.log(" /    >open!   /  ");
      console.log("/-------------/   ");
      console.log("|             |   ");

      var kbd = require(global.__door.readlinesync);

      var running = true;

      while(running)
      {

        process.stdout.write("trapdoor::eval");
        var line = kbd.readline();

        // should we exit the loop?
        if(line === '.exit')
        {
          var running = false
          return;
        }

        // evaluate it the expression
        try {
          var result = eval(line);
          // if the reply is 'undefined' just ignore it
          if(result !== undefined)
            console.log(result);
        } catch(e) {
          console.log(e);
        }

      }

    };

    return Trapdoor;

  })();

  global.trapdoor = {open:"(" + (Trapdoor.open.toString()) + ")()"};

}).call(this);