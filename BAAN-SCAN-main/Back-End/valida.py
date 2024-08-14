
def Nome():
    while True:
        nome  = input('Nome completo: ').lower()
        if nome == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        elif nome.isdigit():
            print("Nome Inválido")
        else:
            return nome

def Senha():
    while True:
        senha = input('Senha: ')
        if senha == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        else:
            return senha

def Email():
    while True:
        email = input('Email: ')
        if email == '':
            print('Erro! É necessário inserir algum valor.')
        elif '@' and '.com' in email:
            return email.strip(' ')
        else:
            print('Email inválido! Deve conter "@" e ".com"')

def Data():
    while True:
        data = input('Digite a data de nascimento (dd/mm/aaaa): ')
        if data == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        temp = ''.join(data.split('/'))                  #retorna uma string de valores sem '/
        if not temp.isnumeric():                         #analisa se essa string tem caracteres
            print('Insira uma data válida')
            #continue
        # data.count('/') retorna a quantidade de '/' na data
        if data.count('/') == 2:
            #dia, mes, ano = data.split('/') # divide cada valor e joga na sequência
            return data.strip(' ')
        else:
            print('A data deve seguir o padrão dd/mm/aaaa')
        
def Login():
    while True:
        login = input('Digite seu login: ')
        if login == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        return login.strip(' ')
    
def Telefone():
    while True:
        telefone = input('Digite o telefone (apenas números): ')
        if telefone == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        elif  not telefone.isnumeric():
            print('Insira apenas números.')
        else:
            if len(telefone) < 9 or len(telefone) > 11:
                print('O número de telefone deve ter entre 9 - 11 caracteres')
            else:
                return telefone
            
def Endereco():
    while True:
        endereco = input("Digte o endereço completo: ")
        if endereco == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        else:  
            return endereco

def Veiculo():
    while True:
        veiculo = input("Veículo? (s/n): ").lower()
        if veiculo == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        elif veiculo == 's':
            return veiculo == "true"
        elif veiculo == 'n':
            return veiculo == "false"
        else:
            print("Opção Inválida.")

def Autorizador():
    while True:
        autorizador = input("Digite o número de ordem: ")
        if autorizador == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        else:
            return autorizador

def Cracha():
    while True:
        cracha = input("Crachá? (s/n): ").lower()
        if cracha == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        elif cracha == 's':
            return cracha == "true"
        elif cracha == 'n':
            return cracha == "false"
        else:
            print("Opção Inválida.")

###################
#Validações militar
###################


def Cpf():
    while True:
        cpf = str(input('Digite seu Cpf: ').replace("-", "").replace(".", ""))
        if cpf == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        elif len(cpf) < 11 or len(cpf) > 11:
            print("Erro! CPF inválido.")
        else:
            return cpf.strip(' ')

def Patente():
    while True:
        patente = input("Digite a sua patente: ").lower()
        if patente == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        else:
            return patente

def Nome_de_guerra():
    while True:
        nome_de_guerra = input("Digite o nome de guerra: ")
        if nome_de_guerra == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        else:
            return nome_de_guerra

def Doses_vacina():
    while True:
        doses_vacina = input("Digite a quantidade de doses tomadas: ")
        if doses_vacina == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        else:
            return doses_vacina


def Qrcode():
    while True:
        qr_code = input("Digite o cpf: ")
        if qr_code == '':
            print('Erro! É necessário inserir algum valor.')
            continue
        elif not qr_code.isnumeric():
                print('Insira apenas números.')
        else:
            return qr_code

#####################
#Validações do veiculo
######################
#Valida o Renavam
def Renavam():
        while True:
            renavam = input("Digite o Renavam: ")
            if renavam == '':
                print("É necessário inserir algum valor!")
                continue
            elif  not renavam.isnumeric():
                print('Insira apenas números.')
            elif len(renavam) < 11 or len(renavam) > 11:
                print("Renavam inválido!")
            else:
                return renavam
            
def Placa():
    while True:
        placa = input("Digite a placa do veículo: ")
        if placa.count("-") >=1:
            placa = placa.replace("-", "")
            continue
        elif placa == '':
            print('É necessário inserir algum valor.')
        elif len(placa) != 7:
            print("Erro! Placa inválida.")
        else:
            return placa

def Marca_modelo():
    while True:
        marca_modelo = input("Digite a marca/modelo: ")
        if marca_modelo == '':
            print("É necessário inserir algum valor.")
        else:
            return marca_modelo

def Cor():
    while True:
        cor = input("Digite a cor : ")
        if cor == '':
            print("É necessário inserir algum valor.")
        else:
            return cor

def Chassi():
    while True:
        chassi = input("Digite o chassi: ")
        if chassi == '':
            print("É necessário inserir algum valor.")
        else:
            return chassi

def Ano_fabricacao():
    while True:
        ano_fabricacao = input("Digite o Ano de fabricação: ")
        if ano_fabricacao == '':
            print("É necessário inserir algum valor.")
        elif ano_fabricacao.isdigit() ==  False:
            print('Insira apenas números.')
        else:
            return ano_fabricacao
        
def Roubo_furto():
    while True:
        roubo_furto = input("Digite se o veículo é furtado. (s/n) ").lower()
        if roubo_furto == 's':
            return roubo_furto == "true"
        elif roubo_furto == 'n':
            return roubo_furto == "false"
        else:
            print("Opção Inválida!")
            continue

def Municipio():
    while True:
        municipio = input("Digite o Município: ")
        if municipio == '':
            print("É necessário inserir algum valor.")
        else:
            return municipio
        