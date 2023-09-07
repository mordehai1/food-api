import express from "express";
const router = express.Router();
import axios from 'axios'

//GET
router.get('/sayWelcome', (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(results => {
          
        const users = results.data;
        
        console.log('Number of users: ' + users.length);
    
        users.forEach(x => {
            
        });
        
        return res.status(200).json({data: users.length});
    })
    .catch(error => {
        return res.status(500).json({message: error.message});
    })

    //Response simple status
    //return res.sendStatus(200);
    //return res.status(200).json({message: 'Welcome to Food-Api server'});
})

//POST
router.post('/sayMyName', (req,res) => {
    const {username, password} = req.body;
    return res.status(200).json({message: `Hello ${username}. Your password is ${password}`})
})

export default router;