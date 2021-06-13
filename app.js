function sing(callback) {
  console.log("la la la");

  if (callback instanceof Function) callback();
}

function meow() {
  console.log("meow meow");
}

// sing(meow);

function multiplier(factor) {
  //   normal funciton

  //   return function (x) {
  //     return x * factor;
  //   };

  //   Arrow funciton

  return (x) => x * factor;
}

let doubler = multiplier(2);

// doubler(12);
