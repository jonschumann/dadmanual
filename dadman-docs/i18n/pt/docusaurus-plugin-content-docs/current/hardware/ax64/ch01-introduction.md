---
title: "Capítulo 1 — Introdução"
sidebar_label: "Cara. 1 — Introdução"
sidebar_position: 2
---

# Capítulo 1 — Introdução

> **Produto:** Dinamarca de Áudio Digital AX64

---

## 1.1 Resumo do Produto

O AX64 é uma interface de áudio de 2U rackmount Thunderbolt 3 ou Ethernet com até oito slots de cartão de expansão analógica. É comumente usado como uma caixa de estágios, unidade de satélite I/O, ou endpoint de áudio Ethernet autônomo em sistemas distribuídos.

**Conexão com o host:** Thunderbolt 3 ou Ethernet
**Fator de forma:** 2U rackmount
**canais de áudio:** até 64×64 canais analógicos (card-dependent)

---

## 1.2 Características Chave

![AX64 — painel frontal](/img/panel-ax64-front-clean.png)
_AX64 — painel frontal_

![AX64 — painel traseiro](/img/panel-ax64-rear-clean.png)
_AX64 — painel traseiro_

- **Fator de forma:** 2U rackmount, 19"
- **Expansão:** 8 slots de cartões expandidos hot-plug — até 1,024×1,024 canais de I/O
- **Thunderbolt 3:** 2 × USB-C — 256 canais a 48/96 kHz; potência de 15 W por porta
- **Dante AoIP:** integrado — 256 canais a 48 kHz, 128 canais a 96 kHz
- **MADI:** Canais coaxial MADI I/O incorporados — 64 em 48 kHz
- **ADAT / S/PDIF:** ADAT/SMUX integrado (16 ch) e S/PDIF (2 ch)
- **DADlink:** 2 × SFP jaulas — DADlink (até 256×256 ch) ou MADI óptico
- **Sincronização:** Relógio da Palavra I/O (BNC, 75 +), Entrada do Video Black Burst
- **Routing:** 1,872×1,872 matriz; 512×64 processador de somas; 1,024-filter SPQ equaler; ponto flutuante de 28-bit
- **Latência:** 7 amostras de atraso interno, ajustável 3–31 amostras; todas as saídas por tempo e por fases alinhadas
- **Controle:** Software DADman (macOS e Windows); compatível com Avid EuCon; Gigabit Ethernet
- **Energia:** Padrão Dual PSU; entrada opcional principal redundante (AX64-BASE-RPS)
- **Peso / profundeza:** 5,5 kg / 12,2 lbs; profundidade do chassis 34,5 cm / 13,6"

---

## format@@0 1.3 Contents of Box

_[Espaço reservado — lista todos os itens incluídos na caixa de transporte padrão. Verifique a lista de embalagem atual das operações.]_

| Produto                                                                      | Quantidade |
| ---------------------------------------------------------------------------- | ---------- |
| Unidade AX64                                                                 | 1          |
| Cabo de alimentação IEC C13                                                  | 1          |
| Guia de início rápido                                                        | 1          |
| _[Itens adicionais TBC]_ | —          |

---

## 1.4 Parte Números e Ordenação

| Número da peça | Descrição:                           |
| -------------- | ---------------------------------------------------- |
| AX64-BASE      | AX64 — padrão e único PSU                            |
| AX64-BASE-RPS  | AX64 — com redundante (dupla) PSU |

### Acessórios opcionais

Cartões de expansão (8 slots disponíveis):

| Número da peça | Descrição:                                                        |
| -------------- | --------------------------------------------------------------------------------- |
| CARD-L8        | Cartão de entrada da linha 8-Canal AD                                             |
| CARD-M8        | Cartão de entrada 8-Canal AD Mic/Linha                                            |
| CARD-DA8       | Cartão de Saída 8-Canal DA                                                        |
| CARD-DANTE     | 128-Canal Dante / Cartão de Áudio da Rede AES67                                   |
| CARD-2MADI-SO  | Cartão de Interface MADI de 64 Canais com SRC                                     |
| CARD-RAVENNA   | format@@0 128-Channel Ravenna / AES67 / ST 2110-30 Card |

Para especificações e instalação do cartão, consulte [Cartões de expansão](../../expansion-cards/).

---

## 1.5 - Compatibilidade de software e firmware

_[Placeholder — versão mínima do firmware, versão do DADman compatível.]_

| Componente               | Versão mínima                    |   |
| ------------------------ | -------------------------------- | - |
| Firmware AX64            | Indefinido                       |   |
| DADman                   | v5.8 ou superior |   |
| Motor de Thunderbolt DAD | Indefinido                       |   |

---

## Referências cruzadas

- [Elemento da Frente — Segurança e Convenções](./fm-safety) — Leia antes da instalação
- [Ch. 3 — Instalação](./ch03-installation) — Configuração inicial e montagem
- [Manual do Usuário do DADman — Capítulo 4](/hardware-description) — Visão geral da integração de software
