import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'slides',  
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full'
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  
  {
    path: 'todo-add',
    loadChildren: () => import('./todo-add/todo-add.module').then( m => m.TodoAddPageModule)
  },
  {
    path: 'todo-edit/:todoId',
    loadChildren: () => import('./todo-edit/todo-edit.module').then( m => m.TodoEditPageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'contact-add',
    loadChildren: () => import('./contact-add/contact-add.module').then( m => m.ContactAddPageModule)
  },
  {
    path: 'rendez-vous',
    loadChildren: () => import('./rendez-vous/rendez-vous.module').then( m => m.RendezVousPageModule)
  },
  {
    path: 'rendez-vous-add',
    loadChildren: () => import('./rendez-vous-add/rendez-vous-add.module').then( m => m.RendezVousAddPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
