let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputList = document.getElementById('input-list'); 

addToDoButton.addEventListener('click', addListItem);

function addListItem(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = inputList.value;
    toDoContainer.appendChild(paragraph);
    inputList.value = '';

paragraph.addEventListener('click', strikeThrough);

    function strikeThrough(){
        paragraph.style.textDecoration = 'line-through';
    }

    paragraph.addEventListener('dblclick', deleteListItem);

    function deleteListItem() {
        toDoContainer.removeChild(paragraph);
    }

}

// paragraph.addEventListener('click', removeStrikeThrough);

//     function removeStrikeThrough() {
//         if(paragraph.style.textDecoration = 'line-through'){
//             paragraph.style.textDecoration = 'none';
//         }
//     }