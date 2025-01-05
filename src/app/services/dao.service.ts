import { Injectable } from '@angular/core';
import { AbstractTask } from '../abstractTypes/abstract-task';
import { Task } from '../types/task';
import { StatusTask } from '../enums/status-task';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  private tarefas: AbstractTask[] = []

  constructor() {
  }

  // Salvar dados
  setItem(key: string, task: AbstractTask): void {
    const maiorId = this.tarefas.reduce((max, tarefa) => (tarefa.getId > max ? tarefa.getId : max), 0) + 1
    task.setId = maiorId
    localStorage.setItem(key, JSON.stringify([...this.tarefas, task]));
    this.tarefas.push(task)
  }

  // Salvar dados
  updateItem(key: string): void {
    localStorage.setItem(key, JSON.stringify([...this.tarefas]));
  }

  // Ler dados
  getItem(key: string): AbstractTask[] {

    if (typeof window !== 'undefined' && window.localStorage) {
      this.convertToTasks(key)
    }
    return this.getTarefas();
  }

  getTarefas(): AbstractTask[] {
    return [...this.tarefas]
  }

  // Remover dados
  removeItem(id: number): void {
    this.tarefas = this.tarefas.filter((task) => {
      return task.getId !== id
    })
    localStorage.setItem('tasks', JSON.stringify(this.tarefas))
    this.getItem('tasks')
  }

  // Limpar todos os dados
  clear(): void {
    localStorage.clear();
    this.tarefas = []
  }

  setTarefas(tasks:AbstractTask[]){
    this.tarefas = [...tasks]
  }


  private convertToTasks(key: string): void {

    this.tarefas = []

    let tasks: { id: number, name: string, description: string, status: number, panelOpenState: boolean }[]

    try {

      tasks = JSON.parse(localStorage.getItem(key) || '[]')

      for (let task of tasks) {
        const tarefa: AbstractTask = new Task()

        tarefa.setId = task.id
        tarefa.setName = task.name
        tarefa.setDescription = task.description
        tarefa.setPanelOpenState = task.panelOpenState

        tarefa.setStatus = task.status as StatusTask

        this.tarefas.push(tarefa)
      }
    }
    catch (e) { console.log(e) }
  }
}
