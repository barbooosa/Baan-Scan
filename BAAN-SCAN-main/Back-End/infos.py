import psycopg2


# Função para buscar informações de um veículo
def buscar_veiculo():
    print('======== <<<<  ''\033[1;96m''Consultar veículo''\033[0;0m''  >>>> ========')
    placa = input("Digite a placa: ")
    renavam = input("Digite o renavam: ")

    # Configurações do banco de dados
    db_config = {
        "host": "localhost",
        "database": "BAAN-SCAN",
        "user": "postgres",
        "password": "wattstatus"
    }

    try:
        # Conecta ao banco de dados
        conn = psycopg2.connect(**db_config)

        # Cria um cursor para executar consultas SQL
        cursor = conn.cursor()

        # Consulta SQL para buscar informações do veículo com base na placa
        query = "SELECT * FROM veiculos WHERE placa = %s AND renavam = %s"
        cursor.execute(query, (placa, renavam))

        # Recupera o resultado da consulta
        veiculo = cursor.fetchone()

        if veiculo:
            print('======== <<<<  ''\033[1;96m''Informações do veículo''\033[0;0m''  >>>> ========')
            print(f"Placa: {veiculo[1]}")
            print(f"Renavam: {veiculo[2]}")
            print(f"Marca/Modelo: {veiculo[3]}")
            print(f"Cor: {veiculo[4]}")
            print(f"Chassi: {veiculo[5]}")
            print(f"Ano de fabricação: {veiculo[6]}")
            print(f"Roubou ou Furto: {veiculo[7]}")
            print(f"Município : {veiculo[8]}")
        else:
            print("\n\033[91m\033[4mVeículo não encontrado.\033[0m\n")

        # Fecha o cursor e a conexão com o banco de dados
        cursor.close()
        conn.close()

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao buscar veículo: {error}")
    return

def buscar_militar():
    print('======== <<<<  ''\033[1;96m''Consultar Militar''\033[0;0m''  >>>> ========')
    nome = input("Digite o nome: ").lower()
    cpf = input("Digite o CPF: ")

    # Configurações do banco de dados
    db_config = {
        "host": "localhost",
        "database": "BAAN-SCAN",
        "user": "postgres",
        "password": "wattstatus"
    }

    try:
        # Conecta ao banco de dados
        conn = psycopg2.connect(**db_config)

        # Cria um cursor para executar consultas SQL
        cursor = conn.cursor()

        # Consulta SQL para buscar informações do veículo com base na placa
        query = "SELECT * FROM militares WHERE nome = %s AND cpf = %s"
        cursor.execute(query, (nome, cpf))

        # Recupera o resultado da consulta
        dados = cursor.fetchone()

        if dados:
            print('======== <<<<  ''\033[1;96m''Informações do Militar''\033[0;0m''  >>>> ========')
            print(f"Nome: {dados[1]}")
            print(f"CPF: {dados[2]}")
            print(f"Telefone: {dados[3]}")
            print(f"Endereço: {dados[4]}")
            print(f"E-mail: {dados[5]}")
            print(f"Senha: {dados[6]}")
            print(f"Nome de Guerra: {dados[7]}")
            print(f"Patente : {dados[8]}")
        else:   
            print("\n\033[91m\033[4mMilitar não encontrado.\033[0m\n")

        # Fecha o cursor e a conexão com o banco de dados
        cursor.close()
        conn.close()

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao buscar veículo: {error}")
    return

def buscar_visitante():
    print('======== <<<<  ''\033[1;96m''Consultar Visitante''\033[0;0m''  >>>> ========')
    cpf = input("Digite o CPF: ")

    # Configurações do banco de dados
    db_config = {
        "host": "localhost",
        "database": "BAAN-SCAN",
        "user": "postgres",
        "password": "wattstatus"
    }

    try:
        # Conecta ao banco de dados
        conn = psycopg2.connect(**db_config)

        # Cria um cursor para executar consultas SQL
        cursor = conn.cursor()

        # Consulta SQL para buscar informações do veículo com base na placa
        query = "SELECT * FROM visitantes WHERE cpf = %s"
        cursor.execute(query, (cpf,))

        # Recupera o resultado da consulta
        dados = cursor.fetchone()

        if dados:
            print('======== <<<<  ''\033[1;96m''Informações do Visitante''\033[0;0m''  >>>> ========')
            print(f"Nome: {dados[1]}")
            print(f"CPF: {dados[2]}")
            print(f"Telefone: {dados[3]}")
            print(f"Endereço: {dados[4]}")
            print(f"Veículo: {dados[5]}")
            print(f"Autorizador: {dados[6]}")
            print(f"Crachá: {dados[7]}")
        else:   
            print("\n\033[91m\033[4mVisitante não encontrado.\033[0m\n")

        # Fecha o cursor e a conexão com o banco de dados
        cursor.close()
        conn.close()

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao buscar veículo: {error}")
    return

