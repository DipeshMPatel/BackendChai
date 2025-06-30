import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send("Server is Ready")
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "first joke",
            content: "haha laugh"
        },
        {
            id: 2,
            title: "second joke",
            content: "haha laugh"
        },
        {
            id: 3,
            title: "third joke",
            content: "haha laugh"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000            // while in production Port should come from .env only || 3000 works only while in devlopment  

app.listen(port, () => {
    console.log(`Server Listening at ${port}`);
    

})