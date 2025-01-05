import { Injectable } from '@angular/core';
import { StatusTask } from '../enums/status-task';
import { StatusTaskType } from '../components/status-task/types/status-task-type';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {

  constructor() { }

  name: string = ''
  description: string = ''

  convertEnumToStatusTaskTypeList(): StatusTaskType[] {

    const statusTask: StatusTaskType[] = []

    // Iterando pelo enum para obter nomes e valores
    for (const key in StatusTask) {
      // Filtrar apenas os nomes (que são strings e não números)
      if (isNaN(Number(key))) {

        const name = this.capitalizeFirstLetter(key); // Nome do enum
        const value = StatusTask[key as keyof typeof StatusTask]; // Valor numérico do enum

        const status: StatusTaskType = { descricao: name, value: value }
        statusTask.push(status)
      }
    }

    return statusTask
  }
  capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
