    const inputBox = document.getElementById('inputBox');
    const add = document.getElementById('addBtn');
    const todo = document.getElementById('todoList');

    const addTodo = () => {
        const inputText = inputBox.value.trim();
        if (inputText.length <= 0) {
            alert("You must have to Write something");
        } else {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = inputText;
            li.appendChild(p);

            //Add an Edit Button
            const editBtn = document.createElement("button");
            editBtn.innerHTML = 'Edit';
            editBtn.classList.add('editBtn');
            li.appendChild(editBtn);

            //Add an Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = 'Delete';
            deleteBtn.classList.add('deleteBtn');
            li.appendChild(deleteBtn);


            // Add event listener to delete button
            deleteBtn.addEventListener('click', () => {
                todo.removeChild(li);
            });

            // Add event listener to edit button
            editBtn.addEventListener('click', () => {
                const newText = prompt("Edit your task:", p.innerHTML);
                if (newText !== null && newText.trim().length > 0) {
                    p.innerHTML = newText.trim();
                } else if (newText !== null) {
                    alert("You must have to write something");
                }
            });
            

            todo.appendChild(li);
            inputBox.value ="";
        }
    };

    add.addEventListener('click', addTodo);
