FROM node 

#directory to save files
WORKDIR /usr/app

#copy package.json to usr/app
COPY package.json ./

# install depences
RUN npm install

#copy all of . to usr/app
COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

## comand to crate image -> docker build -t rentx .
## image name -> rentax 
## Dockerfile location -> .


#run image 