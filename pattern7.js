/*
10101
01010
10101
01010
10101
*/
for(let i=1;i<=5;i++)
{
    for(let j=i;j<=i+4;j++)
    {
        process.stdout.write(`${j%2}`)
    }
    console.log()
}