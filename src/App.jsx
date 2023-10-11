import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Body from "./components/Body"
import { Component } from 'react'
import { getInitialData } from "./utils"


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       datas: [],
       unFilterNotes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onActiveHandler = this.onActiveHandler.bind(this)
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }
  
  componentDidMount() {
    const initialData = getInitialData();
    console.log(initialData);
    this.setState({ datas: initialData, unFilterNotes: initialData });
  }

  onDeleteHandler(id)
  {
    const datas = this.state.datas.filter((data) => data.id !== id)
    this.setState({datas})
  }

  onActiveHandler(id)
  {
    const updateDatas = this.state.datas.map(data => {
      if(data.id === id){
        data.archived = false
      }
      return data
    })

    this.setState({datas: updateDatas})
  }

  onArchiveHandler(id)
  { 
    const updateDatas = this.state.datas.map(data => {
      if(data.id === id){
        data.archived = true
      }
      return data
    })

    this.setState({datas: updateDatas})
  }

  onAddNoteHandler({title, body})
  {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toDateString(),
      archived: false,
    };
  
    this.setState(prevState => ({
      datas: [...prevState.datas, newNote],
      unFilterNotes: [...prevState.unFilterNotes, newNote],
    }));
  }

  onSearchHandler(text) {
    const filteredNotes = this.state.unFilterNotes.filter(note =>
      note.title.toLowerCase().includes(text.toLowerCase())
    );
  
    this.setState(prevState => ({
      datas: filteredNotes.length > 0 ? filteredNotes : prevState.unFilterNotes,
    }));
  }

  
  render() {
   
    return (
      <>
      <Container>
        <Header onSearch={this.onSearchHandler}/>
        <Body notes={this.state.datas} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} addNote={this.onAddNoteHandler} />
      </Container>
    </>
    )
  }
}

export default App
