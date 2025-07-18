/* JavaScript file for RecipeShare interactivity */
/* Will be populated in later days */
/* Handle recipe form submission */
document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('recipe-name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    // Create new recipe card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.setAttribute('data-category', category);
    recipeCard.innerHTML = `
        <img src="https://via.placeholder.com/300x200?text=${name}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
    `;

    // Append to recipes grid
    document.querySelector('.recipes-grid').appendChild(recipeCard);

    // Reset form
    this.reset();
});