// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1
(function(){
//  console.log("hellow");
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i=0; i < names.length; i++) {
  //  console.log("hels");
    var firstLetter = (names[i].charAt(0)).toLocaleLowerCase();
    if (firstLetter == "j"){
      byeSpeaker.speak(names[i]);
    }else{
      helloSpeaker.speak(names[i])
    }
   
  }

   
})();




