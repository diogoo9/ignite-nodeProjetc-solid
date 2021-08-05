**RF => Requisitos Funcionais**
ex.: usuario pode cadastrar categorias

**RNF => Requisitos nao Funcionais**
ex.: os dados devem ser salvos no banco de dados postgres

**RN => Regras de Negocio**
ex.: nao pode cadastrar categoria com nome existente
o nome da categoria deve

# Cadastro de carro

**RF**
Deve ser possivel cadastrar um novo carro.

**RN**
Nao deve ser possivel cadastrar um carro com uma placa ja cadastrada.
Nao deve ser possivel alterar a placa de um carro ja cadastrado.
O carro ao ser cadastrado deve ter a disponibilidade por padrao.

\*O usuario responsavel pelo cadastro deve ser um administrador

# LIstagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
Deve ser possivel listar todos os carros disponiveis pelo nome da marca.
Deve ser possivel listar todos os carros disponiveis pelo nome da carro.

**RN**
O usuario nao precisa esta logado no sistema.

# Cadastro de Especificacao no carro

**RF**
Deve ser possivel cadastrar uma especificacao para um carro.

**RN**
Nao deve ser possivel cadastrar uma especificacao para um carro nao cadastrado.
Nao deve possivel cadastrar uma especificao ja existenta para o mesmo carro.
O usuario nao precisa esta logado no sistema.

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**FN**
O aluguel deve ter duracao minima de 24horas
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro
O usuário deve estar logado
Ao Realizar um aluguel, o status do carro deverrá ser alterado para indisponivel

# Devolução do carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado a diária completa.
Ao realizar a devoluçao, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado pra outro aluguel.
Ao realizar a devolução, deverá ser calculado o valor total do aluguel.
Caso o horáriio de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve está logado na aplicação.
