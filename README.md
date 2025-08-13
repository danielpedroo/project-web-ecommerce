# project-web-ecommerce

## Descrição Geral

Este projeto consiste no desenvolvimento de um website de e-commerce voltado para a comercialização de produtos tecnológicos de diferentes categorias. O sistema está sendo desenvolvido como parte da disciplina de Laboratório de Engenharia de Software, com o objetivo de demonstrar, de forma prática, o domínio e a aplicação das principais tecnologias e conceitos abordados ao longo do curso. O projeto visa evidenciar competências em arquitetura de software, análise de requisitos, desenvolvimento fullstack, integração de sistemas e boas práticas de engenharia.

## Objetivos

- Demonstrar a aplicação prática de conceitos de engenharia de software em um cenário realista.
- Implementar uma arquitetura escalável, modular e de fácil manutenção utilizando o padrão FSD (Feature Sliced Design).
- Integrar tecnologias modernas de frontend e backend, promovendo uma experiência de usuário fluida e segura.
- Garantir a rastreabilidade dos requisitos, desde a análise até a implementação.

## Tecnologias Utilizadas

- **Frontend:**  
  - Next.js (React Framework para SSR e SSG)
  - Tailwind CSS (Estilização utilitária e responsiva)
  - TypeScript (Tipagem estática e robustez no desenvolvimento)

- **Backend:**  
  - Java (Linguagem principal para regras de negócio)
  - Spring Boot (Framework para construção de APIs RESTful)

- **Infraestrutura:**  
  - Docker (Containerização dos serviços)
  - PostgreSQL (Banco de dados relacional)

## Arquitetura

O projeto adota o padrão **FSD (Feature Sliced Design)**, que organiza o código por funcionalidades, promovendo alta coesão e baixo acoplamento entre os módulos. Essa abordagem facilita a escalabilidade do sistema, a manutenção do código e a colaboração entre equipes. O frontend e o backend são desacoplados, comunicando-se via APIs RESTful, o que permite flexibilidade na evolução de cada camada.


## Considerações Técnicas

- O uso de TypeScript no frontend garante maior segurança e previsibilidade durante o desenvolvimento.
- O Spring Boot no backend proporciona agilidade na criação de APIs robustas e seguras.
- A containerização com Docker facilita o ambiente de desenvolvimento, testes e deploy.
- O banco de dados PostgreSQL foi escolhido por sua robustez, escalabilidade e aderência a projetos de alta demanda.
- O padrão FSD permite que novas features sejam adicionadas de forma isolada, minimizando impactos no sistema como um todo.

---

**Autor: Daniel Pedro (Software Developer)**
