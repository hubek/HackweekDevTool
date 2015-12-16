$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("ps4lMG44r8m2Vf2Ag12WqPX4raxe5AS3JaKQnXZN", "qAdpst43iCxAGkKxP5pGw9BB3uMAB356hVNKQB29");

    $("#test").click( function(){

      // Call Function
      Parse.Cloud.run("login", { password:"test123", username:"test1" } ).then(
        function(result) {
          // make sure the set the enail sent flag on the object
          console.log("result :" + JSON.stringify(result))
        }, 
        
        function(error) {
          // error
          console.log(error);
        }
    );

  });
    
});