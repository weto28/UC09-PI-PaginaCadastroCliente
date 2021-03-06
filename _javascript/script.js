// Adicionando Javascript

function cadastrar() {
    return false;

}

function cadastrar() {

    var vNome = document.getElementById("fNome").value;
    var vCpf = document.getElementById("fCpf");
    var vTel = document.getElementById("fTel");
    var vCel = document.getElementById("fCel");
    var vCep = document.getElementById("Cep");
    var vNumero = document.getElementById("fNumero").value;
    var vComplemento = document.getElementById("fComplemento").value;
    var vBairro = document.getElementById("fBairro").value;
    var vCidade = document.getElementById("fCidade").value;
    var vEstado = document.getElementById("fEstado").value;

    var vUf = document.getElementById("fUf").value;

    if (vNome!="") {
        if (vCpf.value!="" && vCpf.checkValidity()) {
            if (vTel.value!="" && vTel.checkValidity()) {
                if (vCel.value!="" && vCel.checkValidity()) {
                    if (vCep.value!="" && vCep.checkValidity()) {
                        if (vLog!="") {
                            if (vNumero!="") {
                                if (vComplemento!="") {
                                    if (vBairro!="") {
                                        if (vCidade!="") {
                                            if (vEstado!="") {
                                                return true;
                                            } else {
                                                alert("Informe o Estado");
                                                return false;
                                            }
                                        } else {
                                            alert("Informe o Cidade");
                                            return false;
                                        }
                                    } else {
                                        alert("Informe o Bairro");
                                        return false;
                                    }
                                } else {
                                    alert("Informe o Complemento");
                                    return false;
                                }
                            } else {
                                alert("Informe o N??mero");
                                return false;
                            }
                        } else {
                            alert("Informe o Logradouro");
                            return false;
                        }
                    } else {
                        alert("Informe um Cep v??lido");
                        return false;
                    }
                } else {
                    alert("Informe um Celular v??lido");
                    return false;
                }
            } else {
                alert("Informe um Telefone v??lido");
                return false;
            }
        } else {
            alert("Informe um CPF v??lido");
            return false;
        }
    } else {
        alert("Informe o Nome");
        return false;
    }
}


function limpa_formul??rio_cep() {
    //Limpa valores do formul??rio de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);

    } //end if.
    else {
        //CEP n??o Encontrado.
        limpa_formul??rio_cep();
        alert("CEP n??o encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova vari??vel "cep" somente com d??gitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Express??o regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conte??do.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep ?? inv??lido.
            limpa_formul??rio_cep();
            alert("Formato de CEP inv??lido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formul??rio.
        limpa_formul??rio_cep();
    }
};

