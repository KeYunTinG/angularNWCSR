import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent} from './pages/layout/layout.component';
import { DefaultComponent } from './pages/basic-info/default/default.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [{ path: '', component: LoginComponent},
    // { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent,children: [
        {
          path: 'default',  // child route path
          title: '132',
          component: DefaultComponent,  // child route component that the router renders
        },] },
    //{ path: '**', component: BlankComponent}
    ];
