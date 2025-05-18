import { json } from "express";
import {sql} from "../config/db.js";
//CRUD 

export const getProducts =async(req,res)=>{
    try{
        const products = await sql `
            SELECT * FROM products
            ORDER BY created_at DESC

        `;
        console.log("fetched data: ", products);
        res.status(200).json({success:true,data:products});
    }catch(e){
        console.log("Error getProducts data: ", e);
        res.status(500).json({success:false,message:e.message});
    }
}

export const getProduct =async(req,res)=>{
    //since we are using /id we have to destructure it with the same name as the route like
    const {id} = req.params;
    try{
        const product = await sql`
        SELECT * FROM products WHERE id = ${id}
        `;
        res.status(200).json({success:true,data:product[0]});
    }catch(e){
        console.log("Error getProduct data: ", e);
        res.status(500).json({success:false,message:e.message});
    }
}

export const createProducts=async(req,res)=>{
    const {name, price, image_url}=req.body;//this would be undefined if we dont have app.use(express.json())
    if(!name || !price || !image_url){
        return res.status(400).json({success:false,message:"Please fill all fields"});
    }
    try{//since newProduct is a array jsut give data as a array[0] (res.status) when created a new product 
        const newPrduct=await sql`
            INSERT INTO products (name, price, image_url)
            VALUES (${name}, ${price}, ${image_url})
            RETURNING *
        `
        console.log("new product added : ", newPrduct);
        res.status(201).json({ success: true, data: newPrduct[0] });
    }
    catch(e){
        console.log("Error createProducts data: ", e);
        res.status(500).json({success:false,message:e.message});
    }

}

export const updateProducts=async(req,res)=>{
    const {id} = req.params;
    const {name, price, image_url}=req.body;

    try{
       const updateProducts= await sql`
            UPDATE products
            SET name = ${name}, price = ${price}, image_url = ${image_url}
            WHERE id=${id}

            RETURNING *
        `
        if(updateProducts.length===0){
            res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({success:true,data:updateProducts[0]});
    }
    catch(e){
        console.log("erorr in updateProducts: ", e);
        res.status(500).json({success:false,message:e.message});
    }
//note for now while updating user cant update cant update any single property !!!
}

export const deleteProducts=async(req,res)=>{
    const {id} = req.params;
    try{
        const deleteProduct= await sql`
        DELETE FROM products
        WHERE id=${id}
        RETURNING *
        `
        if(deleteProduct.length===0){
            res.status(404).json({success:false,message:"product to delete doesnt exist"});
        }
        res.status(200).json({success:true,data:deleteProduct[0]});
    }catch(e){
        console.log("error in deleteProducts: ", e);
        res.status(500).json({success:false,message:e.message});
    }
}