import { Component } from '@angular/core';

interface MenuItem {
  text: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [

    {
      text: "Básicos",
      ruta: "./template/basicos"
    },
    {
      text: "Dinámicos",
      ruta: "./template/dinamicos"
    },
    {
      text: "Switches",
      ruta: "./template/switches"
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: "Básicos",
      ruta: "./reactive/basicos"
    },
    {
      text: "Dinámicos",
      ruta: "./reactive/dinamicos"
    },
    {
      text: "Switches",
      ruta: "./reactive/switches"
    },
  ]

  authMenu : MenuItem[] = [
    {
      text: "login",
      ruta: "./auth/login"
    },
    {
      text: "register",
      ruta: "./auth/register"
    },
  ]

}
