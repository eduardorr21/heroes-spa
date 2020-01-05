import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {HeroesComponent} from './components/heroes/heroes.component'
import {HeroeComponent} from './components/heroe/heroe.component'


const app_routes: Routes=[
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path:'heroe/:id', component: HeroeComponent}
]


export const app_routing = RouterModule.forRoot(app_routes);