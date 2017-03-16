import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Open } from 'serenity-js/lib/screenplay-protractor';

export class Start implements Task {


    static onFirstPage()
    {
        return new Start();
    }
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('http://localhost:8080')
        );
    }
}