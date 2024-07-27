export const isSpaceOnlyRegister = (username, password) => {
    if (!username || !password) {
        return true
    }
    const trimmedRegisterFormField = {
        username: username.trim(),
        password: password.trim()
    }
    return trimmedRegisterFormField.username && trimmedRegisterFormField.password == "" ? true : false
}

export const isSpaceOnlyLogin = (username, password) => {
    if (!username || !password) {
        return true
    }
    const trimmedLoginFormField = {
        username: username.trim(),
        password: password.trim()
    }
    return trimmedLoginFormField.username && trimmedLoginFormField.password == "" ? true : false
}