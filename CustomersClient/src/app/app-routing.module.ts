import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login',   loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule)  },
  { path: 'client',   loadChildren: () => import('../app/pages/client/client.module').then(m => m.ClientModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
