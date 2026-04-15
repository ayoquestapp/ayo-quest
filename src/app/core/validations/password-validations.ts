import { ValidatorFn, AbstractControl, ValidationErrors, FormControl, FormGroupDirective, NgForm } from "@angular/forms";

/**
 * Interface ErrorStateMatcher para definir quando um componente deve exibir mensagens de erro.
 * Nota: Definida manualmente para evitar dependência direta de @angular/material/core se não estiver instalado.
 */
export interface ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

export class FormValidations {
  static senhasIguaisValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;

    // Só valida se os dois tiverem valor
    if (!senha || !confirmar) {
      return null;
    }

    return senha === confirmar ? null : { senhasDiferentes: true };
  };
}


export class ConfirmPasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const passwordsMismatch = form?.hasError('senhasDiferentes');
    return !!(control && control.invalid && (control.dirty || control.touched) || (passwordsMismatch && control?.touched));
  }
}
