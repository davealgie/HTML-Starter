fetch('https://reqres.in/api/users?page=2')
.then((response) => {
    if (response.status !== 200) {
        console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
        return;
    }
response.json()
.then(data => console.log(data));         
})
.catch(err => console.error(`Fetch Error :-S ${err}`));


fetch('https://reqres.in/api/users/2')
.then((response) => {
    if (response.status !== 200) {
        console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
        return;
    }
response.json()
.then(data => console.log(data));         
})
.catch(err => console.error(`Fetch Error :-S ${err}`));


fetch("https://reqres.in/api/users", {
    method: 'post',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
       name: "Morpheus",
       job: "Leader"
      })
    })
    .then(res => res.json())
    .then(data => console.log(`Request succeeded with JSON response ${data}`))
    .catch(error => console.error(`Request failed ${error}`));


    fetch("https://reqres.in/api/login", {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka"
          })
      })
      .then(res => res.json())
      .then(data => console.log(`Request succeeded with JSON response ${data}`))
      .catch(error => console.error(`Request failed ${error}`));