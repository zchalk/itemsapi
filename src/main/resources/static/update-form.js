// Initialize a new ItemsController
const itemsController = new ItemsController();

// Select the Update Item Form
const updateItemForm = document.querySelector("#updateItemForm");

// Get the id of the selected item to update
const itemId = JSON.parse(localStorage.getItem("itemId"));
document.querySelector("#item-id").innerText = itemId;

// Add an 'onsubmit' event listener
updateItemForm.addEventListener("submit", (event) => {

    // Prevent default action
    event.preventDefault();

    // Select the inputs    
    const updateItemName = document.querySelector("#updateItemName");
    const updateItemDescription = document.querySelector("#updateItemDescription");
    const updateItemImageUrl = document.querySelector("#updateItemImageUrl");

    // Get the values of the inputs    
    const name = updateItemName.value;
    const description = updateItemDescription.value;
    const imageUrl = updateItemImageUrl.value;

    /* 
        Validation code here
    */

    // Add the item to the ItemsController
    itemsController.update(itemId, name, description, imageUrl);

    // Clear the form
    updateItemName.value = "";
    updateItemDescription.value = "";
    updateItemImageUrl.value = "";
    
    localStorage.removeItem("itemId");
    location.href="./items.html";
})

