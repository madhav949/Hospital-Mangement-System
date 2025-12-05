# CRUD Application using Angular & .NET C# Backend

This project is a full-stack CRUD (Create, Read, Update, Delete) application built using **Angular** for the frontend and **ASP.NET Core (C#)** for the backend API. The goal of the project is to demonstrate a clean, modular, and industry-level architecture for building scalable web applications.

---

## Preview 

![image](my-project/public/sample.png)


## 🚀 Tech Stack

### **Frontend (Angular)**

* Angular 16+
* TypeScript
* Angular Material / Bootstrap (optional)
* RxJS for state & async operations
* HttpClient for API communication

### **Backend (ASP.NET Core)**

* .NET 6 / .NET 7 Web API
* Entity Framework Core
* SQL Server / SQLite
* Repository Pattern (optional)
* Dependency Injection

---

## 📌 Features

* Add new records
* View all records
* Update existing records
* Delete records
* API-based communication between Angular and .NET backend
* Clean folder structure for both frontend and backend
* Reactive Forms in Angular
* DTOs, Models, Validation in .NET

---

## 📁 Project Structure

### **Angular Frontend**

```
src/
 ├── app/
 │   ├── components/      # UI components (list, create, edit)
 │   ├── services/        # API services using HttpClient
 │   ├── models/          # Interfaces/Types
 │   ├── pages/           # Page-level components
 │   └── app.module.ts
 │
 ├── assets/
 └── main.ts
```

### **.NET Backend**

```
Project/
 ├── Controllers/         # CRUD API endpoints
 ├── Models/              # Database models
 ├── DTOs/                # Data transfer objects
 ├── Data/                # DbContext
 ├── Repositories/        # Repository interface + implementation
 ├── Migrations/          # EF Core migrations
 └── Program.cs / Startup.cs
```

---

## ⚙️ How to Run the Project

### **Backend Setup**

1. Navigate to the backend folder
2. Restore dependencies:

```
dotnet restore
```

3. Apply migrations:

```
dotnet ef database update
```

4. Run the API:

```
dotnet run
```

Backend will run at:

```
https://localhost:5001
http://localhost:5000
```

---

### **Frontend Setup (Angular)**

1. Navigate to the Angular project folder
2. Install dependencies:

```
npm install
```

3. Start development server:

```
npm start
```

Angular app will run at:

```
http://localhost:4200
```

---

## 🔗 API Endpoints Example

```
GET    /api/items
GET    /api/items/{id}
POST   /api/items
PUT    /api/items/{id}
DELETE /api/items/{id}
```

---

## 🏗️ How CRUD Works in This Project

### **Frontend Flow**

1. Component triggers a service method
2. Service sends HTTP request to .NET API
3. Angular updates UI using Observables

### **Backend Flow**

1. Controller receives API request
2. Validates incoming data (DTO)
3. Repository handles database operations
4. Response returned to Angular

---

## 🛠️ Future Improvements

* JWT authentication & authorization
* Pagination & Filtering
* Global error handling
* Form validations (Angular + .NET)
* Docker support

---

## 📜 License

This project is open-source and free to modify.

---

## 🙌 Author

**Madhav Joshi**

Feel free to improve or contribute!
