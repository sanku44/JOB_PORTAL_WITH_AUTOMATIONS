# 🎯 JOB_PORTAL_WITH_AUTOMATION

A smart job portal system designed to connect students and recruiters with automation features, performance tracking, and an intelligent resume sorting algorithm to streamline hiring.

## 🚀 Features

- 🧑‍🎓 **Student Module**: 
  - Registration & login
  - Upload resumes and certificates
  - Track academic performance, skills, and interests
  - Smart recommendations based on yearly performance

- 🧑‍💼 **Recruiter Module**: 
  - Post job listings
  - Search & filter candidates
  - Automated resume ranking using sorting algorithm

- ⚙️ **Admin Module**:
  - Manage users and job posts
  - Monitor analytics and activity logs

- 🧠 **Resume Sorting Algorithm**:
  - Analyzes resumes based on skills, experience, academic performance, and keywords
  - Uses a weighted scoring system to rank candidates

## 🛠️ Tech Stack

| Layer        | Technology            |
|-------------|------------------------|
| Frontend     | React.js               |
| Backend      | Node.js + Express.js   |
| Database     | MySQL (via XAMPP)      |
| Automation   | Python (for resume parsing & sorting) |
| ML Tools     | Scikit-learn, NLP (spaCy/TF-IDF) |
| Auth & Security | JWT, Bcrypt         |

## 📂 Folder Structure

job_portal_with_automation/ ├── client/ # React frontend ├── server/ # Node + Express backend ├── resume_sorting/ # Python-based resume parser and sorter ├── database/ # MySQL schema and seed data ├── .env # Environment variables └── README.md # Project documentation


## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job_portal_with_automation.git
cd job_portal_with_automation

2. Backend Setup
bash

cd server
npm install
npm start
3. Frontend Setup
bash

cd ../client
npm install
npm start
4. Resume Sorting Script
bash

cd ../resume_sorting
pip install -r requirements.txt
python sorter.py
5. Database Setup
Start XAMPP and enable Apache + MySQL

Import database/job_portal.sql into phpMyAdmin

📊 Resume Sorting Algorithm
The algorithm works as follows:

Parse resumes using NLP (e.g., spaCy)

Extract keywords, skills, and experience

Compare with job description

Score resumes using weighted parameters (TF-IDF, skill match, education, etc.)

Sort and rank the candidates accordingly


✍️ Authors
Sanket Patil – LinkedIn

📃 License
This project is licensed under the MIT License.

