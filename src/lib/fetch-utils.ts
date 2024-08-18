export const FetchUtils = {
    getProductsData : async ({pageParam} : {pageParam : number}) => {
        const limit = 10
        const skip = pageParam * limit;
       
       const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

       
       const jsonData = await data.json();


    //    console.log("jsonData.products", jsonData.products)

       
   
       return jsonData.products;
    },
}