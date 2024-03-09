
import FriendModel from '../../Models/FriendModel';
import './Friend.css';

interface FriendProps{
    friend:FriendModel
    liftUpUID:(id:string) => void
}

const Friend = ({friend,liftUpUID}:FriendProps) => {

    return (
        <div className='each-friend'>
            <div className="profile-image-container">
                <img src={`https://i.pravatar.cc/48?u=${friend.imageURL}`} alt={friend.name}/>
            </div>
            <div className="name-balance">
                <h4>{friend.name}</h4>
                { friend.balance === 0 ?
                    <p>You and {friend.name} are even</p> :
                    <>
                    { friend.balance > 0 ?
                        <p>{friend.name} owes you ${friend.balance}</p> :
                        <p>You owes {friend.name} ${Math.abs(friend.balance)}</p>
                    }
                    </>
                }
            </div>
            <div>
                <button className="select-button" onClick={()=>liftUpUID(friend.id)}>Select</button>
            </div>
        </div>
    );
}

export default Friend;