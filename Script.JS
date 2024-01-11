let user = prompt("What is your name?");
      document.write("<p>Hello, " + user + "!<p>");

      let favCountry = prompt("What is your favorite country?");
      document.write("<p>" + user + "'s favorite country: " + favCountry + ".<p>");

      let y_or_n = prompt("Looking for great prices? y/n");
      if(y_or_n === 'y') {
        document.write("<p>Check out <a href='https://tripadvisor.com' target='_blank'>Trip Advisor</a> for great travel deals!</p>");
      } 
      
      else {
        document.write('OK, maybe next time. :)');
      }
