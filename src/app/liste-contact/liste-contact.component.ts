import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutEditContactComponent } from '../ajout-edit-contact/ajout-edit-contact.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
  
export class ListeContactComponent {
  
  

  constructor (private _dialog:MatDialog, private route:Router) {}
  openAddEditContactForm() { 
    this._dialog.open(AjoutEditContactComponent);

  }

  
  logout() {
    this.route.navigate(['/', 'login']);
  }

users = [
  {
    'id': 1,
    'nomComplet': 'admin',
    'email': 'admin@gmail.com',
    'motDepasse': 'passer',
    'contact': [
      {
        'id': 1,
        'nom': '',
        'prenom': '',
        'email': '',
        'telephone': 771023456,
        'photo': '',
        'etat': false,
        'createdAT': '',
        'createdBy': '',
        'updatedAt': '',
        'updatedBy': '',
        'description': ""
      }
    ]
  }
]

//recuperer l'id de l'utilisateur connecter
idCurrentUser = JSON.parse(localStorage.getItem('currentUser') || '[]');

//variarble qui nous permetra d'avoir les info de l'utilisateur conneceter
currrentuser: any

//variable qui nous permettra d'avoir le tableau des contact de l'utilsateur connecter
contacts: any;

//recuperer le contact a archoiver
contactToArchive: any;

//notre localStorage
db = JSON.parse(localStorage.getItem('users') || '[]')

ngOnInit(): void {
  //recuperer les info de l'utilisateur connecter
  this.currrentuser = this.db.find((element: any) => element.id = this.idCurrentUser)

  //recuperer les contact de l'utlisateur connecter dont leur etat est egal a false
  this.contacts = (this.currrentuser.contact).filter((contact: any) => contact.etat === false);
};

archiver(id: number) {
  //recuperer le contact a archiver
  this.contactToArchive = this.contacts.find((element: any) => element.id == id);

  Swal.fire({
    title: "Etes-vous sûr de vouloir supprimer ce contact?",
    text: "",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText:'Annuler',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je veux supprimer'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Contact supprimer',
        'Le fichier est envoyer dans votre corbeille',
        'success'
      );

      //changer l'etat à true
      this.contactToArchive.etat = true;

      //mis a jours du local storage
      localStorage.setItem('users', JSON.stringify(this.db))

      //recuperer les contact de l'utlisateur connecter dont leur etat est egal a false
      this.contacts = (this.currrentuser.contact).filter((contact: any) => contact.etat === false);

    }
  })


}

}



