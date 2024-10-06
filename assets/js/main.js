async function getrecipes(){
    const response = await fetch (`https://forkify-api.herokuapp.com/api/search?q=pizza`)
    const data = await response.json();
    const products = data.recipes;
    const count = data.total;



        const result = products.map(function(recipes){
            
        

        return `
        
            <div class="product">
            <h2>${recipes.title}</h2>
            <img src="${recipes.image_url}" alt="${recipes.title}">
            </div>

        
        
        `
        
        
        
        
        
     }).join('');




document.querySelector(".item .row").innerHTML = result;
}
getrecipes();