import './profileCard.css';

const Skill = ({skill}) => {

    return (
        <div className="skill-container" style={{backgroundColor:skill.color}}>
            <span>{skill.skill}</span>
            <span>{skill.level.toLowerCase() === 'advanced' ? '💪' : 
                  skill.level.toLowerCase() === 'intermediate' ? '👍' : '👶'
            }</span>
        </div>
    )
}

export default Skill;
