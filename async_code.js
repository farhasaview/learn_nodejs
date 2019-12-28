const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
// console.log('Hello');

//konsep async js adalah mengeksekusi berdasar kan waktu runtime
// setTimeout(() => { console.log('Javascript')},3000) // tunda selama  miliseconds
// setTimeout(() => { console.log('PHP')},1000) // tunda selama  miliseconds
// console.log('Coder');