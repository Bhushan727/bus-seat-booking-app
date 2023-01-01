import React from 'react'
import './Seats.css'

const Seats = (props) => {
  return (
    <div>
        <div className="cellHeads">
            <div className="seats demo1"></div>available
            <div className="seats demo2"></div>reserved
            <div className="seats demo3"></div>booked
        </div>
        <div className='cellContainer'>
            {
                props.seat.map((index)=>{
                    return(
                        <div key={index} className="seats">
                            <div
                                className={
                                    props.selected.indexOf(index)>-1
                                    ? "reserved"
                                    : props.reserved.indexOf(index)>-1
                                    ? "selected"
                                    : "available"
                                }
                                onClick={
                                    props.checktrue(index)
                                    ? e=>props.onClickData(index)
                                    : null
                                }
                            >
                                {index}{" "}
                            </div>
                        </div>
                    )
                })
            }
        
        </div>
        <button
            className='confirmBtn'
            onClick={()=>props.handleSubmit()}
        >Confirm Booking</button>
    </div>
  )
}

export default Seats