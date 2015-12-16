//=============== Register call
// Call Function

Parse.Cloud.run("register", 
      { username:"test1", password:"test123", email:"test2@34.com", role: "refugee" }).then(
    	function(result) {
    	// make sure the set the enail sent flag on the object
    	console.log("result :" + JSON.stringify(result))


        }, 
        function(error) {
        // error
         console.log(error);
        }
    );

//=============== Login
 Parse.Cloud.run("login", 
      { password:"test123", username:"test1" }).then(
    	function(result) {
      // make sure the set the enail sent flag on the object
    	console.log("result :" + JSON.stringify(result))


        }, 
        function(error) {
        // error
         console.log(error);
        }
    );

