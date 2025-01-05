import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { ButtonTaskComponent } from "../button-task/button-task.component";
import { AbstractTask } from '../../abstractTypes/abstract-task';
import { Task } from '../../types/task';
import { StatusTaskComponent } from "../status-task/status-task.component";
import { StatusTask } from '../../enums/status-task';
import { StatusTaskType } from '../status-task/types/status-task-type';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'app-input-task',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ButtonTaskComponent,
    MatCardModule,
    StatusTaskComponent
  ],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.scss'
})
export class InputTaskComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef, private taskService:TaskStateService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.name = this.task.getName
      this.description = this.task.getDescription ? this.task.getDescription : ''
      this.statusTask = this.taskService.convertEnumToStatusTaskTypeList()
      this.cdr.detectChanges()
    }, 0);
  }

  name: string = ''
  description: string = ''
  statusTask:StatusTaskType[] = []

  @Input() title: string = ''
  @Input() task: AbstractTask = new Task()
  
  @Output() taskSaved: EventEmitter<AbstractTask> = new EventEmitter()

  onNameChange(): void {
    this.task.setName = this.name
  }

  onDescriptionChange(): void {
    this.task.setDescription = this.description ? this.description : ''
  }

  onChipChange(status: number) {
    this.task.setStatus = status as StatusTask;  
    console.log(this.task)
  }

  saveTask() {
    this.taskSaved.emit(this.task)
    this.name = ''
    this.description = ''
  }
}
