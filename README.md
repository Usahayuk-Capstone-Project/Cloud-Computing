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
git clone <your-github-url>
cd <your-repo-name>
```
3. Go to Firebase and create firebase project
4. Activate service for Authentication and Firestore
5. Download the API key for the Web Firebase Client SDK and copy to the .env
6. Download the serviceAccountKey.json from Firebase Admin SDK and upload it to the directory
7. Replace the contain of _const serviceAccount_ match to the file directory serviceAccountKey uploaded
8. Run the code. This should run on port 8080

## Deployment
To deploy our REST API, we use containerize the app with Docker image, then push it to the Cloud Container Registry and deploy using Cloud Run. We use Cloud Shell as our terminal
1. Build the Docker image
```
docker build -t <your-image-name> .
```
2. Tag and push the image to Cloud Container Registry
```
docker tag <your-image-name> gcr.io/<your-gcp-id>/<your-image-name>
docker push gcr.io/<your-gcp-id>/<your-image-name>
```
3. Deploy it to the Cloud Run
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
    "userRecord": {
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
* URL: `/api/recommender/{uid}`
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
* URL: `/api/recommender/{uid}`
* Method: `GET`
* Success Response:
```
{
    "code": 200,
    "Hasil_rekomendasi": []
}
```
### 6. Get User
* URL: `/api/user/{uid}`
* Method: `GET`
* Success Response:
```
{
    "code": 200,
    "user": {
        "uid": "<your-uid>",
        "email": "<your-email>@example.com",
        "emailVerified": true,
        "displayName": "<your-name>",
        "disabled": false,
        "metadata": {
            "lastSignInTime": "<timestamp>",
            "creationTime": "<timestamp>"
        },
        "tokensValidAfterTime": "<timestamp>",
        "providerData": [
            {
                "uid": "<your-uid>",
                "displayName": "<your-name>",
                "email": "<your-name>@example.com",
                "providerId": "password"
            }
        ]
    }
}
```
### 7. Update User
* URL: `/api/user/{uid}`
* Method: `PUT`
* Request Body: 
```
{
  "nama_lengkap": "<your-full-name>",
  "alamat_email": "<your-email-address>",
  "kata_sandi": "<your-new-pass>"
}
```
* Success Response:
```
{
    "message": "User record updated successfully",
    "Record": {
        "uid": "<your-uid>",
        "email": "<your-new-email>@example.com",
        "emailVerified": true,
        "displayName": "<your-new-name>",
        "disabled": false,
        "metadata": {
            "lastSignInTime": "<timestamp>",
            "creationTime": "<timestamp>"
        },
        "tokensValidAfterTime": "<timestamp>",
        "providerData": [
            {
                "uid": "<your-uid>",
                "displayName": "<your-new-name>",
                "email": "<your-new-email>@example.com",
                "providerId": "password"
            }
        ]
    }
}
```
### 8. Add Article
* URL: `/api/article/{uid}`
* Method: `POST`
* Request Body: 
```
{
   "title" : "<write-article-title>",
   "tags" : "#<first-tag> #<second-tag> #<third-tag>",
   "penulis" : "<write-your-name>",
   "content" : "<write-the-content>"
}
```
* Success Response:
```
{
    "message": "Article added successfully"
}
```
### 9. Get Article
* URL: `/api/article/{uid}`
* Method: `GET`
* Success Response:
```
{
    "code": 200,
    "user": {
        "penulis": "<your-name>",
        "tags": "<tags>",
        "updateAt": "<the-time-last-updated>",
        "content": "<written-content>",
        "title": "<title-article>",
        "createdAt": "<the-time-created>",
        "uid": "<your-id>"
    }
}
```
### 8. Update Article
* URL: `/api/article/{uid}`
* Method: `PUT`
* Request Body: 
```
{
   "title" : "<write-article-title>",
   "tags" : "#<first-tag> #<second-tag> #<third-tag>",
   "penulis" : "<write-your-name>",
   "content" : "<write-the-content>"
}
```
* Success Response:
```
{
    "message": "Article updated successfully"
}
```
