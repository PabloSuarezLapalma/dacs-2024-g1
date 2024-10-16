import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { DailyViewComponent } from './components/daily-view/daily-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'daily-view', pathMatch: 'full' },
  { path: 'daily-view', component: DailyViewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'daily-view' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DailyViewComponent];
