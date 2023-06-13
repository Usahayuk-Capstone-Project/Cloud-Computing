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

## Installation
1. Clone repository to Google Cloud console
```
git clone https://github.com/Usahayuk-Capstone-Project/Cloud-Computing.git
cd Cloud-Computing
```
3. Go to Firebase and create firebase project
4. Download the API key for the Web Firebase Client SDK and copy to the .env
5. Download the serviceAccountKey.json from Firebase Admin SDK and upload it to the directory
6. Replace the contain of _const serviceAccount_ match to the file directory serviceAccountKey uploaded
7. Run the code. This should run on port 8080

## Deployment
To deploy our REST API, we use containerize the app with Docker image, then push it to the Cloud Container Registry and deploy using Cloud Run. We use Cloud Shell as our terminal
1. Clone your url github to google cloud project
```
git clone <your-github-url>
```
2. Build the Docker image
```
docker build -t <your-image-name> .
```
3. Tag and push the image to Cloud Container Registry
```
docker tag <your-image-name> gcr.io/<your-gcp-id>/<your-image-name>
docker push gcr.io/<your-gcp-id>/<your-image-name>
```
4. Deploy it to the Cloud Run
* Go to **Navigation Menu -> Cloud Run** or you can use serach bar provided by Google Cloud Console
* Click on the **New Service**
* Choose **Deploy one revision from an existing container image** and select the docker image had been pushed
* Select the region **asia-southeast-2**
* Choose **Allow unauthenticated invocations**
* Then click **Create**
