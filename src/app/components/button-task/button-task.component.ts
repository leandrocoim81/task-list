import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-task',
  imports: [MatButtonModule],
  templateUrl: './button-task.component.html',
  styleUrl: './button-task.component.scss'
})
export class ButtonTaskComponent {

  @Output() taskAdded= new EventEmitter();

  addTask() {
    this.taskAdded.emit()
  }
}
