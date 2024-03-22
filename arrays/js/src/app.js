/* ------------------------------------------------------------------------------------------------
 * Demonstartion of Arrays
 *
 * https://dxt.rs/category/programming/general/arrays
 */

oneDimArray();
twoDimArray();

/*
 * oneDimArray demonstrates the usage of a one dimensional array.
 */
function oneDimArray() {
    console.log("----------------------------------------------------------");
    console.log("- One Dimensional Arrays                                 -\n");

    // Declare and initialise a 10 elment array
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Get the length of the array
    console.log("len:", arr1.length);

    // Access array elements by iterating over the array using for loop
    for (let i = 0; i < arr1.length; i++) {
        console.log("idx:", i, "val:", arr1[i]);
    }

    // Access array elements by iterating over the array using for of loop
    let i = 0;
    for (const v of arr1) {
        console.log("idx:", i, "val:", v);
        i++;
    }

    // Declare a 10 elment array
    const arr2 = [];

    // Fill the array with values using direct indexing
    for (let i = 0; i < 10; i++) {
        arr2[i] = i + 1;
    }
    console.log(arr2);

    // Emptying an array
    arr2.length = 0;

    // Fill the array with values by appending i.e. pushing, values onto the end
    for (let i = 0; i < 10; i++) {
        arr2.push(i + 1);
    }
    console.log(arr2);

    // Remove i.e. pop, iteams off of the end
    for (let i = 0; i < 10; i++) {
        arr2.pop(i + 1);
    }
    console.log(arr2);

    // Fill the array with values by prepending i.e. unshifting, values onto the beginning
    for (let i = 0; i < 10; i++) {
        arr2.unshift(i + 1);
    }
    console.log(arr2);

    // Remove i.e. shifting, iteams off of the beginning
    for (let i = 0; i < 10; i++) {
        arr2.shift(i + 1);
    }
    console.log(arr2);
}

/*
 * oneDimArray demonstrates the usage of a two dimensional array.
 */
function twoDimArray() {
    console.log("\n----------------------------------------------------------");
    console.log("- Two Dimensional Arrays                                 -\n");

    // Declare and initialise a 10 elment, 2 dimensional array
    let arr1 = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
    ];
    console.log(arr1);

    // Access array elements by iterating over the array
    for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 5; c++) {
            console.log("row:", r, "col:", c, "val:", arr1[r][c]);
        }
    }

    // Declare a 10 elment array
    let arr2 = [[], [], [], [], []];

    // Fill the array with values
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            arr2[i][j] = i + 1;
        }
    }
    console.log(arr2);
}
