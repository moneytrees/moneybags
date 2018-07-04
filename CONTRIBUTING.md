#### Merging and Deployment Process:
 
 There is a merge and deployment process to be followed in order for Continous Integration and QA/Testing to work. Please talk to your SMs and DMs before merging. The below is an illustration of what a branch-filtering process looks like; the actual branches we use are _develop_->_uat_->_master_. Merged features passing tests located in the _develop_ branch is automatically deployed to the development server. Merged features passing tests located in the _uat_ branch are automatically deployed to an User Acceptance Testing server. Features passing tests on both branches and merged to the _master_ branch are automatically deployed to the Demo server.
 If you are still unclear about the process after reading the following sections, please talk to the project's SMs and DMs before merging.
 
 ![CircleCI](https://circleci.com/blog/media/cropped%20-restart-from-fail.png)

### Process:

Continuous integration will be done through branch-filtering. The workflow will be configured with jobs on three branches: develop, uat, and master. In order for this to work, unit tests on specific features will be done on the `develop` branch (usually backend assertions). Integration tests will be done on the `uat` branch (usually frontend assertions as the expected response while communicating with the backend). Deployment from master to the server will be executed based on passing tests on both `uat` and `develop` are passing. 

Any tests perform by users on the `uat` branch that does not meet acceptance criteria will either be classified at a bug, or as a feature not implemented as expected by the criteria established by the feature owners and other stakeholders, and will re-enter the develop phase, with additional testing where appropriate.

For the start of this project, development will be local and on the development server until enough tests have been formulated. All merging and deployment, therefore, will start at the `develop` branch. For additional questions, please reach out to your Scrum Master(s) and Deployment Manager(s).

### Tips for collaborating through pull requests

* Always run tests scripts before building new features
    * If there is an error, bring it up to the QA team
* Let your Scrum Master know you submitted a pull request
* For merge conflicts, if you aren't sure what to delete or merge, ask the code owners
* Try to append your branch with a meaningful name
    * Ask clarification from your SM and PM if you will be working on a single feature throughout the project or multiple features
    * Depending on the answer, name your branch with your name, the feature you're working on, or both: `thais-shorterm-analysis`
* If you are testing your feature after it has been deployed, and it doesn't work as expected, bring it up to the QA team
* QA team, if you aren't sure where to write a test based on the description above (`uat` vs `develop`), talk to one of the Deployment Managers

### Happy Coding!