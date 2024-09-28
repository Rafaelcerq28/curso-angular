import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EmitterComponent } from './components/emitter/emitter.component';

export const routes: Routes = [
    //adicionar as rotas: path com o nome da pag e o nome do componente
    {path: '',component: FirstComponentComponent},
    {path: 'list',component: ListRenderComponent},
    {path: 'parent-data',component: ParentDataComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'if-render', component:IfRenderComponent},
    {path: 'eventos', component:EventosComponent},
    {path: 'pipes', component:PipesComponent},
    {path: 'binding', component:TwoWayBindingComponent},
    {path: 'emitter', component:EmitterComponent},
    
];
