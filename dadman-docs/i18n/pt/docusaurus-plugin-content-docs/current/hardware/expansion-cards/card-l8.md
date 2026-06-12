---
title: "CARD-L8 — Entrada de linha de linha de 8-Canal AD"
sidebar_label: "CARD-L8"
sidebar_position: 3
---

# Cartão de entrada CARD-L8 - Canal Pristina AD Linha de Entrada

> **SKU:** CARD-L8  
> **Fonte:** Folha Específica CARD-L8, Problema 2026

---

## Geral

O CARD-L8 fornece oito canais de conversão analogue-para-digital de alto desempenho a nível de linha para qualquer chassis DAD compatível. Todas as entradas são balanceadas, entregues em um único conector DB25 usando o pincel padrão Tascam.

A conversão usa um modulador delta-sigma de 5 bits duplo com filtragem baseada em FPGA à profundidade de processamento de 32 bits. O ganho de entrada staging é baseado em relação, sem componentes eletrônicos ativos, proporcionando ruído e linearidade melhor da classe através do alcance de ganho completo.

O cartão suporta todas as taxas de amostra de PCM de 44,1 kHz para DXD (352.8/384 kHz), bem como DSD 64 e DSD 128.

---

## Especificações técnicas

| Parâmatro                                      | Valor                                                                                                           | Condições / Notas                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Canais de entrada                              | 8                                                                                                               | Balanceado, nível de linha                                      |
| Alcance dinâmico (A-pesado) | > 123 dB                                                                                                        |                                                                 |
| THD+N (A-pesado)            | < -117 dB / 0.00014%                                                   | -3 dBFS                                                         |
| Resposta de frequência                         | 10 Hz – 20 kHz, ±0.1 dB                                                                         | Todas as configurações de ganho                                 |
| Ganhar precisão                                | (ExplicitText="0,1 dB                                                                        | Todas as configurações de ganho                                 |
| Nível máximo de entrada                        | -9 a +30 dBu                                                                                                    | Ajustável em passos de 0.1 dB                   |
| Ganhe passos para 0 dBFS                       | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                               | Retransmitir com base em 3 passos dB; ajuste digital interpasso |
| Impedância de entrada                          | > 10 nós!                                                                                                       |                                                                 |
| CMRR                                           | > 120 dB                                                                                                        | A 1 kHz                                                         |
| Taxas de amostra (PCM)      | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz  |                                                                 |
| Taxas de amostragem (DSD)   | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) |                                                                 |
| Resolução da amostra                           | delta sigma-de 5 bits em 5,645 ou 6,144 MHz; saída PCM de 24 bits                                               |                                                                 |
| Processando tamanho da palavra                 | 32 bits                                                                                                         | Filtragem baseada em FPGA                                       |
| Consumo Potência                               | Máximo de 9 W                                                                                                   |                                                                 |

---

## Conexões

| Porta                      | Conector      | Sinal                           | Observações                               |
| -------------------------- | ------------- | ------------------------------- | ----------------------------------------- |
| Entrada de linha analógica | DB25 Feminino | 8 ch balanceado, nível de linha | Tascam pinça; − 9 a +30 dBu, > 10 kbeings |

### Pinça de entrada DB25 (Tascam)

| Pin DB25 | Sinal   |
| -------- | ------- |
| 1        | Ch 1 +  |
| 14       | Ch 1 −  |
| 2        | Ch 2 +  |
| 15       | Ch 2 −  |
| 3        | Ch 3 +  |
| 16       | Ch 3 −  |
| 4        | Ch 4 +  |
| 17       | Ch 4 −  |
| 5        | Ch 5 +  |
| 18       | Ch 5 −  |
| 6        | Ch 6 +  |
| 19       | Ch 6 −  |
| 7        | Ch 7 +  |
| 20       | Ch 7 −  |
| 8        | Ch 8 +  |
| 21       | Ch 8 −  |
| 25       | Terreno |

---

## Instalação

> **ATENÇÃO:** Sempre desligue o chassis e desconecte o cabo principal antes de instalar ou remover cartões de expansão.

1. Desligue o chassis e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o CARD-L8 para dentro dos guias do slot, rotule o lado para cima, até que o conector de borda assuma completamente.
4. Proteja a colchete com o parafuso retido.
5. Reconecte o cabo principal e ligue o chassis.
6. Abra o DADman — o cartão aparece automaticamente como entradas de linha no modo de roteamento I/O.

---

## Compatibilidade

| Chassi     | Compatível                  |
| ---------- | --------------------------- |
| AX64       | sim                         |
| AX Centro  | sim                         |
| Penta 720  | sim                         |
| Penta 721S | sim                         |
| AX32       | sim                         |
| Núcleo 256 | Não — sem slots de expansão |
| MOM        | Não — sem slots de expansão |
