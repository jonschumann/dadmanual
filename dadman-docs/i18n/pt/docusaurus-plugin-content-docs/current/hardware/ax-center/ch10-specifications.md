---
title: "Capítulo 10 — Especificações técnicas"
sidebar_label: "Cara. 10 — Especificações"
sidebar_position: 11
---

# Capítulo 10 — Especificações técnicas

> **Produto:** Áudio Digital Denmark AX Center  
> **SKU:** AXCNTR-BASE  
> **Fonte:** Planilha Spec AXCNTR-BASE, Issue Junho 2026

---

## 10.1 I/O Digital

| Parâmatro                            | Valor                                                      | Condições / Notas     |
| ------------------------------------ | ---------------------------------------------------------- | --------------------- |
| Trovoada 3                           | 256 ch in / 256 ch out                                     | Às 48 kHz e 96 kHz    |
| AoIP Dante                           | 256 ch in / 256 ch out                                     | Às 48 kHz             |
| AoIP Dante                           | format@@0 128 ch in / 128 ch out | Às 96 kHz             |
| MADI                                 | 64 min dentro / 64 ch out                                  | Às 48 kHz             |
| ADICIONAR / SMUX                     | 16 min dentro / 16 ch out                                  |                       |
| S/PDIF                               | 2 ch input                                                 | Conector ADAT via     |
| DADlink (via SFP) | Até 256×256 ch                                             | Às 48 kHz             |
| Cartões de expansão                  | I/O adicional                                              | 2 espaços de expansão |

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
| Matriz de roteamento           | 1,006×1,112                                      |
| Processando tamanho da palavra | Ponto flutuante 28-bit                           |
| Alinhamento de saída           | Todos os outputs por tempo e por fases alinhados |

---

## DADlink 10.4

| Parâmatro | Valor                  |
| --------- | ---------------------- |
| Formato   | Ponto flutuante 28-bit |
| Latência  | 0 amostras             |

---

## O Análogo 10.5 Nativo

### Saídas do Headphone

| Parâmatro         | Valor                        | Condições / Notas                              |
| ----------------- | ---------------------------- | ---------------------------------------------- |
| Outputs           | fone de ouvido de 2 × stereo | Painel frontal, TRS de 6.35 mm |
| Controle de nível | Independente por saída       | Painel frontal através                         |

### Saída de Monitoramento

| Parâmatro         | Valor                 | Condições / Notas             |
| ----------------- | --------------------- | ----------------------------- |
| Outputs           | Stereo monitor output | Painel traseiro               |
| Controle de nível | sim                   | Codificador do painel frontal |

### Entrada de Microfone / Instrumento

| Parâmatro         | Valor                           | Condições / Notas                |
| ----------------- | ------------------------------- | -------------------------------- |
| Inputs            | 1 × microfone + 1 × instrumento | Conector combo do painel frontal |
| Poder do fantasma | 48 V                            | Alternável                       |

---

## 10.6 Synchronisation

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

## Interface 10.7 Thunderbolt 3

| Parâmatro          | Valor                                        |
| ------------------ | -------------------------------------------- |
| Conectores         | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Suportado                                    |
| Produção de ônibus | 15 W por porta                               |

---

## Interface de Rede 10.8

| Parâmatro | Valor        |
| --------- | ------------ |
| Padrão    | 1000BASE     |
| Conector  | RJ45, 4-pair |

---

## 10.9 Slots de Expansão

| Parâmatro           | Valor                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| Número de espaços   | 2                                                                                                     |
| Cartões compatíveis | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.10 Potência

| Parâmatro                 | Valor       | Observações                          |
| ------------------------- | ----------- | ------------------------------------ |
| Tensão de entrada         | 90-260 V AC | Nominal de 100-240 V AC, de 47-63 Hz |
| Consumo Máximo de Energia | 90 O        |                                      |

---

## 10.11 Mecânica

| Parâmatro              | Valor                                               |
| ---------------------- | --------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 1RU (44,5 mm) |
| Profundidade do chassi | 32 cm / 12.6"                       |
| Largura corpo          | 43,5 cm / 17,2"                                     |
| Peso                   | 3.2 kg / 7.1 lbs    |

---

## 10.12 Ambiental

| Parâmatro               | Valor                   |
| ----------------------- | ----------------------- |
| Temperatura operacional | 0–45 °C / 32–113 °F     |
| Umidade                 | 20-85%, não-condensação |

---

## 10.13 conformidade regulamentar

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
