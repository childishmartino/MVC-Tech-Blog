async function commentForm(event) {
    event.preventDefault();

    const comment = document.querySelector('textarea[name="comment"]').value.trim();

    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                body,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.btn').addEventListener('submit', commentForm);