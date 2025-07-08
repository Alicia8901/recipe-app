let recipes = [];

document.addEventListener('DOMContentLoaded', () => {
 const form = document.getElementById('recipe-form');

 form.addEventListener('submit', function (e) {
   e.preventDefault();

   const title = document.getElementById('title').value.trim();
   const ingredients = document.getElementById('ingredients').value.trim();
   const instructions = document.getElementById('instructions').value.trim();

   if (!title || !ingredients || !instructions) {
     alert("Please fill out all fields.");
     return;
   }

   const recipe = {
     title,
     ingredients: ingredients.split(',').map(i => i.trim()),
     instructions
   };

   recipes.push(recipe);
   renderRecipes();
   form.reset();
 });
});

function renderRecipes() {
 const list = document.getElementById('recipe-list');
 list.innerHTML = '';

 recipes.forEach((recipe, index) => {
   const item = document.createElement('div');
   item.className = 'recipe-item';
   item.textContent = recipe.title;
   item.onclick = () => showDetails(index);
   list.appendChild(item);
 });
}

function showDetails(index) {
 const recipe = recipes[index];
 document.getElementById('detail-title').textContent = recipe.title;
 document.getElementById('detail-ingredients').textContent = recipe.ingredients.join(', ');
 document.getElementById('detail-instructions').textContent = recipe.instructions;
 document.getElementById('recipe-details').classList.remove('hidden');
}

function closeDetails() {
 document.getElementById('recipe-details').classList.add('hidden');
}