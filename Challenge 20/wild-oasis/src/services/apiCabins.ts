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