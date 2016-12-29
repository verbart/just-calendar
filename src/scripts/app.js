import angular from 'angular';
import router from './routes';
import justCalendar from './components/justCalendar';


angular
  .module('app', [
    require('angular-ui-router'),
    require('angular-moment')
  ])
  .config(router)
  .component('justCalendar', justCalendar)
    .controller('AppCtrl', function () {
        this.weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    });

require('../../node_modules/moment/locale/ru');
