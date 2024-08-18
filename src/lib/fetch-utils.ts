export const FetchUtils = {
    getProductsData : async ({pageParam} : {pageParam : number, filter ?: string}) => {
        const limit = 10
        const skip = pageParam * limit;
       
       const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

       
       const jsonData = await data.json()       
   
       return jsonData.products;
    },

    getCategories : async () => {
       const data = await fetch(`https://dummyjson.com/products/categories`); 
       const jsonData = await data.json()   
       return jsonData;
    },
}