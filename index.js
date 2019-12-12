let buttonred = document.getElementById("red");
let buttonwhite = document.getElementById("white");
let buttonblue = document.getElementById("blue");
let all = document.getElementById("HighToLow");
let s=document.getElementById("sm");
let m=document.getElementById("md");
let l=document.getElementById("lg");

const allproducts = [
    {
        id: 1,
        name: `Summer dress`,
        image: "img/summerdress.jpg",
        description: "Newest",
        price: 39.99,
        quantity: 1,
        category: `Girl`,
        color: `Blue`,
        size: `M`

    }
    ,
    {
        id: 2,
        name: `Boy jeans`,
        image: "img/jeans.jpg",
        price: 39.00,
        quantity: 3,
        category: `Boy`,
        color: `white`,
        size: `L`
    },
    {
        id: 3,
        name: `Boy Trackpent`,
        image: "img/trackpent.jpeg",
        price: 54.00,
        quantity: 2,
        category: `Boy`,
        color: `White`,
        size: `L`
    },
    {
        id: 4,
        name: `Boy T-shirt`,
        image: "img/tshirt.jpeg",
        description: `Newest`,
        price: 39.00,
        quantity: 1,
        category: `Boy`,
        color: `Red`,
        size: `L`
    },
    {
        id: 5,
        name: `Winter-jacket`,
        image: "img/winterjacket.jpg",
        price: 37.00,
        quantity: 4,
        category: `Girl`,
        color: `Red`,
        size: `S`
    },
    {
      id: 6,
      name: `Skirt`,
      image: "img/skirt.jpg",
      description: `Newest`,
      price: 27.00,
      quantity: 4,
      category: `Girl`,
      color: `Blue`,
      size: `S`
  },
  {
    id: 7,
    name: `T-shirt`,
    image: "img/tshirt.jpg",
    description: `Newest`,
    price: 17.00,
    quantity: 4,
    category: `Boy`,
    color: `White`,
    size: `M`
},
{
  id: 8,
  name: `T-shirt`,
  image: "img/men tshirt.png",
  price: 30.00,
  quantity: 4,
  category: `Boy`,
  color: `White`,
  size: `S`
},
{
  id: 9,
  name: `T-shirt`,
  image: "img/image.jpeg",
  price: 20.00,
  quantity: 4,
  category: `Girl`,
  color: `Red`,
  size: `L`
},
{
  id: 10,
  name: `Skirt`,
  image: "img/blackskirt.jpg",
  description: `Newest`,
  price: 57.00,
  quantity: 4,
  category: `Girl`,
  color: `Black`,
  size: `S`
},
{
  id: 11,
  name: `T-shirt`,
  image: "img/blue.jpg",
  price: 7.00,
  quantity: 4,
  category: `Boy`,
  color: `Blue`,
  size: `M`
},
{
  id: 12,
  name: `Skirt`,
  image: "img/black.jpg",
  price: 47.00,
  quantity: 4,
  category: `Girl`,
  color: `Black`,
  size: `S`
},
{
  id: 13,
  name: `Jacket`,
  image: "img/bwinter.jpg",
  price: 34.00,
  quantity: 4,
  category: `Boy`,
  color: `Blue`,
  size: `M`
},
{
  id: 14,
  name: `Winter-Jacket`,
  image: "img/rwinter.jpg",
  description: `Newest`,
  price: 67.00,
  quantity: 4,
  category: `Boy`,
  color: `Red`,
  size: `S`
},
{
  id: 15,
  name: `Winter-Jacket`,
  image: "img/jacket.jpg",
  price: 27.00,
  quantity: 4,
  category: `Boy`,
  color: `Red`,
  size: `L`
},
{
  id: 16,
  name: `Winter-Jacket`,
  image: "img/redwinter.jpg",
  price: 57.00,
  quantity: 4,
  category: `Girl`,
  color: `Red`,
  size: `M`
},
{
  id: 17,
  name: `Skirt`,
  image: "img/blueskirt.jpg",
  price: 29.00,
  quantity: 4,
  category: `clothing`,
  color: `Girl`,
  size: `S`
},
{
  id: 18,
  name: `Skirt`,
  image: "img/b.jpeg",
  description: `Newest`,
  price: 54.00,
  quantity: 4,
  category: `clothing`,
  color: `Kid`,
  size: `L`
},
{
  id: 19,
  name: `Skirt`,
  image: "img/red.jpeg",
  description: `Kangaroo pocket; Drawcord-adjustable hood.Long sleeves with ribbed cuffs. 100% soft feel.`,
  price: 17.00,
  quantity: 4,
  category: `Girl`,
  color: `Red`,
  size: `S`
},
{
  id: 20,
  name: `Skirt`,
  image: "img/bluee.jpg",
  price: 40.00,
  quantity: 4,
  category: `Girl`,
  color: `Blue`,
  size: `M`
},
{
  id: 21,
  name: `Girl pent`,
  image: "img/pent.jpg",
  description: `Newest`,
  price: 40.00,
  quantity: 4,
  category: `Girl`,
  color: `Blue`,
  size: `M`
},
{
  id: 22,
  name: `Fork`,
  image: "img/red fork.jpg",
  price: 45.00,
  quantity: 4,
  category: `Kid`,
  color: `Red`,
  size: `L`
},
{
  id: 23,
  name: `Pent`,
  image: "img/blue legins.jpg",
  price: 30.00,
  quantity: 4,
  category: `Girl`,
  color: `Blue`,
  size: `S`
},
{
  id: 24,
  name: `Fork`,
  image: "img/white fork.jpg",
  price: 20.00,
  quantity: 4,
  category: `Girl`,
  color: `White`,
  size: `M`
},
];
function getallProductsasHtml(product) {
    return `
 <article class="products">
 <header>
   <img src="${product.image}" alt="Product Image">
 </header>
 <h2>${product.name}</h2>
 <h3>Color :- ${product.color}</h3>
 <h3>Size :- ${product.size}</h3>
 <form>
   <footer>
     <dl>
       <dt>Rating</dt>
       <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
     </dl>
     <data value="39"><del>$50.00</del> <span>$<ins>${product.price}</ins></span></data>
     <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
     <button type="button"><span class="material-icons">favorite</span></button>
     <a href="#" class="product-link">see more>></a>
   </footer>
 </form>
 </article>`
}
const renderproductsFromArray = (arr) => {
    document.getElementById('showproduct').innerHTML = arr.map(getallProductsasHtml).join('\n');
}

