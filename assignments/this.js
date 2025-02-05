/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding: If in the global scope (no other rules apply the keyword defaults to window) this will be the whole window.
* 2. Implicit Binding- When an function is called with a dot, the this is the object before the dot
* 3. New Binding- Is a constructor function, when the new keyword constructs a new object, this will point to it.
* 4. Explicit Binding- Using the .call or .apply functions
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
// function pet(species) {
//     console.log(this);
//     return species;
//   }
//   pet('dog');

// Principle 2
// code example for Implicit Binding
const myPet = {
    name: 'Sampson',
    age: 5,
    pet: function() {
        console.log(this.name)
    }
}
myPet.pet();

// Principle 3
// code example for New Binding

function favoriteAnimal (pet) {
this.pettype = 'My favorite pet type is';
this.pet = pet;
this.animal = function () {
    console.log (this.pettype + this.pet) ;
    console.log (this);
 }
}
const dog = new favoriteAnimal (' dog');
const cat = new favoriteAnimal (' cat');

dog.animal ();
cat.animal ();


// Principle 4

// code example for Explicit Binding


function Pet(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.age = attrs.age;
}



function Dog(dogAttrs) {
  Pet.call(this, dogAttrs);
  this.isCute = dogAttrs.isCute;
}

Dog.prototype.isCute = function() {
  if(this.isCute) {
    return true;
  } else {
    return false;
  }
};



const newDog = new Dog({
  isCute: true,
  type: 'Dog',
  name: 'Sampson',
  age: 5,
});

newDog.checkIfisCute(); 
