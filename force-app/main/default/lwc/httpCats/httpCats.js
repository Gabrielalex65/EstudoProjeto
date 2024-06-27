import { LightningElement,track } from 'lwc';

export default class HttpCats extends LightningElement {
    @track inputValue;
    imageURL = 'https://http.cat/' + '200' + '.jpg';
    
    handleInputChange(event) {
        this.inputValue = event.target.value;
    } 
    handleClick(event) {
        console.log(this.inputValue);
        this.imageURL = 'https://http.cat/' + this.inputValue + '.jpg';
        console.log(this.imageURL);
        this.template.querySelector('img').src = this.imageURL;
    }

}