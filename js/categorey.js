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
      const  categoryAmount = document.getElementById('categoryLength');
      categoryAmount.innerText = `${news.length} item found for this category`;
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
       <button data-bs-toggle="modal" data-bs-target="#phoneDetailsModal" onclick="loadModalInfo('${newsItem._id}')" class="btn btn-secondary ms-5">Know Details</button>
       
          </div>
        </div>
      </div>
        
        `;
        newsContainer.appendChild(newsDiv);

    })

}

const loadModalInfo = (_Id) => {
  const url = `https://openapi.programming-hero.com/api/news/${_Id}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data.data[0]))
}

const displayModal = modal => {
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerText = modal.title;
    const modaldescriptions = document.getElementById('modaldescription');
    modaldescriptions.innerText = modal.details;
    const infoDiv = document.getElementById('otherInfo');
    infoDiv.innerHTML= `
         <img src="${modal.thumbnail_url}" class="rounded mx-auto d-block mb-4" alt="...">
        <h5>Total View : ${modal.total_view ? modal.total_view : 'No Data Found'}, Badges : ${modal.rating.badge} </h5>
        <h6>Author : ${modal.author.name ? modal.author.name : 'No Data Found'},  Published date : ${modal.author.published_date}</h6>
        
    `;

 console.log(modal.author.name)
}



// loadCategoryById()


