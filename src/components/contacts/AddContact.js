import React, { Component } from 'react'
import TextInputGroup from '../layout/TextInputGroup'
class AddContacts extends Component {
    state = {
        name: '',
        email: '',
        phone:''
    }


    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (e)=>{
        // e.preventDefault();
        console.log(this.state)
    }
    render() {
        const {name,email,phone} = this.state
        return (
            <div>
               <div className="card mb-3">
                   <div className="card-header">Add Contact</div>
                   <div className="card-body">
                       <form onSubmit={this.onSubmit}>
                         <TextInputGroup
                         
                         label="Name"
                         name="name"
                         placeholder="Enter Name"
                         value={name}
                         onChange={this.onChange}
                         />

<TextInputGroup
                         
                         label="Email"
                         name="email"
                         type="email"
                         placeholder="Enter Email"
                         value={email}
                         onChange={this.onChange}
                         />
                
                <TextInputGroup
                         
                         label="Phone"
                         name="phone"
                        
                         placeholder="Enter Phone"
                         value={phone}
                         onChange={this.onChange}
                         />
                           <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                       </form>
                   </div>
               </div>
            </div>
        )
    }
}
export default AddContacts;