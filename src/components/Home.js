import React from 'react'

function Home()
{
    return(
        <div>
        <div className="add-to-cart">
            <img src="" alt="cart" />
        </div>
            <h1>Home Component</h1>
             <div className="cart-wrapper">
                 <div className="img-wrapper item">
                 <img src="" alt="phone" />
                 </div>
                 <div className="text-wrapper item">
                <span>
                    I-phone 
                </span>
                <span>
                    Price : 10000
                </span>
                 </div>
                 <div className="btn-wrapper item">
                 <button>add to cart </button>
                 </div>
             </div>
        </div>
    )}
export default Home