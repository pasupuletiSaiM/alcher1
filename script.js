$(document).ready(function() {
$('.feat-btn').click(function() {
 $(this).next('.feat-show').toggleClass('show');
});

$('.serv-btn').click(function() {
 $(this).next('.serv-show').toggleClass('show');
});
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const tableBody = document.querySelector('#userTable tbody');
            
            users.forEach(user => {
                const row = document.createElement('tr');
                
                const firstNameCell = document.createElement('td');
                firstNameCell.textContent = `${user.firstName} ${user.lastName} ${user.maidenName}`;
                row.appendChild(firstNameCell);

                const usernameCell = document.createElement('td');
                usernameCell.textContent = user.username;
                row.appendChild(usernameCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = user.email;
                row.appendChild(emailCell);

                const actionCell = document.createElement('td');
                
                const editButton = document.createElement('button');
                editButton.className = 'action-button edit';
                editButton.textContent = ' '+'Edit';
                
                const icon = document.createElement('i');
                icon.className = 'fa-regular fa-floppy-disk'; // Using Font Awesome icon class for a pencil
                editButton.insertBefore(icon, editButton.firstChild);
                
                editButton.addEventListener('click', () => editUser(user, row));
                actionCell.appendChild(editButton);
                
                const deleteButton = document.createElement('button');
                deleteButton.className = 'action-button delete';
                deleteButton.textContent = ' '+'Delete';

                const icon1 = document.createElement('i');
                icon1.className = 'fa-regular fa-floppy-disk'; // Using Font Awesome icon class for a pencil
                deleteButton.insertBefore(icon1, deleteButton.firstChild);
                
                deleteButton.addEventListener('click', () => deleteUser(row));
                actionCell.appendChild(deleteButton);
                
                row.appendChild(actionCell);
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function editUser(user, row) {
    const newFirstName = prompt("Enter new first name:", user.firstName);
    if (newFirstName) {
        user.firstName = newFirstName;
        row.children[0].textContent = `${user.firstName} ${user.lastName} ${user.maidenName}`;
    }

    const newUsername = prompt("Enter new username:", user.username);
    if (newUsername) {
        user.username = newUsername;
        row.children[1].textContent = user.username;
    }

    const newEmail = prompt("Enter new email:", user.email);
    if (newEmail) {
        user.email = newEmail;
        row.children[2].textContent = user.email;
    }
}

function deleteUser(row) {
    if (confirm("Are you sure you want to delete this user?")) {
        row.remove();
    }
}
