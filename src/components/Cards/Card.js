import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
const Card=({image,name})=>{
return(
<>
<div className='container'>
  <div className='row'>
    <div className="col-md-3">
    <div class="card">
    <img  className='card_img' src={image} alt={name} />
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Go somewhere</a>
  </div>
</div> 
    </div>
  </div>  
</div>
</>
)}
export default Card;