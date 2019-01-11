FROM node:9.6.1

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

COPY . /usr/app 
COPY package.json /usr/app/package.json
COPY package-lock.json /usr/app/package-lock.json

RUN npm install  ngx -g 
RUN npm install react-scripts@1.1.1 -g 

CMD [ "npm", "start" ]
