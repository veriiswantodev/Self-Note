import { Col, Row } from "react-bootstrap"
import CardItem from "./CardItem"

function Active({ notes, onDelete, onArchive }) {
  return (
      <Row>
          {
            notes && notes.length > 0 ? (
              notes.map((item) => (
                <Col lg={3} md={4} sm={12} key={item.id} className="mt-2">
                    <CardItem buttonPindah="Arsipkan" note={item} onDelete={onDelete} buttonData={onArchive} />
                </Col>
                ))
            ) : (
              <p>Tidak ada catatan</p>
            )
          }
      </Row>
  )
}

export default Active