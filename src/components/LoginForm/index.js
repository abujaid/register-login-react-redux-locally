import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../components/store/actions/authAction'
import { connect } from 'react-redux'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state;
        const data = { username, password }
        this.props.login(data, this.props.history)

    }
    render() {

        const { username, password } = this.state;
        return (
            <div className="container mt-5">
                <h3>Login</h3>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="username" value={username} className="form-control" placeholder="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" value={password} className="form-control" placeholder="password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary mr-4">Login</button>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(LoginForm)