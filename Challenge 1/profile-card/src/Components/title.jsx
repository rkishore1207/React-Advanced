const Title = (props) => {
    return (
        <div className="title-container">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Title;
