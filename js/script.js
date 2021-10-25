const row = document.querySelector('.row');

//versione con innerHTML
/* for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div');
   box.className = 'box';
   box.innerHTML = i;
   row.append(box);
   console.log(box);

   if (!(i % 3) && !(i % 5)) {
      box.classList.add('three-five');
      box.innerHTML = 'FizzBuzz';
   } else if (!(i % 3)) {
      box.classList.add('three');
      box.innerHTML = 'Fizz';
   } else if (!(i % 5)) {
      box.classList.add('five');
      box.innerHTML = 'Buzz';
   } 
      
   console.log(i);
}; */

//Versione con append
for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div');
   box.className = 'box';
   row.append(box);
   console.log(box);

   if (!(i % 3) && !(i % 5)) {
      box.classList.add('three-five');
      box.append('FizzBuzz');
   } else if (!(i % 3)) {
      box.classList.add('three');
      box.append('Fizz');
   } else if (!(i % 5)) {
      box.classList.add('five');
      box.append('Buzz');
   } else {
      box.append(i);
   }
      
   console.log(i);
};