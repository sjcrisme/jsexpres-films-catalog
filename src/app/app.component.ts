import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  links = [
        { path: '/dashboard', icon: 'home', label: 'Главная'},
        { path: '/task', icon: 'event_name', label: 'Задачи'},
        { path: '/statistics', icon: 'settings', label: 'Статистика'}
    ];
}
