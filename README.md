# Descrição do Projeto de Design System usando Monorepo

Este projeto consiste em um Design System usando o Monorepo como estratégia para organizar e compartilhar código entre múltiplos projetos. Para isso, utilizou-se o recurso de Workspaces do NPM.

## Dependências

As dependências utilizadas neste projeto são as seguintes:

- `@changesets/cli@^2.25.0`: ferramenta para gerenciamento de versionamento e mudanças em projetos.
- `turbo@^1.5.5`: biblioteca para melhoria de performance em aplicações web.
- `@jsouzza/ts-config@*`: configuração TypeScript personalizada.
- `@storybook/addon-essentials@^7.0.11`: conjunto de addons essenciais para o Storybook.
- `@storybook/addon-interactions@^7.0.11`: addon para permitir interações com componentes do Storybook.
- `@storybook/addon-links@^7.0.11`: addon para adicionar links em componentes do Storybook.
- `@storybook/blocks@^7.0.11`: blocos pré-definidos para o Storybook.
- `@storybook/react@^7.0.11`: biblioteca para desenvolvimento de UI components com React.
- `@storybook/react-webpack5@^7.0.11`: configuração webpack5 para o Storybook com React.
- `@storybook/storybook-deployer@^2.8.16`: ferramenta para deploy do Storybook.
- `@storybook/testing-library@^0.0.14-next.2`: biblioteca para testes do Storybook.

## Formato

Todo o projeto está disponível em um repositório no GitHub e é organizado em pastas separadas para cada um dos pacotes (workspaces) utilizados. As pastas são estruturadas da seguinte forma:

packages/
component-1/
src/
Component1.tsx
package.json
component-2/
src/
Component2.tsx
package.json
...


Cada pasta contém o código fonte do pacote correspondente, bem como um arquivo `package.json` para gerenciamento de dependências e scripts de build. 

O projeto utiliza o padrão de `npm scripts` para executar tarefas de build e testes automatizados. Além disso, os componentes podem ser visualizados e testados através do Storybook, que é configurado de forma global para todo o projeto.
