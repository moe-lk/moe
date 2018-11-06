FROM node:9.6.1

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/app/node_modules/.bin:$PATH
RUN echo $(ls /usr/app)
# install and cache app dependencies
RUN npm install 
RUN npm install  ngx -g 
RUN npm install react-scripts@1.1.1 -g 

# start app
CMD ["npm", "install"]
CMD ["npm", "start"]