// Inventory Management System
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an item in the inventory by id
function updateItem(inventory, id, newDetails) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory[index] = { ...inventory[index], ...newDetails };
    }
}

// Function to delete an item from the inventory by id
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// Initial Inventory
console.log("Initial Inventory:", inventory);

// Adding a new item to the inventory
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
console.log("Adding item:", inventory);

// Updating an existing item in the inventory
updateItem(inventory, 2, { quantity: 30 });
console.log("Updating item:", inventory);

// Deleting an item from the inventory
deleteItem(inventory, 2);
console.log("Deleting item:", inventory);