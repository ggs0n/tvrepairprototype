# RepairLah! TV Repair Management System

RepairLah! is a full-stack web application for customers to submit TV repair requests, track repair progress, and connect with technicians in their area.

## Current Features

- Customer and technician registration
- Cookie-based login and logout
- Submit TV repair orders
- View multiple customer orders
- Match repair orders with technicians by area
- Technician job acceptance
- Repair status tracker
- Repair status history

## Repair Workflow

Order Placed
→ Searching Technician
→ Technician Accepted
→ In Repair
→ Completed

## Technology Stack

### Frontend

- React
- Vite
- React Router
- Bootstrap
- CSS

### Backend

- ASP.NET Core Web API
- .NET 8
- Entity Framework Core
- ASP.NET Core Identity
- SQL Server LocalDB
- Swagger

## Project Structure

tvrepairprototype/
├── TVRepairPrototype/   # React frontend
└── TVRepair.Api/        # ASP.NET Core API

## Planned Features

- Complete status-transition APIs
- Improved technician matching
- Customer and technician authorization
- Photo upload for damaged TVs
- Technician completion evidence
- Customer completion confirmation
- Status notifications
- Unit and integration tests

## Future Architecture Ideas

RabbitMQ may later be introduced for background notifications and technician matching. The initial workflow will remain inside the ASP.NET Core API until asynchronous processing is needed.

## Author

Developed as a full-stack learning project using React and ASP.NET Core.