FROM 172.18.5.58:5000/node  
WORKDIR /src
COPY . .
RUN npm install express
EXPOSE 4000
CMD ["node","server.js"]