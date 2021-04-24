import React, { Component } from 'react'
import './contact.css'
import {Consumer} from '../../Context'
import axios from 'axios';

 class Contact extends Component {

    state = {
        showContactInfo:false
    };

    onShowClick=(e)=>{
        this.setState({showContactInfo:!this.state.showContactInfo})
    }

    onDeleteClick = async(id,dispatch) =>{
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)        
        dispatch({type:'DELETE_CONTACT',payload:id})
        } catch (error) {
            dispatch({type:'DELETE_CONTACT',payload:id})   
        }
        
    }
    render() {
        const {name,email,phone,id} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                        <h4>{name} 
                        <i 
                            onClick={()=>{
                                this.setState({showContactInfo:!this.state.showContactInfo})
                            }} 
                        className="fas fa-sort-down"
                        style={{cursor:'pointer'}}
                        ></i>
                        <i className="fas fa-times"
                         style={{cursor:'pointer',float:'right',color:'red'}}
                        onClick={this.onDeleteClick.bind(this,id,dispatch)}
                        ></i>
                       
                         </h4>
                        {showContactInfo ? (  
                             <ul className="list-group">
                <li className="list-group-item">Email : {email}</li>
                            <li className="list-group-item">Phone : {phone}</li>
                        </ul>) : null }
                     
                    </div>
                    )
                }}

            </Consumer>
           
        )
    }
}


export default Contact