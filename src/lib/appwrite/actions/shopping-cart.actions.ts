"use server"

import { IProduct } from "@/models/interfaces";
import { databases } from "../appwrite.config";
import { ID } from "appwrite";

const {DATABASE_ID, COLLECTION_ID} = process.env

/**
 * Add product ti the cart
 * @param product 
 */
export const addToCart = async (product : IProduct) => {
    try {
      const promise = await databases.createDocument(
        DATABASE_ID as string,
        COLLECTION_ID as string,
        ID.unique(),
        {...product}
      );

    //   Show toast
      console.log('Product added to cart:', promise);
    } catch (error) {
      console.error('Failed to add product to cart', error);
    }
};

/**
 * Display the items inside the cart
 * @returns productList 
 */
export const fetchCartItems = async () => {
    try {
      const promise = await databases.listDocuments(
        DATABASE_ID as string,
        COLLECTION_ID as string
      );
      return promise.documents
    } catch (error) {
      console.error('Failed to fetch cart items', error);
    }
};


/**
 * Update the quantity of an item in the cart.
 * @param itemId - The Appwrite document ID of the cart item.
 * @param newQuantity - The new quantity to set.
 */
export const updateCartItemQuantity = async (itemId: string, newQuantity: number) => {
    try {
      const updatedItem = await databases.updateDocument(
        DATABASE_ID as string,
        COLLECTION_ID as string,
        itemId,
        { quantity: newQuantity }
      );

        // Show toast
      console.log('Cart item quantity updated:', updatedItem);
    } catch (error) {
      console.error('Failed to update cart item quantity', error);
    }
};


/**
 * Remove an item from the cart.
 * @param itemId - The Appwrite document ID of the cart item.
 */
export const removeCartItem = async (itemId: string) => {
    try {
      await databases.deleteDocument(
        DATABASE_ID as string,
        COLLECTION_ID as string,
        itemId
      );

    //Show toast
      console.log('Cart item removed');
    } catch (error) {
      console.error('Failed to remove cart item', error);
    }
};