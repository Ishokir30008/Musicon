/*A digital school catalog to hold quick reference material for each school in the city*/

//A parent class  
class School {
  //A constructor that accepts three parameters
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //Getter method for the properties
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //Setter method for numberOfStudents property
  set numberOfStudents(newValue) {
    //Checking if the input (newNumberOfStudents) is a number
    if(typeof newValue === 'Number'){
      this._numberOfStudents =  newValue;
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
}

quickFacts() {
  console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`);
}

  //A static method that receive one parameter
  static pickSubstituteTeacher(substituteTeachers) {
    const randNo = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[randNo];
  }

}
 //A primary school class that extends the school class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'Primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//A highschool class that extends the school class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'HighSchool', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeam() {
    console.log(this._sportsTeam);
  }
}

//A primary school instance
const lorraineHansbury = new PrimarySchool('lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13');

lorraineHansbury.quickFacts();

const abc = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(abc);

//High school instance

const alSmith = new HighSchool('Al E. Smith',415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;
console.log(alSmith);