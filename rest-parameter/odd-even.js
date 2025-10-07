function checkOddEven(...numbers) {
    numbers.forEach(num => {
      if (typeof num !== 'number') {
        console.log(`${num} is not a number.`);
      } else if (num % 2 === 0) {
        console.log(`${num} is even.`);
      } else {
        console.log(`${num} is odd.`);
      }
    });
  }
  
  checkOddEven(1, 2, 3, 4,);
  