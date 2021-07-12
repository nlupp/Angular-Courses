import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component ({
    templateUrl: './course-info.component.html'
  
})

export class CourseInfoComponent implements OnInit {

    //courseId!: number;
    course!: Course | undefined //comentado pq a filtragem agor é por outro metodo

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { } // trigado a uma rota que retorna nesse componente a rota ativa, no momento ta pegando as inf. de path variator

    ngOnInit(): void {
        //this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
        //this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
    }

    save(): void {
        this.courseService.save(this.course!);
    }

}