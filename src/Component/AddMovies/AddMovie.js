import React , {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddMovie = ({Add}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle]=useState("")

  const [description, setDescription]=useState("")

  const [rate, setRate]=useState("")

  const [posterUrl, setposterUrl]=useState("")


  const handleTitle = (e)=>{setTitle(e.target.value)}

  const handleDescription = (e)=>{setDescription(e.target.value)}

  const handleRate = (e)=>{setRate(e.target.value)}

  const handleposterUrl = (e)=>{setposterUrl(e.target.value)}


  const handleAdd =()=>
  {
    let newMovie={title, description, rate, posterUrl}
    Add(newMovie)
  }
  return (
    <div>

<Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Enter Title" onChange={(e)=>handleTitle(e)} value={title}/>
        <Form.Label>description</Form.Label>
        <Form.Control type="description" placeholder="Enter your description" onChange={(e)=>handleDescription(e)} value={description} />
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter your Rate"onChange={(e)=>handleRate(e)} value={rate} />
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control type="URL" placeholder="Enter your PosterUrl" onChange={(e)=>handleposterUrl(e)} value={posterUrl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie