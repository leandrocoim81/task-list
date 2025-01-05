import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTaskComponent } from "./components/input-task/input-task.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { TaskStateService } from './services/task-state.service';
import { DaoService } from './services/dao.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { AbstractTask } from './abstractTypes/abstract-task';
import { Task } from './types/task';

@Component({
  selector: 'app-root',
  imports: [CommonModule, InputTaskComponent, TasksComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private dao: DaoService) {
  }

  task:AbstractTask = new Task()
  
  title = 'project-task-list';

  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.dao.getItem('tasks')
  }  

  openDialog(id:number) {
    this.dialog.open(DialogComponent, {
      data: {
        id: id,
      },
      width: '90%',
      maxWidth: '1000px'
    });
  }
  saveTask(task:AbstractTask){
    this.dao.setItem('tasks', task)
  }
}
