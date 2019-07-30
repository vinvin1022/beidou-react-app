import React, { Component } from 'react';
export default function buttonAuthorityHOC(WrappedComponent, credentials) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                authority: credentials
            }
        }

        render() {
            return this.state.authority ? <WrappedComponent {...this.props}></WrappedComponent> : null
        }
    }
}