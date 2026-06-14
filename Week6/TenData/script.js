/* CREATE */
window.addStudent = function () {
  const id = document.getElementById("student-id").value;

  const studentData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    gender: document.getElementById("gender").value,
    age: document.getElementById("age").value,
    course: document.getElementById("course").value,
    semester: document.getElementById("semester").value,
  };

  set(ref(db, "students/" + id), studentData)
    .then(() => alert("Student Added"))
    .catch((error) => console.error(error));
};

/* READ */
window.readStudent = function () {
  const id = document.getElementById("read-id").value;

  get(ref(db, "students/" + id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("read-result").textContent = JSON.stringify(
          snapshot.val(),
          null,
          2,
        );
      } else {
        document.getElementById("read-result").textContent =
          "Student not found";
      }
    })
    .catch((error) => console.error(error));
};

/* UPDATE */
window.updateStudent = function () {
  const id = document.getElementById("update-id").value;

  const updatedData = {
    firstName: document.getElementById("update-first-name").value,
    lastName: document.getElementById("update-last-name").value,
    email: document.getElementById("update-email").value,
    phone: document.getElementById("update-phone").value,
    address: document.getElementById("update-address").value,
    gender: document.getElementById("update-gender").value,
    age: document.getElementById("update-age").value,
    course: document.getElementById("update-course").value,
    semester: document.getElementById("update-semester").value,
  };

  update(ref(db, "students/" + id), updatedData)
    .then(() => alert("Student Updated"))
    .catch((error) => console.error(error));
};

/* DELETE */
window.deleteStudent = function () {
  const id = document.getElementById("delete-id").value;

  remove(ref(db, "students/" + id))
    .then(() => alert("Student Deleted"))
    .catch((error) => console.error(error));
};
