import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DefaultComponent } from './pages/basic-info/default/default.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: DefaultComponent },
  //{ path: '', component: LoginComponent },
  //員工資料
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'default',
        title: '員工基本資料',
        component: DefaultComponent,
      },
    ],
  },
  //{ path: '**', component: BlankComponent}
];
