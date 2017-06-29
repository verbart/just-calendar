# justCalendar

It's a super simple calendar as a AngularJS Component

![Calendar preview](http://i.imgur.com/tVizf0o.png)

---

### Usage
- **Install**
  - `npm install ng-just-calendar -S`
  - Use `import 'ng-just-calendar';` or `require('ng-just-calendar');`
  - Inject it to your AngularJS module:
    `angular.module('myApp', ['ngJustCalendar']);`
  - Use in views - `<ng-just-calendar>`
- **Custom language**
  - Include [angular-moment](https://github.com/urish/angular-moment) to project
  - Just configure MomentJS `moment.locale('ru');`

---

### Developing

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.  
   It should automatically open the client in your browser when ready.

### Build

- Run `npm run build` for create production build.

---

**Based on** https://github.com/verbart/ng-boilerplate

---

## License 
Released under the terms of the [MIT License](LICENSE)
