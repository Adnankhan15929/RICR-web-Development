// function getData(ID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (ID === 3) {
//         reject("ID not found");
//       } else {
//         console.log("data", ID);
//         resolve("Task Done");
//       }
//     }, 2000);
//   });
// }

// getData(5)
//   .then(
//     (
//       res //here res store resolve value means agr resolve hoga to hi then function chlega
//     ) => {
//       // console.log(res);
//       return getData(1);
//     }
//   )
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     return getData(1);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

function asyncfun1(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("somem data1");
      res("Success");
    },2000);
  })
}

function asyncfun2(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("somem data2");
      res("Success");
    },4000);
  })
}

console.log("fetching data1")
asyncfun1().then((res)=>{
  console.log(res);
  console.log("fetching data2")
  asyncfun2().then((res)=>{
    console.log(res);
  })
})

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", id);
      resolve("success");
      // reject("Rejected");
    }, 5000);
  });
}

//promise chain

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(4);
  })
  .then((res) => {
    return getData(5);
  })
  .then((res) => {
    return getData(6 );
  })
  .then((res) => {
    console.log(res);
  });
