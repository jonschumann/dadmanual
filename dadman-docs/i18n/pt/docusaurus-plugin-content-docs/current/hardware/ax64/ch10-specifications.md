---
title: "Capítulo 10 — Especificações técnicas"
sidebar_label: "Cara. 10 — Especificações"
sidebar_position: 11
---

# Capítulo 10 — Especificações técnicas

> **Produto:** Bolsa de Áudio Digital AX64  
> **SKU:** AX64-BASE / AX64-BASE-RPS  
> **Fonte:** Folha Específica AX64-BASE, Issue Junho 2026

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
| Cartões de expansão                  | Até 1,024×1,024 ch                                         | Cartões opcionais  |

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

| Parâmatro                      | Valor                                                   |
| ------------------------------ | ------------------------------------------------------- |
| Matriz de roteamento           | 1,872×1,872                                             |
| Resumo do processador          | Canais 512×64                                           |
| Autor SPQ                      | 1,024 filtros                                           |
| Processando tamanho da palavra | Ponto flutuante 28-bit                                  |
| Atraso interno do sistema      | 7 amostras (ajustável 3–31 amostras) |
| Alinhamento de saída           | Todos os outputs por tempo e por fases alinhados        |

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

## 10.8 Slots de Expansão

| Parâmatro           | Valor                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| Número de espaços   | 8                                                                                                     |
| Cartões compatíveis | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.9 Potência

| Parâmatro                                                     | Valor                                      | Observações                          |
| ------------------------------------------------------------- | ------------------------------------------ | ------------------------------------ |
| Entradas de energia                                           | Único ou dual                              | AX64-BASE-RPS tem duas entradas      |
| Fonte de alimentação                                          | Duplo (sempre ajustado) |                                      |
| Tensão de entrada                                             | 90-260 V AC                                | Nominal de 100-240 V AC, de 47-63 Hz |
| Conector de fichas                                            | IEC 60309                                  |                                      |
| Ganhar fusível                                                | 1.5 A, T1AH/250 V          | Montado em conector IEC              |
| Avaliação máxima do mains                                     | 120 B                                      |                                      |
| Seção digital                                                 | 15 O                                       |                                      |
| Cartões de expansão (máx.) | 70 O                                       |                                      |
| Poder de ônibus do Thunderbolt (máximo)    | 30 O                                       | 2 × 15 W                             |

---

## 10.10 Mecânica

| Parâmatro              | Valor                                                               |
| ---------------------- | ------------------------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 2RU (88.9 mm) |
| Profundidade do chassi | 34.5 cm / 13.6"                     |
| Largura corpo          | 43,5 cm / 17,2"                                                     |
| Peso                   | 5.5 kg / 12.2 lbs                   |

---

## 10.11 Ambiental

| Parâmatro               | Valor                   |
| ----------------------- | ----------------------- |
| Temperatura operacional | 0–45 °C / 32–113 °F     |
| Umidade                 | 20-85%, não-condensação |

---

## 10.12 conformidade regulamentar

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
