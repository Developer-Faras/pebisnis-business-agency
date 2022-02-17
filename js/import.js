function importSrc(url) {
    let tag = document.createElement('script');

    tag.setAttribute('src', url);

    document.body.append(tag);
}



importSrc('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'); // Bootstrap 5





importSrc('./js/main.js'); // Main Js

// Complated