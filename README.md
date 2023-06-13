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
* Go to **Navigation Menu -> Cloud Run** or you can use search bar provided by Google Cloud Console
* Click on the **New Service**
* Choose **Deploy one revision from an existing container image** and select the docker image had been pushed
* Select the region **asia-southeast-2**
* Choose **Allow unauthenticated invocations**
* Then click **Create**

## How to Use API Endpoints
### 1. Sign Up
* URL: `/api/auth/signup`
* Method: `POST`
* Request Body:
```
{
   "nama_lengkap" : "<your-name>",
   "alamat_email" : "<your-email-address>",
   "kata_sandi" : "<your-passsword>"
}
```
* Success Response
```
{
    "code": 200,
    "userCredential": {
        "uid": "<uid>",
        "email": "<your-name>@example.com",
        "emailVerified": false,
        "displayName": "<your-name>",
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "<uid>",
                "displayName": "<your-name>",
                "email": "<your-name>@example.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "<your-refresh-token>",
            "accessToken": "<your-access-token>",
            "expirationTime": "<epoch-time>"
        },
        "createdAt": "<epoch-time>",
        "lastLoginAt": "<epoch-time>",
        "apiKey": "<api-key>",
        "appName": "[DEFAULT]"
    }
}
```
### 2. Sign In
* URL: `/api/auth/signup`
* Method: `POST`
* Request Body: 
```
{
   "alamat_email" : "<your-email-address>",
   "kata_sandi" : "<your-passsword>"
}
```
* Success Response:
```
{
    "code": 200,
    "userCredential": {
        "uid": "<uid>",
        "email": "<your-name>@example.com",
        "emailVerified": false,
        "displayName": "<your-name>",
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "<uid>",
                "displayName": "<your-name>",
                "email": "<your-name>@example.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "<your-refresh-token>",
            "accessToken": "<your-access-token>",
            "expirationTime": "<epoch-time>"
        },
        "createdAt": "<epoch-time",
        "lastLoginAt": "<epoch-time>",
        "apiKey": "<api-key>",
        "appName": "[DEFAULT]"
    }
}
```
### 3. Sign Out
* URL: `/api/auth/signout`
* Method: `GET`
* Success Response
```
{
    "code": 200,
    "message": "User signed out"
}
```
### 4. Add Recommender
* URL: `/api/recommender/{uid}
* Method: `POST`
* Request Body: 
```
{
   "skala_usaha" : "<input-this-field>",
   "modal_usaha" : "<input-this-field>",
   "bidang_usaha" : "<input-this-field>",
   "omset_usaha" : "<input-this-field>",
   "usia_targetpelanggan" : "<input-this-field>",
   "gender_targetpelanggan" : "<input-this-field>",
   "pekerjaan_targetpelanggan" : "<input-this-field>",
   "status_targetpelanggan" : "<input-this-field>",
   "jenis_lokasi_" : "<input-this-field>"
}
```
* Success Response:
 ```
 {
    "message": "User record updated successfully"
}
 ```
### 5. Get Recommender
* URL: `/api/recommender/{uid}
* Method: `GET`
* Success Response:
```
{
    "code": 200,
    "Hasil_rekomendasi": []
}
```
### 6. Get User

### 7. Update User
### 8. Add Article
### 9. Get Article
### 8. Update Article
