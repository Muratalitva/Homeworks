let year = prompt("Введите ваш год рождения:");

if (year > new Date().getFullYear()) {
  alert("вы еще не родились");
} else {
  let age = new Date().getFullYear() - year;

  if (age < 30) {
    alert("вам меньше 30 лет!");
  } else if (age >= 30 && age < 60) {
    alert("вам больше 30 лет, но меньше 60 лет!");
  } else {
    alert("вам больше 60 лет! Рекомендуется посетить врача.");
  }
}