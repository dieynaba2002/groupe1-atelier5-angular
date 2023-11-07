import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
  // Les Attributs
  nom = "";
  prenom = "";
  email = "";
  password = "";
  confirmPassword = "";
  formChoice = true;
  user= {};
  db: any;
  searchUser: any;
  // creation de du tableau d'objet
  users: any[] = [];

  // constructor
  constructor(private route:Router) {}

  // Methodes
  ngOnInit(): void {
    if (!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify(this.users));
     }
  }
  
  // fonction de controle pour les champs du formulaires
   register() {
    // Vérifie si l'un des champs nom, prénom, email, mot de passe ou confirmation de mot de passe est vide
    if (this.nom == "" || this.prenom == "" || this.email == "" || this.password == "" || this.confirmPassword == "") {
      this.showMessage("error","Sorry",'Veuillez saisir tous les champs');
    }else if(!this.email.includes('@')){
      this.showMessage("error","Sorry",'email incorrect');
    }else if(this.password != this.confirmPassword){
      this.showMessage("error","Sorry",'Les passwords doivent etre identique');
    } else {

      // Récupère les données des utilisateurs depuis le local storage
      this.db = JSON.parse(localStorage.getItem('users') || '[]')

      // Crée un nouvel utilisateur avec les données saisies
      this.user = {
        'id': this.db.length +1,
        'nom': this.nom,
        'prenom': this.prenom,
        'email': this.email,
        'password': this.password,
        'contact': []
      }
      
      // ajouter les element dans le tableau
      this.db.push(this.user);

      // Enregistre les données mises à jour dans le local storage
      localStorage.setItem('users', JSON.stringify(this.db));
      this.showMessage('success', 'Thanks', 'Connexion faite avec succès');

      // vide les  champs
      this.nom = "";
      this.prenom = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";

      // Affiche le formulaire de connexion
      this.showForm();
      
     } 
     
  }
  // fonction login
  login() {
    // Vérifie si les champs email et mot de passe sont vides
    if (this.email == "" || this.password == "") {
      // Affiche un message d'erreur si les champs sont vides
      this.showMessage("error", "Sorry", 'Veuillez saisir tous les champs');
    } else { 
      // Récupère les données des utilisateurs depuis le local storage
      this.db = JSON.parse(localStorage.getItem('users') || '[]');
      // on recherche si l'email existe dans notre bd si oui on le stock dans SearchUser
      this.searchUser = this.db.find((user: any) => user.email == this.email);
      console.log(this.searchUser);

      if (!this.searchUser) {
        // Affiche un message d'erreur si l'email n'existe pas dans la base de données
        this.showMessage("error", "Sorry", 'Email doest not exist');
      } else {
        // Si le mot de passe correspond, affiche un message de succès et redirige l'utilisateur
        if (this.password === this.searchUser.password) { 
          this.showMessage('success', 'Thanks', 'Connexion faite avec succès');
          this.route.navigate(['/', 'liste-contact']);
          // recuperation de l'id de l'utilisateur connecte
          localStorage.setItem('currentUserId', JSON.stringify(this.searchUser.id));
        } else {
          this.showMessage("error", "Sorry", 'login or password are incorrect');
          
        }
        
      }
      
      // this.showMessage('success', 'Thanks', 'Connexion faite avec succès');

    }
    
  }
  // fonction pour le sweet alert
  showMessage(icon:any,title:any,message:any){
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    })
  }

  // fonction qui affiche le fromulaire register
   showForm(){
    this.formChoice=!this.formChoice;
    this.nom="";
    this.prenom="";
    this.email="";
    this.password = "";
    this.confirmPassword="";
  }

   // Methodes
  saveCard(user:any){
    // console.warn(user);
    
    localStorage.setItem('userEmail', this.email); // email est la valeur de l'email
    localStorage.setItem('userPassword', this.password); // password est la valeur du mot de passe

  }

}
