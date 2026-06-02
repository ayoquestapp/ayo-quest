import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { PrimeNgModule } from "../../../../../core/primeNgModule";


@Component({
  selector: 'app-config-quiz',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './config-quiz.component.html',
  styleUrl: './config-quiz.component.scss'
})
export class ConfigQuizComponent {
  @Input() form!: FormGroup;
  @Input() totalQuestao!: number;
  notaMinima: number = 70;



}
