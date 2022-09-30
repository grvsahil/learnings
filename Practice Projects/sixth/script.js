function getPrime() {
    const lowerNumber = parseInt(document.getElementById("from").value);
    const higherNumber = parseInt(document.getElementById("to").value);

    if (lowerNumber > higherNumber) {
        alert("From value must not be greater than to value.");
    } else if (lowerNumber < 2) {
        alert("Please enter a number greater than 1");
    } else if (higherNumber > 200) {
        alert("Please enter a number less than 200");
    } else {
        let arr = [];
        for (let i = lowerNumber; i <= higherNumber; i++) {
            let flag = 0;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }

            if (i > 1 && flag == 0) {
                arr.push(i);
            }
        }
        document.getElementById("fx").textContent = `List of prime numbers between ${lowerNumber} and ${higherNumber} :`
        document.getElementById("result").textContent = arr.join(", ");
    }

}