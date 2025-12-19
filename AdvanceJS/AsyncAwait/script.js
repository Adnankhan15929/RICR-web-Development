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