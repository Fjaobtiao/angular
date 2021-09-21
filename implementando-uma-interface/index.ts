interface UserProps{
    firtsName:String
    lastName:String
    username:String
    email:String
    password:String
    cpf:String
    contacto:String
    isAdmin:Boolean
}
class User implements UserProps {
    firtsName!:String
    lastName!:String
    username!:String
    email!:String
    password!:String
    cpf!:String
    contacto!:String
    isAdmin!:Boolean

constructor(
    firtsName:String,
    lastName:String,
    username:String,
    email:String,
    password:String,
    cpf:String,
    contacto:String,
    isAdmin:Boolean){
    this.firtsName = firtsName
    this.lastName = lastName
    this.username = username
    this.email = email
    this.password = password
    this.cpf = cpf
    this.contacto = contacto
    this.isAdmin = isAdmin
}

getFirtsname(){
    return this.firtsName;
}
setFirtsname(firtsName:string){
    this.firtsName = firtsName;
}
getLastsname(){
    return this.lastName;
}
setLastsname(lastName:string){
    this.lastName = lastName;
}
getUserName(){
    return this.username;
}
setUserName(username:string){
    this.username = username;
}
getEmail(){
    return this.email;
}
setEmail(email:string){
    this.email = email;
}
getPassword(){
    return this.password;
}
setPassword(password:string){
    this.password = password;
}
getCpf(){
    return this.cpf;
}
seCpf(cpf:string){
    this.cpf = cpf;
}
getContacto(){
    return this.contacto;
}
setContacto(contacto:string){
    this.contacto = contacto;
}
getIsAdmin(){
    return this.firtsName;
}
setIsAdmin(isAdmin:Boolean){
    this.isAdmin = isAdmin;
}

}

let pessoa = new User(
    "Jota",
    "Nascimento",
    "jotabinho",
    "jotafnascimento@gmail.com",
    "123@456",
    "111.111.111-11",
    "11 9 4081-4379",
    true
);

console.log(pessoa.getContacto())