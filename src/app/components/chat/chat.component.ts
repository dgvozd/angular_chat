export const chatComponent: angular.IComponentOptions = {
  template: require('./chat.component.html'),
  controller: function () {
    this.hello = 'chat';
  }
};