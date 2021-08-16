function cE(...args) {
    return document.createElement(...args);
}

function showDetails() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    deleteF();

    const { prime_numbers, total, averageTime } = getPrimeNumberFrom(
        parseInt(min),
        parseInt(max)
    );

    let matrix = document.getElementById("m_body");
    let count = document.getElementById("count");
    let average = document.getElementById("average");

    count.innerHTML = `Count of all prime numbers: ${total}`;
    average.innerHTML = `Average time taken by the "getPrimeNumberFrom": ${averageTime}`;

    for (let index = 0; index < prime_numbers.length; index++) {
        const element = prime_numbers[index];
        // var rww = { fdsf: sfd };
        let row = cE("tr");
        let td = cE("td");
        td.innerHTML = Object.keys(element)[0];
        row.appendChild(td);

        td = cE("td");
        td.innerHTML = element[Object.keys(element)[0]];
        row.appendChild(td);

        matrix.appendChild(row);
    }
}

function deleteF() {
    // document.createElement("d");

    let count = document.getElementById("count");
    let average = document.getElementById("average");

    count.innerHTML = `Count of all prime numbers: `;
    average.innerHTML = `Average time taken by the "getPrimeNumberFrom": `;
    let matrix = document.getElementById("m_body");
    while (matrix.firstChild) {
        matrix.removeChild(matrix.lastChild);
    }
}

function visibility() {
    let matrix = document.getElementById("m_body");
    if (matrix.style.visibility === "visible") {
        matrix.style.visibility = "collapse";
    } else {
        matrix.style.visibility = "visible";
    }
}
