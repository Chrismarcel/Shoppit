import React, { Component } from 'react'

class Page extends Component {
    render() {
        return (
            <div>
                Hey I'm the page component
                {this.props.children}
            </div>
        )
    }
}

export default Page;
