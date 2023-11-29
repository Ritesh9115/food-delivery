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
