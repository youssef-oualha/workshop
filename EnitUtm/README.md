## Follow the steps 

### - **Code Space**
1. Click on Code button in repo home page

2. go workshop/EnitUtm




### **Docker**
1. Create file inside EnitUtm folder called => Dockerfile
2. Open Dockerfile in a text editor
3. Write the config
```bash
# this called the based of our image
# if you write your app in python you need to set the base into python
FROM node

# here we set the work directory inside the container
WORKDIR /usr/src/enitutm

# copy package.json and package-lock.json to /usr/src/enitutm
COPY package*.json ./

# install dependencies
RUN npm install

# copy our code 
COPY . .

# expose the port 
EXPOSE 3000

# run the application
CMD ["node", "user-service.js"]

```

4. Build docker image
```bash
where the Dockerfile run:

docker build -t user-api .

user-api will be the image name
```
5. Run docker image and expose it locally
```bash 
docker run -p hostPort:containerPort user-api

## NOTE: when exposing port you need to know the port the app run with and what port you want to expose it into your local machine

docker run -p 3000:3000 user-api

```
