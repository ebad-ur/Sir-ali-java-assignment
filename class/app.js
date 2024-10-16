const people = [];

// Function to render data in the table
function renderTable() {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = ''; // Clear existing rows
    
    people.forEach(person => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = person.name;
        row.insertCell(1).textContent = person.age;
        row.insertCell(2).textContent = person.city;
    });
}

// Function to add a new person using prompts
function addPerson() {
    const name = prompt("Enter the person's name:");
    if (name === null) return; // User cancelled

    const age = prompt("Enter the person's age:");
    if (age === null) return; // User cancelled

    const city = prompt("Enter the person's city:");
    if (city === null) return; // User cancelled

    people.push({ name, age: parseInt(age), city });
    renderTable();
}

// Function to initialize the table and set up the "Add Person" button
function initialize() {
    renderTable();
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Person';
    addButton.onclick = addPerson;
    document.body.insertBefore(addButton, document.getElementById('dataTable'));
}

// Set up the page when it loads
window.onload = initialize;