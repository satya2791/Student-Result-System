// ---------- State ----------
let studentName = "";
let subjectCount = 0;
let totalMarks = 0;

// ---------- Element refs ----------
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const studentNameInput = document.getElementById("studentName");
const subjectCountInput = document.getElementById("subjectCount");
const totalMarksInput = document.getElementById("totalMarks");

const nameError = document.getElementById("nameError");
const subjectCountError = document.getElementById("subjectCountError");
const totalMarksError = document.getElementById("totalMarksError");
const subjectError = document.getElementById("subjectError");

const subjectFields = document.getElementById("subjectFields");

// ---------- Helpers ----------
function showPage(page) {
  [page1, page2, page3].forEach(p => p.classList.remove("active"));
  page.classList.add("active");
}

function clearErrors() {
  nameError.textContent = "";
  subjectCountError.textContent = "";
  totalMarksError.textContent = "";
  subjectError.textContent = "";
}

// Grade scale based on percentage. Adjust these cut-offs any time.
function calculateGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

// ---------- Page 1: Student details ----------
document.getElementById("page1Submit").addEventListener("click", () => {
  clearErrors();

  studentName = studentNameInput.value.trim();
  subjectCount = parseInt(subjectCountInput.value, 10);
  totalMarks = parseFloat(totalMarksInput.value);

  let valid = true;

  if (!studentName) {
    nameError.textContent = "Please enter the student's name.";
    valid = false;
  }

  if (!subjectCount || subjectCount < 1) {
    subjectCountError.textContent = "Please enter a valid number of subjects.";
    valid = false;
  }

  if (!totalMarks || totalMarks <= 0) {
    totalMarksError.textContent = "Please enter valid total marks.";
    valid = false;
  }

  if (!valid) return;

  buildSubjectFields(subjectCount);
  showPage(page2);
});

// ---------- Page 2: build subject inputs dynamically ----------
function buildSubjectFields(count) {
  subjectFields.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const group = document.createElement("div");
    group.className = "form-group";

    const label = document.createElement("label");
    label.setAttribute("for", `subject${i}`);
    label.textContent = `Subject${i}:`;

    const input = document.createElement("input");
    input.type = "number";
    input.id = `subject${i}`;
    input.min = "0";
    input.dataset.subjectIndex = i;

    group.appendChild(label);
    group.appendChild(input);
    subjectFields.appendChild(group);
  }
}

document.getElementById("page2Submit").addEventListener("click", () => {
  subjectError.textContent = "";

  const inputs = subjectFields.querySelectorAll("input");
  let marksObtained = 0;
  let valid = true;

  inputs.forEach(input => {
    const val = parseFloat(input.value);
    if (isNaN(val) || val < 0) {
      valid = false;
    } else {
      marksObtained += val;
    }
  });

  if (!valid) {
    subjectError.textContent = "Please enter valid marks for every subject.";
    return;
  }

  const percentage = (marksObtained / totalMarks) * 100;
  const grade = calculateGrade(percentage);

  document.getElementById("resultMarks").textContent = `${marksObtained} / ${totalMarks}`;
  document.getElementById("resultPercentage").textContent = `${percentage.toFixed(2)}%`;
  document.getElementById("resultGrade").textContent = grade;

  showPage(page3);
});

// ---------- Page 3: restart ----------
document.getElementById("restartBtn").addEventListener("click", () => {
  studentNameInput.value = "";
  subjectCountInput.value = "";
  totalMarksInput.value = "";
  clearErrors();
  showPage(page1);
});