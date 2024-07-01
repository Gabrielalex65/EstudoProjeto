import { LightningElement, track } from 'lwc';

export default class GitHubRepos extends LightningElement {
    @track repositories;
    @track inputUsername;
    @track buttonClicked;

    handleInputChange(event) {
        this.inputUsername = event.target.value;
    } 

    handleClick(event) {
        
        this.fetchRepositories(this.inputUsername);
        this.buttonClicked = true;
    }

    fetchRepositories(username) {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                this.repositories = data;
            })
            .catch(error => {
                console.error('Error fetching repositories:', error);
            });
    }
}