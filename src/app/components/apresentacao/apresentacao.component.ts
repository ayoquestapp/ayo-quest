import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgClass } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss'
})
export class ApresentacaoComponent {

}
