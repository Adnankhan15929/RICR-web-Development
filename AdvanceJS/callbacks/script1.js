function getdata(ID, getNextData)
{
  setTimeout(() => 
  {
    console.log("DATA", ID);

    if (getNextData) 
    {
      getNextData();
    }
  }, 2000);
}

//callBack Hell
getdata(1, () => 
{
  // ab getnextdata chl rha h
  getdata(2, () => 
  {
    // ab getnextdata chl rha h
    getdata(3,()=>
    {
      // ab getnextdata chl rha h
        getdata(4);
    });
  });
});