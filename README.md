# 🏥 Hospital Management System (HMS)

A full-stack Hospital Management System built using **Angular** for the frontend and **ASP.NET Core Web API** for the backend with **SQL Server** as the database.  
This project demonstrates CRUD operations for managing Patients and their Addresses using a one-to-many relationship.

---

## 👀 Preview

> 📌 Add your screenshots here (after uploading to GitHub)


---

## 🛠️ Tech Stack

| Component | Technology |
|----------|------------|
| Frontend | Angular, TypeScript, HTML, CSS, Bootstrap |
| Backend | ASP.NET Core Web API (.NET 6/7) |
| Database | Microsoft SQL Server |
| ORM | Entity Framework Core |
| Tools | Visual Studio, VS Code, SSMS, GitHub |

---

## ✨ Features

- Create new patient records
- Display list of all patients with addresses
- Update patient details
- Delete patient from database
- One-to-Many relationship (1 Patient → Many Addresses)
- Angular Routing + Form Validations
- Consumes RESTful API
- Clean and responsive UI

---

## 📂 Project Structure

---

## 🚀 How to Run the Project

### 1️⃣ Clone this Repository
```sh
git clone https://github.com/your-username/HospitalManagementSystem.git
cd HospitalManagementSystem

cd Backend
dotnet restore
dotnet ef database update
dotnet run

cd ../Frontend
npm install
ng serve -o



