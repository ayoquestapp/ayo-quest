import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { PrimeNgModule } from "../../../../../../core/primeNgModule";

@Component({
  selector: 'app-questao-aberta',
  standalone: true,
  imports: [CommonModule, PrimeNgModule , FormsModule, ReactiveFormsModule],
  templateUrl: './questao-aberta.component.html',
  styleUrl: './questao-aberta.component.scss'
})
export class QuestaoAbertaComponent {
  @Input() form!: FormGroup;
  @Input() index!: number;

  @Output() remove = new EventEmitter<void>();

  removeQuestion() {
    this.remove.emit();
  }
}