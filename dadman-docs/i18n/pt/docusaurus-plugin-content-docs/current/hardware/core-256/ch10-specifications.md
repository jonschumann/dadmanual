---
title: "Capítulo 10 — Especificações técnicas"
sidebar_label: "Cara. 10 — Especificações"
sidebar_position: 11
---

# Capítulo 10 — Especificações técnicas

> **Produto:** Digital Audio Denmark Core 256  
> **SKU:** CORE256-BASE  
> **Fonte:** Planilha Spec CORE256-BASE, Issue Junho 2026

---

## 10.1 I/O Digital

| Parâmatro                            | Valor                                                      | Condições / Notas  |
| ------------------------------------ | ---------------------------------------------------------- | ------------------ |
| Trovoada 3                           | 256 ch in / 256 ch out                                     | Às 48 kHz e 96 kHz |
| AoIP Dante                           | 256 ch in / 256 ch out                                     | Às 48 kHz          |
| AoIP Dante                           | format@@0 128 ch in / 128 ch out | Às 96 kHz          |
| MADI                                 | 64 min dentro / 64 ch out                                  | Às 48 kHz          |
| ADICIONAR / SMUX                     | 16 min dentro / 16 ch out                                  |                    |
| S/PDIF                               | 2 ch input                                                 | Conector ADAT via  |
| DADlink (via SFP) | Até 256×256 ch                                             | Às 48 kHz          |

---

## Taxas de amostragem suportadas 10.2

| Formato          | Tarifas de Amostra                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| Trovoada 3       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI             | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67    | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| ADICIONAR / SMUX | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| S/PDIF           | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Rotas e Processamento

| Parâmatro                      | Valor                                            |
| ------------------------------ | ------------------------------------------------ |
| Matriz de roteamento           | 848×848                                          |
| Processando tamanho da palavra | Ponto flutuante 28-bit                           |
| Alinhamento de saída           | Todos os outputs por tempo e por fases alinhados |

---

## DADlink 10.4

| Parâmatro | Valor                  |
| --------- | ---------------------- |
| Formato   | Ponto flutuante 28-bit |
| Latência  | 0 amostras             |

---

## 10.5 Synchronisation

| fonte                                      | Observações         |
| ------------------------------------------ | ------------------- |
| Relógio da Palavra                         | Entrada e saída BNC |
| Video Black Burst (VBB) | Input               |
| Trovoada 3                                 | Pelo anfitrião      |
| Dante                                      | Pela rede           |
| ADICIONAR                                  | Porta ADAT via      |
| MADI                                       | Pelo porto MADI     |
| DADlink                                    | Através de SFP      |

---

## Interface 10.6 Thunderbolt 3

| Parâmatro          | Valor                                        |
| ------------------ | -------------------------------------------- |
| Conectores         | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Suportado                                    |
| Produção de ônibus | 15 W por porta                               |

---

## Interface de Rede 10.7

| Parâmatro | Valor        |
| --------- | ------------ |
| Padrão    | 1000BASE     |
| Conector  | RJ45, 4-pair |

---

## 10.8 Potência

| Parâmatro                 | Valor   | Observações                           |
| ------------------------- | ------- | ------------------------------------- |
| Tensão de entrada         | 12 V DC | Fonte de alimentação externa incluída |
| Consumo Máximo de Energia | 60 O    |                                       |

---

## 10.9 Mecânica

| Parâmatro           | Valor                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------- |
| Fator de formulário | Área de trabalho / 1RU rackmount (com opcional C256-2MOUNT-BRACKET) |
| Width               | 21.1 cm / 8.3"                                         |
| Profundidade        | 23.1 cm / 9.1"                                         |
| Peso                | 1.3 kg / 2.9 lbs                                       |

---

## 10.10 - Ambiental

| Parâmatro               | Valor                   |
| ----------------------- | ----------------------- |
| Temperatura operacional | 0–45 °C / 32–113 °F     |
| Umidade                 | 20-85%, não-condensação |

---

## 10.11 conformidade regulamentar

| Padrão                                                         | Escopo                                      |
| -------------------------------------------------------------- | ------------------------------------------- |
| CISPR 32:2015 + AMD1:2019      | Emissões — equipamento multimídia           |
| CISPR 35:2016                                  | Imunidade - equipamento multimídia          |
| IEC 61000-3-2:2018 + AMD1:2020 | Emissões atuais harmônicas                  |
| IEC 61000-3-3:2013 + AMD1:2017 | Escalas e oscilações de tensão              |
| ICES-003                                                       | Canadá                                      |
| CISPR AS/NZS 32                                                | Austrália / Nova Zelândia                   |
| FCC Parte 15, Subparte B                                       | EUA — radiantes não intencionais            |
| IEC 62368-1:2018                               | Segurança — equipamento de áudio/vídeo e TI |

---

## Referências cruzadas

- [Aplicar. A — Pinças de Conector](./appa-connector-pinouts)
- [Aplicar. C — Desenhos mecânicos](./appc-mechanical-drawings)
