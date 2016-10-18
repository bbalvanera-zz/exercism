class School {
  private students = {}

  public add(name: string, grade: number) {
    let students: string[] = this.students[grade] || [];

    students.push(name);
    this.students[grade] = students.sort();
  }

  public roster(): any {
    return this.students;
  }

  public grade(grade: number): string[] {
    return this.students[grade] || [];
  }
}

export = School;