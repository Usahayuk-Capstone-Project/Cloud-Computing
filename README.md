# Cloud Computing
## Overview
This repository contains backend service for our mobile application focused on API for Usahayuk! whick includes more than 8 endpoints built to control user authetication, user management, user recommendation, and user articles. We also deploy the API to Cloud Run using Docker. There is three cloud services we used in total which includes:
### Cloud Run
This service we use to containerized our API and backend services so it can be hit by mobile application to use our services.
### Firebase Authentication
We use firebase to help authenticate user with token and generate user ID automatically
### Firestore Database
We use NoSQL database that contains user data, recommendation, and article they posted

## Supported Tools and Programming Language
* Express.js
* Node.js
