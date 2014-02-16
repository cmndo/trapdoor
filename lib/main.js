(function() {
  var Trapdoor, _base;

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

      var kbd = require('./node_modules/trapdoor/node_modules/readlinesync');

      while(true)
      {
        process.stdout.write("trapdoor::eval");
        var line = kbd.readline();

        if(line === '.exit')
        {
          break;
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