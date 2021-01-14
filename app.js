const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const questions = require("./lib/questions.js");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function init() {
    try {

        let managerResponses = await inquirer.prompt(questions.manager);

        let newManager = new Manager (   
            managerResponses.managerName,
            managerResponses.managerID,
            managerResponses.managerEmail,
            managerResponses.managerOffice
        );

        const employees = [];

        employees.push(newManager);
        console.log("A new Manager has been added to the team ", newManager )


        let createEmployee = await inquirer.prompt(questions.create);

        let employeeRole;

        switch (createEmployee.createEmp) {
            case false:
                console.log("Input Defined. Generating your page now")
                return;
            case true:
                employeeRole = await inquirer.prompt(questions.employee);
        };

        switch (employeeRole.empRole) {
            case 'Engineer':
                let engineerResponses = await inquirer.prompt(questions.engineer);
                let newEngineer = new Engineer (
                    engineerResponses.engineerName,
                    engineerResponses.engineerID,
                    engineerResponses.engineerEmail,
                    engineerResponses.engineerGithib
                    );
                employees.push(newEngineer);
                console.log("A new Engineer has been added to the team ", newEngineer );
                break;
            case 'Intern':
                let internResponses = await inquirer.prompt(questions.intern);
                let newIntern = new Intern (
                    internResponses.internName,
                    internResponses.internID,
                    internResponses.internEmail,
                    internResponses.internSchool
                );
                employees.push(newIntern);
                console.log("A new Intern is here for your disposal ", newIntern )
        }
    } catch (error) {
        console.log(error)
    }
};

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
