import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
planes=[{
  titulocard:"Libre",
  precio:"$0",
  mes:"mes",
  usuario:"10 usuarios incluidos",
  almacenamiento:"2GB de almacenamiento",
  soporte:"Soporte de correo electrónico",
  acceso:"Acceso al centro de ayuda",
  accion:"Registrate Gratis",
  color:"btn btn-outline-primary"
},
{
  titulocard:"Pro",
  precio:"$15",
  mes:"mes",
  usuario:"20 usuarios incluidos ",
  almacenamiento:"10GB de almacenamiento",
  soporte:"Soporte prioritario por correo electrónico",
  acceso:"Acceso al centro de ayuda",
  accion:"Empezar",
  color:"btn btn-primary"
},
{
  titulocard:"Empresa",
  precio:"$29",
  mes:"mes",
  usuario:"30 usuarios incluidos",
  almacenamiento:"15GB de almacenamiento",
  soporte:"Soporte telefonico y por correo electrónico",
  acceso:"Acceso al centro de ayuda",
  accion:"Contáctanos",
  color:"btn btn-primary"
}
];

}
