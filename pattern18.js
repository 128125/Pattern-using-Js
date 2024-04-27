/*
1
12
333
1234
55555
*/
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(`${i%2==0?j:i}`)
    }
    console.log()
}