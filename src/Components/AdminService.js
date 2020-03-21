import React from 'react';
import Courses from './Courses';
import Items from './Items';
import OrderList from './OrderList';
import sampleCourses from '../sample-courses';
import Course from './Course';



class Service extends React.Component {
    constructor(props){
        super(props);
        this.state={
            courses: {},
            order: {}
        }
        this.addCourse=this.addCourse.bind(this);
        this.loadCourses=this.loadCourses.bind(this);
        this.addToOrderList=this.addToOrderList.bind(this);
    }

    addCourse(course){
        const courses={...this.state.courses};
        courses[`course${Date.now()}`] = course;
        this.setState({
            courses: courses
        })
    }

    loadCourses(){
        this.setState({
            courses: sampleCourses
        })
        
    }

    addToOrderList(key){
        const order={ ...this.state.order };
        order[key]=order[key] + 1 || 1;
        this.setState({
            order:order
        })
    }

    render() {
        return (
            <div className="service">
                <Courses label="NewCo Online Courses" info="Load and order courses online"/>
                <button onClick={this.loadCourses}>Load Available Courses</button>
                <hr/>
                <ul>
                    {Object.keys(this.state.courses).map(key => <Course key={key} 
                    info={this.state.courses[key]}
                    index={key}
                    addToOrderList={this.addToOrderList}/>)}
                </ul>
                <hr/>
                <Items addCourse={this.addCourse}/>   
                <hr/>
                <OrderList courses={this.state.courses} order={this.state.order}/>
            </div>
        );
    }
}
export default Service;