import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0; //(variavel)

    starWidth!: number; // (outra variavel do tamanho que vai esconder parte do tamanho da div (de estrlas))

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;

    }

}