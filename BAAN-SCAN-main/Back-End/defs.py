#Import bibliotecas
import os
import datetime
import qrcode
import psycopg2
#Import páginas
import valida
import infos


#Função de Limpar terminal
def limpar_terminal():
    return os.system('cls' if os.name == 'nt' else 'clear')

#Criar Barras para estilo
def criar_barra():
    return print('-' * 32)

#Datas atualizadas
data = datetime.datetime.now()
dia = data.day
mes = data.month
ano = data.year

segundos = data.second
minutos = data.minute
hora = data.hour



#Tela inicial
def tela_inicial():
    print('======== <<<<  ''\033[1;96m''BAAN-SCAN''\033[0;0m''  >>>> ========')
    print('|  [''\033[1;36m''1''\033[0;0m''] Entrar                                 |')
    print('|  [''\033[1;36m''2''\033[0;0m''] Não possui uma conta? Cadastre-se      |')
    print('--------------------------------')
    x = input('\033[1;36m''Insira a opção: ''\033[0;0m')
    print('--------------------------------')
    return x


#Menu
def menu():
    print('======== <<<<  ''\033[1;96m''BAAN-SCAN''\033[0;0m''  >>>> ========')
    print('|  [''\033[1;36m''1''\033[0;0m''] Veículo                          |')
    print('|  [''\033[1;36m''2''\033[0;0m''] Info Militar                     |')
    print('|  [''\033[1;36m''3''\033[0;0m''] Visitante                        |')
    print('|  [''\033[1;36m''0''\033[0;0m''] Sair                             |')
    print('--------------------------------')
    x = input('\033[1;36m''Insira a opção: ''\033[0;0m')
    print('--------------------------------')
    return x

def menu_visitante():
    print('======== <<<<  ''\033[1;96m''Visitante''\033[0;0m''  >>>> ========')
    print('|  [''\033[1;36m''1''\033[0;0m''] Novo visitante                     |')
    print('|  [''\033[1;36m''2''\033[0;0m''] Info Visitante                     |')
    print('|  [''\033[1;36m''0''\033[0;0m''] Sair                               |')
    print('--------------------------------')
    x = input('\033[1;36m''Insira a opção: ''\033[0;0m')
    print('--------------------------------')
    return x

def login_militar():
    cpf_militar = input("Digite o CPF: ").strip('')
    senha_militar = input("Digite a senha: ")
    
    # Conecte-se ao banco de dados PostgreSQL
    conn = psycopg2.connect(
        dbname='BAAN-SCAN',
        user='postgres',
        password='wattstatus',
        host='localhost',
        port='5432'
    )

    # Crie um cursor para interagir com o banco de dados
    cursor = conn.cursor()

    # Defina o nome e a senha a serem verificados
    cpf = cpf_militar.replace("-", "").replace(".", "")
    senha = senha_militar

    # Consulta SQL para verificar o nome e a senha
    query = "SELECT * FROM militares WHERE cpf = %s AND senha = %s"
    cursor.execute(query, (cpf, senha))

    # Recupere os resultados da consulta
    resultado = cursor.fetchone()

    # Feche o cursor e a conexão com o banco de dados
    cursor.close()
    conn.close()

    # Verifique se os dados estão no banco de dados
    if resultado:
        print("\n\033[32m\033[4mLogin efetuado com sucesso!\033[0m\n")
        return True
    else:
        return False


#Gerar qr code para o visitante
def gerar_qrcode():
    limpar_terminal()
    print('==== < ''\033[1;92m''Gerar QRCode''\033[0;0m'' > ====')
    cpf = valida.Qrcode()
    #Validar o CPFFFFFFFFFFFFFFFFFFFFFFF
    print('\033[1;36m''Gerando QRCode''\033[0;0m')

    # A função apenas gera um QRCode do ricl roll por enquanto


    # Link que você quer transformar em QR code
    link = 'https://www.youtube.com/watch?v=a3Z7zEc7AXQ'

    # Cria o objeto QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    # Adiciona o link ao QR code
    qr.add_data(link)
    qr.make(fit=True)

    # Cria uma imagem do QR code
    img = qr.make_image(fill='black', back_color='white')

    # Salva a imagem
    img.save('qrcode.png')

    # Para imprimir o QR Code no terminal, você pode usar o método print_tty()
    qr.print_tty()
    print('\033[1;36m''QRCode Gerado com sucesso!''\033[0;0m\n')
    return 


