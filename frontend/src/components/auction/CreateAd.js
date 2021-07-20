import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';

const CreateAd = () => {
  const [itemName, setItemName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [initialPrice, setInitialPrice] = useState('')

  const [message, setMessage] = useState('')

  const createAd = async (e) => {
    e.preventDefault();
    let today = new Date();
    let data = {
      item_name: itemName,
      item_image: imageUrl,
      initial_price: initialPrice,
      owner_id: 89,
      start_date: Date.now(),
      stop_date: today.getTime() + 1
    }

    await fetch(`/api/auctions`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        setMessage("Auction submission successful!")     
      } else {
        setMessage("Auction submission failed!")
      }
    })
    .catch((error) => {
      return Promise.reject();
    });
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col lg="3" className="border-top border-end rounded"></Col>
        <Col lg="6" className="py-5 rounded shadow-sm">
          <h4>Create ad</h4>
          <hr />
          <form onSubmit={createAd}>
            <input type="text" className="mt-2 form-control" placeholder="Item name"
               value={itemName} onChange={e=>setItemName(e.target.value)}/> 
            <input type="text" className="form-control mt-1" placeholder="Image URL"
              value={imageUrl} onChange={e=>setImageUrl(e.target.value)}/>
            <input type="text" className="form-control mt-1" placeholder="Initial price"
              value={initialPrice} onChange={e=>setInitialPrice(e.target.value)}/>
            <button className="btn btn-outline-success btn-sm float-right mt-3 px-5">Submit</button> 
          </form>
        </Col>
        <Col lg="3" className="border-start border-top rounded"></Col>
      </Row>
    </Container>
  )
}

export default CreateAd
