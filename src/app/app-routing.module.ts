import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { EmitterComponent } from './components/emitter/emitter.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'Campo1', component: FirstComponentComponent},
  {path: 'Campo2', component: ParentDataComponent},
  {path: 'Campo3', component: IfRenderComponent},
  {path: 'Campo4', component: EmitterComponent},
  {path: 'Campo5', component: ListRenderComponent},
  {path: 'Campo6', component: PipesComponent},
  {path: 'Campo7', component: TwoWayBindingComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
