import React from 'react';
import './Review.css';
const Review = () => {
  return (
  
    <div className="review-container" id="review">
    
        <h2 className="review-heading" >Customer Reviews</h2>
         <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/7195598/pexels-photo-7195598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 1" />
        <div className="card-body">
          <h5 className="card-title">Dining Table</h5>
          <p className="card-text">Apart from being a place where you set meals, the table is also a workstation, study table, sewing table, and other household tasks.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 2" />
        <div className="card-body">
          <h5 className="card-title">Sofa</h5>
          <p className="card-text">A sofa is a long, comfortable seat with a back and usually with arms, which two or three people can sit on.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/6489116/pexels-photo-6489116.jpeg" alt="Furniture 3" />
        <div className="card-body">
          <h5 className="card-title">Kitchen Cupboard</h5>
          <p className="card-text">Kitchen Cupboard are often required to house a broad array of items. They must hold ingredients for baking and cooking and many more things.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/6265938/pexels-photo-6265938.jpeg" alt="Furniture 4" />
        <div className="card-body">
          <h5 className="card-title">Dressing Table</h5>
          <p className="card-text">The Dressing Table is a table specifically designed for performing one's toilette intended for a bedroom or a boudoir.</p>
          <div className="rating">
            <span>⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 5" />
        <div className="card-body">
          <h5 className="card-title">Bed</h5>
          <p className="card-text">A Bed is an item of furniture that is used as a place to sleep, rest, and relax. Bedroom on the Detmold Open-air Museum premises.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/2079293/pexels-photo-2079293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 6" />
        <div className="card-body">
          <h5 className="card-title">Chairs</h5>
          <p className="card-text">Chairs are typically used to provide support for the seated person's body and arms.</p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
        </div>
        
 
  );
};

export default Review;
