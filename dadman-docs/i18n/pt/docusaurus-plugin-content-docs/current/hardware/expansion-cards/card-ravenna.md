---
title: "RAVENNA CARD-RAVENNA — 128-Canal Ravena / AES67 / Interface ST 2110-30"
sidebar_label: "CARD-RAVENNA"
sidebar_position: 7
---

# CARD-RAVENNA — 128-Canal Ravena / AES67 / Cartão de Interface 2110-30

> **SKU:** CARD-RAVENNA  
> **Fonte:** Planilha Spec CARD-RAVENNA, Problema 2026 de Junho

---

## Geral

A RAVENNA CARD-RAVENNA fornece Ravena bidirecional de 128 canais, AES67 e SMPTE ST 2110-30 áudio sobre conectividade IP para qualquer chassis DAD compatível. Duas portas de rede RJ45 podem ser configuradas como uma rede alternada ou com ST 2022-7 Protection Switching (SPS) para redundância sem problemas em instalações de rede dupla.

O cartão é totalmente interoperável com Ravenna, AES67, e ST 2110-30 ecossistemas e suporta a descoberta e o controle padrão do setor via WebUI, NMOS IS-04/IS-05, SAP, ANEMAN e API JSON. PTPv2 (IEEE 1588-2008) é suportado nos modos Mestre e Escravos.

A conversão da taxa de amostragem (SRC) pode ser ativada nos caminhos de entrada e saída juntos, permitindo que o cartão opere asscronamente a partir da taxa de amostragem do chassis do host.

---

## Especificações técnicas

| Parâmatro                                     | Valor                                                                                                          | Condições / Notas                                                |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Canais de entrada                             | 128                                                                                                            | Às 44,1 a 48 kHz (1FS)                        |
| Canais de saída                               | 128                                                                                                            | Às 44,1 a 48 kHz (1FS)                        |
| Contagem de canais escalando                  | Escalas com taxa de amostra                                                                                    | Taxas de amostragem maiores reduzem o número de canais por fluxo |
| Ravenna / streams AES67                       | Até 64 bidirecionais                                                                                           |                                                                  |
| Taxas de amostragem                           | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                  |
| Padrão de rede                                | 1000BASE                                                                                                       |                                                                  |
| Portas de rede                                | 2 × RJ45                                                                                                       | Alternado ou ST 2022-7 SPS redundante                            |
| Redundância                                   | ST 2022-7 Troca de Proteção Maravilhosa                                                                        | Falha ininterrupta na rede dupla                                 |
| Synchronisation                               | PTPv2 (IEEE 1588-2008) — Mestre ou escravo                                                  | Ou relógio interno do sistema                                    |
| AES67                                         | Suportado                                                                                                      |                                                                  |
| ST 2110-30                                    | Suportado                                                                                                      |                                                                  |
| NMOS                                          | IS-04 (descoberta) e IS-05 (gerenciamento de conexão)                    |                                                                  |
| Descoberta / controle                         | WebUI, NMOS, Ravenna, SAP, ANEMAN, API JSON                                                                    |                                                                  |
| Conversão de taxa de amostra                  | Selecionável na entrada e saída conjuntamente                                                                  |                                                                  |
| latência SRC (48 → 96 kHz) | Aprox. 0,8 ms de entrada / 1,1 ms de saída                                                     |                                                                  |
| latência SRC (96 → 48 kHz) | Aprox. 0,8 ms de entrada / 1,1 ms de saída                                                     |                                                                  |
| Consumo Potência                              | 7,5 O                                                                                                          |                                                                  |

---

## Conexões

| Porta                                | Conector | Sinal    | Observações                                |
| ------------------------------------ | -------- | -------- | ------------------------------------------ |
| Rede (primária)   | RJ45     | 1000BASE | Ravenna / AES67 / ST 2110-30 primário      |
| Rede (secundária) | RJ45     | 1000BASE | Porta redundante do ST 2022-7 ou alternada |

---

## Configuração de Rede

**Modo alterado** — Ambas as portas operam como um interruptor integrado, permitindo a topologia daisy-chain sem um interruptor externo.

**ST 2022-7 SPS mode** — Cada porta se conecta a uma rede independente. ST 2022-7 Switch de Proteção Conjunta fornece falha sem problemas — se um caminho de rede falhar, o áudio continua sem interrupção através do outro. Este modo requer um interruptor dedicado em cada rede.

Configure o modo de rede e o papel PTP (Master / Slave) através da WebUI ou controlador NMOS do cartão.

---

## Descoberta e controle

CARD-RAVENNA suporta múltiplas descobertas e interfaces de controle:

| Interface  | Objetivo                                                 |
| ---------- | -------------------------------------------------------- |
| WebUI      | Configuração e status baseados no navegador              |
| NMOS IS-04 | Dispositivo e descoberta de recursos                     |
| NMOS IS-05 | Gerenciamento de conexão (roteamento) |
| Viena      | Descoberta e controle nativo do Ravenna                  |
| SAP        | Anúncio de sessão (AES67 / SDP)       |
| ANEMANO    | Integração do gerenciador de rede ANEMAN                 |
| JSON API   | Configuração programática                                |

---

## Instalação

> **ATENÇÃO:** Sempre desligue o chassis e desconecte o cabo principal antes de instalar ou remover cartões de expansão.

1. Desligue o chassis e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o CARD-RAVENNA para os guias de slot até a borda ficar completamente sentada.
4. Proteja a colchete com o parafuso retido.
5. Conecte cabos Ethernet às portas RJ45 conforme necessário para a topologia de rede.
6. Reconecte o cabo principal e ligue o chassis.
7. Open DADman — o card aparece como uma interface AoIP na visualização de roteamento I/O.
8. Acesse a WebUI do cartão para configurações avançadas de rede e PTP.

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
