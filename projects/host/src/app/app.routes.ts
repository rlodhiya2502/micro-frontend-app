import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.DashboardModule),
  },
  // ...existing routes...
  {
    // User profile route
    path: 'user-profile',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './UserProfileModule',
      }).then((m) => m.UserProfileModule),
  },
  { path:'', redirectTo: '', pathMatch: 'full' },
];
