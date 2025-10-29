//open and close side menu for smaller screen

const sidemenu = document.getElementById('side-menu');

function  openmenu(){
    sidemenu.style.right = '0';
};

function  closemenu(){
    sidemenu.style.right = '-20rem';
};

//add to  cart
let count = 0;  
const cartCount = document.getElementById("cart-count"); 

function addToCart() {
  count++;
  cartCount.textContent = count;
}



//sent email successfully message display
// const msg = document.getElementById('msg');

// form.addEventListener('submit', e =>{
//     e?.preventDefault();
    
// })


//validator

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('msg');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  successMessage.textContent = "";

  if (validator.isEmpty(nameInput.value.trim()) || nameInput.value.trim().length < 2) {
    nameError.textContent = "Please enter a valid name.";
    isValid = false;
  }

  
  if (!validator.isEmail(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }

  
});


//add to cart, remove from cart feature
// let ArrProducts =[
//     {
//         id: 1,
//         name: 'Meatpies',
//         image: 'posco2.jpg',
//         price:'1000',
//     },
//     {
//         id: 2,
//         name: 'Doughnuts',
//         image: 'posco2.jpg',
//         price:'2000',
//     },
//     {
//         id: 3,
//         name: 'Bento Cake',
//         image: 'posco2.jpg',
//         price:'8000',
//     },
//     {
//         id: 4,
//         name: 'Chocolate Cake',
//         image: 'posco2.jpg',
//         price:'9000',
//     },
//     {
//         id: 5,
//         name: 'Birthday Cake',
//         image: 'posco2.jpg',
//         price:'15000',
//     },
//     {
//         id: 6,
//         name: 'Wedding Cake',
//         image: 'posco2.jpg',
//         price:'100000',
//     },
// ];


// const body = document.querySelector('body'), 
// products = document.querySelector('.work-list');

// function onInIt(){
//     ArrProducts.forEach((item, key)=>{
//         let div = document.createElement('div');
//         div.classList.add('item');

//         div.innerHTML = `<img src="asset/${item.image}>`;

//         products.appendChild(div);
//     });
// };

// onInIt();

// let checkOutList = [];

// function addToCart(item){
//     console.log(item)
// }

// let checkOutList = [];

// function addToCart(button) {
//   // get item info from the clicked button
//   const itemName = button.getAttribute("data-name");
//   const itemImg = button.getAttribute("data-img");

//   // create item object
//   const item = { name: itemName, image: itemImg };

//   // add to checkout list
//   checkOutList.push(item);

//   // show confirmation
//   alert(`${itemName} added to cart!`);

//   // log cart in console
//   console.log("Cart Items:", checkOutList);
// }

