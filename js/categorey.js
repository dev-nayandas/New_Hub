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
           <a onclick="loadCategoryById('${category.category_id}')" class="nav-link " aria-current="page" href="#">${category.category_name}</a>
            </li>

           `;
           categoryContainer.appendChild(categoryList);
        })
}

loadCategory()


const loadCategoryById =(categoryId) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = news=>{
    const newsContainer = document.getElementById('newsContainer');
    console.log(news);
    newsContainer.innerHTML = '';
    
    news.forEach(newsItem => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.classList.add('mb-3');
        newsDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4">
          <img src="${newsItem.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${newsItem.title}}</h5>
            <p class="card-text">${newsItem.details.slice(0,300 ) + ' ...'}</p>
            
       <div class="d-flex">
       <img id="authorImg" src="${newsItem.author.img}" />
       <h5 class="card-text p-2"><small class="text-muted">${newsItem.author.name}</small></h5>
       <h6 class="card-text p-2 ms-5"><small class="text-muted">Total view  <span class="text-primary"> ${newsItem.total_view}</span> </small></></h6>
        

       <div/>
       <button class="btn btn-secondary ms-5">Know Details</button>
          </div>
        </div>
      </div>
        
        `;
        newsContainer.appendChild(newsDiv);

    })

}

// loadCategoryById()


