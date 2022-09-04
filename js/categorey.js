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
  toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}

const displayNews = news=>{

    news.sort((a,b)=>{
      return b.total_view - a.total_view;
    })
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
            
       <div class="d-flex ">
       <img id="authorImg" src="${newsItem.author.img}" />
       <h5 class="card-text p-2"><small class="text-muted">${newsItem.author.name}</small></h5>
       <h6 class="card-text p-2 ms-3"><small class="text-muted">Total view  <span class="text-primary"> ${newsItem.total_view}</span> </small></></h6>
        

       <div/>
      <div d-flex flex-column>
      <button data-bs-toggle="modal" data-bs-target="#phoneDetailsModal" onclick="loadModalInfo('${newsItem._id}')" class="btn btn-secondary ms-2 ">Know Details</button>
      </div>
       
          </div>
        </div>
      </div>
        
        `;
        newsContainer.appendChild(newsDiv);
        

    })
    toggleSpinner(false);
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
const toggleSpinner = isLoading =>{
  const loaderSection =document.getElementById('loader')
  if(isLoading){
    loaderSection.classList.remove('d-none')

  }
  else{
    loaderSection.classList.add('d-none');
  }
}


const showQuestions = questions =>{
  console.log('hello')
  const blog = document.getElementById('blog-container');
  blog.innerHTML = `
  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">SL No.</th>
      <th scope="col">Var</th>
      <th scope="col">Let</th>
      <th scope="col">Const</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>We used variable as var before ES6</td>
      <td>let use after ES6 has come</td>
      <td>const use after ES6 has come</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>var can be use for any types of value</td>
      <td>let use for if the value can change</td>
      <td>const used for if the value never change</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>var was little problems when declare variable </td>
      <td>It is more beneficial than var </td>
      <td>It is more beneficial than var</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>var is old version of variable </td>
      <td>It is new version of variable</td>
      <td>It is new version of variable</td>
      
    </tr>
  </tbody>
</table>









  <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">SL No.</th>
      <th scope="col">Arrow Function</th>
      <th scope="col">Regular Function</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Arrow functions are best for callbacks or methods like map , reduce , or forEach</td>
      <td>It is not as useful as arrow function</td>
    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>code with arrow functions just run faster</td>
      <td>code with arrow regular functions not run faster</td>
   
    </tr>
    <tr>
      <th scope="row">3</th>
      <td> it's a shorter syntax and thus requires less code </td>
      <td> it's a not shorter syntax and thus requires less code as arrow functions </td>
      
    </tr>
  </tbody>
</table>

<div class="accordion mt-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Uses of templete string 01
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       We can insert dynamically data by templete string
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Uses of templete string 02
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      By using templete string we can write multiline code
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Uses of templete string 03
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       it makes easy to write code 
      </div>
    </div>
  </div>
</div>
  `;
}

// loadCategoryById()


