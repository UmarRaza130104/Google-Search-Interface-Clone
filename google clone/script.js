document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    }
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = document.getElementById('search-input').value;
        if (query) {
            window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        }
    }
});