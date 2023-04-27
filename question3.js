function findStringLength(string) {
    let stringLength = string[0].length;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i].length > stringLength) {
        stringLength = string[i].length;
      }
    }
    console.log("Max string length is : " + stringLength);
  }
  
  let strings = ["karachi", "lahore", "islamabad", "rawalpindi","quetta","peshawar"];
  
  findStringLength(strings);
