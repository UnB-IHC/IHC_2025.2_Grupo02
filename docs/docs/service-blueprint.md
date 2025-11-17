---
id: service-blueprint
title: Guia Rápido de Service Blueprint
sidebar_label: Service Blueprint
sidebar_position: 5
---

# Service Blueprint (Mapa de Serviço)

O *Service Blueprint* é um diagrama que expande a Jornada do Usuário, conectando as ações do cliente com os processos internos da empresa (o que acontece nos bastidores).

:::tip Quando usar?
Utilize quando precisar entender *como* o sistema ou a equipe deve reagir a cada ação do usuário, identificando gargalos operacionais ou falhas de comunicação.
:::

## 1. As 5 Camadas Principais
Um Blueprint é lido de cima para baixo. Ele é dividido em "raias" ou faixas horizontais:

### 1. Evidência Física (Physical Evidence)
Tudo o que o usuário vê ou toca.
* *Exemplos:* Interface do app, e-mail de confirmação, recibo, embalagem do produto.

### 2. Ações do Cliente (Customer Actions)
O que o usuário faz efetivamente. É a "Jornada do Usuário" inserida no mapa.
* *Exemplos:* Clicar em "Comprar", preencher formulário, ligar para o suporte.

### 3. Ações de Linha de Frente (Frontstage)
Onde ocorre a interação direta. Pode ser humano-humano ou humano-computador.
* *Visível:* O atendente fala com o cliente / O chatbot responde.

### 4. Ações de Bastidores (Backstage)
O que a equipe faz longe dos olhos do cliente para viabilizar o serviço.
* *Exemplos:* Estoquista separa o produto, analista valida o cadastro manual.

### 5. Processos de Suporte (Support Processes)
Sistemas internos, softwares e terceiros que sustentam tudo.
* *Exemplos:* API de pagamento processando o cartão, banco de dados salvando o pedido, serviço de entrega.

---

## 2. As Linhas Divisórias
As linhas separam as camadas e definem até onde vai a visão do usuário.

| Linha | O que ela separa | Significado |
| :--- | :--- | :--- |
| *Linha de Interação* | Cliente ↔ Frontstage | Onde o usuário interage diretamente com o serviço. |
| *Linha de Visibilidade* | Frontstage ↔ Bastidores | *Crucial:* Abaixo desta linha, o usuário NÃO vê o que acontece. |
| *Linha de Interação Interna* | Bastidores ↔ Suporte | Onde os funcionários acionam sistemas internos. |

---

## 3. Como Preencher?

:::warning Erro Comum
Não foque apenas no "Caminho Feliz". O Blueprint deve mostrar o que acontece quando dá erro (ex: pagamento recusado).
:::

* *1. Mapeie o Tempo:* Quanto tempo dura cada etapa? (Isso ajuda a achar lentidão).
* *2. Identifique Gargalos:* Onde o processo trava? Marque com uma cor de alerta.
* *3. Conecte com Setas:* Use setas para mostrar a dependência (Ação do Usuário → Dispara API → Retorna Confirmação).

---

## Referência Bibliográfica
> KALBACH, J. *Mapeamento de Experiências*: Um guia para criar valor por meio de jornadas, blueprints e diagramas. Rio de Janeiro: Alta Books, 2017.
> NIELSEN NORMAN GROUP. *Service Blueprints: Definition*. Disponível em: [NNGroup](https://www.nngroup.com/articles/service-blueprints-definition/).