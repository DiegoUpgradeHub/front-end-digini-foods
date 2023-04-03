import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importación de componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


//importacion int
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    //Angular Material
    MatToolbarModule,
    MatIconModule,
    MatMenuModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    LoaderComponent
  ]
})
export class SharedModule { }
