import React from 'react';

class SelectService extends React.Component{
    constructor(props){
        super(props);
        this.goToService=this.goToService.bind(this);
    }
   
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomName(){
        let input=["Udemy", "Kaggle", "Coursera", "edX", "TutorialsPoint", "W3Schools", "DataCamp"];
        let inputValue = input[this.getRandomInt(0, input.length + 1)]
        return inputValue;
    }
    
    goToService(e){
        e.preventDefault();
        const mySelect=document.getElementById("myInput").value;
        this.props.history.push(`/service/${mySelect}`)
    }

    render() {
        return (
            <div>
                  <form className="service-selector" onSubmit={this.goToService}>
                    <h2>Please enter a course</h2>
                    <input
                       type="text"
                       placeholder="Course Name"
                       defaultValue={this.getRandomName()}
                       id="myInput"/>
                    <button type="submit">Visit Course →</button>
                </form>
            </div>
        );
    }
}
export default SelectService;