# the base image of our application
# our app need nodejs then we pull nodejs image
FROM node:10-alpine

# our work dir inside our new image after the build
WORKDIR /usr/src/app

# copy package.json to /usr/src/app
COPY package*.json ./

# install all package we need
RUN npm install

# after install all package then we copy our code inside /usr/src/app
COPY . .

# exposing port from inside of container to our
EXPOSE 3000

# start our project
CMD ["npm", "start"]