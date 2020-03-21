import React from 'react';
import AddCourseForm from './AddCourseForm';

class Items extends React.Component{
    render(){
        return (
            <div className="items">
                <h2>Items</h2>
                <p>Add another course</p>
                <AddCourseForm addCourse={this.props.addCourse}/>
                

            </div>
        );
    }
}
export default Items;