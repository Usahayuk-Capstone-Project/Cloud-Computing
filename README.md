# Cloud Computing
## Overview
This repository contains backend service for our mobile application focused on API for Usahayuk! whick includes more than 8 endpoints built to control user authetication, user management, user recommendation, and user articles. We also deploy the API to Cloud Run using Docker. There is three cloud services we used in total which includes:
1. Cloud Run
- This service we use to containerized our API and backend services so it can be hit by mobile application to use our services.
2. Firebase Authentication
- We use firebase to help authenticate user with token and generate user ID automatically
3. Firestore Database
- We use NoSQL database that contains user data, recommendation, and article they posted

## Supported Tools and Programming Language
### Language
* Javascript with Express
### Environment
* Node.js
### Tools
* Docker
* Git
* Github
* Postman

## Installation & Deployment
1. Clone repository to Google Cloud console
```
git clone https://github.com/Usahayuk-Capstone-Project/Cloud-Computing.git
cd Cloud-Computing
```
3. Go to Firebase and create firebase project
4. Download the API key for the Web Firebase Client SDK and copy to the .env
5. Download the serviceAccountKey.json from Firebase Admin SDK and upload it to the directory
6. Replace the contain of _const serviceAccount_ match to the file directory serviceAccountKey has been uploaded