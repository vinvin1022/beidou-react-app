import React, { Component } from 'react'



export default class Like extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toString()
        }
    }
    render() {
        return (
            <div className="like">
                <div>'喜欢'正在努力开发当中！！！</div>
                更新时间：{this.state.time}
            </div>



        )
    }
}
Like.defaultProps = {
    time: new Date().toString()
}
