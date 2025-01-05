import { StatusTask } from "../enums/status-task";
import { DaoService } from "../services/dao.service";

export abstract class AbstractTask {

    protected id: number;
    protected name: string;
    protected description: string;
    protected status: StatusTask;
    protected panelOpenState: boolean;

    constructor() {
        this.id = 0;
        this.name = ''
        this.description = '';
        this.status = StatusTask.PENDENTE;
        this.panelOpenState = false;
    }

    abstract get getId(): number;
    abstract get getName(): string;
    abstract get getDescription(): string;
    abstract get getStatus(): StatusTask;
    abstract get getPanelOpenState(): boolean;

    abstract set setId(id:number);
    abstract set setName(name: string);
    abstract set setDescription(description: string);
    abstract set setStatus(status: StatusTask);
    abstract set setPanelOpenState(panelOpenState: boolean);

    // Métodos concretos opcionais
    togglePanelState(dao: DaoService): void {
        setTimeout(() => {
            this.panelOpenState = !this.panelOpenState;
            console.log('executou')
            //this.cdr?.detectChanges();
            dao.updateItem('tasks')
        }, 0);
    }
}
