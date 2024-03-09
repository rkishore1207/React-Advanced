import { useState } from "react";
import './TextExpander.css';

interface TextExpanderProps{
    text:string,
    initialCharacters:number,
    color:string,
    className:string,
    size:number,
    showMore:string,
    showLess:string,
    fontFamily:string
}

const TextExpander = ({text = "Edhirthe vazhndhavan karathai thedi kaalam than yuthathai podum",
                       initialCharacters = 10,
                       color = "black",
                       className = "",
                       size = 1,
                       showMore = "ShowMore",
                       showLess = "ShowLess",
                       fontFamily = "TimesNewRoman"}:TextExpanderProps) => {
        
    const [isShowMore,setIsShowMore] = useState<boolean>(false);
    const lessContent = text.substring(0,initialCharacters+1);
    const remainingContent = text.substring(initialCharacters+1,text.length);
    
    return (
        <div className={`text-expander-body ${className}`} style={{fontSize:`${size}rem`,fontFamily:`${fontFamily}`}}>
            <p>{lessContent}{isShowMore ? remainingContent : '...'}</p>
            { !isShowMore ? 
                <button style={{color:`${color}`}} onClick={()=>setIsShowMore(!isShowMore)}>{showMore}</button> :
                <button style={{color:`${color}`}} onClick={()=>setIsShowMore(!isShowMore)}>{showLess}</button>
            }
        </div>
    );
}

export default TextExpander;