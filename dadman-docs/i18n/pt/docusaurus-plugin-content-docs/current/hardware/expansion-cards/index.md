---
title: "Cartões de Expansão"
sidebar_label: "Geral"
sidebar_position: 1
---

# Cartões de Expansão

Um slot de cartões de expansão DAD nas baías do card em chassis compatíveis para estender a capacidade de I/O. Cada cartão ocupa um slot e pode usar o plug quente. Vários cartões dos mesmos ou diferentes tipos podem ser instalados simultaneamente, sujeitos ao orçamento de poder total do chassis do host.

## Compatível Chassi

| Chassi     | Slots disponíveis |
| ---------- | ----------------- |
| AX64       | 8                 |
| Penta 720  | 8                 |
| AX Centro  | 2                 |
| Penta 721S | 1                 |
| AX32       | 8                 |

> O Core 256 não tem slots de expansão. O MOM não tem slots de expansão.

---

## Comparação do Cartão

| Carta                            | Código        | tipo                              | Canais                                                     | Conector                         | Liga/Desliga |
| -------------------------------- | ------------- | --------------------------------- | ---------------------------------------------------------- | -------------------------------- | ------------ |
| [CARD-DA8](./card-da8)           | CARD-DA8      | Saída Analógica DA                | 8 ch out                                                   | DB25 (Tascam) | 11 O         |
| [CARD-L8](./card-l8)             | CARD-L8       | Entrada de linha de analógico AD  | 8 segundos em                                              | DB25 (Tascam) | 9 O          |
| [CARD-M8](./card-m8)             | CARD-M8       | Entrada de mic/linha analógica AD | 8 segundos em                                              | DB25 (Tascam) | 11 O         |
| [CARD-DANTE](./card-dante)       | CARD-DANTE    | Dante / AES67 AoIP                | format@@0 128 ch in + 128 ch out | 2 × RJ45                         | 4,5 O        |
| [CARD-2MADI-SO](./card-2madi-so) | CARD-2MADI-SO | Dual MADI via SFP                 | 2 × 64 ch no + 64 ch out                                   | 2 × SFP                          | 4,5 O        |
| [CARD-RAVENNA](./card-ravenna)   | CARD-RAVENNA  | Ravenna / AES67 / ST 2110-30      | format@@0 128 ch in + 128 ch out | 2 × RJ45                         | 7,5 O        |
| [CARD-8AES](./card-8aes)         | CARD-8AES     | AES3 E/S digital                  | 8 min em + 8 ch out                                        | Indefinido                       | Indefinido   |
| [CARD-AVB](./card-avb)           | CARD-AVB      | Áudio de rede AVB / Milan         | Indefinido                                                 | 2 × RJ45                         | Indefinido   |

---

## Orçamento Potência do Slot

Cada chassis tem um orçamento máximo de poder para os slots dos seus cartões de expansão. Certifique-se de que o consumo de energia combinado dos cartões instalados não exceda o limite do chassis.

| Chassi     | Cartão de orçamento de energia          |
| ---------- | --------------------------------------- |
| AX64       | Total de 70 W em 8 slots                |
| Penta 720  | Consulte as especificações do Penta 720 |
| AX Centro  | Consulte especificações de AX Center    |
| Penta 721S | Consulte as especificações Penta 721S   |
| AX32       | Consulte as especificações AX32         |

> **ATENÇÃO:** Exceder o orçamento de energia do slot pode causar operação instável ou encerramento térmico. Calcule o poder total do cartão antes de instalar vários cartões de alta potência (CARD-DA8, CARD-M8) no mesmo chassis.

---

## Resumo da Instalação

Todos os cartões de expansão compartilham o mesmo procedimento de instalação. Para etapas detalhadas, consulte a seção de Instalação na página de cada cartão.

1. Desligue o chassis completamente e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o cartão para dentro dos guias de slot até que o conector de borda assuma completamente.
4. Proteja o suporte frontal do cartão com o parafuso retido.
5. Reconecte o cabo principal e ligue o chassis.
6. Abra o DADman — o cartão aparecerá automaticamente na configuração de E/S.
