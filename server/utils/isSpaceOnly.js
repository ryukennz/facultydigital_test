export const isSpaceOnlyRegister = (username, password, firstName, lastName) => {
    if (!username || !password || !firstName || !lastName) {
        return true
    }
    const trimmedRegisterFormField = {
        username: username.trim(),
        password: password.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim()
    }
    return trimmedRegisterFormField.username && trimmedRegisterFormField.password && trimmedRegisterFormField.firstName && trimmedRegisterFormField.lastName == "" ? true : false
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