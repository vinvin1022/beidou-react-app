import React, { Component } from 'react'
import './UpdateTime.scss'

export default class UpdateTime extends Component {
    render() {
        return (
            <div className="updateTime">
                更新时间：{this.props.time}
            </div>
        )
    }
}
