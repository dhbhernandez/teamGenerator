// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getGithub() {
        console.log(this.github);
        return this.github;
    }
    getRole() {
        console.log(this.role);
        return "Engineer"
    }
}
module.exports = Engineer;
