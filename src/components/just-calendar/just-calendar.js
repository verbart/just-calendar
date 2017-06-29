const justCalendar = {
  bindings: {
    locale: '@?',
    weekdays: '<?',
    selected: '=?',
    onUpdate: '&'
  },
  controller: class {
    constructor(moment, $scope) {
      moment.locale(window.navigator.language);

      this.$scope = $scope;
      this.$onInit = function () {
        moment.locale(this.locale);

        this.firstDayOfWeek = moment.localeData().firstDayOfWeek();
        this.weekdays = this.weekdays || moment.weekdaysMin(true);
        this.selected = this.selected || moment();

        this.month = this.selected.clone();

        const start = this.selected.clone().date(0);

        this.removeTime(start);
        this.buildMonth(start, this.month);
      };
    }
    select(date) {
      this.selected = date.date;
      this.onUpdate({
        $event: date
      });
      if (!date.isCurrentMonth) date.date.date() < 7 ? this.changeMonth(+1) : this.changeMonth(-1);
    }
    changeMonth(changeTo) {
      const current = this.month.clone();

      this.removeTime(current.month(current.month()+changeTo).date(0));
      this.month.month(this.month.month()+changeTo);

      this.buildMonth(current, this.month);
    }
    removeTime(date) {
      return date.startOf('week');
    }
    buildMonth(start, month) {
      this.weeks = [];

      const date = start.clone();
      let done = false;
      let monthIndex = date.month();
      let count = 0;

      while (!done) {
        this.weeks.push({ days: this.buildWeek(date.clone(), month) });
        date.add(1, 'w');
        done = count++ > 2 && monthIndex !== date.month();
        monthIndex = date.month();
      }
    }
    buildWeek(date, month) {
      const days = [];

      for (let i = 0; i < 7; i++) {
        days.push({
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), 'day'),
          date: date
        });
        date = date.clone();
        date.add(1, 'd');
      }

      return days;
    }
  }
};

if (IS_DEVELOPMENT) {
  justCalendar.templateUrl = 'views/components/just-calendar/just-calendar.html';
} else {
  justCalendar.template = require('../../../public/views/components/just-calendar/just-calendar.html');
}


export default justCalendar;
