import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class formValidation extends LightningElement {
    handleSuccess(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Operação criada.',
                variant: 'success',
            })
        );
    }

    handleChange(event) {
        console.log('Voce selecionou: ' + event.detail.value[0]);
    }
}