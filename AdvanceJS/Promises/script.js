function getData(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === 3) {
        reject("ID not found");
      } else {
        console.log("data", ID);
        resolve("Task Done");
      }
    }, 2000);
  });
}

getData(5)
  .then(
    (
      res //here res store resolve value means agr resolve hoga to hi then function chlega
    ) => {
      console.log(res);
      return getData(1);
    }
  )
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(1);
  })
  .catch((rej) => {
    console.log(rej);
  });
