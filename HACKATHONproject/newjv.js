document.addEventListener('DOMContentLoaded', function() {
    let addButtons = document.querySelectorAll('.add-button');

    addButtons.forEach(button => {
        let quantity = 0;

        button.addEventListener('click', function() {
            quantity++;

            let quantityElement = this.querySelector('.quantity');
            
            if (!quantityElement) {
                this.innerHTML = `
                    <button class="minus-button">-</button>
                    <span class="quantity">${quantity}</span>
                    <button class="plus-button">+</button>
                `;
            } else {
                quantityElement.textContent = quantity;
            }

            let plusButton = this.querySelector('.plus-button');
            let minusButton = this.querySelector('.minus-button');

            plusButton.addEventListener('click', function() {
                quantity++;
                quantityElement.textContent = quantity;
            });

            minusButton.addEventListener('click', function() {
                if (quantity > 1) {
                    quantity--;
                    quantityElement.textContent = quantity;
                } else {
                    button.innerHTML = `Add <sup>+</sup>`;
                    quantity = 0;
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const commentText = document.getElementById('commentText').value;

        // Create a new comment element
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `
            <h3>${name}</h3>
            <p>${commentText}</p>
        `;

        // Add the comment to the comments container
        commentsContainer.appendChild(comment);

        // Reset the form
        commentForm.reset();
    });
});

