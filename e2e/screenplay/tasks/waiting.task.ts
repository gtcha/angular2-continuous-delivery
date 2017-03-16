import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';


export class Waiting implements Task {

    static onFirstPage()
    {
        return new Waiting();
    }
    performAs(actor: PerformsTasks): PromiseLike<void> {
        throw new Error('Method not implemented.');
    }
}