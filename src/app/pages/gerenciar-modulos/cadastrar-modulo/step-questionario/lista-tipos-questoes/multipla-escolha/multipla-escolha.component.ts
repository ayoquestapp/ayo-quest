import { CommonModule } from "@angular/common";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { PrimeNgModule } from "../../../../../../core/primeNgModule";

@Component({
  selector: 'app-multipla-escolha',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './multipla-escolha.component.html',
  styleUrl: './multipla-escolha.component.scss'
})
export class MultiplaEscolhaComponent implements OnInit {
  @Input() model: any;
  @Input() index: number = 0;
  @Output() remove = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.model as FormGroup;

    const alternativas = this.form.get('alternativas') as FormArray;

    if (!alternativas || alternativas.length === 0) {
      this.form.setControl(
        'alternativas',
        this.fb.array([
          this.fb.group({ texto: [''] }),
          this.fb.group({ texto: [''] })
        ])
      );
    }
  }

  get alternativas(): FormArray {
    return this.form.get('alternativas') as FormArray;
  }

  addAlternativa() {
    this.alternativas.push(this.fb.group({
      texto: ['', Validators.required]
    }));
  }

  removeAlternativa(idx: number) {
    if (this.alternativas.length > 1) {
      this.alternativas.removeAt(idx);
      if (this.form.get('correta')?.value === idx) {
        this.form.get('correta')?.setValue(null);
      }
    }
  }

  removeQuestion() {
    this.remove.emit();
  }
}