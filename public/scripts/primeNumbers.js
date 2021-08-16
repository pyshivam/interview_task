// start 20 to 2000
// 4000 to 4 lakh
function getPrimeNumberFrom(from, to) {
    var arrayOfPrimeNumbers = [2, 3];

    function checkFromArray(number) {
        return arrayOfPrimeNumbers.find((v) => {
            return number % v === 0;
        });
    }

    // done: approved
    function isPrime(number) {
        let stepOne = false;
        let stepTwo = false;

        if (number % 2 != 0 && number % 3 != 0) {
            stepOne = true;
        }

        if (checkFromArray(number) == undefined) {
            arrayOfPrimeNumbers.push(number);
            stepTwo = true;
        }

        return stepOne && stepTwo;
    }

    function timeCalculator(functionToCalculateTime, ...args) {
        // let start_time = process.hrtime(); // node
        let start_time = window.performance.now(); // browser 1
        // let start_time = new Date().getTime(); // browser 2
        let is_prime = functionToCalculateTime(...args);
        // let time_taken = parseFloat(
        //     (process.hrtime(start_time)[1] / 1000000).toFixed(4)
        // ); // node

        let time_taken = window.performance.now() - start_time; // browser 1
        // let time_taken = new Date().getTime() - start_time; // browser 2

        return { is_prime, time_taken };
    }

    let prime_numbers = [];
    let total_time = 0.0;

    for (let index = 4; index < from; index++) {
        isPrime(index);
    }

    for (let index = from; index < to; index++) {
        const { is_prime, time_taken } = timeCalculator(isPrime, index);
        if (is_prime) {
            // find time to calculate
            prime_numbers.push({ [index]: time_taken });
            total_time += time_taken;
        }
    }

    return {
        prime_numbers,
        total: prime_numbers.length,
        averageTime: parseFloat(
            (total_time / prime_numbers.length).toPrecision(4)
        ),
    };
}

// console.log(getPrimeNumberFrom(20, 200));

// O(1) - instant
// O(n log n)
// O(n)
// O(n2)
// O(2n)
// O(nn)
