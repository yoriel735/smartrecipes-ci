import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardImg, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

class App extends Component{
  constructor(props){
    super(props)
  }

 render(){
    return(
      <div className="App">
        <Button color="primary">esto es un boton</Button>
       <p>Hola</p>
        

      </div>
    );
 }
}
export default App;

