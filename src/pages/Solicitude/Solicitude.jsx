import React, { Component } from 'react'




export default class Solicitude extends Component {
    static defaultProps = {
        time: new Date().toString()
    }
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toString()
        }
    }
    render() {
        return (
            <div className="solicitude">
                <div>'本地'正在努力开发当中！！！</div>
                更新时间：{this.state.time}
            </div>
        )
    }
}

