## Follow the steps to generate a nodejs application 

1. npm install express-generator -g

2. express myTBS && cd myTBS

3. npm install

4. npm start

> **when it start open your browser on port 3000 or you can curl it, like curl localhost:3000**

### - **Now copy the Dockerfile from this [repo](https://github.com/ahmedbejaouiJS/workshop/blob/master/TBS/docker/week2/Dockerfile) to your code**

### - **after you test it let's build an docker image from it**
1. docker build -t mytbs .

### **Now let's run our docker image after it get build**
1. docker run -p 80:3000 mytbs 
> mytbs is the image tag name
2. Now open your browser on port 80 or you can curl it like this, curl localhost

## After you build it and run it let's make our own route and test it again

### When you generate the project at first it will give you a folder called routes, now let's make a change called users.js, open it with nano or vim and change the text ( respond with a resource ) to Hello TBS and Welcome to docker.

```node
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello TBS and Welcome to docker.');
});

module.exports = router;

```
### Now let's re-build the image
1. docker build -t mytbs .
2. docker run -p 80:3000 mytbs
3. Now open your browser on port 80 or you can curl it like this, curl localhost
