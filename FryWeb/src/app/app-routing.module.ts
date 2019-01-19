import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent } from './app-main/app-main.component';
import { OfficiatingMainComponent } from './officiating/officiating-main/officiating-main.component';

// Import Arena Components
import { ArenaComponent } from './officiating/arena/arena.component';
import { ArenaDetailsComponent } from './officiating/arena/arena-details/arena-details.component';

// Import Age Group Components
import { AgeGroupComponent } from './officiating/age-group/age-group.component';

// Import Officials Components
import { OfficialsComponent } from './officiating/officials/officials.component';

const routes: Routes = [
    { path: 'home', component: AppMainComponent,
        children: [
            { 
                path: 'officiating', 
                component: OfficiatingMainComponent,
                //data: {title: 'Officiating Main'},
                children: [
                    { 
                        path: 'arena', 
                        component: ArenaComponent,
                        //data: {title: 'Arena Management'}
                    },
                    { 
                        path: 'details/:id', component: ArenaDetailsComponent, data: {title: 'Arena Details'}
                    },
                    { path: 'ageGroup', component: AgeGroupComponent },
                    { path: 'officials', component: OfficialsComponent }//,
                    //{ path: '', redirectTo: 'arena', pathMatch: 'full' }
                ]
            }
        ]
    }, 
    
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }