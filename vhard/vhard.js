function person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;

    this.exercise = function() {
    console.log("Running is fun said noone ever");
    };

this.fetchJob = function() {
    console.log(`${this.name} is a ${this.job}`);
};
} 

function Programmer(name, job, age, languages){
    Person.apply(this, [name, job, age]) //todo
    this.languages = languages;
    this.busy = true;

    this.completeTask = function(){
        this.busy = false;
    };
    this.acceptNewTask = function(){
        this.busy ? `${this.name} would like to take on more tasks` : `${this.name} isn't able to accept any new tasks`;
    };
    this.learnLanguage = function(){
        this.languages
}
// I got stuck on this part with the this statements and everything after this point.

const martin =("Martin Lazore", "software engineer", "21");
