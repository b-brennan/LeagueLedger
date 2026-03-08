import { Router } from 'express';
import bcrypt from 'bcrypt';
import { isUniqueUsername } from '../services/authServices';

const router = Router();

// unsure if this should be a type or interface or something else, just trying to get the code to work for now
export interface User {
    username: string
    password: string
}

// Before implementing db logic just storing Users in memory for testing
const Users: User[] = [];

// create new user record with hashed password (unsure best practices of status' to return)
router.post('/signup', async (req, res) => {
    // grab username/pass from request body with object destructuring
    const { username, password } = req.body;

    try {
        // check if username is already in use
        const { unique, message } = await isUniqueUsername(username, Users);

        // return message if not unique
        if (!unique) {
            res.status(200).json({ message: message });
        } else {
            // use bcrypt for safe password storing (hashing)
            const hashedPass = await bcrypt.hash(password, 10);
            Users.push({username: username, password: hashedPass});

            console.log(Users);

            // send created response
            res.status(201).send();
        }
    } catch (e) {
        // return any unhandled error
        res.status(500).json({ error: (e as Error).message })
    }
});

// find matching user credentials (unsure best practices of status' to return)
router.post('/login', async (req, res) =>  {
    // grab username/pass from request body with object destructuring
    const { username, password } = req.body;

    try {
        // return error if no matching username
        const {unique, message } = await isUniqueUsername(username, Users);
        if (unique) {
            res.status(200).json({ message: message})
        } else {
            // get unhashed password from Users array and compare
            const hashedPass = Users.find((u) => u.username === username)?.password
            const match = await bcrypt.compare(password, hashedPass as string);

            if (match) {
                res.status(200).json({ message: "successful login!"});
            } else {
                res.status(200).json({ message: "incorrect password"});
            }
        }
    } catch (e) {
        // return any unhandled error
        res.status(500).json({ error: (e as Error).message })

    }
});


export default router;