import React, { Component } from 'react'

class FormsAndInputs extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = () => {

    }

    render() {
        return (
            <div>
                <h1>Status Report</h1>
                <h2>Abhishek Kumar</h2>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='type here...' name='name' size='150' /></p>
                    <p><textarea id='txt' rows='30' cols='150' placeholder='start typing here...'></textarea></p>
                    <p><button>Send Message</button></p>
                </form>
            </div>
        )
    }

}

export default FormsAndInputs