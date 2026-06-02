import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { PrimeNgModule } from "../../../../../../core/primeNgModule";

@Component({
  selector: 'app-caixas-selecao',
  standalone: true,
  imports: [CommonModule, PrimeNgModule,FormsModule, ReactiveFormsModule],
  templateUrl: './caixas-selecao.component.html',
  styleUrl: './caixas-selecao.component.scss'
})
export class CaixasSelecaoComponent {
  @Input() form!: FormGroup;
  @Input() index!: number;

  @Output() remove = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  get alternativas(): FormArray {
    return this.form.get('alternativas') as FormArray;
  }

  addAlternativa() {
    this.alternativas.push(
      this.fb.group({
        texto: [''],
        correta: [false]
      })
    );
  }

  removeAlternativa(index: number) {
    this.alternativas.removeAt(index);
  }

  removeQuestion() {
    this.remove.emit();
  }
}
