function skillsMember() {
  let member = document.getElementById("member");
  member.addEventListener("click", function () {
    let member = document.getElementById("member");
    let skills = document.getElementById("skills");
    let projects = document.getElementById("projects");
    let contact = document.getElementById("contact");
    member.style.backgroundColor = "#1F2833";
    skills.style.backgroundColor = "#0B0C10";
    projects.style.backgroundColor = "#0B0C10";
    contact.style.backgroundColor = "#0B0C10";
    let memberContent = document.getElementById("memberContent");
    let skillsContent = document.getElementById("skillsContent");
    let projectsContent = document.getElementById("projectsContent");
    let contactContent = document.getElementById("contactContent");
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
  });
}
