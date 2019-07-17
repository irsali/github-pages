import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from '@app/screens/file-list/file-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  {
    path: 'pages', component: FileListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
