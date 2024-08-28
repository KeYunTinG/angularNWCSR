import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DefaultComponent } from './pages/basic-info/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { SupplierComponent } from './pages/basic-info/supplier/supplier.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
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
      {
        path: 'supplier',
        title: '廠商基本資料',
        component: SupplierComponent,
      },
    ],
  },
  //{ path: '**', component: BlankComponent}
];
