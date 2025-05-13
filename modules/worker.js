
import { Person } from './person.js';

export class Worker extends Person {
    #rate = 1000;
    #days = 0;

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
    }

    get rate() {
        return this.#rate;
    }

    set rate(value) {
        if (value >= 1000) {
            this.#rate = value;
        } else {
            console.error('Ошибка: ставка не может быть меньше 1000 рублей.');
        }
    }

    get days() {
        return this.#days;
    }

    set days(value) {
        if (value >= 0) {
            this.#days = value;
        } else {
            console.error('Ошибка: количество дней не может быть отрицательным.');
        }
    }

    addDays(numberOfDays) {
        const daysInMonth =new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        if (typeof numberOfDays !== 'number' || numberOfDays <= 0) {
            console.error('Ошибка: количество добавляемых дней должно быть больше 0.');
            return;
        }
        if (this.#days + numberOfDays > daysInMonth) {
            console.error(`Ошибка: общее количество отработанных дней (${this.#days + numberOfDays}) превышает количество дней в текущем месяце (${daysInMonth}).`);
            return;
        }

        this.#days += numberOfDays;
    }

    getSalary() {
        let baseSalary = this.#rate * this.#days;

        const today = new Date();
        const birthdayMonth =new Date(this.birthday).getMonth();
        const currentMonth = today.getMonth();

        if (birthdayMonth === currentMonth) {
            const bonus = baseSalary * 0.1;
            baseSalary += bonus;
        }

        return baseSalary;
    }

    static whoWorkedMore(...workers) {
        if (workers.length === 0) {
            console.log('Нет работников для сравнения.');
            return;
        }

        // Найдём максимум отработанных дней
        const maxDays = Math.max(...workers.map(worker => worker.days));

        // Найдём всех работников с этим значением
        const topWorkers = workers.filter(worker => worker.days === maxDays);

        // Выводим
        topWorkers.forEach(worker => {
            console.log(`Больше всех отработал ${worker.getFullName()}. Количество рабочих дней - ${worker.days}`);
        });
    }


    static whoIsYounger(...workers) {
        if (workers.length === 0) return;


        const minAge = Math.min(...workers.map(w => w.getAgeValue()));
        const youngest = workers.filter(w => w.getAgeValue() === minAge);

        youngest.forEach(worker => {
            console.log(`${worker.getFullName()} ${worker.getAge()}`);
        });
    }


}


