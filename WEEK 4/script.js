/* JavaScript file for RecipeShare interactivity */
/* Will be populated in later days */

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

/* Load saved recipes on page load */
document.addEventListener('DOMContentLoaded', function() {
    recipes.forEach(recipe => {
        createRecipeCard(recipe.name, recipe.category, recipe.description, recipe.imageSrc);
    });
});

/* Handle recipe form submission */
document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('recipe-name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const fileInput = document.getElementById('recipe-image');
    const file = fileInput.files[0];

    let imageSrc = '[invalid url, do not cite] // Default placeholder'

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageSrc = e.target.result; // Use uploaded image as base64
            addRecipe(name, category, description, imageSrc);
        };
        reader.readAsDataURL(file); // Read file as data URL
    } else {
        addRecipe(name, category, description, imageSrc); // Use placeholder
    }

    // Reset form
    this.reset();
});

/* Add recipe to DOM and localStorage */
function addRecipe(name, category, description, imageSrc) {
    createRecipeCard(name, category, description, imageSrc);
    recipes.push({ name, category, description, imageSrc });
    localStorage.setItem('recipes', JSON.stringify(recipes));
    alert('Recipe added successfully!');
}

/* Create recipe card DOM element */
function createRecipeCard(name, category, description, imageSrc) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.setAttribute('data-category', category);
    recipeCard.innerHTML = `
        <img src="${imageSrc}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>`;
    document.querySelector('.recipes-grid').appendChild(recipeCard);
}

/* Handle filter buttons */
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('.recipe-card');

        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


/* Handle contact form submission */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission
    alert('Thank you for your message!');
    this.reset();
});
