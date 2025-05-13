export class Person{
    #birthday;
    constructor(firstName, lastName, birthday){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = new Date(birthday);
    }

    get birthday() {
        const month = String(this.#birthday.getMonth() + 1).padStart(2, '0');
        const day = String(this.#birthday.getDate()).padStart(2, '0');
        const year = this.#birthday.getFullYear();
        return `${month}-${day}-${year}`;
    }


    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getAge(){
        const today = new Date();
        let age = today.getFullYear() - this.#birthday.getFullYear();

        const hasHadBirthdayThisYear =
            today.getMonth() > this.#birthday.getMonth() ||
            (today.getMonth() === this.#birthday.getMonth() &&
             today.getDate() >= this.#birthday.getDate());

        if (!hasHadBirthdayThisYear) {
            age--;
        }

        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;

        let suffix;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            suffix = 'лет';
        } else if (lastDigit === 1) {
            suffix = 'год';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            suffix = 'года';
        } else {
            suffix = 'лет';
        }

        return `${age} ${suffix}`;
    }

    getAgeValue() {
        const today = new Date();
        let age = today.getFullYear() - this.#birthday.getFullYear();
        const hasHadBirthdayThisYear =
            today.getMonth() > this.#birthday.getMonth() ||
            (today.getMonth() === this.#birthday.getMonth() &&
                today.getDate() >= this.#birthday.getDate());

        if (!hasHadBirthdayThisYear) {
            age--;
        }

        return age;
    }


}
