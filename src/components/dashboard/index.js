import React, { Component } from 'react'

export default class Dashboard extends Component {

    logout = () => {
        const user = localStorage.getItem('auth')
        if (user) {
            this.props.history.push('/')

        }
    }
    render() {
        const user = JSON.parse(localStorage.getItem('auth')).username
        return (
            <div className="container mt-5">
                <h3>Hi <span style={{ color: 'gray' }}>{user.toUpperCase()}</span> welcome to dashboard</h3>
                <button className="btn btn-warning" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
