import { useEffect, useState } from "react";
import FriendModel from "../../Models/FriendModel";
import './AddFriend.css';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineAutorenew } from "react-icons/md";
import { Tooltip } from "react-tooltip";



interface AddFriendProps{
    liftUpFriend:(friend:FriendModel) => void
}

const AddFriend = ({liftUpFriend}:AddFriendProps) => {

    const [friend,setFriend] = useState<FriendModel>({
        id:'',
        name:'',
        imageURL:0,
        balance:0
    });
    const [showValidation,setShowValidation] = useState<boolean>(false);

    const handleProfilePicture = () => {
        const random = Math.floor(Math.random()*(1000000-100000)) + 100000;
        console.log(random);
        
        setFriend({...friend,imageURL:random,id:crypto.randomUUID()});
    }

    useEffect(()=>{
        setShowValidation(false);
    },[friend]);

    return (
        <div className="add-friend-container">
            <Tooltip id="addFriend"/>
            <div className="friend-name-tile">
                <span>Friend Name</span>
                <div>
                    <input type="text" 
                        value={friend.name} 
                        onChange={(event)=>setFriend({...friend,name:event.target.value})}
                        />
                    {showValidation && <p style={{color:'red',font:'small-caption'}}>* Please Enter Name</p>}
                </div>
            </div>
            <div className="friend-profile-tile">
                <div className="profile-generation-container">
                    <img src={`https://i.pravatar.cc/48?u=${friend.imageURL}` } alt="profile"/>
                </div>
                <span 
                    data-tooltip-id="addFriend"
                    data-tooltip-content='Generate Profile'
                    data-tooltip-place="top" 
                    className="friend-icon" onClick={handleProfilePicture}><MdOutlineAutorenew /></span>
                <span 
                    data-tooltip-id="addFriend"
                    data-tooltip-content='Add Friend'
                    data-tooltip-place="top" 
                    className="friend-icon" onClick={()=>{
                        friend.name.length > 0 ? liftUpFriend(friend) : setShowValidation(true);
                    }}><IoMdAdd /></span>
            </div>
        </div>
    );
}

export default AddFriend;