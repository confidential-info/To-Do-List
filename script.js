let input = document.querySelector("input");
let submit = document.querySelector(".submit-button");
let listItem = document.querySelector(".items");
let deleteItem = document.querySelector(".deleteButton");
let tasks = [];

function showList()
{
    if(tasks.length == 0)
    {
        return;
    }
    else
    {
        tasks.forEach((element) => {
            let li = document.createElement("li");
            let del = document.createElement("button");
            let edit = document.createElement("button");
            let label = document.createElement("div");
            li.classList.add("item");
            del.classList.add("deleteButton");
            edit.classList.add("editButton");
            label.classList.add("label");
            del.setAttribute("type", "submit");
            li.innerHTML = element;
            del.innerHTML = `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 122.879 122.879" enable-background="new 0 0 122.879 122.879" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#FF4141" d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"/></g></svg>`;
            edit.innerHTML = `<svg class="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>`;
            li.appendChild(label);
            label.appendChild(edit);
            label.appendChild(del);
            listItem.appendChild(li);

            //Function to DELETE a task
                //Finding index of the task selected and then deleting that task, then displaying the list
            del.addEventListener("click", function() {
                let index = tasks.indexOf(element);
                tasks.splice(index, 1);
                listItem.innerHTML ="";
                showList();
            });

            //Function to EDIT a task
            edit.addEventListener("click", function() {
                let index = tasks.indexOf(element);
                let inputField = document.createElement("input");
                inputField.value = element;
                inputField.classList.add("editInput");
                let saveButton = document.createElement("button");
                saveButton.innerHTML = `
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 11.917 9.724 16.5 19 7.5"/>
                </svg>
                `;
                saveButton.classList.add("saveButton");

                // Replace task text with input field and save button
                li.innerHTML = "";
                li.appendChild(inputField);
                li.appendChild(saveButton);

                // Save changes
                saveButton.addEventListener("click", function () {
                    let updatedText = inputField.value;
                    tasks[index] = updatedText;
                    listItem.innerHTML = "";
                    showList();
                });

                // Optionally, save changes on pressing Enter
                inputField.addEventListener("keypress", function (e) {
                    if (e.key === "Enter") {
                        saveButton.click();
                    }
                });
            });
        });
    }
}

//Function to SUBMIT an task and add to the list
submit.addEventListener("click", function()
{
    tasks.push(input.value);
    input.value = "";
    listItem.innerHTML = "";
    showList();
});
