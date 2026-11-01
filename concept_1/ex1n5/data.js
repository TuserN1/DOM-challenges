// Votre tableau contient des objets utilisateurs ayant chacun un ID unique. Vos Cards HTML statiques possèdent un attribut data-user-id correspondant. Parcourez votre tableau d'objets, et pour chaque objet, trouvez la Card HTML spécifique grâce à son attribut de donnée (querySelector('[data-user-id="..."]')), puis remplissez-la.
const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
]; 


users.forEach((element) => {
  const card = document.querySelector(`[data-user-id="${element.id}"]`);

 
  card.querySelector(".card-title").textContent = element.nom;
  card.querySelector(".card-email").textContent = element.email;
  card.querySelector(".card-role").textContent = element.role;
});