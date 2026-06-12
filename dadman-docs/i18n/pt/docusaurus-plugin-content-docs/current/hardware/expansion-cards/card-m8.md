---
title: "CARD-M8 — 8-Canal AD Mic/Linha Entrada"
sidebar_label: "CARD-M8"
sidebar_position: 4
---

# Cartão de entrada CARD-M8 — 8-Canal Pristina AD Mic/Linha

> **SKU:** CARD-M8  
> **Fonte:** Folha Específica CARD-M8, Problema 2026

---

## Geral

O CARD-M8 fornece oito canais de conversão analogue-para-digital de alto desempenho com microfone alternável e entrada de nível de linha para qualquer chassis DAD compatível. Cada canal pode ser configurado independentemente como microfone ou modo de linha. Todas as entradas são balanceadas, entregues em um único conector DB25 usando o pincel padrão Tascam.

A conversão usa um modulador delta-sigma de 5 bits duplo com filtragem baseada em FPGA à profundidade de processamento de 32 bits. Tanto o microfone quanto o ganho de linha são baseados em movimentos sem componentes de ganho eletrônico ativos, fornecer desempenho de ruído excepcional e EIN de -131 dBu (ponderado) ao ganho máximo.

A potência do phantom 48 V está disponível por canal para microfones condensadores.

---

## Especificações técnicas

### Gerais

| Parâmatro                                      | Valor                                                                                                           | Condições / Notas                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Canais de entrada                              | 8                                                                                                               | Saldo; micro/linha alternável por canal |
| Alcance dinâmico (A-pesado) | > 123 dB                                                                                                        |                                         |
| THD+N (A-pesado)            | < -117 dB / 0.00014%                                                   | -3 dBFS                                 |
| Resposta de frequência                         | 10 Hz – 20 kHz, ±0.1 dB                                                                         | Todas as configurações de ganho         |
| Ganhar precisão                                | (ExplicitText="0,1 dB                                                                        | Todas as configurações de ganho         |
| Taxas de amostra (PCM)      | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz  |                                         |
| Taxas de amostragem (DSD)   | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) |                                         |
| Resolução da amostra                           | delta sigma-de 5 bits em 5,645 ou 6,144 MHz; saída PCM de 24 bits                                               |                                         |
| Processando tamanho da palavra                 | 32 bits                                                                                                         | Filtragem baseada em FPGA               |
| Consumo Potência                               | Máximo de 11 W                                                                                                  |                                         |

### Linha Modo de Entrada

| Parâmatro                | Valor                             | Condições / Notas                                               |
| ------------------------ | --------------------------------- | --------------------------------------------------------------- |
| Nível máximo de entrada  | -9 a +30 dBu                      | Ajustável em passos de 0.1 dB                   |
| Ganhe passos para 0 dBFS | 9, 12, 15, 18, 21, 24, 27, 30 dBu | Retransmitir com base em 3 passos dB; ajuste digital interpasso |
| Impedância de entrada    | > 10 nós!                         |                                                                 |
| CMRR                     | > 120 dB                          | A 1 kHz                                                         |

### Modo de Entrada do Microfone

| Parâmatro                                 | Valor        | Condições / Notas                              |
| ----------------------------------------- | ------------ | ---------------------------------------------- |
| Poder do fantasma                         | 48 V         | Alternável por canal                           |
| Impedância de entrada                     | 3 nós!       |                                                |
| EIN (A-pesado)         | −131 dBu     | Sem valor (input encurtado) |
| Intervalo de ganho analógico              | -3 a +45 dB  | Retransmitir 3 passos dB                       |
| Alcance de ganho digital                  | 0 a +39 dB   | Ganho digital adicional                        |
| Intervalo de ganho total do DADman        | -18 a +72 dB |                                                |
| Nível máximo de entrada no ganho de 18 dB | +21 dBu      | Antes do Clipping                              |

### Mesa de ganhos de microfone

| Ganho do DADman (dB) | Ganho analógico (dB) | Ganho digital (dB) | Input Overload (dBu) | Ruído de saída (dBFS A) | EIN (dBu A) |
| --------------------------------------- | --------------------------------------- | ------------------------------------- | --------------------------------------- | ------------------------------------------ | ------------------------------ |
| −18                                     | −3                                      | 0                                     | +21                                     | −123.8                     | −102.8         |
| −15                                     | 0                                       | 0                                     | +18                                     | −123.3                     | −105.3         |
| −12                                     | +3                                      | 0                                     | +15                                     | −123.2                     | −108.2         |
| −9                                      | +6                                      | 0                                     | +12                                     | −123.2                     | −111.2         |
| −6                                      | +9                                      | 0                                     | +9                                      | −122.8                     | −113.8         |
| −3                                      | +12                                     | 0                                     | +6                                      | −122.8                     | −116.8         |
| 0                                       | +12                                     | 0                                     | +3                                      | −122.2                     | −119.2         |
| +3                                      | +18                                     | 0                                     | 0                                       | −122.0                     | −122.0         |
| +6                                      | +21                                     | 0                                     | −3                                      | −120.8                     | −123.8         |
| +9                                      | +24                                     | 0                                     | −6                                      | −120.3                     | −126.3         |
| +12                                     | +27                                     | 0                                     | −9                                      | −118.5                     | −127.5         |
| +15                                     | +30                                     | 0                                     | −12                                     | −117.3                     | −129.3         |
| +18                                     | +33                                     | 0                                     | −15                                     | −114.8                     | −129.8         |
| +21                                     | +36                                     | 0                                     | −18                                     | −113.0                     | −131.0         |
| +24                                     | +39                                     | 0                                     | −21                                     | −110.2                     | −131.2         |
| +27                                     | +42                                     | 0                                     | −24                                     | −107.8                     | −131.8         |
| +30                                     | +45                                     | 0                                     | −27                                     | −104.8                     | −131.8         |
| +33                                     | +45                                     | +3                                    | −27                                     | −107.8                     | −131.8         |
| +36                                     | +45                                     | +6                                    | −27                                     | −110.8                     | −131.8         |
| +72                                     | +45                                     | +39                                   | −27                                     | −68.8                      | −131.8         |

> **Nota:** Com as configurações de ganho digital acima de +30 dB DADman ganho, o ganho analógico é fixo em +45 dB. Aumentar o ganho digital acima deste ponto reduz o alcance dinâmico efetivo, mas mantém o piso de EIN a 131.8 dBu A.

---

## Conexões

| Porta                        | Conector      | Sinal           | Observações                                                                           |
| ---------------------------- | ------------- | --------------- | ------------------------------------------------------------------------------------- |
| Microfone / entrada de linha | DB25 Feminino | 8 ch balanceada | Tascam fixo; micro: 48 V phantom; linha: para +30 dBu |

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

> **ATENÇÃO:** Se a potência do fantasma 48 V estiver ativada em qualquer canal, desative-o no DADman antes de conectar ou desconectar microfones ou cabos para evitar transições que possam danificar os limites do microfone.

1. Desligue o chassis e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o CARD-M8 para os guias do slot, rotule o lado para cima, até que a borda assuma completamente.
4. Proteja a colchete com o parafuso retido.
5. Reconecte o cabo principal e ligue o chassis.
6. Open DADman — o cartão aparece como mic/linha de entrada na visualização de roteamento I/O. Defina cada canal para o modo Microfone ou Linha conforme necessário.

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
