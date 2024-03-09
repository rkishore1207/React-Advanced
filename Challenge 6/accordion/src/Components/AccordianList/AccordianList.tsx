import { useState } from "react";
import Accordian from "../../Models/Accordian";
import AccordianItem from "../AccordianItem/AccordianItem";

const AccordianList = () => {

    const faqs : Accordian[] = [
        {
          id:"1",
          title: "Where are these chairs assembled?",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
        },
        {
          id:"2",
          title: "How long do I have to return my chair?",
          text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
        },
        {
          id:"3",
          title: "Do you ship to countries outside the EU?",
          text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
        }
      ];

    const [clickingId,setClickingId] = useState<string>('');

    return (
      <div style={{marginTop:'100px'}}>
          {
              faqs.map((eachItem:Accordian,index:number)=>{
                  return(<div>
                      <AccordianItem item={eachItem} 
                                     index={index}
                                     currentId={clickingId}
                                     setClickingId = {setClickingId} />
                  </div>)
              })
          }
      </div>
    );
}

export default AccordianList;