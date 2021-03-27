import React,{Component} from 'react'

const Context = React.createContext();

const reducer = (state,action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.filter(
                    contact=>contact.id !== action.payload
                )
            }
    
        default:
            return state;
    }
}

export class Provider extends Component {
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
        }
    ],
    dispatch : action => this.setState(state => reducer(state,action))
    
 }
 render(){
     return (
         <Context.Provider value={this.state}>
             {this.props.children}
         </Context.Provider>
     )
 }
}

export const Consumer = Context.Consumer;