(() =>{
    let button = document.querySelector('#submit');

    function makeUser(id, name, username, email) {
            return {
                    id: id,
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

    function put(user){
            let url = `https://jsonplaceholder.typicode.com/users/${user.id}`;
            fetch(url, {
                    method: "PUT",
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
            let id = document.querySelector('#id').value;
            let name = document.querySelector('#name').value;
            let username = document.querySelector('#username').value;
            let email = document.querySelector('#email').value;
            let user = makeUser(id, name, username, email);
            put(user);
    });
})();