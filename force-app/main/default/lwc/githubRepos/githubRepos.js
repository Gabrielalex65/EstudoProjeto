import { LightningElement, track } from 'lwc';

export default class GitHubRepos extends LightningElement {
    @track repositories;

    connectedCallback() {
        this.fetchRepositories('gabrielalex65');
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