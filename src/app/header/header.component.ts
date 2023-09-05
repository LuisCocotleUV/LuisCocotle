import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private headerService: HeaderService) {}

  name: string = "fake name";
  titulos: string = "fake name";
  mision: string = "fake name";
  foto: string = "fake name";

  ngOnInit(): void {
    this.headerService.getHeader()
    .subscribe((data: any) => {
      console.log(data);
      //alert(data);
      this.name = data.name:
      this.titulos = data.titulos;
      this.mision = data.mision;
      this.foto = data.foto;
    });
  }

}
