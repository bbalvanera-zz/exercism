"use strict";
class School {
    constructor() {
        this.students = {};
    }
    add(name, grade) {
        let students = this.students[grade] || [];
        students.push(name);
        this.students[grade] = students.sort();
    }
    roster() {
        return this.students;
    }
    grade(grade) {
        return this.students[grade] || [];
    }
}
module.exports = School;
