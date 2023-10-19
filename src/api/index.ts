const BASE_URL = 'https://icqrnuluvc.execute-api.eu-north-1.amazonaws.com/api'
import { DatabaseSavedItem, INewItem } from "../types/index"

interface IUserLoginSignup {
    username: string;
    password: string;
}

// USER

export async function apiSignUp(body: IUserLoginSignup) {
    try {
        const response = await fetch(BASE_URL + "/user/signup", {
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
    try {
        const response = await fetch(BASE_URL + "/user/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        const data = await response.json()
            localStorage.setItem('token', data?.token)
            localStorage.setItem('username', data?.username)
            localStorage.setItem('userId', data?.userId)
            return
    } catch (error) {
        console.log(error)
    }
}

// ITEMS

export async function newItem(item: INewItem) {
    try {
        const token = localStorage.getItem('token') || ''
        const body = {
            userId: localStorage.getItem('userId') || '',
            username: localStorage.getItem('username') || '',
            item: {...item}
        }
        const response = await fetch(BASE_URL + "/pass", {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'authorization': `Bearer ${token}`},
            body: JSON.stringify(body)
        })
        const data = await response.json()
            return data
    } catch (error) {
        console.log(error)
    }
}

export async function getItems() {
    try {
        const token = localStorage.getItem('token') || ''
        
        const response = await fetch(BASE_URL + "/pass", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
                'username': localStorage.getItem('username') || '',
                'userId': localStorage.getItem('userId') || ''
            }
        })
        const data = await response.json()
            return data
    } catch (error) {
        console.log(error)
    }
}

export async function editItem(item: DatabaseSavedItem) {
    try {
        const token = localStorage.getItem('token') || ''
        const body = {
            userId: localStorage.getItem('userId') || '',
            username: localStorage.getItem('username') || '',
            item: {...item}
        }
        const response = await fetch(BASE_URL + "/pass/" + item.id, {
            method: "PUT",
            headers: {'Content-Type': 'application/json', 'authorization': `Bearer ${token}`},
            body: JSON.stringify(body)
        })
        const data = await response.json()
            return data
    } catch (error) {
        console.log(error)
    }
}