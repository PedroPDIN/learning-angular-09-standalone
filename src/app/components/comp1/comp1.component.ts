import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformTextPipe } from '../../pipes/transform-text.pipe';
import { ChangeTextColorDirective } from '../../directives/change-text-color.directive';
import { PersonService } from '../../services/person.service';
import { ComponentsNgModuleModule } from '../ng-module/components-ng-module.module';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [
    CommonModule,
    TransformTextPipe,
    ChangeTextColorDirective,
    ComponentsNgModuleModule,
  ],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
})
export class Comp1Component implements OnInit {
  private readonly _personService = inject(PersonService);

  // constructor(private readonly _personService: PersonService) {}

  ngOnInit() {
    this._personService.getPerson().subscribe(console.log);
  }
}
