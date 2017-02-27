/*
for (var a = 100; a != 0 ; a--)
{
    if ((a % 2) == 0)
    {
    document.write(a);
    document.write('<br>');
    }
   
}*/

/*var cars = ['Audi' , 'Mersedes', 'Jaguar'];
cars[10] = 'zaz';

//for (var i = 0; i < cars.length; i++)
//{
//    document.write(cars[i]);
//    document.write('<br>');
//}
cars.forEach(printCar);
function printCar(el)
{
    document.write(el);
    document.write('<br>');
}


var myCars = 
    { 
        mostExpencive : 'Bugatti',
        cheapest : 'Zaz',
        Favorites : 'Jepe',
        newest : 'Jaguar'
    }
//    document.write(myCars['newest']);
     var i = 0;
    for (var key in myCars)
    {
        document.write(myCars[key]);
        document.write('<br>')
        i++;
    }
    document.write(i);
  
       */
    var oldCar = {
        make : 'Audi',
        model : 'A4',
        year : 2000,
        drive: function(){
            document.write('car ' + this.make+ ' is driving');
        }
    }
    
    var newCar = {
        make : 'Ferrari',
        model : 'Spider',
        year : 2016,
        drive: function(){
            document.write('car ' + this.make+ ' is driving');
        }
    }

      
      function Car(make, model, year)
      {
          this.make = make;
          this.model = model;
          this.year = year;
          this.drive = function()
          {
           document.write('car ' + this.make+ ' is driving');
            document.write('<br>');
          }
      }
      var anotherCar = new Car('Subaru', 'Forester', 2014);
      anotherCar.drive();