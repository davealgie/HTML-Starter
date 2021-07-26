(() =>{
    let button = document.querySelector('#submit');

    function makeUser(name, username, email) {
            return {
                    name: `${name}`,
                    username: `${username}`,
                    email: `${email}`,
                    address:{
                            street: "test",
                            suite: "test",
                            city: "test",
                            zipcode: "test",
                            geo:{
                                    lat: "-1",
                                    lng: "1"
                            }
                    },
                    phone: "test",
                    website: "test",
                    company: {
                            name: "test",
                            catchPhrase: "test",
                            bs: "test"
                    }
            };
    }

    function post(user){
            let url = "https://jsonplaceholder.typicode.com/users";
            fetch(url, {
                    method: "POST",
                    headers: {
                            "Content-type": "application/json;"
                    },
                    body: JSON.stringify(user)
            })
                    .then(response => response.json())
                    .then(data => {
                            console.log(data);
                            document.querySelector('#result').textContent = `Response: ${JSON.stringify(data)}`;
                    })
                    .catch(err => console.error(err));
    }

    button.addEventListener("click", (event) => {
            event.preventDefault();
            let name = document.querySelector('#name').value;
            let username = document.querySelector('#username').value;
            let email = document.querySelector('#email').value;
            let user = makeUser(name, username, email);
            post(user);
    });
})();