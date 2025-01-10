async function getImage() {
        const response = await fetch('https://api.unsplash.com/photos/random?client_id=p9YciwTofKalTzE1F12gCFABjij_XbHk4DJYb6xfpZ0');
        const data = await response.json();
        const image = document.getElementById('image');
        image.src = data.urls.regular;
}

getImage();