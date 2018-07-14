import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent } from './app-main/app-main.component';
import { OfficiatingMainComponent } from './officiating/officiating-main/officiating-main.component';
import { ArenaComponent } from './officiating/arena/arena.component';
import { AgeGroupComponent } from './officiating/age-group/age-group.component';
import { OfficialsComponent } from './officiating/officials/officials.component';

const routes: Routes = [
    { path: 'home', component: AppMainComponent },

    { 
        path: 'officiating', 
        component: OfficiatingMainComponent,
        children: [
            { path: 'arena', component: ArenaComponent },
            { path: 'ageGroup', component: AgeGroupComponent },
            { path: 'officials', component: OfficialsComponent }
        ]
    },    

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }