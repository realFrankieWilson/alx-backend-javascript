namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements = () => 'Here is the list of requirements for Cpp';

    getAvailableTeacher = () => {
      if (this.teacher.experienceTeachingC === undefined) {
        return 'NO available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
