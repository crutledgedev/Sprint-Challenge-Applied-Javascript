// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    //console.log(response.data.articles);
    const cardsContainer = document.querySelector('.cards-container')
    const array = Object.values(response.data.articles)
    return array.forEach(element => {
        element.forEach(article => {
            cardsContainer.appendChild(articleCard(article))
        })

    })
    .catch(err =>(console.log(err)));
 
})


function articleCard(article){
// create
const card = document.createElement('div');//parent
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');//appends to author
const img = document.createElement('img'); //appends img-container
const byAuthor = document.createElement('span');//appends author

//set content
headline.textContent = article.headline;
byAuthor.textContent = `By ${article.authorName}`;
img.src = article.authorPhoto;

//class
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');

//structure
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(img);
author.appendChild(byAuthor);

return card;


}

