# SusAF-Hackathon Project: SusAF Integration Tool

---
This project has been made as an output of a **3-days hackathon** with the topic of *Integrating SusAF Analysis into industry software projects*, hosted by **LUT University, Finland**.

The goal of the hackathon is to design and develop a web tool that digitizes SUSAF. The Sustainability Awareness Framework (SusAF) is a tool for the sustainable design of software products and services that help companies link sustainability mission and goals to IT products and services. Moreover, it also helps:

- Identify the sustainability impacts of IT products and services for companies, product managers, software developers, consultants, students
- Visualize the chain of effects for all identified impacts in each sustainability dimension and three orders of effects to aid:
- Visualization of sustainability impacts from different stakeholder lenses (CEO/ Product manager/ developer/ student)
- Discussion among different stakeholders
- Transform identified sustainability impacts and effects of IT products and services into the product roadmap, features requirements or user stories, SCRUM (product backlog, sprint planning, backlog, review, retrospective)
- Create awareness about the sustainability impacts of IT products and services among software engineering professionals and students

**SusDigi** is the name of our tool that incorporates the project management attributes of **JIRA**, the organizational creation of sustainability impacts through **spreadsheets**, and the collaborative visualization of the **SUSAF** framework through **MIRO BOARD**, all in one screen to facilitate the process of assessing the sustainability impacts of every feature being worked on.

Google Sheeet template: https://docs.google.com/spreadsheets/d/134fxWB7nQ7UKV78zFcsdqTgyXq62PrX8ORXuh8tlFgI (you can Make a Copy to your Google account to edit and use it, Apps Script file and functionality will also be copied)

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