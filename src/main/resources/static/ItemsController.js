// Create a ItemsController class
class ItemsController {    
    // Set up the items and currentId property in the constructor
    constructor() {
        this.items = [];
        // ***Don't need localStorage once you are getting items from Database***
        // this.items = JSON.parse(localStorage.getItem("items")) || [];
        // this.currentId = this.items.length || 0;
    }

    // Create the addItem method
    addItem(name, description, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this.items.push(item);

        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
        this.save({name, description, imageUrl});
        console.log("Saved Item: " + this.items);
    }   

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            let items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                let item = items[i];
                this.items.push(item);
            }
        }
    }

    save({name, description, imageUrl}){
        const data = { name,  description, imageUrl };

        fetch('http://localhost:8080/item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }

    update(id, name, description, imageUrl){
        const data = { name, description, imageUrl };

        fetch('http://localhost:8080/item/${id}', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
    }

    delete(itemId){
        fetch('http://localhost:8080/item/${itemId}', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => console.log("Success:", response))
        .catch((error) => {
            console.error("Error:", error);
        })
    }

    findById(itemId){
        //TODO implement this method
    }
}