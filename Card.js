import React from 'react'

export default function Card() {
  return (
    <div>
    <div>Card</div>
    <div>
      <div className="card" style={{"width": "8rem;" , "maxHeight":"360px"}}>
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className='container '>
        <select className='m-2  h-100 bg-success'>
          {Array.from(Array(6),(e,i)=>{
            return(
              <option key={i+1} value={i+1}>{i+1}</option>
            )
          })}
        </select>
        <select className='m-2  h-100 bg-success'>
        
              <option value="half">Half</option>
              <option value="Full">Full</option>
            
        </select>
        <div className='d-inline h-100 fs-5'>
          Total Price
        </div>
      </div>
    </div>
  </div></div>
  </div>
  )
}
