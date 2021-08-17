// start 20 to 2000
// 4000 to 4 lakh

window.arrayOfPrimeNumbers = [2, 3];
window.maxPrimeLimit = 3;

function getPrimeNumberFrom(from, to) {
    function updateGlobalList(max) {
        if (window.maxPrimeLimit < max) {
            console.log("database updated");
            for (let index = maxPrimeLimit; index <= max; index++) {
                if (isPrime(index)) {
                    arrayOfPrimeNumbers.push(index);
                }
            }
            window.maxPrimeLimit = max;
        }
    }

    function checkFromArray(number) {
        const sqrt = Math.round(Math.sqrt(number));
        for (let index = 0; index < arrayOfPrimeNumbers.length; index++) {
            const v = arrayOfPrimeNumbers[index];
            if (v <= sqrt) {
                if (number % v === 0) {
                    return true;
                }
            } else {
                return false;
            }
        }
        return false;
    }

    // done: approved
    function isPrime(number) {
        let stepOne = false;
        let stepTwo = false;

        if (number < 3) {
            return true;
        }

        if (number % 2 != 0 && number % 3 != 0) {
            stepOne = true;
        }

        if (checkFromArray(number) == false) {
            stepTwo = true;
        }

        return stepOne && stepTwo;
    }

    function timeCalculator(functionToCalculateTime, ...args) {
        // let start_time = process.hrtime(); // node
        // let start_time = window.performance.now(); // browser 1
        // let start_time = new Date().getTime(); // browser 2
        performance.mark("start_time");
        let is_prime = functionToCalculateTime(...args);
        performance.mark("end_time");
        let time_taken = performance.measure(
            "measure",
            "start_time",
            "end_time"
        )["duration"];
        performance.clearMeasures();
        performance.clearMarks();
        // let time_taken = parseFloat(
        //     (process.hrtime(start_time)[1] / 1000000).toFixed(4)
        // ); // node

        // let time_taken = window.performance.now() - start_time; // browser 1
        // let time_taken = new Date().getTime() - start_time; // browser 2

        return { is_prime, time_taken };
    }

    let prime_numbers = [];
    let total_time = 0.0;

    updateGlobalList(to);

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
