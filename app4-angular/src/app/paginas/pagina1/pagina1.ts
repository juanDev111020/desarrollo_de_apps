import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina1.html',
  styleUrls: ['./pagina1.css']
})
export class Pagina1Component {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  clearTasks() {
    this.tasks = [];
  }
}