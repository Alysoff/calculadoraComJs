function calculadora(){
    //selacao da operacao    
    const operacao = Number(prompt('Escolha a operação desejada:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Inteira (%)\n 5 - Divisão real (/)\n 6 - Potenciação (**)'));
    //checa se a operacao é valida
    if(!operacao || operacao >= 7) {
        alert('Erro.\nDigite uma operação válida.')
        calculadora();
    } else {

        //cria variaveis
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        
        //checa valores de entrada
        if(!n1 || !n2){
            alert('Erro.\nDigite valores válidos.')
            calculadora();
        } else {
            let resulado;

            //criando funcoes para as operações
            function soma(){
                resulado = n1 + n2;
                alert(`${n1} + ${n2} = ${resulado}`)
                novaOp();
            }

            function subtracao(){
                resulado = n1 - n2;
                alert(`${n1} - ${n2} = ${resulado}`)
                novaOp();
            }

            function multiplicacao(){
                resulado = n1 * n2;
                alert(`${n1} * ${n2} = ${resulado}`)
                novaOp();
            }

            function divInt(){
                resulado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resulado}`)
                novaOp();
            }

            function divReal(){
                resulado = n1 / n2;
                alert(`${n1} / ${n2} = ${resulado}`)
                novaOp();
            }

            function potenciacao(){
                resulado = n1 ** n2;
                alert(`${n1}^${n2} = ${resulado}`)
                novaOp();
            }

            // criando funcao para nova operacao
            function novaOp(){
            let opcao = Number(prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'));
            if (opcao == 1){
                calculadora();
            } else if (opcao == 2){
                alert('Até a próxima! :)');
            } else {
                alert('Erro.\nDigite um valor válido.');
                novaOp();
            }

            }


            //verifica operacao escolhida
            //utilizando ifs
            /* if (operacao == 1){
                soma();
            } else if (operacao == 2){
                subtracao();
            } else if (operacao == 3){
                multiplicacao();
            } else if (operacao == 4){
                divInt();
            } else if (operacao == 5){
                divReal();
            } else if (operacao == 6){
                postenciacao();
            } */
            // utilizando cases
            switch (operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divInt();
                    break;
                case 5:
                    divReal();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();
