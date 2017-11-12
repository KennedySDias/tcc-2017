<h1>Um estudo comparativo entre as JavaScript Engine Google V8 e Microsoft ChakraCore utilizando Node.js.</h1>

<p>O objetivo deste trabalho é realizar um estudo comparativo de desempenho das JavaScript Engines Google V8 e Microsoft ChakraCore sob a plataforma Node.js, analisando o consumo de memória RAM e tempo de execução de um conjunto de testes previamente definidos.</p>

<p>Metodologia: Para o desenvolvimento deste trabalho será realizado um estudo de caso, no qual foi desenvolvida uma API Restful simples junto a um monitoramento de consumo dos recursos de hardware e um conjunto de testes para consumir esta API. Após o desenvolvimento inicia-se os testes sobre as plataformas de Node.js, junto ao V8 e outra com ChakraCore. 
O ambiente de testes preparado para o estudo será composto apenas por uma máquina, na qual assumirá o papel tanto de servidor quanto de cliente. Como servidor, o computador ficará responsável por hospedar a aplicação e coletar os dados de consumo do hardware e para o papel de cliente utilizando um arquivo com um conjunto de testes para simular um grande número de requisições a API.</p>
  ...
<p>Para a implementação dos testes foi utilizado o módulo Requestify.js na versão 0.2.5. Ele é responsável por realizar requisições de forma simples à URLs e métodos específicos. Com ele foi construído uma bateria de testes que simula requisições de clientes à API de forma sequencial e automatizada, seguindo a ordem de:
    1 – 1000 requisições para criar um novo usuário.
    2 – 1000 requisições para consultar todos os usuários.
    3 – 1000 requisições para consultar um usuário pelo ID.
    4 – 1000 requisições para atualizar os dados de um usuário pelo ID.
    5 – 1000 requisições para deletar os dados de um usuário pelo ID.
	...
<p>A análise dos dados terá como objetivo encontrar qual JavaScript Engine demorou menos tempo para executar os testes e qual consumiu menos memória RAM, assim encontrar aquela que traz o melhor equilíbrio entre velocidade de resposta e consumo de recurso.</p>
