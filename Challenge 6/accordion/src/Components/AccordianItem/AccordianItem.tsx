import Accordian from "../../Models/Accordian";
import './Accordian.css';

interface AccordianItemProps{
    item: Accordian,
    index:number,
    currentId:string,
    setClickingId:(id:string)=>void
}

const AccordianItem = ({item,index,currentId,setClickingId}:AccordianItemProps) => {
    console.log(currentId,"currentId");
    
    return (
        <div className={`${currentId === item.id ? 'accordian-item-active' : ''} accordian-item`}
        onClick={()=>setClickingId(currentId === item.id ? 'null': item.id)}>
            <header className="accordian-header">
                <h4 className={`${currentId === item.id ? 'active' : ''} index-number`}>{`${index+1 <= 9 ? '0': ''}${index + 1}`}</h4>
                <h4 className={`${currentId === item.id ? 'active' : ''} header-title`}>{item.title}</h4>
                { currentId === item.id ?
                    <span className="header-icon active">&#8722;</span> :
                    <span className="header-icon">&#43;</span>
                }
            </header>
            { currentId === item.id &&
                <main className="answer-container">
                    <p className="answer">{item.text}</p>
                </main>
            }
        </div>
    );
}

export default AccordianItem;