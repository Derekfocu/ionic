import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'cars',
        loadChildren: () => 
	import('./cars/cars.module').then( m => m.CarsPageModule)
      },
      {
        path: 'favorate',
        loadChildren: () => import('./favorate/favorate.module').then( m => m.FavoratePageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'wash-location',
    loadChildren: () => import('./wash-location/wash-location.module').then( m => m.WashLocationPageModule)
  },
  
  {
    path: 'wash-products',
    loadChildren: () => import('./wash-products/wash-products.module').then( m => m.WashProductsPageModule)
  },
  
  {
    path: 'cleaning-supplies',
    loadChildren: () => import('./cleaning-supplies/cleaning-supplies.module').then( m => m.CleaningSuppliesPageModule)
  },
  {
    path: 'route-planning',
    loadChildren: () => import('./route-planning/route-planning.module').then( m => m.RoutePlanningPageModule)
  },
  {
    path: 'vacancy-search',
    loadChildren: () => import('./vacancy-search/vacancy-search.module').then( m => m.VacancySearchPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
