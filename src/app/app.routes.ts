import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HelloWorldComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('products').then((m) => m.ProductsModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('orders').then((m) => m.OrdersModule),
  },
  {
    path: 'teste-module',
    loadChildren: () => import('teste').then((c) => c.TesteComponent),
  },
];