#Função para análisar a placa de um veículo
def analisar_placa():
    limpar_terminal()
    print('======== <<<<  ''\033[1;96m''Analisar placa do veículo''\033[0;0m''  >>>> ========')

    placa = input("Digite a placa: ")

    print('\033[1;33m''(Exemplos de Análise)''\033[0;0m')


    print('\033[1;30m''Marca/Modelo:''\033[0;0m','Ford Mustang Shelby GT500')
    print('\033[1;30m''Nome do Proprietário:''\033[0;0m', 'Manoel Gomes(BluePen)')
    print('\033[1;30m''Município:''\033[0;0m', 'Pindamonhangaba')
    print("")
    return menu()


#####################
#BANCO DE DADOS
#####################

#Função de adcionar veículos no banco de dados
def adcionar_carro():
    print('======== <<<<  ''\033[1;96m''Adcionando Veículo''\033[0;0m''  >>>> ========')
    placa = valida.Placa()
    renavam = valida.Renavam()
    marca_modelo = valida.Marca_modelo()
    cor = valida.Cor()
    chassi = valida.Chassi()
    ano_fabricacao = valida.Ano_fabricacao()
    roubo_furto = valida.Roubo_furto()
    municipio = valida.Municipio()

    # Dados do veículo que você deseja inserir
    veiculo = (placa, renavam, marca_modelo, cor, chassi, ano_fabricacao, roubo_furto, municipio)

    try:
        conn = psycopg2.connect(
            dbname="BAAN-SCAN",
            user="postgres",
            password="wattstatus",
            host="localhost"
        )

        # Crie um objeto cursor para interagir com o banco de dados
        cur = conn.cursor()

        # Instrução SQL para inserir um novo veículo na tabela "veiculos"
        sql = "INSERT INTO veiculos (placa, renavam, marca_modelo, cor, chassi, ano_fabricacao, roubo_furto, municipio) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"

        # Executar a instrução SQL com os dados do veículo
        cur.execute(sql, veiculo)
        # Certifique-se de confirmar as alterações
        conn.commit()
        print("\n\033[32m\033[4mVeículo inserido com sucesso!\033[0m\n")

    except psycopg2.Error as e:
        print("Erro ao conectar ao banco de dados:", e)
    finally:
        # Feche o cursor e a conexão
        if cur:
            cur.close()
        if conn:
            conn.close()

def adcionar_militar():
    print('======== <<<<  ''\033[1;96m''Adcionando Militar''\033[0;0m''  >>>> ========')
    # Defina as informações de conexão com o banco de dados
    db_config = {
        "host": "localhost",
        "database": "BAAN-SCAN",
        "user": "postgres",
        "password": "wattstatus"
    }

    # Variáveis do militar
    nome = valida.Nome()
    cpf = valida.Cpf()
    telefone = valida.Telefone()
    endereco = valida.Endereco()
    email = valida.Email()
    senha = valida.Senha()
    nome_de_guerra = valida.Nome_de_guerra()
    patente = valida.Patente()
    doses_vacina = valida.Doses_vacina()
    # Conecte ao banco de dados
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()
        # Execute a instrução SQL para inserir o militar
        insert_query = "INSERT INTO militares (nome, cpf, telefone, endereco, email, senha, nome_de_guerra, patente, doses_vacina) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(insert_query, (nome, cpf, telefone, endereco, email, senha, nome_de_guerra, patente, doses_vacina))
        # Faça commit da transação
        conn.commit()
        print("\n\033[32m\033[4mMilitar adicionado com sucesso!\033[0m\n")

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao inserir militar no banco de dados: {error}")
    finally:
        if conn:
            cursor.close()
            conn.close()


def adcionar_visitante():
    print('======== <<<<  ''\033[1;96m''Adcionando Visitante''\033[0;0m''  >>>> ========')
    # Defina as informações de conexão com o banco de dados
    db_config = {
        "host": "localhost",
        "database": "BAAN-SCAN",
        "user": "postgres",
        "password": "wattstatus"
    }

    # Variáveis do militar
    nome = valida.Nome()
    cpf = valida.Cpf()
    telefone = valida.Telefone()
    endereco = valida.Endereco()
    veiculo = valida.Veiculo()
    autorizador = valida.Autorizador()
    cracha = valida.Cracha()

    # Conecte ao banco de dados
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()
        # Execute a instrução SQL para inserir o militar
        insert_query = "INSERT INTO visitantes (nome, cpf, telefone, endereco, veiculo, autorizador, cracha) VALUES (%s, %s, %s, %s, %s, %s, %s)"

        cursor.execute(insert_query, (nome, cpf, telefone, endereco, veiculo, autorizador, cracha))
        # Faça commit da transação
        conn.commit()
        print("\n\033[32m\033[4mVisitante adicionado com sucesso!\033[0m\n")

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao inserir visitante no banco de dados: {error}")
    finally:
        if conn:
            cursor.close()
            conn.close()
