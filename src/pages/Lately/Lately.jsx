import React, { Component } from 'react'

export default class Lately extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toString()
        }
    }
    render() {
        return (
            <div className="lately">
                <div>'最近'正在努力开发当中！！！</div>
                更新时间：{this.state.time}

            </div>
        )
    }
}
Lately.defaultProps = {
    time: new Date().toString()
}
