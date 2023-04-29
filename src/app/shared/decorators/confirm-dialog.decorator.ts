
import { IConfirmDialogData } from '../interfaces';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { DialogService } from '../services';

const defaultConfirmData = {
  title: "Confirmation",
  message: "Are you sure you want to perform this action?"
}

export function needConfirmation ( confirmData : IConfirmDialogData = defaultConfirmData) {

  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any) {
      DialogService.getInstance()?.openDialog(confirmData,ConfirmDialogComponent).subscribe((validation) => {
        if (validation){
          originalMethod.apply(this, args);
        }
      });
    };

    return descriptor;
  };

}
