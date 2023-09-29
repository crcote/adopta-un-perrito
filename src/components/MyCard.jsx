import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({src, name, description, color, race}) => {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> {description}
            </Card.Text>
        </Card.Body>
        <Tags color={color} race= {race}></Tags>
    </Card>
);

}

export default MyCard; 