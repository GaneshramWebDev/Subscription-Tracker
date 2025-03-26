# 🚀 **Subscription Tracker**
## 📌 **Project Overview**
Subscription Tracker is a **backend-only** Node.js project that helps users efficiently manage their subscriptions. It includes features like secure authentication, bot protection, and automated reminders.

## 🔑 **Features**
✅ Create, update, and delete subscriptions 📅  
✅ Secure authentication using JWT & Archlet bot protection 🤖  
✅ Auto-reminders for upcoming subscriptions ⏰  
✅ RESTful API with Express.js 🛠️  
✅ MongoDB database integration 📂  


## 🚧 **Tech Stack**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token)
- **Bot Protection:** Archlet
- **Task Queue:** Upstash Workflow Client

## ⚠️ **Sensitive Information** ⚠️
**🔴 IMPORTANT:** This project contains sensitive data like database credentials. Ensure you:
- **Do NOT push `.env` files** ❌  
- **Use `.gitignore` to exclude sensitive files**  
- **Deploy securely using environment variables** 🔐  

## 📸 **Screenshots**
![Screenshot 2025-03-26 135839](https://github.com/user-attachments/assets/c195947c-9767-4ef5-9221-fb055bd6d8fa)
## 🛠️ **Setup & Installation**
```sh
# Clone the repository
git clone https://github.com/GaneshramWebDev/Subscription-Tracker.git

# Install dependencies
npm install

# Start the server
npm start
```

## 🔗 **API Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/subscription/create` | Create a new subscription |
| `GET` | `/api/v1/subscription/:id` | Get user subscriptions |
| `DELETE` | `/api/v1/subscription/:id` | Delete a subscription |

## 🚀 **Deployment**
You can deploy this project using **Render, Railway, or Vercel** for backend hosting.

## 🛡️ **Security & Best Practices**
🔹 **Keep your `.env` file private**  
🔹 **Do not hardcode credentials**  
🔹 **Use environment variables**  

## 📝 **License**
This project is **private** and not open for public downloads.

---
💡 *For any queries, feel free to reach out!* 😊

