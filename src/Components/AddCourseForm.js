import React from 'react';

class AddCourseForm extends React.Component{
    constructor(props){
        super(props);
        this.createCourse=this.createCourse.bind(this);
    }

    createCourse(e){
        e.preventDefault();
        const name=document.getElementById("name").value;
        const price=document.getElementById("price").value;
        const desc=document.getElementById("desc").value;
        const image=document.getElementById("image").value;
        const course={
            name: name,
            price: price,
            desc: desc,
            image: image
        }
        this.props.addCourse(course);
        e.target.reset();
    }

    render(){
        return (
            <form className="course-edit" onSubmit={this.createCourse}>
                <input type="text" placeholder="Name" id="name"/>
                <br/>
                <input type="text" placeholder="Price" id="price"/>
                <br/>
                <textarea id="desc" placeholder="Desc"/>
                <br/>
                <input type="text" id="image" placeholder="Image"/>
                <br/>
                <button type="submit">Add Course</button>

            </form>
        )
    }
}

export default AddCourseForm;