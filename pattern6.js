/*
11111
00000
11111
00000
11111
*/
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        process.stdout.write(`${i%2}`)
    }
    console.log()
}