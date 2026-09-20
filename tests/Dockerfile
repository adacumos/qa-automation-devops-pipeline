FROM cypress/included:14.0.0

WORKDIR /tests

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]