const User = {
    _email: 'hc@hc.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase()
    },

    set password(value) {
        this._password = value
    }
}

const tea = Object.create(User)
console.log(tea.email);