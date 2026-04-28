  
  class Person {
    // Static property
    static serialNumber = 45;
    
    // Constructor
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    //Method
    introduce() {
      console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
    
    greet() {
      console.log("Hi How are you?");
    } 
    
    static help() {
      console.log('I am a person class, how can i help you?');
    }
  }
  
  const person1 = new Person("Muza", 25);
  const person2 = new Person("Martin", 33);
  const person3 = new Person("Michael", 11); 
  
  person1.greet();
  person2.introduce(); 
  person3.introduce();
  
  
  