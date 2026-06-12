---
title: "Capítulo 10 — Especificações técnicas"
sidebar_label: "Cara. 10 — Especificações"
sidebar_position: 11
---

# Capítulo 10 — Especificações técnicas

> **Produto:** Penta da Dinamarca de Áudio Digital 720  
> **SKU:** PENTA720-BASE  
> **Fonte:** PENTA720-BASE Issue Junho 2026

---

## 10.1 I/O Digital

| Parâmatro                          | Valor                     | Condições / Notas                                       |
| ---------------------------------- | ------------------------- | ------------------------------------------------------- |
| MADI                               | 64 min dentro / 64 ch out | Em 48 kHz; coaxial BNC e óptico via SFP                 |
| AES3 (embutido) | 16 min dentro / 16 ch out | 2 × DB25 (pingue-pongue)             |
| Cartões de expansão                | Até 8 cartões             | Ver Seção 10.5 para cartões compatíveis |

---

## Taxas de amostragem suportadas 10.2

| Formato             | Tarifas de Amostra                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Cartões de expansão | Depende do tipo de cartão                                                                                      |

---

## 10.3 Rotas e Processamento

| Parâmatro                      | Valor                                            |
| ------------------------------ | ------------------------------------------------ |
| Matriz de roteamento           | 1,424×1,424                                      |
| Processando tamanho da palavra | Ponto flutuante 28-bit                           |
| Alinhamento de saída           | Todos os outputs por tempo e por fases alinhados |

---

## 10.4 Synchronisation

| fonte                                      | Observações         |
| ------------------------------------------ | ------------------- |
| Relógio da Palavra                         | Entrada e saída BNC |
| Video Black Burst (VBB) | Input               |
| MADI                                       | Pelo porto MADI     |
| AES3                                       | Via AES3 input      |

---

## 10.5 Slots de Expansão

| Parâmatro           | Valor                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| Número de espaços   | 8                                                                                                     |
| Cartões compatíveis | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.6 Potência

| Parâmatro                 | Valor       | Observações                          |
| ------------------------- | ----------- | ------------------------------------ |
| Tensão de entrada         | 90-260 V AC | Nominal de 100-240 V AC, de 47-63 Hz |
| Consumo Máximo de Energia | 90 O        |                                      |

---

## Mecânica 10.7

| Parâmatro              | Valor                                                               |
| ---------------------- | ------------------------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 2RU (88.9 mm) |
| Profundidade do chassi | 35 cm / 13.8"                                       |
| Largura corpo          | 43,5 cm / 17,2"                                                     |
| Peso                   | 5.0 kg / 11.0 lbs                   |

---

## 10.8 Ambiental

| Parâmatro               | Valor                   |
| ----------------------- | ----------------------- |
| Temperatura operacional | 0–45 °C / 32–113 °F     |
| Umidade                 | 20-85%, não-condensação |

---

## 10.9 conformidades regulamentares

| Padrão                                                                                                                                    | Escopo                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013 | Segurança — equipamento TI         |
| CISPR 32                                                                                                                                  | Emissões — equipamento multimídia  |
| CISPR 35                                                                                                                                  | Imunidade - equipamento multimídia |
| FCC Parte 15, Subparte B                                                                                                                  | EUA — radiantes não intencionais   |
| ICES-003                                                                                                                                  | Canadá                             |

---

## Referências cruzadas

- [Aplicar. A — Pinças de Conector](./appa-connector-pinouts)
- [Aplicar. C — Desenhos mecânicos](./appc-mechanical-drawings)
