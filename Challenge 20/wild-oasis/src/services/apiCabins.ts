/* eslint-disable @typescript-eslint/no-explicit-any */
import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
    const { data, error } = await supabase
    .from('Cabin')
    .select('*');

    if(error){
        throw new Error("Could not able to load Cabins");
    }

    return data;
}

export const deleteCabins = async (id:number) => {

    const { data, error } = await supabase
    .from('Cabin')
    .delete().eq('id',id);

    if(error){
        throw new Error("Could not able to Delete the Cabin");
    }

    return data;
}

export const createCabin = async (newCabin:any) => {
    const imageName = `${Math.random()}-${newCabin.Image.name}`;
    const imagePath = `${supabaseUrl}/storage/v1/object/public/Cabin-Images/${imageName}`;

    //https://yzkabswhedyznfpavlhi.supabase.co/storage/v1/object/public/Cabin-Images/cabin-001.jpg

    const { data, error } : any = await supabase
    .from('Cabin')
    .insert({...newCabin,Image:imagePath})

    if(error){
        throw new Error("Could not able to Create the Cabin");
    }

    //Uploading image to Storage Bucket
    
    const { error:storageError } = await supabase
    .storage
    .from('Cabin-Images')
    .upload(imageName, newCabin.Image)

    if(storageError){
        deleteCabins(data.id)
    }

    return data;
}