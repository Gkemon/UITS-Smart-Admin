import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import logo from './logo.svg';

class Home extends Component {
    render() {
        return (
            <Jumbotron>
            <img src={logo} height="70px" />
           <Card bg="light" className="text-center" style={{ margin: 10 }}>
            <Card.Body>
              <Card.Title>Testimonial</Card.Title>
              <Card.Text>
                To make a testimonial of any student, you have to give some basic information of student.
              </Card.Text>
              <Button  onClick={() =>  
              window.location = '/userForm/ts'}  variant="primary">Give a Testimonial</Button>
            </Card.Body>
          </Card>

          <Card bg="light" className="text-center" style={{ margin: 10 }}>
            <Card.Body>
              <Card.Title>Recommendation</Card.Title>
              <Card.Text>
                To make a recommendation of any student, you have to give some basic information of student.
              </Card.Text>
        
              <Button onClick={() =>  
              window.location = '/userForm/rc'} 
              variant="primary">Give a Recommendation</Button>
          
            </Card.Body>
          </Card>
          
              <Card bg="light" className="text-center" style={{ margin: 10 }}>
            <Card.Body>
              <Card.Title>TO WHOM IT MAY CONCERN</Card.Title>
              <Card.Text>
                To make a 'TO WHOM IT MAY CONCERN' of any student, you have to give some basic information of student.
              </Card.Text>
        
              <Button onClick={() =>  
              window.location = '/userForm/wm'} 
              variant="primary">Give a 'TO WHOM IT MAY CONCERN'</Button>
          
            </Card.Body>
          </Card>
        </Jumbotron>
        );
    }
}

export default Home;