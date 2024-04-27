/*
1B3D5
1B3D5
1B3D5
1B3D5
1B3D5
*/
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j % 2 == 0)
//             process.stdout.write(`${String.fromCharCode(j+64)}`)
//         else
//             process.stdout.write(`${j}`)

//     }
//     console.log()
// }


/*
1b3d5
1b3d5
1b3d5
1b3d5
1b3d5
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j % 2 == 0)
            process.stdout.write(`${String.fromCharCode(j+96)}`)
        else
            process.stdout.write(`${j}`)

    }
    console.log()
}