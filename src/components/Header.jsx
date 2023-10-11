
import { Navbar, Container, Form } from 'react-bootstrap'

function Header({onSearch}) {
  const onChangeSearch = (event) => {
    onSearch(event.target.value);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Self Note App</Navbar.Brand>
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onChangeSearch }
            />

          </Form>
       
      </Container>
    </Navbar>
  )
}

export default Header
