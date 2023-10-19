const BASE_URL = 'https://icqrnuluvc.execute-api.eu-north-1.amazonaws.com/api'

interface IUserLoginSignup {
    username: string;
    password: string;
}

export async function apiSignUp(body: IUserLoginSignup) {
    try {
        const response = await fetch(BASE_URL + "/user/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        const data = await response.json()
        localStorage.setItem('token', '')
        localStorage.setItem('username', '')
        localStorage.setItem('userId', '')
        return data?.username
    } catch (error) {
        console.log(error)
    }
}

export async function apiLogin(body: IUserLoginSignup) {
    const { username } = body
    try {
        const response = await fetch(BASE_URL + "/user/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        const data = await response.json()
            localStorage.setItem('token', data?.token)
            localStorage.setItem('username', username)
            localStorage.setItem('userId', data?.id)
            return data?.id
    } catch (error) {
        console.log(error)
    }
}
