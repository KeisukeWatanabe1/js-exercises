const data = [
  //                                                                        3科目合計点
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 }, // 60
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 }, // 160
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 }, // 155
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 }, // 120
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 }, // 170
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 }, // 240
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 }, // 160
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 }, // 150
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 }, // 220
];

// math の全員の合計点
console.log(data.reduce((sumOfMath, elem) => sumOfMath + elem.math, 0)); // => 530

// クラスA の chemistry の平均点
const classA = data.filter((elem) => elem.class === "A");
console.log(
  classA.reduce(
    (average, elem, index, arr) => average + elem.chemistry / arr.length,
    0,
  ),
); // => 45

// クラスCの生徒の3科目合計点の平均点
const classC = data.filter((elem) => elem.class === "C");
console.log(
  classC.reduce(
    (average, elem, index, arr) =>
      average + (elem.math + elem.chemistry + elem.geography) / arr.length,
    0,
  ),
); // => 176.66666666666669

// 3科目合計点が最も高い人のname
const maxOfAllSubjects = data.reduce(
  (max, elem) => {
    const score = elem.math + elem.chemistry + elem.geography;
    if (score > max.score) {
      max.name = elem.name;
      max.score = score;
    }
    return max;
  },
  { name: "", score: 0 },
);
console.log(maxOfAllSubjects.name); // Frank

// 全体のgeographyの標準偏差
const averageOfGeography = data.reduce(
  (average, elem, index, arr) => average + elem.geography / arr.length,
  0,
);
const varianceOfGeography = data.reduce(
  (variance, elem, index, arr) =>
    variance + Math.pow(elem.geography - averageOfGeography, 2) / arr.length,
  0,
);
const SDOfGeography = Math.sqrt(varianceOfGeography);
console.log(SDOfGeography); // => 22.3330569358242
