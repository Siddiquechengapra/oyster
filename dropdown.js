import React from "react"


export const Droppingdown=(props)=>{

  const handlechange=e=>{
      
        props.settripdetails(prev=>{
            return {
                ...prev,
                [props.fromto]:e.target.value
            }})
    }

    const places=["...","Holborn","Aldgate","Earl’s Court","Hammersmith","Arsenal","Wimbledon"]
    return (
        <div>
            <row></row>
            <button class="btn btn-info mb-1">{props.dest} </button>
      <br/>
     <select class="mb-4" value={props.tripdetails[props.fromto]} onChange={handlechange}>
        {places.map((place,index)=>(
        <option key={index} value={place}>{place}</option>

        )
        )}

        
      </select>
      <br/>


       
        </div>
        
        
    )
}