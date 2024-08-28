import { Routes } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { DefaultComponent } from './views/pages/basic-info/default/default.component';
import { LoginComponent } from './views/pages/login/login.component';
import { SupplierComponent } from './views/pages/basic-info/supplier/supplier.component';
import { SuppliertEditComponent } from './views/pages/basic-info/suppliert-edit/suppliert-edit.component';

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
      {
        path: 'supplierEdit',
        title: '廠商資料異動',
        component: SuppliertEditComponent,
      },
    ],
  },
  //{ path: '**', component: BlankComponent}
];
