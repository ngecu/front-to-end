import React, { Component } from 'react'
import Contact from './Contact'
class Contacts extends Component {
state = {
            contacts : [
                {
                    id:1,
                    name: 'Robinson Ngecu',
                    email : 'ngecu16@gmail.com',
                    phone : '0707583092'
                },
                {
                    id:2,
                    name: 'Priscah John',
                    email : 'p16@gmail.com',
                    phone : '0722902345'
                },
                {
                    id:3,
                    name: 'Isaac Mwiti',
                    email : 'isaac@gmail.com',
                    phone : '0796543'
                },
            ]
        }
    

    render() {
        const {contacts} = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                <Contact
                key = {contact.id}
                contact={contact} 
              
                />))}
            </React.Fragment>
        )
    }
}
export default Contacts