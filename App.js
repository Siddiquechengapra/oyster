import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Dropdown,Container ,Row,Col} from 'react-bootstrap';
import {Droppingdown} from "./components/dropdown"
import React,{useState,useEffect} from "react"


function App() {
  const [tripdetails, settripdetails] = useState({
    from:"",
    to:""
  })

const [trip, settrip] = useState([])
  
const [balance, setbalance] = useState(10)
const listofzones={
  "Holborn":1,
  "Aldgate":1,
  "Earl’s Court":[1,2],
  "Hammersmith":2,
  "Arsenal":2,
  "Wimbledon":3
  }
const recharge=()=>{
    setbalance(10)
    settripdetails({
      from:"",
      to:""

    })
    
}


const calculate=()=>{
  if(balance>2.50){
    let addedzones=[]
    addedzones.push(listofzones[tripdetails.from])
    addedzones.push(listofzones[tripdetails.to])
    setbalance(balance-1)
    settrip(prev=>{
      return [
        ...prev,
        [tripdetails.from,tripdetails.to]
      ]
    })
    alert(addedzones)
    console.log(trip)

    settripdetails({
      from:"",
      to:""

    })
  }else{
    
  }
    


}
useEffect(()=>{
  calculate()
},[trip])


  return (
    <div className="App ">
      <h1 className="font-weight-bold text-uppercase mb-5 mt-5 text-muted">Oyster</h1>
      <Container>
        <Row>
          <Col> </Col>
          <Col> <Droppingdown dest="Going from" tripdetails={tripdetails} settripdetails={settripdetails} fromto="from"/></Col>
          <Col> <Droppingdown dest="Going to" tripdetails={tripdetails} settripdetails={settripdetails} fromto="to"/></Col>
          <Col> </Col>
           </Row>
      </Container>
      <div className="mt-5">
        {balance>3?<h3>Balance available : £{balance}</h3>:<h3><Button onClick={recharge}>Please recharge</Button></h3>}
        
        {balance>3&&tripdetails.from && tripdetails.to?<h4 className="text-info">you're going from {tripdetails.from} to {tripdetails.to}</h4>:<h4>...</h4>}
        {balance>3&&( !tripdetails.from || !tripdetails.to)?<h4 className="text-info">Reselect your stations</h4>:<h4>...</h4>}

      </div>

      <Button disabled={!(tripdetails.from&&tripdetails.to&&balance>3)} className="btn-lg btn-outline-danger" onClick={calculate}> Go !</Button>
    
      
      

      

      

    </div>
  );
}

export default App;
