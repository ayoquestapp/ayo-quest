import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../../core/primeNgModule';
import { TurmasService } from '../../../../core/services/turmas.service';
import { Tutor } from '../../../../core/models/type';

@Component({
  selector: 'app-step-responsavel',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './step-responsavel.component.html',
  styleUrl: './step-responsavel.component.scss'
})
export class StepResponsavelComponent implements OnInit {

  @Output() onPrev = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();
  @Input() form!: FormGroup;
  @Input() trilhas: any[] = [];
  tutores: Tutor[] = [];

  constructor(private TurmaService: TurmasService) {

  }

  ngOnInit(): void {
    this.getTutores()
  }


  getTutores() {
    this.TurmaService.getTutores().subscribe({
      next: (res) => {
        this.tutores = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  voltar() {
    this.onPrev.emit();
  }

  finalizar() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('step')

    this.finish.emit();
    
  }

}
