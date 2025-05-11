import {Worker} from "./modules/worker.js";
// Создание 5 работников
const worker1 = new Worker('Иван', 'Иванов', '03-05-1990', 'Разработчик');
const worker2 = new Worker('Мария', 'Сидорова', '06-11-1985', 'Тестировщик');
const worker3 = new Worker('Олег', 'Петров', '10-01-2000', 'Дизайнер');
const worker4 = new Worker('Анна', 'Кузнецова', '21-08-1998', 'Аналитик');
const worker5 = new Worker('Дмитрий', 'Смирнов', '12-03-1995', 'Developer');
// Меняем ставку для троих
worker1.rate = 1500;
worker2.rate = 2000;
worker3.rate = 1800;
worker4.rate = 2100;
worker5.rate = 1600;


// Добавляем рабочие дни (в том числе с ошибками)
worker1.addDays(10);
worker2.addDays(12);
worker3.addDays(20);
worker4.addDays(-2);  // Ошибка
worker5.addDays(50);  // Ошибка


// Вывод зарплаты
const workers = [worker1, worker2, worker3, worker4, worker5];
workers.forEach(worker => {
    console.log(`${worker.getFullName()} - ${worker.getSalary()} рублей`);
});

// Кто отработал больше всех
Worker.whoWorkedMore(...workers);

// Кто самый младший
Worker.whoIsYounger(...workers);