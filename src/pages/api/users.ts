import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Julio' },
        { id: 2, name: 'Micchi' },
        { id: 3, name: 'Rosangela' },
    ]

    return response.json(users)

}