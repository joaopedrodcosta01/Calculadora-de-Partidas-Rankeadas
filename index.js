function main()
{
    let vitoriasDoUsuario = 445
    let derrotasDoUsuario = 507

    let saldoRankeadasTotal = saldoDeRankeadas(vitoriasDoUsuario, derrotasDoUsuario)
    let classificacaoDoJogador = classificaoDeNivelDoUsuario(vitoriasDoUsuario)

    return console.log(`O herói tem de saldo ${saldoRankeadasTotal} está no nível de ${classificacaoDoJogador}`)
}

function saldoDeRankeadas(vitorias, derrotas)
{
    let saldoTotal = vitorias - derrotas;
    return saldoTotal;
}

function classificaoDeNivelDoUsuario(vitorias)
{
    let classificacao;

    if(vitorias < 10)
    {
        classificacao = "FERRO"
    }
    else if(vitorias >= 10 && vitorias <= 20)
    {
        classificacao = "BRONZE"    
    }
    else if(vitorias > 20 && vitorias <= 50)
    {
        classificacao = "PRATA"
    }
    else if(vitorias > 50 && vitorias <= 80)
    {
        classificacao = "OURO"
    }
    else if(vitorias > 80 && vitorias <= 90)
    {
        classificacao = "DIAMANTE"
    }
    else if(vitorias > 90 && vitorias <= 100)
    {
        classificacao = "LENDÁRIO"
    }
    else if(vitorias > 100)
    {
        classificacao = "IMORTAL"
    }

    return classificacao
}

main()