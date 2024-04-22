/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchOrder() {

    const [query,setQuery] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="string" value={query} onChange={(event)=>setQuery(event?.target.value)}/>
            </form>
        </div>
    );
}

export default SearchOrder;