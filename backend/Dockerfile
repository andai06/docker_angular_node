FROM node:22-alpine

#working directory
WORKDIR /app

#copy needed files
COPY app.js package.json ./

#install dependecies
RUN npm i express

#expose port
EXPOSE 3000

#starting image command
CMD [ "npm", "start" ]