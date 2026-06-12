---
title: "CARD-2MADI-SO — Interface Dual MADI com SRC"
sidebar_label: "CARD-2MADI-SO"
sidebar_position: 6
---

# CARD-2MADI-SO — Cartão de Interface Dual MADI com SRC

> **SKU:** CARD-2MADI-SO  
> **Fonte:** Chapa Específica CARD-MADI-SO, Issue de Junho de 2026

---

## Geral

O CARD-2MADI-SO fornece duas conexões bidirecionais independentes do MADI através de módulos SFP para qualquer chassis DAD compatível. Cada porta MADI oferece 64 canais dentro e 64 canais a 48 kHz, para um total de 128 canais em cada direção por cartão.

Os módulos SFP são vendidos separadamente e podem ser ópticos (LC, modo único ou multi-modo) ou elétrico (HD-BNC coaxial). Esta flexibilidade permite que o cartão se conecte a praticamente qualquer infraestrutura MADI existente. Conversão de taxa de amostragem (SRC) pode ser habilitado independentemente para a entrada e saída de cada porta.

---

## Especificações técnicas

| Parâmatro                                     | Valor                                                                                                          | Condições / Notas                                                   |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Portas MADI                                   | 2                                                                                                              | Portas bidirecionais independentes                                  |
| Canais por porta                              | 64 em / 64 fora                                                                                                | Às 44,1 a 48 kHz (1FS)                           |
| Total de canais                               | 128 dentro / 128 fora                                                                                          | Ambas as portas combinadas                                          |
| Canais por porta no 2FS                       | 32 em / 32 fora                                                                                                | Às 88,2 a 96 kHz                                                    |
| Canais por porta no 4FS                       | 16 pol / 16 fora                                                                                               | Às 176,4 / 192 kHz                                                  |
| Canais por porta a 8FS                        | 8 em / 8 fora                                                                                                  | Às 352,8 / 384 kHz                                                  |
| Taxas de amostragem                           | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                     |
| Frame modes                                   | Legado (SMUX) e de alta velocidade                                                          |                                                                     |
| Modos de contagem de canais                   | 56-canal e 64 canais                                                                                           |                                                                     |
| Interface SFP                                 | Jaula de 2 × SFP                                                                                               | LC óptico ou HD-BNC coax (vendido separadamente) |
| Conversão de taxa de amostra                  | Selecionável por porta, entrada e saída independentemente                                                      |                                                                     |
| latência SRC (48 → 96 kHz) | Aprox. 0,8 ms de entrada / 1,1 ms de saída                                                     | Por porta                                                           |
| latência SRC (96 → 48 kHz) | Aprox. 0,8 ms de entrada / 1,1 ms de saída                                                     | Por porta                                                           |
| Synchronisation                               | Entrada MADI ou relógio do sistema interno                                                                     | Por porta                                                           |
| Consumo Potência                              | 4,5 O                                                                                                          |                                                                     |

---

## Conexões

| Porta              | Conector | Sinal      | Observações                      |
| ------------------ | -------- | ---------- | -------------------------------- |
| MADI I/O — Porta A | SFP cage | AES10 MADI | Módulo SFP vendido separadamente |
| MADI I/O — Porta B | SFP cage | AES10 MADI | Módulo SFP vendido separadamente |

---

## Módulos SFP

Os módulos SFP **não estão incluídos** e devem ser ordenados separadamente. Dois tipos estão disponíveis no DAD:

| Código               | Descrição:                                                    |
| -------------------- | ----------------------------------------------------------------------------- |
| MOD-SFP-COAX         | SFP transceiver elétrico para MADI — conector HD-BNC                          |
| MOD-SFP-1300-LD      | SFP transceiver óptico para MADI — 1310 nm, 100BASE multi modo LC             |
| CON-2BNC-HD/STD-0,5M | HD-BNC para adaptador BNC definido (0.5 m) |

> **Nota:** O MOD-SFP-COAX usa conectores HD-BNC. Use os cabos de adaptador CON-2BNC-HD/STD-0,5M para se conectar ao padrão 75 ├BNC MADI.

---

## Instalação

> **ATENÇÃO:** Sempre desligue o chassis e desconecte o cabo principal antes de instalar ou remover cartões de expansão.

> **ATENÇÃO:** módulos de SFP podem ser inseridos e removidos com o cartão enviado. No entanto, para evitar danificar a gaiola de SFP, insira sempre módulos directamente e com até mesmo pressão. Não force um módulo que não seja fácil de assentar.

1. Desligue o chassis e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o CARD-2MADI-SO para os guias de slot até que o conector de borda assuma completamente.
4. Proteja a colchete com o parafuso retido.
5. Reconecte o cabo principal e ligue o chassis.
6. Insira os módulos SFP apropriados nas jaulas SFP e conecte os cabos MADI.
7. Open DADman — ambos os portos MADI aparecem na visualização de roteamento I/O.

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
