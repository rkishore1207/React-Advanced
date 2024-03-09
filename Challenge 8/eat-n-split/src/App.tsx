/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import FriendList from "./Components/FriendsList/FriendList";
import SelctSplit from "./Components/SelectSplit/SelctSplit";
import FriendModel from "./Models/FriendModel";
import AddFriend from "./Components/AddFriend/AddFriend";
import './App.css';

function App() {

  const [friendsList,setFriendsList] = useState<FriendModel[]>([]);
  const [selectedFriend,setSelectedFriend] = useState<FriendModel>({
      id:'',
      name:'',
      imageURL:0,
      balance:0
  });
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [isAddFriendOpen,setIsAddFriendOpen] = useState<boolean>(false);

  const handleAddFriend = (friend:FriendModel) => {
    setFriendsList([...friendsList,friend]);
    setIsAddFriendOpen(false);
  }

  const handleSelect = (id:string) => {    
    const friend = friendsList.find(item => item.id === id) || selectedFriend;
    setSelectedFriend(friend);
    setIsOpen(true);
  }

  const handleSplitBill = (id:string,newBalance:number) => {
    
    setIsOpen(false);
    const updatedFriendsList = friendsList.map((item:FriendModel)=>{
      return(item.id === id ? {...item,balance:newBalance} : item)
    });
    setFriendsList([...updatedFriendsList]);
  }

  return (
    <div className="outer-container">
      <div className="friends-container box-items">
        <div>
          <FriendList friends={friendsList} liftUpUID={handleSelect}/>
          { isAddFriendOpen && 
            <AddFriend liftUpFriend={handleAddFriend}/>
          }
        </div>
        <button className="select-button" onClick={()=>setIsAddFriendOpen(!isAddFriendOpen)}>{`${isAddFriendOpen ? 'Close':'Add'}`}</button>
      </div>
      <div className="box-items">
        { isOpen &&
          <SelctSplit friend={selectedFriend} liftUpBalance={handleSplitBill}/>
        }
      </div>
    </div>
  );
}

export default App;
