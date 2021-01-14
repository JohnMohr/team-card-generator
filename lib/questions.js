const managerQuestions = [ {
    type: 'input',
    name: 'managerName',
    message: "What is the Manager's name?",
},{
    type: 'input',
    name: 'managerID',
    message: "",
},{
    type: 'input',
    name: 'managerEmail',
    message: '',
},{
    type: 'input',
    name: 'managerOffice',
    message: '',
},
];

const createEmployee = [ {
    type: 'confirm',
    name: 'createEmp',
    message: "Add another team member?"
}];

const employeeType = [ {
    type: 'list',
    name: 'empRole',
    choices: ['Engineer', 'Intern'],
    message: "Intern or Engineer?"
}];

const engineerQuestions = [ {
    type: 'input',
    name: 'engineerName',
    message: "What is the Engineer's name?",
},{
    type: 'input',
    name: 'engineerID',
    message: "",
},{
    type: 'input',
    name: 'engineerEmail',
    message: '',
},{
    type: 'input',
    name: 'engineerOffice',
    message: '',
},
];

const internQuestions = [ {
    type: 'input',
    name: 'internName',
    message: "What is the Intern's name?",
},{
    type: 'input',
    name: 'internID',
    message: "",
},{
    type: 'input',
    name: 'internEmail',
    message: '',
},{
    type: 'input',
    name: 'internOffice',
    message: '',
},
];