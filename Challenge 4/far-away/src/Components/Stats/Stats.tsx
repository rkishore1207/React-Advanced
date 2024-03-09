/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { ReduxState } from "../../Redux/Reducer";
import Item from "../../Models/Item";
import './Stats.css';

const Stats = () =>  {

    const packageList = useSelector((state:ReduxState) => state.packageList);

    if(packageList.length <= 0){
        return(
            <div className="footer">
                <p><i>Start Adding items to your list 😊</i></p>
            </div>
        )
    }

    const totalCount = packageList.length;    
    const packedItemsCount = packageList.filter((item:Item)=>item.status === true).length;
    const packedPercentage = totalCount === 0 ? 0 : parseFloat(((packedItemsCount / totalCount ) * 100).toFixed(2));

    return (
        <div className="footer">
        { packedPercentage === 100 ?
            <p><i>You got Everything 💪 ready to go!</i></p> :
            <p><i>You have {totalCount} items in your List and you already packed {packedItemsCount} {`(${packedPercentage} %)`}</i></p>
        }
        </div>
    );
}

export default Stats;