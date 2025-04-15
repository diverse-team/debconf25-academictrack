import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 's',
        loadChildren: () => import('./static/static.module').then((m) => m.StaticModule),
    },
    {
        path: '',
        loadChildren: () =>
            import('modules/blog/blog-routing.module').then((m) => m.BlogRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then((m) => m.ErrorRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then((m) => m.ErrorRoutingModule),
    },
];


  // then just import your RouterModule with these options


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
