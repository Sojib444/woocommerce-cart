import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Item";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if(item.length==0)
    {
        return (
            <React.Fragment>
            <header>
            <div className="continue-shopping">
            <i className="fas fa-arrow-left arrow-icon"></i>
            <h3>Continue Shoping</h3>
            </div>
            <div className="cart-icon">
            <i  className="fas fa-cart-plus cart"></i>
            <p>0</p>
            </div>
            </header>
    
            <section className="main-cart-section">
            <h1>Shoping Cart</h1>
            <p className="total-items"> You have {totalItem}items</p>
            </section>

            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
        <header>
        <div className="continue-shopping">
        <i className="fas fa-arrow-left arrow-icon"></i>
        <h3>Continue Shoping</h3>
        </div>
        <div className="cart-icon">
        <i  className="fas fa-cart-plus cart"></i>
        <p>{totalItem}</p>
        </div>
        </header>

        <section className="main-cart-section">
        <h1>Shoping Cart</h1>
        <p className="total-items"> You have {totalItem} items</p>

        <div className="card-total">
        <h3>Cart Total : <span>{totalAmount}tk</span> </h3>
        <button>Checkout</button>
        <button className="btn" onClick={clearCart}>Clear Cart</button>
        </div>

        <div className="cart-items">

        <div className="cart-items-container">
        <Scrollbars>
        {
            item.map((ele)=>
            {
                return  <Items key={ele.id} {...ele}/>
            })
        }
       
        
        </Scrollbars>
        </div>
       
        </div>
        
        </section>
    </React.Fragment>
  );
};

export default ContextCart;
/*if(item.length==0)
    {
        return (
            <React.Fragment>
            <header>
            <div className="continue-shopping">
            <i className="fas fa-arrow-left arrow-icon"></i>
            <h3>Continue Shoping</h3>
            </div>
            <div className="cart-icon">
            <i className="cart" class="fas fa-cart-plus"></i>
            <p>0</p>
            </div>
            </header>
    
            <section className="main-cart-section">
            <h1>Shoping Cart</h1>
            <p className="total-items"> You have 0 items</p>
            </section>

            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
        <header>
        <div className="continue-shopping">
        <i className="fas fa-arrow-left arrow-icon"></i>
        <h3>Continue Shoping</h3>
        </div>
        <div className="cart-icon">
        <i className="cart" class="fas fa-cart-plus"></i>
        <p>2</p>
        </div>
        </header>

        <section className="main-cart-section">
        <h1>Shoping Cart</h1>
        <p className="total-items"> You have 2 items</p>

        <div className="card-total">
        <h3>Cart Total : <span>200000 tk</span> </h3>
        <button>Checkout</button>
        <button className="btn" onClick={clear}>Clear Cart</button>
        </div>

        <div className="cart-items">

        <div className="cart-items-container">
        <Scrollbars>
        {
            item.map((ele)=>
            {
                return  <Items key={ele.id} {...ele}/>
            })
        }
       
        
        </Scrollbars>
        </div>
       
        </div>
        
        </section>
*/ 