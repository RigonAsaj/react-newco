import React from 'react';

class Courses extends React.Component{
    render(){
        return (
            <div className="courses">
                <h2>{this.props.label}</h2>
                   <p>{this.props.info}</p>
            </div>
        )

    }
}
export default Courses;