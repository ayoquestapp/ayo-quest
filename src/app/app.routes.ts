import { Routes } from '@angular/router';
import { isLoggedIn } from './core/guards/islogged-guards';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { AtuacaoComponent } from './components/atuacao/atuacao.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { isAuthenticated } from './core/guards/auth-guards';
import { AyoQuestComponent } from './pages/ayo-quest/ayo-quest.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { FrontEndComponent } from './pages/cursos/front-end/front-end.component';
import { BackEndComponent } from './pages/cursos/back-end/back-end.component';
import { DataBaseComponent } from './pages/cursos/data-base/data-base.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [isLoggedIn],
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent,
    canActivate: [isLoggedIn],
  },
  {
    path: 'atuacao',
    component: AtuacaoComponent,
    canActivate: [isLoggedIn],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'app',
    component: AyoQuestComponent,
    canActivate: [isAuthenticated],
    children: [
      {
        path: 'cursos', component: CursosComponent,
        data: {
          label: 'Cursos',
        }
      },
      {
        path: 'cursos/front-end', component: FrontEndComponent,
        data: {
          label: 'Front-end',
        }
      },
      {
        path: 'cursos/back-end', component: BackEndComponent,
        data: {
          label: 'Back-end',
        }
      },
      {
        path: 'cursos/data-base', component: DataBaseComponent,
        data: {
          label: 'Data-base',
        }
      },
      {
        path: 'favoritos', component: FavoritosComponent,
        data: {
          label: 'Favoritos',
        }
      },
      {
        path: 'avisos', component: AvisosComponent,
        data: {
          label: 'Avisos',
        }
      },
      //   { path: 'conta', component:  },

      { path: '', redirectTo: 'cursos', pathMatch: 'full' }
    ]
  }
];
