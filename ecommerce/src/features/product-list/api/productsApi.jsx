export function fetchAllProductsAPI(){
    return new Promise(async(resolve) =>{
        const response = await fetch('http://localhost:8000/products')
        const data = await response.json()
        resolve({data})
    });
}


export  function fetchFilteredProductsAPI(filter){
    // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}


//   let queryString = '';
//   for (let key in filter) {
//     const categoryValues = filter[key];
//     if (categoryValues.length) {
//       queryString += `${key}=${categoryValues}&`;
//     }
//   }
//   for (let key in sort) {
//     queryString += `${key}=${sort[key]}&`;
//   }
//   for (let key in pagination) {
//     queryString += `${key}=${pagination[key]}&`;
//   }
//   if(admin){
//     queryString += `admin=true`;
//   }

    let urlString = '';
    console.log('api filter:', filter);
    for(let i in filter){
        urlString += `${i}=${filter[i]}&`; 
    }
    console.log('api url: ', urlString);
    return new Promise(async(resolve) =>{
        const response = await fetch(`http://localhost:8000/products?`+urlString);
        const data = await response.json()
        console.log(data.length);
        resolve({data})
    });
}