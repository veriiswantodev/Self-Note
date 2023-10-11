import {Row, Col} from 'react-bootstrap'
import CardItem from './CardItem'

export default function Archived({notesList, onDelete, onActive}) {
  return (
    <Row>
        {
          notesList && notesList.length > 0 ? (
            notesList.map((item) => (
              <Col lg={3} md={4} sm={12} key={item.id} className="mt-2">
                  <CardItem buttonPindah="Pindah" note={item} onDelete={onDelete} buttonData={onActive} />
              </Col>
            ))
          ) 
          : (
            <p>Tidak ada catatan</p>
          )
        }
    </Row>
  )
}
