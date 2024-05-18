import supabase from "./supabase";

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
    console.log("service");
    if(error){
        throw new Error("Could not able to Delete the Cabin");
    }

    return data;
}