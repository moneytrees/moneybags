import React, { Component } from 'react'

class ContactForm extends Component {
    // super(props)
    state = {
        name: "",
        email: "",
        message: "",
    };

    handleInputChange = (event) => {
        
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        

    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.name && this.state.email && this.state.message) {
            console.log(this.state.name);
            console.log(this.state.email);
            console.log(this.state.message);
        }
        //.then
    }

    render() {
        return (
            <div className = "container-fluid">

            <form>
                <div className = "form-group">
                <input className = "form-control" 
                value={this.state.name}
                onChange = {this.handleInputChange}
                name = "name"
                placeholder="name(required"/>
                </div>

                <div className = "form-group">
                <input className = "form-control" 
                value={this.state.email}
                onChange = {this.handleInputChange}
                name = "email"
                placeholder="email(required"/>
                </div>

                <div className = "form-group">
                <textarea className = "form-control" rows="20"
                value={this.state.message}
                onChange = {this.handleInputChange}
                name = "message"
                placeholder="message(required"/>
                </div>

                <button className="btn btn-primary"
                disabled={!(this.state.name && this.state.email && this.state.message)}
                onClick={this.handleFormSubmit}
                >Submit
                </button>

            </form>
             
            </div>
            
        )
    }

}

export default ContactForm;