import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import { Component } from 'react'

export class Input extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       title: '',
       body: '',
       charLimit: 50,
    }
    this.titleHandler = this.titleHandler.bind(this)
    this.bodyChangeHandler = this.bodyChangeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  titleHandler(event)
  {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.charLimit)
      }
    })
  }

  bodyChangeHandler(event)
  {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  submitHandler(event)
  {
    event.preventDefault()

    if(typeof this.props.addNote === 'function'){
      this.props.addNote(this.state)
    }

    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <div><Card className="mt-3">
      <Card.Header>
        <Card.Title>Input Notes</Card.Title>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={this.submitHandler}>
          <Form.Group>
          <p>Sisa Karakter : {this.state.charLimit-this.state.title.length}</p>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.titleHandler}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Notes</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                value={this.state.body}
                onChange={this.bodyChangeHandler}
              />
            </FloatingLabel>

            <Button variant="success" onClick={this.submitHandler} className="mt-3">Save Notes</Button>
          </Form.Group>
        </Form>
      </Card.Body>
  </Card></div>
    )
  }
}

export default Input
