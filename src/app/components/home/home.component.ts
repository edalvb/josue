import { Component, OnInit } from '@angular/core';
import { JosuevgInfoFacebookService } from "../../services/josuevg-info-facebook.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private info: JosuevgInfoFacebookService) { }

  info_face = [
    {
      "titulo": "Mundo Noticias",
      "urlavatar": "https://epublic.s3-sa-east-1.amazonaws.com/josuevg/logo_mnoticias.svg",
      "urlfoto": "https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/100982426_2793198367458553_8390638772206698496_n.jpg?_nc_cat=101&ccb=2&_nc_sid=cdbe9c&_nc_ohc=8IWzgUhytWAAX-Rdp3o&_nc_ht=scontent.ftru2-3.fna&oh=7de91464cad7cd42c687e961d04a3a86&oe=603FFF57",
      "descripcion": "Dedicados al Periodismo Noticioso y de opinión política, cultural, deportiva, Reportajes y de análisis de la gestión publica",
      "urlfacebook": "https://www.facebook.com/mnoticias.j/",
      "ruta": "mnoticias"
    },
    {
      "titulo": "Nutrientes y Energizantes Josue",
      "urlavatar": "https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/94854657_703187157148916_4414867548655321088_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=qLw_O-6EdUYAX9qXsfE&_nc_ht=scontent.ftru2-2.fna&oh=265e283f29a9ea7db52fcec5ba06ebee&oe=604650F1",
      "urlfoto": "https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/94889295_703286717138960_3111168597192343552_n.png?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=8WF2kPHDRuUAX8Idlwi&_nc_ht=scontent.ftru2-3.fna&oh=63697f211a93d90894af18284353fc41&oe=6046146F",
      "descripcion": "Estamos dedicados a apoyar y asesorar a miles de familias para mejorar su estilo de vida por una vida feliz y saludable con productos nutraceuticos de alta calidad: Colágeno, Moringa y 100 productos para desintoxicar, nutrir y energizar al máximo",
      "urlfacebook": "https://www.facebook.com/vidasaludableal2025/",
      "ruta": "nejosue"
    },
    {
      "titulo": "Agencia de Marketing Digital Josué",
      "urlavatar": "https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/118079821_786217418797405_7725474246768994551_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=p0bs9ZcvKEUAX-3zffE&_nc_ht=scontent.ftru2-2.fna&oh=078eec3cbd23792b55de29373969f3be&oe=604390CA",
      "urlfoto": "https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/117336862_786470742105406_5070276767945044286_o.jpg?_nc_cat=104&ccb=2&_nc_sid=e3f864&_nc_ohc=_qgHUqgylawAX8d4X8u&_nc_ht=scontent.ftru2-1.fna&oh=2ae84ab709d8631824121560083e7642&oe=6046219E",
      "descripcion": "Somos un equipo especializado en Marketing Digital, Asesoramos a Empresarios, Emprendedores y profesionales a Mejorar tus ventas y llevar tu negocio al siguiente nivel",
      "urlfacebook": "https://www.facebook.com/josuevg2019/",
      "ruta": "amdj"
    },
    {
      "titulo": "Josué Vásquez Networker",
      "urlavatar": "https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/123618678_390898455654447_944553652161607090_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Kl5JJU8hW3EAX-0Ape4&_nc_ht=scontent.ftru2-2.fna&oh=316a4f4913c9656a032638311e2248a1&oe=6043184A",
      "urlfoto": "https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/125806898_405047747572851_3641157250513662322_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_ohc=YQ9MTIPGZUAAX82ffL4&_nc_ht=scontent.ftru2-3.fna&oh=0c39cf3b0f12b184eb30f43834d11545&oe=6045D933",
      "descripcion": "Profesor. Especializado en Marketing Digital, Ventas, Líder Networker y Empresario de tan Prestigiosa industria de Productos de Salud y Bienestar para ayudar a muchas familias a trasformar sus vidas; en salud, liderazgo y mejores ganancias extras",
      "urlfacebook": "https://www.facebook.com/liderazgoyeducacion2020/",
      "ruta": "josuenet"
    },
    {
      "titulo": "Josué y Flash Perú",
      "urlavatar": "https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/130007330_101569791833454_3302063921882063282_n.png?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=Lzmi0AJR-icAX_G7_qD&_nc_ht=scontent.ftru2-3.fna&oh=624d8289da85c68d7e069bfcb257a73f&oe=6044CEB2",
      "urlfoto": "https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/129758380_101561055167661_5068713288851450179_n.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_ohc=fLIzbbPhaWsAX_WMpbF&_nc_ht=scontent.ftru2-1.fna&oh=b4709d2e1f1df8995339766c77558532&oe=6042ED39",
      "descripcion": "Trabajando para ayudar a miles de familias a mejorar su estilo de vida y su servicio de telefonía móvil. Mejorar su economía con importantes ganancias extras cada ves que miles de usuarios paguen por su servicios",
      "urlfacebook": "https://www.facebook.com/Josu%C3%A9-y-Flash-Per%C3%BA-101550508502049",
      "ruta": "fjosue"
    }
  ]

  ngOnInit(): void {
    this.info.getInfoFacebook().subscribe(
      (res: any) => console.log(res),
      err => console.log(err)
    );
  }

}
