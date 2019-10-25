import React, { Component } from 'react'
import Meta from './Meta';

class Page extends Component {
    render() {
        return (
            <div>
                <Meta /> 
                Hey I'm the page component
                {this.props.children}
            </div>
        )
    }
}

export default Page;
