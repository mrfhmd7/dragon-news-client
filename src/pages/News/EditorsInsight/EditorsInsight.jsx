import React from 'react';
import { Card, Col } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { BsCalendar4 } from 'react-icons/bs';

const EditorsInsight = ({ direction }) => {
     return (
          <div className={`d-flex ${direction == 'column' ? 'flex-column' : 'flex-row'} gap-4 mt-4`}>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={first} />
                         <Card.Body>
                              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                         </Card.Body>
                         <div className='d-flex align-items-center ms-3 mb-3 gap-3'>
                              <BsCalendar4 className='text-secondary' />
                              <p className='text-secondary mb-0'>Jan 4, 2022</p>
                         </div>
                    </Card>
               </Col>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={second} />
                         <Card.Body>
                              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                         </Card.Body>
                         <div className='d-flex align-items-center ms-3 mb-3 gap-3'>
                              <BsCalendar4 className='text-secondary' />
                              <p className='text-secondary mb-0'>Jan 4, 2022</p>
                         </div>
                    </Card>
               </Col>
               <Col>
                    <Card>
                         <Card.Img variant="top" src={third} />
                         <Card.Body>
                              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                         </Card.Body>
                         <div className='d-flex align-items-center ms-3 mb-3 gap-3'>
                              <BsCalendar4 className='text-secondary' />
                              <p className='text-secondary mb-0'>Jan 4, 2022</p>
                         </div>
                    </Card>
               </Col>
          </div>
     );
};

export default EditorsInsight;