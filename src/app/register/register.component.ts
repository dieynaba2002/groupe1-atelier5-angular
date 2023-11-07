import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // les attributs
  nom = "";
  prenom = "";
  email = "";
  password = "";
  confirmPassword = "";

  // les methodes
  // verify(){
  //   if (this.nom == "" || this.prenom == "" || this.email == "" || this.password == "" || this.confirmPassword == "") {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Desole',
  //       text:'Veuillez renseigner tous les champs'
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Merci'
//   if (this.isEmailValid(this.email)) {
//     // L'e-mail est valide, faire quelque chose ici
//   } else {
//     Swal.fire({
//       icon: 'error',
//       title: 'Erreur',
//       text: "L'adresse e-mail n'est pas valide.",
//     });
//   }
// }

// private isEmailValid(email: string): boolean {
//   // Utilisation d'une expression régulière simple pour valider l'e-mail
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
//   return emailRegex.test(email);
// }
  //       text:'hbdksfb'
  //     });
  //   }
  // }
  verify() {

    if (this.nom == "" || this.prenom == "" || this.email == "" || this.password == "" || this.confirmPassword == "") {
      this.showMessage("error","Sorry",'Veuillez saisir tous les champs');
    }else if(!this.email.includes('@')){
        this.showMessage("error","Sorry",'email incorrect');
      }else if(this.password != this.confirmPassword){
        this.showMessage("error","Sorry",'Les passwords doivent etre identique');
      }
      else {
          this.showMessage('success','Thanks','Connexion faite avec succès');
    }   

  }
  showMessage(icon:any,title:any,message:any){
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    })
  }
  
 


}
