import React from 'react';

class OrderList extends React.Component{

    formatPrice(cents){
        return (cents / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }

    renderOrderList=(key)=>{
        const course = this.props.courses[key];
        const count= this.props.order[key];
        return <li>
        {count} {course.name}  {this.formatPrice(count * course.price)} 
        </li>
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
                <h1>Your order list</h1>
                <ul>
                  {orderIds.map(this.renderOrderList)}
                </ul>        
                 <b>Total: {this.formatPrice(total)}</b>
            </div>
        );
    }
}
export default OrderList;