import { LoginService } from '../../services/login.service';

class LoginComponentController {
  constructor(public loginService: LoginService, public $state: ng.ui.IStateService) {
    this.loginService = loginService;
  }

  userName: string = null;
  submit(): void {
    this.loginService.login(this.userName);
    this.$state.go('app.chat');
  }
}

export const loginComponent: angular.IComponentOptions = {
  template: require('./login.component.html'),
  controller: LoginComponentController
};