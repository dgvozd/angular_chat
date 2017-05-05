import * as angular from 'angular';

import { appComponent } from './app/components/app/app.component';
import { chatComponent } from './app/components/chat/chat.component';
import { loginComponent } from './app/components/login/login.component';
import { LoginService } from './app/services/login.service';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .service('loginService', LoginService)
  .component('app', appComponent)
  .component('login', loginComponent)
  .component('chat', chatComponent)
  .run(["loginService", "$transitions", "$state", function (loginService, $transitions, $state) {
    $transitions.onStart({}, function (trans) {
      if (trans.to().name !== 'app.login' && !loginService.isAuthenticated()) {
        $state.transitionTo("app.login");
      }
    });
  }]);
