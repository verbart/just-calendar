import angular from 'angular';
import angularMoment from 'angular-moment';

import justCalendar from '../../components/just-calendar/just-calendar';


angular.module('ngJustCalendar', [
  angularMoment
])
  .component('ngJustCalendar', justCalendar);
