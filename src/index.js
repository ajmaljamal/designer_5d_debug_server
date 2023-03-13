const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const Task = require('./models/task');
const Bug = require('./models/bug');

const app = express();
const port = process.env.port || 3000;

app.use(express.json({limit: '10mb', extended: true}));

// app.use(bodyParser.json({limit: '10mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.post('/users', (req, res)=>{
    const user = new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/users', (req,res)=>{
    console.log('yea');
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((e)=>{
        res.status(500).send();
    });
});

app.get('/users/:id', (req,res)=>{
    console.log(req.params);
    const _id = req.params.id;

    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send();
        }

        res.send(user);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

app.post('/tasks', (req, res)=>{
    const task = new Task(req.body);

    task.save().then(()=>{
        res.status(201).send(task);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/tasks', (req, res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
        res.status(500).send();
    });
});

app.get('/tasks/:id', (req,res)=>{
    const _id = req.params.id;

    Task.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send();
        }

        res.send(task);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

app.post('/bug', (req, res)=>{
    const bug = new Bug(req.body);

    bug.save().then(()=>{
        res.status(201).send(bug);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/bug/:id', (req,res)=>{
    const _id = req.params.id;

    Bug.findById(_id).then((bug)=>{
        if(!bug){
            return res.status(404).send();
        }

        res.send(bug);
    }).catch((e)=>{
        res.status(500).send(e);
    });
});

app.get('/bug', (req,res)=>{
    Bug.find({}).then((bugs)=>{
        res.send(bugs);
    }).catch((e)=>{
        res.status(500).send();
    });
});

app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
});