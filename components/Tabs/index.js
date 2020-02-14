// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
//console.log(response.data.topics);
const lsTopics = document.querySelector('.topics');
return response.data.topics.forEach(e =>{
    lsTopics.appendChild(tabs(e));
})

})
.catch(error => {
    console.log(error);
})


function tabs(topics){
    //create
    const tab = document.createElement('div');
    //set content
    tab.textContent = topics;
    //class
    tab.classList.add('tab');
    return tab;







}