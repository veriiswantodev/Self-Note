import {Card, Button, Row, Col} from 'react-bootstrap'
import { showFormattedDate } from '../utils'

function CardItem({note, onDelete, buttonData, buttonPindah}) {
  const onDeleteClick = () => onDelete(note.id)
  const onArchiveClick = () => buttonData(note.id)
  return (
    <>
        <Card className='shadow' >
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <p>{showFormattedDate(note.createdAt)}</p>
                <Card.Text>
                {note.body}
                </Card.Text>
                <Row>
                    <Col><Button variant="primary" onClick={onArchiveClick}>{buttonPindah}</Button></Col>
                    <Col><Button variant="danger" onClick={onDeleteClick}>Delete</Button></Col>
                </Row>
            </Card.Body>
        </Card>
    </>
  )
}

export default CardItem