const user = {
  name: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
for (const key in user){
    
    const info=`user-${key}`
    const test =document.getElementById(info).append(user[key])

}