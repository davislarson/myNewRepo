let secrets = require("./secrets");


let response = secrets();
if (response)
{
   console.log("The response was truthy.");
}
else
{
   console.log("The response was falsy");
}