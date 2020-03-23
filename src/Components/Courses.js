import React from 'react';

class Courses extends React.Component{
    render(){
        return (
            <div className="courses">
                <h1>{this.props.label}</h1>
                   <p>{this.props.info}</p>
            </div>
        )

    }
}
export default Courses;