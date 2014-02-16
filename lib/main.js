(function() {
  var Trapdoor, _base;

  if (global.__door == null) {
     global.__door = {};
   }

  global.__door = require.resolve('readlinesync');

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

      var kbd = require(global.__door);

      var running = true;

      while(running)
      {
        process.stdout.write("trapdoor::eval");
        var line = kbd.readline();

        if(line === '.exit')
        {
          var running = false
          return;
        }

        try {
          console.log(eval(line))
        } catch(e) {
          console.log(e);
        }
      }

    };

    return Trapdoor;

  })();

  global.trapdoor = {open:"(" + (Trapdoor.open.toString()) + ")()"};

  global.__commands = {

  };

}).call(this);