/*
12345
23456
34567
45678
56789
*/

// for(let i=1;i<=5;i++)
// {
//     for(let j=0;j<=4;j++)
//     {
//         process.stdout.write(`${i+j}`)
//     }
//     console.log()
// }


for(let i=1;i<=5;i++)
{
    for(let j=i;j<=i+4;j++)
    {
        process.stdout.write(`${j}`)
    }
    console.log()
}