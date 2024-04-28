# SusAF-Hackathon Project: SusAF Integration Tool

---
This project has been made as an output of a **3-days hackathon** with the topic of *Integrating SusAF Analysis into industry software projects*, hosted by **LUT University, Finland**.

Our idea was to create a tool for any stakeholders to involve SusAF analysis into every step of requirements definition, from milestone to features perspectives. 

We look forward to combine what already exists in any development project using Jira, and link all Epics, Tickets to their corresponding SusAF analysis using a template of SusAD Diagram hosted on Miro. The process would automate in creating Miro stickers for any impact discussed by the team, then they can collaborate in analyze it further, and save it for later references.

At this version, we are able to fetch Jira's board info and showing the Miro board in the same page, further development are still needed to make it fully functional as our idea describes.

---
Development team:
- Hiba Bouhlal
- Aleksa Stanivuk
- Vinh Nguyen
- Hieu Huynh

@ 04/2024

---
# Running the project
The project is fully Dockerized so that it could be easily working on any environment, even with deployment.
- The Backend is using Node.js with Express, and SQLite3 for simple database instance.
- The Frontend is using NextJS with TailwindCSS.
- Web Server & Proxy handled carefully with NGINX.

## Prerequisites
You might need the Docker installed to your device, please follow [official Docker installation guide](https://docs.docker.com/get-docker/). 

## Locally
After cloning the project and have your Docker running, please use the following command to get it running:

> docker compose up --build

Then you can find the project at:
- Interface: http://0.0.0.0
- API Server endpoint: http://0.0.0.0:8000

# Deployment
You can deploy it to any public VM, for example we deployed it as an example demo at https://susaf-jira-miro.site using Google Cloud Platform's VM and make use of it's public API.

The steps are similar to setting up your local device.

---
GLHF, and stay sustainable!