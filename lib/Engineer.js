// Code to define and export the Engineer class. This class inherits from Employee.
const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;