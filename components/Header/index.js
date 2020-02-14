// STEP 1: Create a header component.
// -----------------------
function Header() {

//create
const header = document.createElement('div');
const date = document.createElement('span');
const lambdatimesh1 = document.createElement('h1');
const temp = document.createElement('span');
;

//set content
date.textContent = `Smarch 28, 2019`;
lambdatimesh1.textContent = `Lambda Times`;
temp.textContent = `98°`;

//class
header.classList.add('header');
date.classList.add('date');
temp.classList.add('temp')


//structure
header.appendChild(date);
header.appendChild(lambdatimesh1);
header.appendChild(temp);



//console.log(addHeader);
return header;
}
// console.log(Header.appendChild());
const addHeader = document.querySelector('.header-container');
addHeader.appendChild(Header());

//console.log(addHeader);
