(function() {
  var net = require("net"),
    repl = require("repl");

  console.log("    ||   |   ||   ");
  console.log("     ||  |  ||    ");
  console.log("      || V ||     ");
  console.log("        |||       ");
  console.log("   /-------------/");
  console.log("  /  Trapdoor:  / ");
  console.log(" /    >open!   /  ");
  console.log("/-------------/   ");
  console.log("|             |   ");

  var local = repl.start("trapdoor::local> ");
  local.context.global = global;
}).call(this);