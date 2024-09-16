function BlackjackHighest(strArr) { 

    var highest = -1;
      var highcard = "";
      var total = 0;
      var aceFound = false;
      var cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
      var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
      for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < cards.length; j++) {
          if (strArr[i] == cards[j]) {
            total += values[j];
            if (j > highest) {
              highest = j;
              highcard = cards[j];
            }
            if (j == 0) aceFound = true;
          }
        }
      }
      
      if (aceFound && total <= 11) {
        total += 10;
        highest = 11;
        highcard = "ace";
      }
      
      if (total < 21) return "below " + highcard;
      if (total > 21) return "above " + highcard;
      if (total == 21) return "blackjack " + highcard;
      // code goes here  
      // code goes here  
      return strArr; 
    
    }
       
    // keep this function call here 
    console.log(BlackjackHighest(readline()));