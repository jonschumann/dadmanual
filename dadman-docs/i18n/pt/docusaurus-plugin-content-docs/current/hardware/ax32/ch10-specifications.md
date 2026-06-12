---
title: "Capítulo 10 — Especificações técnicas"
sidebar_label: "Cara. 10 — Especificações"
sidebar_position: 11
---

# Capítulo 10 — Especificações técnicas

> **Produto:** Bolsa de Áudio Digital AX32  
> **SKU:** AX32-BASE2  
> **Fonte:** Folha de Spec AX32-BASE, Issue junho 2026

---

## 10.1 I/O Digital

| Parâmatro                                                 | Valor                     | Condições / Notas                           |
| --------------------------------------------------------- | ------------------------- | ------------------------------------------- |
| MADI                                                      | 64 min dentro / 64 ch out | Em 48 kHz; BNC coaxial                      |
| AES3 (embutido)                        | 16 min dentro / 16 ch out | 2 × DB25 (pingue-pongue) |
| DADlink (via MOD-MADI-DADLNK opcional) | Até 256×256 ch            | Em 48 kHz; via SFP                          |
| Cartões de expansão                                       | Até 1,024×1,024 ch        | Cartões opcionais                           |

---

## Taxas de amostragem suportadas 10.2

| Formato                                               | Tarifas de Amostra                                                                                             |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                                                  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                                                  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink                                               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante (via MOD-DANTE-BK3) opcional | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Cartões de expansão                                   | Depende do tipo de cartão                                                                                      |

---

## 10.3 Rotas e Processamento

| Parâmatro                      | Valor                                                   |
| ------------------------------ | ------------------------------------------------------- |
| Matriz de roteamento           | 1,424×1,424                                             |
| Resumo do processador          | 256×32 canais                                           |
| Processando tamanho da palavra | Ponto flutuante 28-bit                                  |
| Atraso interno do sistema      | 7 amostras (ajustável 3–31 amostras) |
| Alinhamento de saída           | Todos os outputs por tempo e por fases alinhados        |

---

## DADlink 10.4

| Parâmatro | Valor                                 |
| --------- | ------------------------------------- |
| Formato   | Ponto flutuante 28-bit                |
| Latência  | 0 amostras                            |
| Exige     | Módulo opcional MOD-MADI-DADLNK + SFP |

---

## 10.5 Synchronisation

| fonte                                      | Observações                                |
| ------------------------------------------ | ------------------------------------------ |
| Relógio da Palavra                         | Entrada e saída BNC                        |
| Video Black Burst (VBB) | Input                                      |
| AES11                                      | Input                                      |
| MADI                                       | Pelo porto MADI                            |
| AES3                                       | Via entrada AES3 integrada                 |
| ADICIONAR                                  | Com cartão opcional                        |
| Dante                                      | Através de módulo opcional MOD-DANTE-BK3   |
| DADlink                                    | Através do módulo opcional MOD-MADI-DADLNK |

---

## Interface de Rede 10.6

| Parâmatro | Valor                                                                     |
| --------- | ------------------------------------------------------------------------- |
| Padrão    | 1000BASE                                                                  |
| Conector  | RJ45, 4-pair                                                              |
| Objetivo  | Controle de DADman; áudio de rede opcional através de cartões de expansão |

---

## 10.7 Slots de Expansão

| Parâmatro           | Valor                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| Número de espaços   | 8                                                                                                     |
| Cartões compatíveis | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.8 Módulos Opcionais

| Módulo          | Função                                   |
| --------------- | ---------------------------------------- |
| MOD-MADI-DADLNK | Dual MADI e DADlink via SFP              |
| MOD-DANTE-BK3   | Áudio de rede Dante 64-ch                |
| MOD-SFP-1300-LZ | DADlink SFP                              |
| MOD-SFP-1300-LD | MADI SFP (modo único) |
| MOD-SFP-COAX    | MADI SFP (coaxial)    |

---

## 10.9 Potência

| Parâmatro                                                     | Valor                                      | Observações                                |
| ------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| Entradas de energia                                           | Solitário                                  | Opção AX32-RPS adiciona entrada redundante |
| Fonte de alimentação                                          | Duplo (sempre ajustado) |                                            |
| Tensão de entrada                                             | 90-260 V AC                                | Nominal de 100-240 V AC, de 47-63 Hz       |
| Conector de fichas                                            | IEC 60309                                  |                                            |
| Ganhar fusível                                                | 1.0 A, T1AH/250 V          | Montado em conector IEC                    |
| Avaliação máxima do mains                                     | 90 O                                       |                                            |
| Seção digital                                                 | 15 O                                       |                                            |
| Cartões de expansão (máx.) | 65 O                                       |                                            |

---

## 10.10 Mecânica

| Parâmatro              | Valor                                                               |
| ---------------------- | ------------------------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 2RU (88.9 mm) |
| Profundidade do chassi | 35 cm / 13.8"                                       |
| Largura corpo          | 43,5 cm / 17,2"                                                     |
| Peso                   | 5.0 kg / 11.0 lbs                   |
| Arrefecimento          | Fãs internos de ruído super baixo 2 x                               |

---

## 10.11 Ambiental

| Parâmatro               | Valor                   |
| ----------------------- | ----------------------- |
| Temperatura operacional | 0–45 °C / 32–113 °F     |
| Umidade                 | 20-85%, não-condensação |

---

## 10.12 conformidade regulamentar

| Padrão                          | Escopo                                                  |
| ------------------------------- | ------------------------------------------------------- |
| EN 55103-1                      | Emissões — equipamento de áudio/vídeo e entretenimento  |
| EN 55103-2                      | Imunidade — equipamento de áudio/vídeo e entretenimento |
| FCC Parte 15, Subparte B        | EUA — radiantes não intencionais                        |
| EN 60950-1:2006 | Segurança — equipamento TI                              |

---

## Referências cruzadas

- [Aplicar. A — Pinças de Conector](./appa-connector-pinouts)
- [Aplicar. C — Desenhos mecânicos](./appc-mechanical-drawings)
