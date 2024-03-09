import Avatar from "./avatar";
import Skill from "./skill";
import Title from "./title";

const Card = (props) => {

    const skills = [
        {
            skill:"React",
            level:"advanced",
            color:"red"
        },
        {
            skill:"Angular",
            level:"beginner",
            color:"blue"
        },
        {
            skill:"DotNet",
            level:"advanced",
            color:"orange"
        },
        {
            skill:"MSSQL",
            level:"intermediate",
            color:"gray"
        },
        {
            skill:"DevOps",
            level:"intermediate",
            color:"yellow"
        },
        {
            skill:"Javascript",
            level:"beginner",
            color:"green"
        }
    ]

    return (
        <div className="profile-card-container">
            <Avatar avatar={"profile.png"}/>
            <Title name={"Kishore"} description={"I am an enthusiastic learner and enjoy coding and reading"}/>
            <div className="skills">
                {
                    skills.map((item,index)=>{
                        return(
                            <Skill skill={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card;
