**Hospital Management System**

The Hospital Management System is a simple and user-friendly application designed to manage and maintain patient records efficiently.
This project allows users to add, update, delete, and view patient information.
New features will be added in the future as the system grows.

Features

 Patient Management

Add new patient details

Update existing patient information

Delete patient records

View patient list

 Simple & Clean UI

Designed to be easy for hospital staff to use.

 **Future Enhancements **

  Doctor management
  
  Appointment scheduling
  
  Billing system
  
  Authentication (Admin/User login)
  
  Medical history and reports


📂 Project Structure

Hospital-Management-System/

    │── frontend/
    │── backend/
    |──Screenshots/
    │── README.md
    └── other files…


Angular Frontend

    frontend/
     ├── src/
     │   ├── app/
     │   │   ├── components/       # Patient components (list, add, edit)
     │   │   ├── services/         # API services
     │   │   ├── models/           # Interfaces
     │   │   ├── pages/            # Page-level components
     │   │   └── app.module.ts
     │   ├── assets/
     │   └── main.ts



.NET Backend

    backend/
     ├── Controllers/              # API Endpoints (PatientsController)
     ├── Models/                   # Patient model
     ├── DTOs/                     # Data transfer objects
     ├── Data/                     # DbContext
     ├── Migrations/               # EF Core migrations
     ├── Repositories/             # Repository Pattern (optional)
     └── Program.cs / Startup.cs
    

🚀 Tech Stack
Frontend (Angular)

Angular 16+

Angular Material 

HttpClient for REST API communication



Backend (.NET)

ASP.NET Core (.NET 6 / 7)

Entity Framework Core

SQL Server 

Repository Pattern (optional)

Model Binding + Validation

Dependency Injection


🚀 How to Run

1. Clone the repository

       git clone https://github.com/Sanjay-Rajbanshi/Hospital-Management-System.git

2. Install Dependencies

    Frontend:

        cd frontend
        npm install


    Backend:

        cd backend
        npm install

3. Start the Project

    Frontend:

        ng serve


    or

        npm start


    Backend:

        npm run dev

📸 Output Screenshots

<img width="1706" height="905" alt="Screenshot 2025-11-29 171540" src="https://github.com/user-attachments/assets/acbd15ba-9b7c-4dc1-8a00-728c7cb1188e" />


👨‍💻 Author

Madhav Joshi
