FROM node:16

WORKDIR /index

COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=8080
ENV GOOGLE_APPLICATION_CREDENTIALS=/ccusahayuk-firebase-adminsdk-5cq5j-ac768332f1.json

EXPOSE 8080
CMD ["npm", "start"]
