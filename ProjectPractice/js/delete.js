(() =>{
    let button = document.querySelector('#submit');

    function deleteId(id){
            let url = `https://jsonplaceholder.typicode.com/users/${id}`;
            fetch(url, {
                    method: "DELETE"
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
            deleteId(id);
    });
})();
