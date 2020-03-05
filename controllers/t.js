const foo = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isValid = Math.random() > 0.5;

      if (isValid) {
        resolve("hello");
      } else {
        reject("Oh Shit, an error happened");
      }
    }, 2000);
  });
};

const baz = async function() {
  const firstWord = await foo();
  console.log(firstWord + " world");
};

const bar = function() {
  foo()
    .then(function(firstWord) {
      console.log(firstWord + " World");
    })
    .catch(function(err) {
      console.log("Oh snap! An Error --> ", err);
    });
};

baz();
