## Padrões de Projeto

<table>
    <thead>
        <th>Nome</th>
        <th>Anti Padrão</th>
        <th>Definição</th>
        <th>Problema que resolve</th>
        <th>Exemplo de aplicação</th>
    </thead>
    <tbody>
        <tr>
            <td>Composite</td>
            <td>Acoplamento Excessivo (Over-Composition)</td>
            <td>É um padrão de projeto estrutural que permite tratar objetos individuais e composições de objetos de forma uniforme, criando uma hierarquia em árvore.</td>
            <td>Resolve o problema de criar estruturas hierárquicas de objetos onde objetos simples e composições de objetos podem ser tratados de maneira uniforme, simplificando o código.</td>
            <td>Um sistema gráfico que renderiza formas individuais e grupos de formas usando a mesma interface comum, permitindo tratar todos os elementos da mesma forma ao manipulá-los.</td>
        </tr>
        <tr>
            <td>Facade</td>
            <td>Acoplamento Excessivo (Excessive Facade).</td>
            <td>É um padrão de projeto estrutural que fornece uma interface simplificada para sistemas complexos, ocultando detalhes internos.</td>
            <td>Resolve o problema de simplificar a interação de clientes com sistemas complexos, reduzindo o acoplamento e tornando o uso mais simples.</td>
            <td>Um exemplo é um sistema operacional, onde a GUI atua como uma fachada para subsistemas complexos, como hardware e sistema de arquivos.</td>
        </tr>
        <tr>
            <td>Observer</td>
            <td>Evento Excessivo (Over-Notification).</td>
            <td>É um padrão de projeto comportamental que permite que um objeto (o sujeito) notifique automaticamente vários outros objetos (os observadores) quando seu estado muda.</td>
            <td>Resolve o problema de estabelecer notificações eficazes entre objetos sem acoplamento direto, promovendo a flexibilidade.</td>
            <td>Um exemplo é um sistema de e-mail, onde a caixa de entrada é o sujeito e diferentes partes do aplicativo, como a lista de mensagens e a barra de notificação, são observadores. Quando um novo e-mail chega, todos os observadores são notificados automaticamente.</td>
        </tr>
        <tr>
            <td>Singleton</td>
            <td>Multiplas intancias</td>
            <td>O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.</td>
            <td>Resolve o problema de controle de acesso a algum recurso compartilhado, por exemplo, uma base de dados ou um arquivo
            e permite que você acesse algum objeto de qualquer lugar no programa. Contudo, ele também protege aquela instância de ser sobrescrita por outro código.</td>
            <td>O melhor exemplo para a utilização do padrão singleton é na conexão com o banco de dados.
            Ao invés de termos vários pontos no nosso projeto que geram conexões com o banco de dados, podemos ter apenas uma classe singleton que realiza esta conexão, otimizando a performance da aplicação.</td>
        </tr>
        <tr>
            <td>Strategy</td>
            <td>Herança</td>
            <td>É um padrão de projeto comportamental que permite a troca dinâmica de comportamento de um objeto, encapsulando diferentes estratégias em objetos separados.</td>
            <td>Evita condicionais complexos e subclasses excessivas ao lidar com comportamento variável em classes, promovendo um código mais flexível e fácil de manter.</td>
            <td>Usado em sistemas de processamento de pagamentos para alternar entre estratégias de pagamento, como cartão de crédito, PayPal e transferência bancária, sem condicionais complexos.</td>
        </tr>
    </tbody>
</table>


