import { useState } from "react";
import './Ratings.css';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


interface RatingsProps{
    onClickRating:(rating:number) => void,
    maxLength:number
}

const Ratings = ({maxLength=10,onClickRating}:RatingsProps) => {

    const [onHover,setOnHover] = useState<number>(-1);
    const [rating,setRating] = useState<number>(-1);
    const [isClick,setIsClick] = useState<boolean>(true);

    const handleClick = (value:number) => {
        setRating(value + 1);
        setOnHover(rating);
        setIsClick(false);
        onClickRating(value + 1);
    }

    const handleMouseEnter = (value:number) => {
        setOnHover(value + 1);
        setIsClick(true);
    }

    return (
        <div className="ratings-container">
            <div className="ratings">
                {
                    Array.from({length:maxLength},(_,item:number) =>
                        <span className={`${item < onHover ? 'active' : ''} star`} 
                            key={item} 
                            onClick={()=>handleClick(item)}
                            onMouseEnter={()=>handleMouseEnter(item)}
                            onMouseLeave={isClick ? ()=>{
                                if(isClick){
                                    setOnHover(rating)
                                    setRating(rating)
                                }
                                else{
                                    setOnHover(-1);
                                    setRating(-1);
                                }
                            } : ()=>{}}
                        >{item < onHover ? <FaStar /> : <FaRegStar />}</span>
                    )
                }
            </div>
            <p className="rating-number">{onHover === -1 ? 0 : onHover}</p>
        </div>
    );
}

export default Ratings;