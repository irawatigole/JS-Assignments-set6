// Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

// Each input array will be nested 3 levels deep. Study the examples below to understand how the data is structured.

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
  ];

  // 'King Kong'
  // 'gorilla'
  // '42'

  // output
// [
//     'King Kong the gorilla is 42', 
//     'Nemo the fish is 5',
//     'Phil the groundhog is 11'
//   ]

// for loop
  function zooInventory(a){
var result = [];
      for (var i=0; i<a.length; i++){
      //    result.push (a[i][0] + 'the' + a[i][1][0] + 'is ' + a[i][1][1] + ' \n')
      result.push(`${myZoo[i][0]} the ${myZoo[i] [1] [0]} is ${myZoo[i][1][1]}`);
      }
      return result;
  }
  console.log(zooInventory([
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
  ]));


