
    let saveApiData =async () => {
      const data={title:"yusuf",body:"Demiray",userId:1}
      const url="https://jsonplaceholder.typicode.com/posts"
      let result = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });
      result = await result.json();
      console.warn(result);

        /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
          console.log(res.status);
          return res.json();
        }).then(result =>{
          console.log(result);
        },(error) =>{
          console.log(error)
        })
       */
      };
       export default saveApiData;



