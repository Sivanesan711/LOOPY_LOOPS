// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Prograd1="sivanesan";
console.log("The driver's name is "+Prograd1);
var Prograd2="shiva";
console.log("The navigator's name is "+Prograd2);


// PROGRESSION-2.1.

var Prograd1="SIVANESAN";
var Prograd2="SIVA";
if(Prograd1.length>Prograd2.length)
  {
    console.log("The driver's name is longest "+Prograd1);
  }
else if(Prograd1.length==Prograd2.length)
  {
    console.log("WOW YOU PEOPLES HAVE EQUAL LENGTH NAMES");
  }
else
  {
    console.log("The navigator's name is longest"+Prograd2);
  }

  //PROGRESSION- 2.2.

  function VorN(str1)
{
  var vowel = 'aeiouAEIOU';
  var vow_count = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel.indexOf(str1[x]) !== -1)
    {
      vow_count = vow_count + 1;
    }
  
  }
  return vow_count;
}
console.log(VorN("SIVANESAN"));

//PROGRESSION - 2.3.

var str = "ThIs Is A Test On HOW tO counT UppeR CaSE";
console.log(str.replace(/[^A-Z]/g, "").length);
var a=str.replace(/[^a-z]/g, "").length;
console.log(a);
var lowercase=(str.length)-a;
console.log(lowercase);
if(a)
{
    console.log("THIS IS UPPER CASE");
}
else if(lowercase)
{
    console.log("THIS IS LOWER CASE");
}
