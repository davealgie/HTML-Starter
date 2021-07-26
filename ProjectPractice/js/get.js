(() =>{
    let button = document.querySelector('#submit');
    
    function makeTable(fields){
            if(!Array.isArray(fields)){
                    fields = [fields];
            }
            let table = document.createElement("table");
            table.style.border = "1px solid black";
            table.style.borderCollapse = "collapse";
            table.appendChild(tableRow(fields[0], "th"));
            for(const item of fields){
                    table.appendChild(tableRow(item, "td"));
            }
            return table;

            function tableRow(item, colType){
                    let row = document.createElement("tr");
                    for(const property in item){
                            let col = document.createElement(colType);
                            col.style.border = "1px solid black";
                            if(colType === "th"){
                                    col.textContent = `${property}`;
                            } else if (Array.isArray(item[property])) {
                                    console.log(item[property]);
                                    col.appendChild(makeTable(item[property]));
                            } else if (typeof item[property] === 'object'){
                                    col.appendChild(makeTable([item[property]]));
                            }
                            else {
                                    col.textContent = `${item[property]}`;
                            }
                            row.appendChild(col);
                    }
                    return row;
            }
    }

    function clearTable(){
            let table = document.querySelector('#resultTable');
            let children = table.childNodes;
            for(const child of children){
                    table.removeChild(child);
            }
    }

    function getReq(id){
            let url = "https://jsonplaceholder.typicode.com/users";
            if(id){
                    url = `${url}/${id}`;
            }
            fetch(url)
                    .then(response => response.json())
                    .then(data => {
                            document.querySelector('#resultTable').appendChild(makeTable(data));
                    })
                    .catch(err => console.error(err));
    }

    button.addEventListener("click", (event) => {
            event.preventDefault();
            let id = document.querySelector('#id').value;
            clearTable();
            getReq(id);
    });
})();