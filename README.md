# Relógio Mundial 🌍

**Relógio Mundial** é uma aplicação web feita em React que permite ao usuário verificar o horário atual em diferentes países e regiões, utilizando o `Intl.DateTimeFormat().resolvedOptions().timeZone` para obter o fuso horário local e convertê-lo conforme necessário.

## Objetivo
O objetivo do **Relógio Mundial** é oferecer uma ferramenta prática para consultar a hora local em diferentes fusos horários, sem depender de uma API externa, sendo ideal para quem trabalha com horários variados ou para curiosos que desejam saber a hora em outros países.

## Funcionalidades
- **Detecção do Fuso Horário Local**: Usa `Intl.DateTimeFormat().resolvedOptions().timeZone` para definir o fuso horário do usuário.
- **Conversão entre Fusos Horários**: Permite converter a hora entre fusos, ajustando automaticamente a data e hora conforme o fuso desejado.
- **Interface Interativa e Responsiva**: Fácil navegação para consulta de horários e fusos.

## Tecnologias
- **Framework**: [React](https://reactjs.org/)
- **Linguagem**: JavaScript (JSX)
- **Gerenciamento de Estado**: React Hooks (`useState`, `useEffect`) para controle de fusos e horários.
- **Fuso Horário**: `Intl.DateTimeFormat()` para detectar e gerenciar fusos horários locais sem APIs.

## Instalação
Para rodar a aplicação localmente, siga as etapas abaixo:

1. Clone o repositório:
   https://github.com/ericafarias/Rel-gio-Mundial.git
2.Navegue até o diretório do projeto:
   cd Relo-gio-Mundial
3.Instale as dependências:
   npm install
4.Inicie o servidor de desenvolvimento:
   npm rum dev

## Como Usar
1. Acesse a aplicação e visualize o fuso horário detectado automaticamente.
2. Selecione outros fusos horários na lista para comparar horários locais.
3. A interface se ajusta automaticamente para exibir as diferenças de horário entre os fusos escolhidos.

