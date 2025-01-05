import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';

import { StatusTaskType } from './types/status-task-type';

@Component({
  selector: 'app-status-task',
  imports: [MatChipsModule, CommonModule],
  templateUrl: './status-task.component.html',
  styleUrl: './status-task.component.scss'
})
export class StatusTaskComponent {
  //Desativa os eventos dos botões
  @Input() disableButtonsEvents:boolean = false

  @Input() statusTask:StatusTaskType[] = []
  @Input() selectedValue:number = 0

  //Emite o evento para o componente pai gerenciar
  @Output() chipChanged:EventEmitter<number> = new EventEmitter()

  //Evento de mudança na seleção dos chips
  onChangeChip(value:number){
    this.chipChanged.emit(value)
  }
}
