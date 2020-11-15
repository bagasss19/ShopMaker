import React from 'react'
import { Card, Row, Col, Container, Button, Image } from 'react-bootstrap'

const ItemCard = () => {
  return (
    <Col xs='6' md='4'>
      <Card className='shadow p-4 mt-4'>
        <Row className='col-12 justify-content-center'>
          <Image src={'./assets/macbook.jpg'}></Image>
        </Row>
        <Row className='col-12 justify-content-center'>
          <h5>Macbook</h5>
        </Row>
        <Row className='col-12 justify-content-center'>
          <h6>Rp 20.000.000</h6>
        </Row>
        <Row className='col-12 justify-content-center'>
          <Button class='btn btn-sm btn-outline-info'>View</Button>
        </Row>
      </Card>
    </Col>
  )
}

export default ItemCard