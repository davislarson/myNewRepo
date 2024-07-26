
let response = process.env.SECRETS_SHHH;
if (response)
{
   console.log("The response was truthy.");
}
else
{
   console.log("The response was falsy");
}