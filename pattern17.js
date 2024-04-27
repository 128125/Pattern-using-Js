/*
1
22
123
4444
12345
*/
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(`${i%2==0?i:j}`)
    }
    console.log()
}