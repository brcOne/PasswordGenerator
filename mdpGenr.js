function Generate() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var dt = document.getElementById("dt").value;
    var getPass =document.getElementById("password");
  
    var nomEdit = nom.slice(0, 3).toUpperCase();
    var prenomEdit = prenom
      .split("")
      .reverse()
      .join("")
      .slice(0, 3)
      .toLowerCase();
  
    var today = new Date();
    var birthDate = new Date(dt);
  
    var age = today.getFullYear() - birthDate.getFullYear();
  
  
    var Mypassword = nomEdit.concat(age,prenomEdit);
  
    getPass.innerHTML =`Your Password: ${Mypassword}`  ;
  
  }
  