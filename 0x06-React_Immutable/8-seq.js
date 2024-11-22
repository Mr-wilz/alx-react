import { Seq } from 'immutable';

/**
 * Filters and formats students with scores greater than or equal to 70.
 * Capitalizes the first and last names of qualified students and prints them.
 * @param {Object} grades - An object where keys are student IDs and values are student details, including scores.
 * @returns {void} Logs the transformed object of best students to the console.
 */

export default function printBestStudents(grades) {
  const bestStudents = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  console.log(bestStudents.toObject());
}