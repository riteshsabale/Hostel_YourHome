# Your Home - Hostel Management System

A comprehensive full-stack web application for hostel booking and management, designed to connect students with quality hostel accommodations.

## 🏠 About Your Home

Your Home is built by a group of passionate students who want to make finding great, affordable accommodation as simple as possible. Our platform connects travellers and students to trusted hostels across the country, giving you transparent prices and a hassle-free booking experience.

We believe everyone deserves a safe, comfortable place to stay while pursuing their dreams away from home.

## 📁 Project Structure

YourHome-Project/
├── yourhome-frontend/ # React frontend application
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── organisms/ # Page components
│ │ ├── molecules/ # Complex components
│ │ ├── atoms/ # Basic components
│ │ ├── reduxSlices/ # Redux state management
│ │ └── styles/ # CSS stylesheets
│ ├── public/
│ └── package.json
└── YourHome_Backend/ # Spring Boot backend API
├── src/main/java/
│ ├── controller/ # REST controllers
│ ├── entity/ # JPA entities
│ ├── repository/ # Data repositories
│ ├── service/ # Business logic
│ └── dto/ # Data transfer objects
├── src/main/resources/
└── pom.xml

text

## 🛠️ Technologies Used

### Frontend
- **React** - User interface library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **React Toastify** - Notifications
- **CSS3** - Styling

### Backend
- **Spring Boot 3.x** - Java framework
- **Spring Data JPA** - Database abstraction
- **Spring Security** - Authentication & authorization
- **MySQL** - Relational database
- **Maven** - Dependency management

## 👥 Team Members

- **Abhijeet Raskar** - Student Developer
- **Ritesh Sabale** - Student Developer  
- **Yash Padwal** - Student Developer

## 🚀 Setup Instructions

### Prerequisites
- **Java 17** or higher
- **Node.js 14** or higher
- **MySQL 8.0** or higher
- **Maven 3.6** or higher

### Backend Setup

1. **Navigate to backend directory**
cd YourHome_Backend

text

2. **Configure database**
- Create a MySQL database named `yourhome_db`
- Update `src/main/resources/application.properties`:
spring.datasource.url=jdbc:mysql://localhost:3306/yourhome_db
spring.datasource.username=your_username
spring.datasource.password=your_password

text

3. **Run the application**
mvn spring-boot:run

text

4. **Backend will start on** `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
cd yourhome-frontend

text

2. **Install dependencies**
npm install

text

3. **Start development server**
npm start

text

4. **Frontend will start on** `http://localhost:3000`

## ✨ Features

### For Students
- 🔍 Browse available hostels
- 📋 View detailed hostel information
- 💳 Secure booking and payment system
- 👤 User profile management

### For Hostel Owners
- 🏨 Add and manage hostel listings
- ✏️ Edit hostel details and pricing
- 📊 View booking statistics
- 🗑️ Delete hostel listings

### For Administrators
- 👥 Manage all users and hostels
- 📈 System overview and analytics
- 🛡️ Content moderation

## 🔧 API Endpoints

### Authentication
- `POST /student/login` - Student login
- `POST /hostelOwner/login` - Hostel owner login
- `POST /admin/login` - Admin login

### Hostels
- `GET /hostel` - Get all hostels
- `POST /hostel` - Create new hostel
- `PUT /hostel/{id}` - Update hostel
- `DELETE /hostel/{id}` - Delete hostel

### Bookings
- `POST /bookings` - Create booking
- `GET /bookings/hostel/{id}/count` - Get booking count

## 🌐 Environment Variables

### Backend (.env)
DB_URL=jdbc:mysql://localhost:3306/yourhome_db
DB_USERNAME=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret

text

### Frontend (.env)
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENV=development

text

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is developed as part of an academic project and is for educational purposes.

## 📞 Contact

For any queries or support, please contact any of the team members mentioned above.

---

**Your Home** - Making hostel booking simple and reliable! 🏠✨
