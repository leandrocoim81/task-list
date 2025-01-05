import { AbstractTask } from "../abstractTypes/abstract-task";
import { StatusTask } from "../enums/status-task";


export class Task extends AbstractTask {
    override set setId(id: number) {
        this.id = id
    }

    override set setPanelOpenState(panelOpenState: boolean) {
        this.panelOpenState = panelOpenState
    }
    override set setName(name: string) {
        this.name = name
    }
    override set setDescription(description: string) {
        this.description = description
    }
    override set setStatus(status: StatusTask) {
        this.status = status
    }

    override get getId(): number {
        return this.id
    }
    override get getName(): string {
        return this.name
    }
    override get getDescription(): string {
        return this.description
    }
    override get getStatus(): StatusTask {
        return this.status
    }
    override get getPanelOpenState(): boolean {
        return this.panelOpenState
    }
}
