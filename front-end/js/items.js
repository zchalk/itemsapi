// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController();

function addItemCard(item){
    const itemHTML = '<div id="'+item.id +'" class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.imageUrl +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '        <a class="btn btn-primary btn-update">Update</a>\n' +
        '        <a href="#" class="btn btn-danger btn-delete">Delete</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;

    let deleteButton = document.getElementsByClassName("btn-delete");
    for(let i = 0; i < deleteButton.length; i++) {
        let deleteBtn = deleteButton[i];
        deleteBtn.addEventListener("click", () => {
            let item = deleteBtn.parentElement.parentElement;
            itemsController.delete(item.id);
            location.reload();
        })            
    }

    let updateButton = document.getElementsByClassName("btn-update");
    for(let i = 0; i < updateButton.length; i++) {
        let updateBtn = updateButton[i];
        updateBtn.addEventListener("click", () => {
            let item = updateBtn.parentElement.parentElement;

            // Get the id of the item selected to be updated and store it in localStorage
            localStorage.setItem("itemId", JSON.stringify(item.id));

            // Redirect to update page
            location.href="update_form.html";
        })
    }
}

function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'juice',
        'imageUrl':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Ruffles Chicken',
        'imageUrl':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

// ***Function for populating your products/posts***
function loadCardsListFromItemsController(){
    let storedItems = itemsController.items;
        for(let i = 0; i < storedItems.length; i++){
            const item = storedItems[i];
            addItemCard(item);
        }
}

// ***Function for adding products/posts from localStorage/Database***
function loadItemsFromDatabase() {
    fetch('http://localhost:8080/item/all')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            itemsController.items.push(data[i]);                
        }   
    })
    .then(() => {
        loadCardsListFromItemsController();
    })
    .catch((error) => {
        console.log('Error: ', error);
    })   
}

loadItemsFromDatabase();



