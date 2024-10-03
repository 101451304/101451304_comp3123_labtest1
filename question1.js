function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      return reject(new Error("Input is not an array"));
    }

    const filteredWords = arr
      .filter(item => typeof item === 'string')  
      .map(word => word.toLowerCase());        

    resolve(filteredWords);
  });
}

const MixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(MixedArray)
  .then(result => console.log(result)) 
  .catch(error => console.log(error));
