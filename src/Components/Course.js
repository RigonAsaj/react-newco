import React from 'react';

class Course extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    formatPrice(cents){
        return (cents / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }
    
    handleClick(){
        this.props.addToOrderList(this.props.index);
    }
    render(){
        return (
            <ul className="menu-course">
                <img src={this.props.info.image} alt={this.props.info.name}/>
                <h3 className="course-name">{this.props.info.name}
        <span className="price">{this.formatPrice(this.props.info.price)}</span>
        </h3>
        <p>{this.props.info.desc}</p>
        <button onClick={this.handleClick}>Add to order</button>
            </ul>
        );
    }
}
export default Course;