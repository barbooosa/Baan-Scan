import defs
import infos

defs.limpar_terminal()
logado = False

while logado == False:
        entrar = defs.tela_inicial()
        if entrar == '1':
            valida = defs.login_militar()
            if valida == True:
                break
            else:
                defs.criar_barra()
                print("\n\033[91m\033[4mErro! CPF ou senha inválidas.\033[0m\n")
                continue
        elif entrar == '2':
            defs.adcionar_militar()
        else:
            print("\n\033[36m\033[1mOpção Inválida.\033[0m\n")

while True:
    escolha = defs.menu() 

    if escolha == '1':
        #adcionar carro no banco de dados
        infos.buscar_veiculo()
        x = input("Deseja cadastrar um veículo? (s/n)")
        if x == 's':
            defs.adcionar_carro()
        elif x == 'n':
            print("Voltando para a tela principal...")
        else:
            print("opção inválida.")
            continue
    elif escolha == '2':
        infos.buscar_militar()
    elif escolha == '3':
        x = defs.menu_visitante()
        if x == '1':
            defs.adcionar_visitante()
        elif x == '2':
            infos.buscar_visitante()
    elif escolha == '0':
        print('\033[1;36m''Programa encerrado''\033[0;0m')
        break
    else:
        defs.limpar_terminal()
        defs.criar_barra()
        print('\033[1;31m''Insira uma opção válida!''\033[0;0,m')
        defs.criar_barra()
 