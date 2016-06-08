import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle.component';

@Component({
    selector: 'my-app',
    template: '<puzzle></puzzle>',
		directives: [PuzzleComponent]
})

export class AppComponent {

}

