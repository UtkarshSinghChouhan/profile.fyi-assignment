import { Order } from "@/models/enums";

export const FetchUtils = {
    getProductsData : async ({pageParam, category, sortBy, order} : {pageParam : number, category ?: string, sortBy ?: string, order?: Order}) => {
        const limit = 10
        const skip = pageParam * limit;

       
        let BASE_URL = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

        if(category){
            BASE_URL = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
        }
        
        if(sortBy && order){            
            BASE_URL = BASE_URL + `?sortBy=${sortBy}&order=${order}`
        }

        console.log("BASE_URL===============", BASE_URL)

        

       const data = await fetch(BASE_URL);

       
       const jsonData = await data.json()       
   
       return jsonData.products;
    },

    getCategories : async () => {
       const data = await fetch(`https://dummyjson.com/products/categories`); 
       const jsonData = await data.json()   
       return jsonData;
    },
}