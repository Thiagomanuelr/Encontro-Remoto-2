
let numeroDeAlunos = 10;

let contador = 0

do
{
    if (contador == 0)
    {
        console.log("o número é zero.")
    }
    else if(contador %2 == 0)
    {
        console.log("o número "+contador+" é par.")
    }
    else
    {
        console.log("o número "+contador+" é impar.")
    }

    contador++
}while(contador < numeroDeAlunos)

/*let contador = 0;
while(contador < numeroDeAlunos)
{
    if (contador == 0)
    {
        console.log("o número é zero.")
    }
    else if(contador %2 == 0)
    {
        console.log("o número "+contador+" é par.")
    }
    else
    {
        console.log("o número "+contador+" é impar.")
    }

    contador++
}*/

/*for (let contador = 0; contador < numeroDeAlunos; contador++)
{
    //console.log(contador)

    if (contador == 0)
    {
        console.log("o número é zero.")
    }
    else if(contador %2 == 0)
    {
        console.log("o número "+contador+" é par.")
    }
    else
    {
        console.log("o número "+contador+" é impar.")
    }
}*/