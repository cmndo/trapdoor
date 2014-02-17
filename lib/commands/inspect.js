var c = require('cardinal');
var JASON = require('JASON');

/*
* Highlight 
* @param item - the item to be parsed into a string
* @returns a string that has been syntax highlighted
*/
function highlight(item) {

  var returnData = undefined;

  try {
    // try to parse if it's JSON
    console.log(c.highlight(item));
  } catch(e) {
    // this must not be JSON
    console.log(c.highlight(item, {json: true}));
  }

}

/*
* Parse an item using JASON
* @param item - the item to be parsed into a string
* @returns a string representation of the item
*/
function itemToString(item) {
  return JASON.stringify(item);
}

function main(item) {
  highlight(JASON.stringify(item));
  return;
}

module.exports = {

  help: "Used to print a function, object or variable neatly to the console.\nusage: .inspect [item/obj/func]",
  
  register: function() {
    global.inspect = main;
  }

};