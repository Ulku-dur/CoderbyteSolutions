function LetterChanges(str) { 

    let charArr = str.split('');
  
    for (let i = 0; i < str.length; i++){
      
      if (charArr[i].match(/[a-z]/)){ ///[a-zA-Z]/ if uppercase in string to handle
  
        //hadle z to a case 
        if (charArr[i] === 'z' ){
          charArr[i] = 'A'; // A is vowel - uppercase right away or let followw logic to upper - remove cont.
          continue;
        }
  
        //change letter to next in alphabet
        charArr[i] = String.fromCharCode(charArr[i].charCodeAt(0) + 1 );
  
        //uppercase vowels
        if (charArr[i].match(/[aeiou]/gi)){
          charArr[i] = charArr[i].toUpperCase();
        }
  
      }
      
    }
  
    return charArr.join(''); 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges(readline()));