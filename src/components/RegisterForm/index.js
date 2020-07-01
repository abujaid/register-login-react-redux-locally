import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../components/store/actions/authAction'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: {

            }
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state;
        const data = {
            username,
            password
        }
        this.props.register(data)
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        const { username, password } = this.state
        return (
            <div className="container mt-5">
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="username" value={username} className="form-control" placeholder="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" value={password} className="form-control" placeholder="password" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
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
export default connect(mapStateToProps, { register })(Register)