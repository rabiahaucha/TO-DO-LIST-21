let array =[]
function  crossout(id)

function sortItems() {
    array.sort(function (a, b) {
        console.log(event.target)
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0; 
    });
    document.querySelector('#tasks').innerHTML = '';
    array.forEach(item =>{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <span id="sort-btn"></span>
                <span id="taskname" style="color:white">
                    ${item.name}
                </span>
                <button class="delete" style="background-color:white; color:black; width:4rem;">
                    <i class="far fa-trash-alt">Delete</i>
                </button>
            </div>
        `;

    })
}
function saveItems(){
    localStorage.setItem('saveItems',JSON.stringify(saveItems));
}

document.getElementById('sort-btn').addEventListener('click', sortItems);
document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input').value.length == 0)
    {
        alert("Items are required")
        console.log('Logged');
    }
    else{
        array.push({
            name:document.querySelector("#input").value
        })
        document.querySelector('#tasks').innerHTML = '';
        array.forEach(item =>{
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                <span id="sort-btn"></span>
                    <span id="taskname" style="color:white">
                        ${item.name}
                    </span>
                        <button class="delete" style="background-color:white; color:black; width:4rem;">
                            <i class="far fa-trash-alt">Delete</i>
                        </button>
                    </div>
            `;

        })
        
        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
{
 var box = document.getElementById(id);
 box.style = "text-decoration: line-through";
}