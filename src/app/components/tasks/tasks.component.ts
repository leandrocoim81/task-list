
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { DaoService } from '../../services/dao.service';
import { StatusTaskComponent } from "../status-task/status-task.component";
import { StatusTaskType } from '../status-task/types/status-task-type';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'app-tasks',
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    StatusTaskComponent
],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  constructor(protected dao: DaoService, protected taskService:TaskStateService) { }

  @Output() taskEdited = new EventEmitter()  

  statusTask:StatusTaskType[] = []

  ngOnInit(): void {
    this.statusTask = this.taskService.convertEnumToStatusTaskTypeList()
  }

  minDescription(description: string): string {
    return description.length > 30 ? description.substring(0, 29) + '...' : description
  }

  edit(id: number) {
    this.taskEdited.emit(id)
  }

  delete(id: number) {
    this.dao.removeItem(id)
  }  
}
