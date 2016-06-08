import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'puzzle',
	templateUrl: 'templates/html/puzzle-header.html',
	styleUrls: ['src/css/puzzle-header.css'],
})

export class PuzzleComponent implements OnInit {
	switchNumber1: number;
	switchNumber2: number;
	switchNumber3: number;
	switchNumber4: number;

	ngOnInit() {
		this.switchNumber1 = Math.round(Math.random());
		this.switchNumber2 = Math.round(Math.random());
		this.switchNumber3 = Math.round(Math.random());
		this.switchNumber4 = Math.round(Math.random());

		console.log(this.switchNumber1, this.switchNumber2, this.switchNumber3, this.switchNumber4)
	}

}