import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld (request: Request, response: Response) {
    const user = createUser({
        email: 'isaac@allef.com',
        password: '123',
        techs: [
            'Node.js',
            "React.js",
            'React Native',
            { title: 'Javascript', experience: 100 }
        ]
    })

    return response.json(user)
}