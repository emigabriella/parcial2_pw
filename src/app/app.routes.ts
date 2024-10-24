import { Routes } from '@angular/router';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { ProcesoComponentComponent } from './proceso-component/proceso-component.component';
import { RegistroComponentComponent } from './registro-component/registro-component.component';
import { DatosComponentComponent } from './datos-component/datos-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

export const routes: Routes = [
  {path:"inicio", component: InicioComponentComponent},
  {path:"proceso", component: ProcesoComponentComponent},
  {path:"registro", component: RegistroComponentComponent},
  {path:"datos", component: DatosComponentComponent},
  {path:"**", component: ErrorComponentComponent}
];
