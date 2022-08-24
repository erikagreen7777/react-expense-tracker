import "./Card.css"

//value of reserved children prop is always open and closing tags of custom component
function Card(props) {
    const classes = 'card ' + props.className; // <- anything received through props
    return <div className={classes}>{props.children}</div>
}

export default Card;