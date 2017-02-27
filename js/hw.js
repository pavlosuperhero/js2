
var recursia = function fibonachi(a)
{
   
    //var a = document.getElementById("number_form");
    if(a <= 2)
   {
       return 1;
   }
    else
   {
            
            return this.recursia(a - 1) + this.recursia(a - 2)
   }
}
    
    var outPut = "";
 for (var i = 2; i <= 10; i++)
   {
       outPut += recursia(i) + " ";
       
   }
    document.write(outPut);

