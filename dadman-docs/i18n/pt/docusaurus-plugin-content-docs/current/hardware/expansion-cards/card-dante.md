---
title: "CARD-DANTE — Dante de 128-Canal / Interface AES67"
sidebar_label: "CARD-DANTE"
sidebar_position: 5
---

# CARD-DANTE — 128-Canal Dante / Cartão de Interface AES67

> **SKU:** CARD-DANTE  
> **Fonte:** Folha Específica CARD-DANTE, Problema 2026

---

## Geral

O CARD-DANTE fornece Dante bidirecional de 128 canais e áudio AES67 sobre conectividade IP para qualquer chassis DAD compatível. Duas portas de rede RJ45 podem ser configuradas como uma rede alternada (daisy-chain) ou como uma rede Dante redundante com conexões primárias e secundárias independentes.

O cartão é totalmente compatível com o ecossistema Dante desenvolvido por Audinate, incluindo o Gerente de Domínio de Dante. Conversão de taxa de amostragem (SRC) pode ser habilitado independentemente para os caminhos de entrada e saída, permitindo que o cartão opere assincronamente a partir da taxa de amostragem do chassis do host.

---

## Especificações técnicas

| Parâmatro                                                         | Valor                                                                              | Condições / Notas                         |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------- |
| Canais de entrada                                                 | 128                                                                                | Às 44,1 a 48 kHz (1FS) |
| Canais de saída                                                   | 128                                                                                | Às 44,1 a 48 kHz (1FS) |
| Canais a 2FS (88.2 / 96 kHz)   | 64 em / 64 fora                                                                    |                                           |
| Canais a 4FS (176.4 / 192 kHz) | 32 em / 32 fora                                                                    |                                           |
| Fluxos Dante                                                      | Até 128 bidirecionais                                                              |                                           |
| Taxas de amostragem                                               | 44.1, 48, 88.2, 96, 176.4, 192 kHz |                                           |
| Padrão de rede                                                    | 1000BASE                                                                           |                                           |
| Portas de rede                                                    | 2 × RJ45                                                                           | Alternado ou redundante                   |
| Modo de rede                                                      | Alternado ou redundante                                                            | Configurável no Dante Controller          |
| AES67                                                             | Suportado                                                                          | Descoberta SAP                            |
| Gerente de Domínio Dante                                          | Suportado                                                                          |                                           |
| Conversão de taxa de amostra                                      | Selecionável na entrada e saída independentemente                                  |                                           |
| Alcance dinâmico SRC                                              | > 125 dB                                                                           | Ponto flutuante 64-bit                    |
| latência SRC (48 → 96 kHz)                     | Aprox. 0,8 ms de entrada / 1,1 ms de saída                         |                                           |
| latência SRC (96 → 48 kHz)                     | Aprox. 0,8 ms de entrada / 1,1 ms de saída                         |                                           |
| Synchronisation                                                   | Relógio da rede Dante ou relógio do sistema interno                                |                                           |
| Consumo Potência                                                  | 4,5 O                                                                              |                                           |

---

## Conexões

| Porta                                      | Conector | Sinal    | Observações                          |
| ------------------------------------------ | -------- | -------- | ------------------------------------ |
| Rede (primária)         | RJ45     | 1000BASE | Dante primário ou alternado de porta |
| Rede (Dante secundário) | RJ45     | 1000BASE | Dante secundário / redundante porta  |

---

## Configuração de Rede

As duas portas RJ45 no CARD-DANTE podem ser configuradas em dois modos:

**Modo de mudança** — As duas portas atuam como um interruptor integrado de 2 portas, permitindo topologias de rede daisy-chain sem um interruptor externo. Ambas as portas se conectam à mesma rede Dante.

**Modo redundante** — Cada porta se conecta a uma rede Dante independente (primária e secundária). Dante falha automaticamente na rede secundária se o caminho primário falhar. O modo redundante requer um interruptor em cada rede.

Configure o modo de rede usando Dante Controller ou DADman.

---

## Instalação

> **ATENÇÃO:** Sempre desligue o chassis e desconecte o cabo principal antes de instalar ou remover cartões de expansão.

1. Desligue o chassis e desconecte o cabo principal.
2. Remova o painel em branco do compartimento-alvo (mantenha o parafuso).
3. Deslize o CARD-DANTE para os guias de trajetória até que o conector de borda assuma completamente.
4. Proteja a colchete com o parafuso retido.
5. Conecte cabos Ethernet às portas RJ45 conforme necessário.
6. Reconecte o cabo principal e ligue o chassis.
7. Abra o DADman e/ou o Controlador Dante — o cartão aparece como um dispositivo Dante na rede.

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
