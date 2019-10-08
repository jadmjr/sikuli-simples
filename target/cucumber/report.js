$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("criaBoletaTomadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Criar e exibir uma boleta tomadora no SL TOOLS",
  "description": "",
  "id": "criar-e-exibir-uma-boleta-tomadora-no-sl-tools",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@criaBoletaTomadora"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Abre o menu para criacao de boleta",
  "description": "",
  "id": "criar-e-exibir-uma-boleta-tomadora-no-sl-tools;abre-o-menu-para-criacao-de-boleta",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "o usuario logado no SLTOOLS",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "limpar a tela inicial",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "o usuario clicar no menu negociacao",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "o usuario clicar no submenu boletas",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "o usuario clicar na opcao boleta tomadora",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o SLTOOLS exibe a tela de criacao de boleta com a opcao tomar marcada",
  "keyword": "Entao "
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_logado_no_SLTOOLS()"
});
formatter.result({
  "duration": 11741985713,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.limpar_a_tela_inicial()"
});
formatter.result({
  "duration": 9029261525,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_clicar_no_menu_negocia_o()"
});
formatter.result({
  "duration": 788138399,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_clicar_no_submenu_boletas()"
});
formatter.result({
  "duration": 849193712,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_clicar_na_op_o_boleta_tomadora()"
});
formatter.result({
  "duration": 890014339,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.o_SLTOOLS_exibe_a_tela_de_cria_o_de_boleta_com_a_op_o_marcada()"
});
formatter.result({
  "duration": 33682,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Abre a tela de confirmacao",
  "description": "",
  "id": "criar-e-exibir-uma-boleta-tomadora-no-sl-tools;abre-a-tela-de-confirmacao",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 14,
  "name": "o usuario preecher os campos obrigatorios",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "clicar em executar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema exibe a tela de confirmacao de envio",
  "keyword": "Entao "
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_preecher_os_campos_obrigatorios()"
});
formatter.result({
  "duration": 7667956963,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.clicar_em_executar()"
});
formatter.result({
  "duration": 812490658,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.o_sistema_exibe_a_tela_de_confirma_o_de_envio()"
});
formatter.result({
  "duration": 35287,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Confirmando envio",
  "description": "",
  "id": "criar-e-exibir-uma-boleta-tomadora-no-sl-tools;confirmando-envio",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 19,
  "name": "o usuario clicar em enviar",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "a tela deve ser fechada",
  "keyword": "Entao "
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_clicar_em_enviar()"
});
formatter.result({
  "duration": 784771137,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.a_tela_deve_ser_fechada()"
});
formatter.result({
  "duration": 53571,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validando criacao de boleta",
  "description": "",
  "id": "criar-e-exibir-uma-boleta-tomadora-no-sl-tools;validando-criacao-de-boleta",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 23,
  "name": "o usuario acessar o livro de ofertas",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "buscar o ativo que da boleta criada",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o sistema deve exibir a boleta tomadora criada.",
  "keyword": "Entao "
});
formatter.match({
  "location": "SLTOOLS.o_usu_rio_acessar_o_livro_de_ofertas()"
});
formatter.result({
  "duration": 1707447945,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.buscar_o_ativo_que_da_boleta_criada()"
});
formatter.result({
  "duration": 2689670781,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.o_sistema_deve_exibir_a_boleta_tomadora_criada()"
});
formatter.result({
  "duration": 310682402,
  "status": "passed"
});
formatter.uri("especificacaoManual.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Realizar uma espeficificacao manual",
  "description": "",
  "id": "realizar-uma-espeficificacao-manual",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@especificacaoManual"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Realizar uma especifica��o manual",
  "description": "",
  "id": "realizar-uma-espeficificacao-manual;realizar-uma-especifica��o-manual",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "Criada uma boleta tomadora como gestor ou grupo",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Uma boleta doadora como gestor ou grupo (mesmo dados da tomadora)",
  "keyword": "E "
});
formatter.step({
  "line": 8,
  "name": "Abrir a tela de gerenciar especificacoes",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "Selecionar a tomadora para especificar clicando em manual",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "Informar dados da especificacao",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Clicar em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "Selecionar a doadora para especificar clicando em manual",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "Informar dados da especificacao",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "Clicar em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "Validar na tela de gerenciar especificacoes a oferta passou para o status: especificada",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
  "name": "Validar na tela de gerenciar contratos se o contrato foi gerado",
  "keyword": "E "
});
formatter.match({
  "location": "SLTOOLS.criada_uma_boleta_tomadora_como_gestor_ou_grupo()"
});
formatter.result({
  "duration": 13056291361,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.uma_boleta_doadora_como_gestor_ou_grupo_mesmo_dados_da_tomadora()"
});
formatter.result({
  "duration": 12631533312,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.abrir_a_tela_de_gerenciar_especificacoes()"
});
formatter.result({
  "duration": 3548247401,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.selecionar_a_tomadora_para_especificar_clicando_em_manual()"
});
formatter.result({
  "duration": 1315551892,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.informar_dados_da_especificacao()"
});
formatter.result({
  "duration": 7018071643,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.clicar_em_enviar()"
});
formatter.result({
  "duration": 772597413,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.selecionar_a_doadora_para_especificar_clicando_em_manual()"
});
formatter.result({
  "duration": 1165216192,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.informar_dados_da_especificacao()"
});
formatter.result({
  "duration": 18669118519,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.clicar_em_enviar()"
});
formatter.result({
  "duration": 3491654183,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.validar_na_tela_de_gerenciar_especificacoes_a_oferta_passou_para_o_status_especificada()"
});
formatter.result({
  "duration": 1607624376,
  "status": "passed"
});
formatter.match({
  "location": "SLTOOLS.validar_na_tela_de_gerenciar_contratos_se_o_contrato_foi_gerado()"
});
formatter.result({
  "duration": 9960271639,
  "status": "passed"
});
});