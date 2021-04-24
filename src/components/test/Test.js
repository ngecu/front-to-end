import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        title :'',
        body:' '
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
      this.setState({title:data.title,body:data.body})
    })
        // console.log("component did mount")

    }


    // componentWillMount(){
    //     console.log("component will mount")
    // }

    // componentDidUpdate(){
    //     console.log("component did mount")
    // }

    render() {
        const {title,body} = this.state
        return (
            <div>
                <h1>TEST Component</h1>
                <p>{title}</p>
                <h1>{body}</h1>
            </div>
        )
    }
}
