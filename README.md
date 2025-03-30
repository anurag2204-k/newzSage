# NewsSage

## Overview
NewsSage is a **crowdsourced news platform** that enables local and aspiring publishers to post stories that mainstream media often overlooks. It provides real-time **news validation** through the Google Fact Check API and ensures **secure media uploads** via Cloudinary. 

## Features
- **Local News Contribution**: Users can submit and share news articles.
- **Google Fact Check API Integration**: Real-time validation of news credibility.
- **Secure Authentication**: Role-based access control for users and publishers.
- **Media Uploads**: Secure handling of images and videos using Cloudinary.
- **Real-time Updates**: Interactive UI built with React.js and Tailwind CSS.

---

## Tech Stack
### Frontend:
- **Framework**: React.js (Vite setup)
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **Build Tool**: Vite

### Backend:
- **Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT & role-based access control
- **Middleware**: Auth & Publisher roles

### Deployment:
- **Hosting**: Vercel
- **Database**: MongoDB Atlas
- **CI/CD**: GitHub Actions

---

## Directory Structure
```
prashantsaxe-newzsage/
│── front/               # Frontend source code
│   ├── src/             # React source files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Individual pages
│   ├── hooks/           # Custom React hooks
│   ├── context/         # Authentication and global state
│   ├── public/          # Static assets
│   ├── .env             # Environment variables
│── server/              # Backend source code
│   ├── controllers/     # Business logic for API endpoints
│   ├── routes/          # API routes
│   ├── models/          # MongoDB Schemas
│   ├── middlewares/     # Authentication & authorization
│   ├── dist/            # Compiled output
│   ├── .env             # Backend environment variables
│   ├── package.json     # Backend dependencies
```

---

## Setup Instructions
### Prerequisites:
- Node.js v16+
- MongoDB Atlas or local MongoDB
- Cloudinary Account (for media uploads)

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/anurag2204-k/newzSage.git
   cd newzsage
   ```

2. **Setup Frontend**
   ```sh
   cd front
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```sh
   cd server
   npm install
   npm start
   ```

4. **Environment Variables**
   - Create a `.env` file in both `front/` and `server/`.
   - Fill in the required API keys (MongoDB, Cloudinary, etc.)

---

## API Endpoints
### **Authentication**
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Authenticate user

### **News Management**
- `GET /news/all` - Fetch all news articles
- `GET /news/:id` - Get details of a specific news article
- `POST /news/submit` - Submit a news article
- `DELETE /news/:id` - Delete a news article (Admin only)

### **Comments & Voting**
- `POST /news/:id/comment` - Add a comment
- `GET /news/:id/comments` - Fetch comments
- `POST /news/:id/vote` - Upvote/downvote a news article

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push and open a pull request

---

## License
NO License.

---

## Contact
For inquiries or collaboration, reach out:
- **GitHub**:  [Anurag Khobragade](https://github.com/anurag2204-k) || 
- **LinkedIn**:  [Anurag Khobragade](https://www.linkedin.com/in/anuragk22) ||