
let grades = [
  { subject: 'Matematicas', grade: 9.3 },
  { subject: 'Fisica', grade: 8.1 },

];


export const saveGrade = (grade) => {
  grades.push(grade);
  console.log("Arreglo", grades);
}

export const getGrades = () => {
  return grades;
}

export const updateGrade = (nota) => {
  let gradeRetrived = find(nota.subject);
  if (gradeRetrived != null) {
    gradeRetrived.grade = nota.grade;
  }

}

const find = (nombreMateria) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].subject == nombreMateria) {
      return grades[i];
    }
  }
  return null;
}