import { Routes } from '@angular/router';
import { isLoggedIn } from './core/guards/islogged-guards';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { AtuacaoComponent } from './components/atuacao/atuacao.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


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
  //   {
  //     path: 'app',
  //     component: ,
  //     canActivate: [isAuthenticated],
  //     children: [
  //       { path: 'cursos', component:  },
  //       { path: 'favoritos', component:  },
  //       { path: 'avisos', component:  },
  //       { path: 'conta', component:  },

  //       // rota padrão ao entrar
  //       { path: '', redirectTo: 'cursos', pathMatch: 'full' }
  //     ]
  //   }
];
