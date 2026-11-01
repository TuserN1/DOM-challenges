// Reprenez l'objet précédent. Cette fois, les éléments de la Card n'ont pas d'ID, mais des classes (.card-title, .card-email, etc.). Sélectionnez d'abord l'élément parent (la Card entière). Ensuite, utilisez parent.querySelector('.class') pour cibler les éléments enfants et injecter les données de l'objet.
const user = {
  title: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
const parent=document.querySelector('.card-user-card')
for (const key in user) {
   parent.querySelector(`.card-${key}`).append(user[key])

  
  
}
