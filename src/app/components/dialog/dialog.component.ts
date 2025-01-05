import { Component, inject } from '@angular/core';
import {
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material/dialog';

import { DaoService } from '../../services/dao.service';
import { AbstractTask } from '../../abstractTypes/abstract-task';
import { Task } from '../../types/task';
import { InputTaskComponent } from "../input-task/input-task.component";

@Component({
  selector: 'app-dialog',
  imports: [MatDialogContent, InputTaskComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  task: AbstractTask = new Task()

  data = inject(MAT_DIALOG_DATA);

  constructor(private dao: DaoService, private dialog: MatDialog) {
    const tarefa = this.dao.getTarefas().filter(tarefa => tarefa.getId === this.data.id)[0]
    this.task.setId = tarefa.getId
    this.task.setDescription = tarefa.getDescription
    this.task.setName = tarefa.getName
    this.task.setPanelOpenState = tarefa.getPanelOpenState
    this.task.setStatus = tarefa.getStatus
  }  

  saveTask(task: AbstractTask) {

    let tarefas: AbstractTask[] = this.dao.getTarefas();
    for (let tarefa of tarefas) {
      if (tarefa.getId === this.task.getId) {
        console.log('entrou')
        tarefa.setDescription = task.getDescription
        tarefa.setName = task.getName
        tarefa.setPanelOpenState = task.getPanelOpenState
        tarefa.setStatus = task.getStatus
      }
    }
    this.dao.setTarefas(tarefas)
    this.dao.updateItem('tasks')

    this.dialog.closeAll()
  }
}
