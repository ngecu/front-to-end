import React, { Component } from 'react'
import {Consumer} from '../../Context'
import uuid from 'uuid';

 class AddContact extends Component {
     state = {
         name : '',
         email: '',
         phone: ''
     }

     onChange = (e) => this.setState({[e.target.name]:e.target.value})

     onSubmit = (dispatch,e) => {
         e.preventDefault();
         const {name,email,phone} = this.state;

         const newContact = {
            id: uuid(),
            name,
             email,
             phone
         }

         dispatch({type:'ADD_CONTACT',payload:newContact})
     }
    render() {
        const {name,email,phone} = this.state;

        return (
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3 ">
                        <div className="card-header">
                            Add Contact
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Name ..." 
                                    name="name" 
                                    id=""
                                    value ={name}
                                    onChange={this.onChange}
                                    />
                                </div>
        
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email ..." 
                                    name="email" 
                                    id=""
                                    value ={email}
                                    onChange={this.onChange}
        
                                    />
                                </div>
        
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Phone..." 
                                    name="phone" 
                                    id=""
                                    value ={phone}
                                    onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit" value="Add Contact"
                                className="btn btn-light btn-block"
                                />
                            </form>
                        </div>
                      
                    </div>
                    )
                }}

            </Consumer>
        )
    
    }
}
export default AddContact
