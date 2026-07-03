# Student Result System

A simple and responsive web application that calculates a student's total marks, percentage, and grade using HTML, CSS, and JavaScript.

## 📁 Project Structure

```text
result-system/
├── index.html
├── style.css
├── script.js
└── background.png
```

## 🚀 How to Run

1. Keep all files in the same folder structure.
2. Open `index.html` in any web browser.
3. The application will start from the Student Details page.

## 🧭 Application Flow

### 1. Student Details

The user enters:

* Student Name
* Number of Subjects
* Total Marks

After clicking **Submit**, the application moves to the next step.

### 2. Subject Marks

The application generates subject input fields dynamically based on the number of subjects entered.

After entering all marks and clicking **Submit**, the result is calculated.

### 3. Result Page

Displays:

* Total Marks Obtained
* Percentage
* Grade

A **Start Over** button allows the user to reset the application and begin again.

## 🎯 Grading Scale

| Percentage    | Grade |
| ------------- | ----- |
| 90% and above | A+    |
| 80% – 89.99%  | A     |
| 70% – 79.99%  | B     |
| 60% – 69.99%  | C     |
| 50% – 59.99%  | D     |
| Below 50%     | F     |

## ✅ Validation

* Student name cannot be empty.
* Number of subjects must be greater than zero.
* Total marks must be greater than zero.
* Subject marks must be valid numbers greater than or equal to zero.

## 📱 Responsive Design

The application is fully responsive and works smoothly on:

* Mobile Phones
* Tablets
* Laptops
* Desktop Computers