/*search*/
const searchforproducts= () => {

    const Search = document.getElementById('find').value;
    console.log(Search)
    const Version = Search.trim().toLowerCase();
    const result = allproducts.filter(c => c.name.toLowerCase().includes(Version));
    renderproductsFromArray(result);
}
/*filter*/
const red = () =>{
  
  const resultred = allproducts.filter(c => c.color=='Red');
  renderproductsFromArray(resultred);
}
const blue= () =>{
  
  const resultblue = allproducts.filter(c => c.color=='Blue');
  renderproductsFromArray(resultblue);
}
const white = () =>{
  
  const resultWhite = allproducts.filter(c => c.color=='White');
  renderproductsFromArray(resultWhite);
}
const Girl = () =>{
  
  const resultWhite = allproducts.filter(c => c.category=='Girl');
  renderproductsFromArray(resultWhite);
}
const Boy= () =>{
  
  const resultWhite = allproducts.filter(c => c.category=='Boy');
  renderproductsFromArray(resultWhite);
}
const Kid= () =>{
  
  const resultWhite = allproducts.filter(c => c.category=='Kid');
  renderproductsFromArray(resultWhite);
}
const small = () =>{
  
  const resultsmall = allproducts.filter(c => c.size=='S');
  renderproductsFromArray(resultsmall);
}
const med = () =>{
  
  const resultmed = allproducts.filter(c => c.size=='M');
  renderproductsFromArray(resultmed);
}
const large = () =>{
  
  const resultlarge = allproducts.filter(c => c.size=='L');
  renderproductsFromArray(resultlarge);
}

/*mouse over*/
function doimage(){
  document.getElementById('amazonvideo').src="img/deal.jpg";
}
function doimage1(){
  document.getElementById('amazonvideo').src="img/blackfriday.jpg";
}
function doimage2(){
  document.getElementById('amazonprime').src="img/amazon-india-prime-video.jpg";
}
function doimage3(){
  document.getElementById('amazonprime').src="img/dealsamazon.png";
}
function doimage4(){
  document.getElementById('deals').src="img/img1.jpg";
}
function doimage5(){
  document.getElementById('deals').src="img/primesale.jpg";
}
amazonvideo.addEventListener("mouseover",doimage);
amazonvideo.addEventListener("mouseout",doimage1);
amazonprime.addEventListener("mouseover",doimage2);
amazonprime.addEventListener("mouseout",doimage3);
deals.addEventListener("mouseover",doimage4);
deals.addEventListener("mouseout",doimage5);
/*low to high*/
function loadproductsByOrder ()

{ 
  sortedProducts=[];  
  sortedProducts=allproducts.slice(0).sort((a, b) => a.price - b.price);
  renderproductsFromArray(sortedProducts); // new array
  
}  
function productsByOrder ()

{ 
  sortedProducts=[];  
  sortedProducts=allproducts.slice(0).sort((a, b) => b.price - a.price);
  renderproductsFromArray(sortedProducts); // new array
  
}  
function productsByarrival ()

{ 
  sortedProducts=[];  
  sortedProducts = allproducts.
  sortedProducts=allproducts.slice(0).filter(c => c.description=='Newest');;
  renderproductsFromArray(sortedProducts); // new array
  
}  
/*toggle*/
const toggleproducteView = () => {
    document.getElementById('products').classList.toggle('grid');
  }
/*window load*/  
window.addEventListener('load',()=>{
  renderproductsFromArray(allproducts);

all.addEventListener('click',productsByOrder);
document.getElementById('find').addEventListener('input', searchforproducts);
buttonred.addEventListener('click',red);
buttonblue.addEventListener('click',blue);
buttonwhite.addEventListener('click',white);
s.addEventListener('click',small);
m.addEventListener('click',med);
l.addEventListener('click',large);
document.getElementById('LowtoHigh').addEventListener('click',loadproductsByOrder);
document.getElementById('newest').addEventListener('click',productsByarrival);
document.getElementById('girl').addEventListener('click',Girl);
document.getElementById('boy').addEventListener('click',Boy);
document.getElementById('kid').addEventListener('click',Kid);
});
  