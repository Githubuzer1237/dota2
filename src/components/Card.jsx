import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <>
    <div className="card card-1">
        <h2>DOTA 2</h2>
        <h4>5X5 <span>TURBO</span></h4>

        <div className="inner">
            <div >
                <img src="/results.svg" alt="" />
                <p>РЕЗУЛЬТАТЫ</p>
            </div>
            <div>
                <img src="/raspisnaye.svg" alt="" />
                <p>РАСПИСАНИЕ</p>
            </div>
            <div>
                <img src="/trans.svg" alt="" />
                <p>ТРАНСЛЯЦИИ</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card