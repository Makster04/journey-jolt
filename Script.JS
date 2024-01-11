let name = prompt("What is your name?");
      document.write("<p>Hello, " + name + "!<p>");

      let favCountry = prompt("What is your favorite country?");
      document.write("<p>" + name + "'s favorite country: " + favCountry + ".<p>");

      let y_or_n = prompt("Looking for great prices? y/n");
      if(y_or_n === 'y') {
        document.write("<p>Check out <a href='https://tripadvisor.com' target='_blank'>Trip Advisor</a> for great travel deals!</p>");
      } 
      
      else {
        document.write('OK, maybe next time. :)');
      }
 
      review(rating);
      let rating;
      let count = 0;
      while(!rating || rating > 5){
        rating = parseInt(prompt("Rate Us! 1 -5"));
      }

    do {
        document.write('<img src= "https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-golden-sun-god-gold-greece-png-image_5270593.png'>)
        count ++;
    } while (count < rating);
