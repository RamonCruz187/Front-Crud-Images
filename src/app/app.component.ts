import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imagenes';
  imagenes:any;
  formData:any;
  file:any;
  constructor(private datos: ServiceService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.imagenes= data;
      console.log(data);

    });
    
    
  }

  onImageSelected(event: any) {
  this.file = event.target.files[0];
  console.log("imagen seleccionada");
  
  
}
 
enviarImagen() {
  const formData = new FormData();
  formData.append('file', this.file);
  
  this.datos.nuevaImagen('http://191.96.251.43:8095/upload', formData)
    .subscribe((respuesta) => {
      
    });
    if (true) {
      alert('Imagen enviada!');
      window.location.reload();
    }
  
}

  

}
