FROM node

#RUN apt-get update && apt-get install -y --no-install-recommends \
#    python3.5 \
#    python3-pip \
<<<<<<< HEAD
#   && \
=======
#    && \
>>>>>>> 9adf45d750220b28f5b09f70530c59184b18e54c
#    apt-get clean && \
#    rm -rf /var/lib/apt/lists/*

#RUN pip3 install requests
<<<<<<< HEAD
#RUN pip3 install med2image
=======
>>>>>>> 9adf45d750220b28f5b09f70530c59184b18e54c

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "node_modules/nodemon/bin/nodemon.js" ]
