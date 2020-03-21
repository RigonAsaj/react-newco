import React from 'react';

class OrderList extends React.Component{

    formatPrice(cents){
        return (cents / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

  
    render(){
        const orderIds= Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key)=> {
            const course = this.props.courses[key];
            const count= this.props.order[key];
            return prevTotal + (count * course.price);
        }, 0);

        return (
            <div className="split orderList">
                <h2>Your order list</h2>
                <ul>
        {orderIds.map(key => <li>{key} <button>Remove</button></li>  )}
                    </ul>        
                 <b>Total: {this.formatPrice(total)}</b>
            </div>
        );
    }
}
export default OrderList;