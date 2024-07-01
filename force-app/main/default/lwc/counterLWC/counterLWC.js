import { LightningElement,track } from 'lwc';

export default class CounterLWC extends LightningElement {
    @track counterValue = 0

    handleClickPlus(event) {
        this.counterValue += 1;
        console.log(this.counterValue);
    }    

    handleClickMinus(event) {
        if(this.counterValue != 0){
            this.counterValue -= 1;
        }
        
        console.log(this.counterValue);
    } 
}