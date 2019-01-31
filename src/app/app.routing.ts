
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminComponent } from './admin/admin.component';



const appRoutes: Routes = [

    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'project/:id',
        component: ProjectDetailsComponent
    },
    // {
    //     path: 'marketplace',
    //     component: MarketplaceComponent
    // },

    // {
    //     path: 'albums/:id',
    //     component: AlbumDetailComponent
    // },

    {
        path: 'admin',
        component: AdminComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);