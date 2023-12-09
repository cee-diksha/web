import React from 'react'
import braces from "../../assests/icons/catgeories/braces.png"
import "../styles.scss"

const Category_Card = () => {
  return (
      <div class="card" style={{width: "18rem", border: "none", height: "6rem"}}>
        <img src={braces} style={{width: "35%"}} className="card-img-top mx-auto my-auto d-block" alt="braces" />
        <div>
          <p class="card-text">Category</p>
        </div>
      </div>
  )
}

export default Category_Card
