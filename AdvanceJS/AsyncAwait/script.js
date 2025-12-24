async function findData(ID)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() =>
        {
            if(ID===3)
            {
                reject("ID not found");
            }
            else{
                console.log("Data",ID);
                resolve("Task Done");
            }
        }, 1000);
    });
}

try{
    const res = await findData(2);
    console.log(res);
    await findData(4);
    console.log(await findData(3));
    console.log(await findData(5));

}
catch(error)
{
    console.log(error);
}

// console.log("1");
// console.log("2");

// setTimeout(()=>{
//     console.log("helo");
// },2000);
// console.log("1");
// console.log("2");





// function api(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data",id);
//       resolve(200);
//     }, 2000);
//   });
// }

// async function get() 
// {
//     await api(3);
//     await api(1);
//     await api(2);
// }

// get();