

const products=[
{
  name: 'Exo Terra Terrario para ranas 2746',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw9be7c646/images/large/3f541c191e024955b78f5a21d7323cee.jpg?sw=320&sh=320',
  price:191.60,
  seller: 'Exo Terra',

},
{
  name: 'Kit terrario Exo-Terra Gecko',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwbbec710d/images/large/20077-IMG00011618.jpg?sw=320&sh=320',
  price:229.10,
  seller: 'Exo Terra',

},
{
  name: 'ZOO MED REPTIBREEZE TERRARIO DE MALLA METÁLICA',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw8b3eca61/images/terrario_reptiles_zoo_med_reptibreeze_ZOMRE10010_M.jpg?sw=320&sh=320',
  price:95.54,
  seller: 'Zoo Med',

},
{
  name: 'Ferplast Aladino transportín',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw3dfb486c/images/accesorios_ferplast_transportin_animales_pequenos_aladino_FER73005099_M.jpg?sw=320&sh=320',
  price:12.99,
  seller: 'Ferplast',

},
{
  name: 'Kit terrario Exo Terra Serpiente starter',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw5808a010/images/large/19972-IMG00011503.jpg?sw=320&sh=320',
  price:348.64,
  seller: 'Exo Terra',


},
{
  name: 'Juwel acuario vision curvo led negro',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwcefaa399/images/large/juwel-acuario-vision-curvo-negro-mta-41336.jpg?sw=320&sh=320',
  price:565.92,
  seller: 'Juwel',


},
{
  name: 'Nayeco transportín plástico para mascotas',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwd392d683/images/Nayeco_transportin_para_roedores_reptiles_y_peces_NAY15746_M.jpg?sw=320&sh=320',
  price:8.99,
  seller: 'Nayeco',


},
{
  name: 'Pedrós terrario de plástico verde para peces y reptiles',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dwf748e64c/images/large/pedr-terrario-stico-verde-para-peces-reptiles-mta-48914.jpg?sw=320&sh=320',
  price:14.95,
  seller: 'Pedrós',


},
{
  name: 'KIT TERRARIO EXO-TERRA DRAGON STARTER',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw43e55160/images/large/19959-IMG00011506.jpg?sw=320&sh=320',
  price:373.99,
  seller: 'Exo Terra',


},
{
  name: 'Cueva para serpientes',
  image: 'https://www.tiendanimal.es/dw/image/v2/BDLQ_PRD/on/demandware.static/-/Sites-kiwoko-master-catalog/default/dw49d030f6/images/large/29980-IMG00049129.jpg?sw=320&sh=320',
  price:11.90,
  seller: 'Trixie',


},

];



let sellersSelect = document.querySelector('#sellers-select');
let searchPriceButton = document.querySelector('#price-button');
let priceField = document.querySelector('#price-field');
let cleanFiltersButton = document.querySelector('#clean-filters');
//Fill Sellers List
const fillSellers = () => {
  let sellerList = [];

  for(let i=0;i<products.length;i++) {
    if(!sellerList.includes(products[i].seller)){
      sellerList.push(products[i].seller);
    }
  }
//----------------------- Los pinta en select

sellerList.forEach(seller => {
  let option = document.createElement('option');
  option.value=seller;
  option.innerText=seller;
  sellersSelect.appendChild(option);
  
});
}
fillSellers();
//Draw in products section
const drawProducts = () => {

  let productsUl = document.querySelector('#product-list');
  let arrayUsed = products.slice();

  //-----Borra lo que hay para pintar la lista nueva
  while (productsUl.firstChild) {
    productsUl.removeChild(productsUl.firstChild);
}
 //Primero filtramos por vendedor
 arrayUsed = sellerFilter(arrayUsed,sellersSelect.value);
// Segundo filtramos por precio
arrayUsed = priceFilter(arrayUsed,priceField.value);
//---------------------- Pinta
if(arrayUsed.length>0){

  for(let i=0;i<arrayUsed.length ;i++){
    let child = document.createElement('li');
    child.classList.add('product-card');
    child.innerHTML=`
    <img src="${arrayUsed[i].image}" alt="${arrayUsed[i].name}"  loading="lazy"></img>
    <h4>${arrayUsed[i].name}</h4>
    <h5>Vendido por: ${arrayUsed[i].seller}</h5>
    <h6>${arrayUsed[i].price.toFixed(2)}€</h6>
    
 `;
  productsUl.appendChild(child);

  }

}else{
  let advice = document.createElement('h2');
  advice.innerText='No hay productos para mostrar';
  productsUl.appendChild(advice);
}

}

//Filter of seller selected
const sellerFilter = (theList,sellerChosen) => {

 if(sellersSelect.value!=='none'){
  return theList.filter((product)=>product.seller===sellerChosen);
 }else{
  return theList.slice();
 }

}


const priceFilter = (theList, priceChosen) => {
  if(priceField.value === undefined || priceField.value.trim() === '') {
    return theList;
  }
  return theList.filter((product) => product.price <= Number(priceChosen));
}



const cleanFilters = () => {
priceField.value=undefined;
sellersSelect.value='none';
drawProducts();
}


sellersSelect.addEventListener('change', drawProducts);
searchPriceButton.addEventListener('click', drawProducts);
cleanFiltersButton.addEventListener('click', cleanFilters);


drawProducts();










