# 🛒 E-Commerce Microservices App

Microservices-based architecture for an e-commerce app with CI/CD using Jenkins, Docker, and Git.

## Services
- 🔐 Auth Service
- 📦 Product Service
- 🛍️ Order Service

## Technologies
- Node.js + Express
- Docker
- Jenkins
- GitHub

## Run Locally
```bash
docker build -t service-name ./service-folder
docker run -p 3000:3000 --env SERVICE_NAME=auth-service service-name
```
