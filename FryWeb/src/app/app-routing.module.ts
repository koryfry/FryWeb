import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent } from './app-main/app-main.component';
import { OfficiatingMainComponent } from './officiating/officiating-main/officiating-main.component';

const routes: Routes = [
    { path: 'home', component: AppMainComponent },

    { path: 'officiating', component: OfficiatingMainComponent  },


    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }