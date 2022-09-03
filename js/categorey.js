const loadCategory =() =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categories => {
        const categoryContainer = document.getElementById('category-container')
        categories.forEach(category => {
           const categoryList = document.createElement('li');
           categoryList.classList.add('nav-item');
           categoryList.innerHTML= `
           
           <li class="nav-item">
           <a class="nav-link " aria-current="page" href="#">${category.category_name}</a>
            </li>

           `;
           categoryContainer.appendChild(categoryList);
        })
}

loadCategory()