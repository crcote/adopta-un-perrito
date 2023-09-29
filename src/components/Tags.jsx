import Badge from 'react-bootstrap/Badge'; 

const Tags = (props) => {
    return <Badge bg= {props.color}>{props.race}</Badge>
}

export default Tags;