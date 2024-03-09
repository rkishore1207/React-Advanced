import FriendModel from "../../Models/FriendModel";
import Friend from "../Friend/Friend";
import './FriendList.css';

interface FriendListProps{
  friends:FriendModel[],
  liftUpUID:(id:string) => void
}

const FriendList = ({friends,liftUpUID}:FriendListProps) => {

    return (
        <div className="friend-container">
            { friends.length > 0 ?
              <>
                {
                  friends.map((item:any,index:number)=>{
                    return(
                      <Friend friend={item} key={index} liftUpUID={liftUpUID}/>
                      )
                    })
                }
              </> :
                <p>No friends</p>
            }
        </div>
    );
}

export default FriendList;