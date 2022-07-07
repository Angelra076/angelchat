import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mostrarChat = false;
  usuarioLogeado: any;
  nuevoMensaje: string = "";
  mensajes: any = [
    {
      emisor: "1odysoXd0AgQH3z2OlbYGXh2qAh2",
      texto: "Hola todo bien"
    },
    {
      emisor: "id",
      texto: "Todo correcto"
    },
    {
      emisor: "1odysoXd0AgQH3z2OlbYGXh2qAh2",
      texto: "Y yo que me alegro"
    },
    {
      emisor: "id",
      texto: "XDDDD"
    }
  ];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });
  }

  enviarMensaje() {

    if (this.nuevoMensaje == "") return;

    console.log(this.nuevoMensaje);
    let mensaje = {
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);
    this.nuevoMensaje = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10);
  }

  scrollToTheLastElementByClassName() {
    let elements = document.getElementsByClassName('msj');
    let ultimo: any = elements[(elements.length - 1)];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('contenedorDeMensajes')?.scrollTop = toppos;
  }
}
