---
title: "CARD-DA8 — Resultado da DA 8-Canal"
sidebar_label: "CARD-DA8"
sidebar_position: 2
---

# CARD-DA8 — Cartão de Saída Pristina DA 8-Channel

> **SKU:** CARD-DA8  
> **Fonte:** Planilha Spec CARD-DA8, Problema 2026

---

## Geral

O CARD-DA8 fornece oito canais de conversão digital a analógica de alto desempenho para qualquer chassis DAD compatível. Todas as saídas são equilibradas e entregues em um único conector DB25 usando o pincel padrão Tascam.

A conversão usa sobreamostras 32 vezes superiores de 32-bit Burr Brown DAC com filtragem baseada em FPGA, com profundidade de processamento de 32-bits. A staging do ganho de saída é baseada em relançamento, sem componentes eletrônicos de ganho ativos, garantindo uma gama dinâmica máxima e um nível exato correspondente a qualquer sistema analógico a jusante.

O cartão suporta todas as taxas de amostra de PCM de 44,1 kHz para DXD (352.8/384 kHz), bem como DSD 64 e DSD 128.

---

## Especificações técnicas

| Parâmatro                                      | Valor                                                                                                           | Condições / Notas                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Canais de saída                                | 8                                                                                                               | Balanceado, nível de linha                                      |
| Alcance dinâmico (A-pesado) | > 128 dB                                                                                                        |                                                                 |
| THD+N (A-pesado)            | < -115 dB / 0.00017%                                                   | -3 dBFS                                                         |
| Resposta de frequência                         | 10 Hz – 20 kHz, ±0.1 dB                                                                         | Todas as configurações de ganho                                 |
| Ganhar precisão                                | (ExplicitText="0,1 dB                                                                        | Todas as configurações de ganho                                 |
| Nível máximo de produção                       | 0 a +24 dBu                                                                                                     | Ajustável em passos de 0.1 dB                   |
| Ganhe passos para 0 dBFS                       | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                               | Retransmitir com base em 6 dB passos; ajuste digital interpasso |
| Impedância de saída                            | < 100 Ω                                                                                |                                                                 |
| Taxas de amostra (PCM)      | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz  |                                                                 |
| Taxas de amostragem (DSD)   | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) |                                                                 |
| Processando tamanho da palavra                 | 32 bits                                                                                                         | Filtragem baseada em FPGA                                       |
| Consumo Potência                               | Máximo de 11 W                                                                                                  |                                                                 |

---

## Conexões

| Porta                 | Conector      | Sinal                           | Observações     |
| --------------------- | ------------- | ------------------------------- | --------------- |
| Saída linha analógica | DB25 Feminino | 8 ch balanceado, nível de linha | Pináculo tascam |

### DB25 Output Pinout (Tascam)

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

> **ATENÇÃO:** Sempre desligue o chassis e desconecte o cabo principal antes de instalar ou remover cartões de expansão. Inserir um card em um chassis fortalecido pode danificar o card e o chassis.

1. Desligue o chassis e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o CARD-DA8 para o guia do slot, coloque o rótulo de lado para cima, até que o conector de borda assuma completamente.
4. Proteja a colchete com o parafuso retido. Finger-ght é suficiente.
5. Reconecte o cabo principal e ligue o chassis.
6. Abra o DADman — o cartão aparece automaticamente como saídas DA no modo de roteamento I/O.

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
