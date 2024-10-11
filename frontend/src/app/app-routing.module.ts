import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { DailyViewComponent } from './components/daily-view/daily-view.component';


const routes: Routes = [
  { path: '', component: DailyViewComponent, canActivate: [AuthGuard] },
  { path: 'daily-view', component: DailyViewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];


@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DailyViewComponent];