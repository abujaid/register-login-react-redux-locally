
export const register = data => {
    localStorage.setItem('auth', JSON.stringify(data))
    return { type: 'REGISTER_USER' }
}

export const login = (data,history) => {
    console.log(data.password)
    let credential = JSON.parse(localStorage.getItem('auth'))
    if (data.username === credential.username && data.password === credential.password) {
        // console.log(this.props)
        history.push('/dashboard')
    } else {
        console.log('untherized user')
    }
    return {
        type: 'SET_CURRENT_USER', payload: credential
    }


}
