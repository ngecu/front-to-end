import React, { Component } from 'react'

 class AddContact extends Component {
     state = {
         name : '',
         email: '',
         phone: ''
     }

    render() {
        const {name,email,phone} = this.state;
        return (
            <div className="card mb-3 ">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Name ..." 
                            name="name" 
                            id=""
                            value ={name}
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
                            
                            />
                        </div>
                        <input type="submit" value="Add Contact"
                        className="btn btn-light btn-block"
                        />
                    </form>
                </div>
              
            </div>
        )
    }
}
export default AddContact
