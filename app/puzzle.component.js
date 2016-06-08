System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switchNumber1 = Math.round(Math.random());
                    this.switchNumber2 = Math.round(Math.random());
                    this.switchNumber3 = Math.round(Math.random());
                    this.switchNumber4 = Math.round(Math.random());
                    console.log(this.switchNumber1, this.switchNumber2, this.switchNumber3, this.switchNumber4);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        templateUrl: 'templates/html/puzzle-header.html',
                        styleUrls: ['src/css/puzzle-header.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFlQSxDQUFDO2dCQVRBLGtDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDNUYsQ0FBQztnQkFuQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLG1DQUFtQzt3QkFDaEQsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQ3hDLENBQUM7O21DQUFBO2dCQWlCRixzQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsNkNBZUMsQ0FBQSIsImZpbGUiOiJwdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3B1enpsZScsXHJcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaHRtbC9wdXp6bGUtaGVhZGVyLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL3B1enpsZS1oZWFkZXIuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzd2l0Y2hOdW1iZXIxOiBudW1iZXI7XHJcblx0c3dpdGNoTnVtYmVyMjogbnVtYmVyO1xyXG5cdHN3aXRjaE51bWJlcjM6IG51bWJlcjtcclxuXHRzd2l0Y2hOdW1iZXI0OiBudW1iZXI7XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zd2l0Y2hOdW1iZXIxID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuXHRcdHRoaXMuc3dpdGNoTnVtYmVyMiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcblx0XHR0aGlzLnN3aXRjaE51bWJlcjMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG5cdFx0dGhpcy5zd2l0Y2hOdW1iZXI0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN3aXRjaE51bWJlcjEsIHRoaXMuc3dpdGNoTnVtYmVyMiwgdGhpcy5zd2l0Y2hOdW1iZXIzLCB0aGlzLnN3aXRjaE51bWJlcjQpXHJcblx0fVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
