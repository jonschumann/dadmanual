---
title: "Capítulo 2 - Descrição do Painel"
sidebar_label: "Cara. 2 — Descrição do painel"
sidebar_position: 3
---

# Capítulo 2 - Descrição do Painel

> **Produto:** Penta da Dinamarca de Áudio Digital 720

> **Como usar este capítulo:** Este capítulo identifica todo controle e conector do Penta 720. Para níveis de sinais e procedimentos de conexão, consulte [Ch. 4 — Conexões de sinal](ch04-connections). Para obter significados do estado LED, veja [Seção 2.3](#23-led-state-reference).

---

## Painel Frontal 2.1

![Painel frontal Penta 720](/img/panel-penta720.png)
_Figura 2.1 — Painel frontal Penta 720. Os callouts numerados correspondem à tabela de referência abaixo._

| Ref. | Descrição  | tipo                                           | Função                                                                                                                                                                                         | Ponto |
| -------------------- | ---------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1                    | **Pronto** | Indicador de LED (verde)    | A unidade concluiu a sequência de inicialização e está pronta para operação                                                                                                                    | Cinza |
| 2                    | **Erro**   | Indicador de LED (vermelho) | Foi detectado um erro interno ou erro de configuração                                                                                                                                          | Cinza |
| 3                    | **PSU OK** | Indicador de LED (verde)    | O carregador principal está funcionando corretamente. Em unidades com PSUs redundantes, um segundo indicador do PSU confirma o status do suprimento de backup. | Cinza |

---

## 2.2 Painel traseiro

> **NOTA:** O layout do painel traseiro Penta 720 varia dependendo das cartas de expansão ajustadas. O complemento do conector mostrado abaixo reflete uma configuração típico. Verifique o layout real do cartão na sua unidade antes de fazer conexões.

| Ref. | Descrição                                                                  | Conector                                | Função                                                                                                                                                                                                                             | Ponto   |
| -------------------- | -------------------------------------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1                    | **Poder (primário)**                                    | Entrada de C14 IEC                      | Mantém a entrada de energia. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                               | Escuro  |
| 2                    | **Liga/Desliga (backup)**                               | Entrada de C14 IEC                      | Redundante carrega energia (quando ajustado). Fornece redundância hot-swap da PSU.                                                                                              | Escuro  |
| 3                    | **AES/EBU I/O 1–4**                                                        | DB25 (Pingue-pongue) | Áudio digital AES/EBU I/O, canais 1–4 (4 pares estéreo = 8 canais).                                                                                                                             | Laranja |
| 4                    | **AES/EBU I/O 5–8**                                                        | DB25 (Pingue-pongue) | Áudio digital AES/EBU I/O, canais 5–8 (4 pares estéreo = 8 canais).                                                                                                                             | Laranja |
| 5                    | **MADI EM**                                                                | BNC (75 anos),       | Entrada coaxial MADI. AES10 compatível.                                                                                                                                                            | azul    |
| 6                    | **SAÍDA DE MADI**                                                          | BNC (75 anos),       | Saída coaxial MADI.                                                                                                                                                                                                | azul    |
| 7                    | **I/O óptico**                                                             | TOSLINK (ótico)      | MADI óptico ou ADAT I/O (card-dependente).                                                                                                                                                      | Ciano   |
| 8                    | **WC/VBB EM**                                                              | BNC (75 anos),       | Entrada de relógio de palavra ou Video Black Burst.                                                                                                                                                                | Violeta |
| 9                    | **SAÍDA WC**                                                               | BNC (75 anos),       | Saída do relógio Word                                                                                                                                                                                                              | Violeta |
| 10                   | **AES11 EM**                                                               | XLR (feminino)       | Entrada de sinal de referência de áudio digital AES11 Usado para sincronizar a unidade para uma fonte de referência AES11.                                                                                         | Verde   |
| 11                   | **NET 1**                                                                  | RJ45 (1000BASE-T)    | Rede de áudio Ethernet e/ou rede de áudio Dante, porta 1.                                                                                                                                                          | Ardósia |
| 12                   | **NET 2**                                                                  | RJ45 (1000BASE-T)    | Rede de áudio Ethernet ou rede de áudio Dante, porta 2.                                                                                                                                                            | Ardósia |
| 13                   | **ESLOT 1** _(típico: Dante/AES67 I/O)_ | 2× SFP                                  | Slot de cartão de expansão 1 Quando equipado com um cartão Dante/AES67 I/O: duas portas SFP para conexões de rede óptica ou cobre Dante. O conteúdo do Slot varia de configuração. | Ciano   |

---

## Referência da Fortaleza LED 2.3

### LEDs de status

| LED                             | Cor                                 | Significado                                                                           |
| ------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------- |
| pronto                          | Verde (estável)  | Sequência de inicialização completa — unidade pronta para operação                    |
| ERRO                            | Vermelho (firme) | Erro interno ou erro de configuração detectado                                        |
| PSU OK                          | Verde (estável)  | Fonte de alimentação primária funcionando corretamente                                |
| PSU OK (2nd) | Verde (estável)  | PSU redundante presente e operando (unidades com duplo PSU apenas) |

---

## Referências cruzadas

- [Ch. 4 — Conexões de sinal](ch04-connections) — Níveis de sinal e procedimentos de conexão
- [Ch. 6 — Operação](ch06-operation) — Controla e operação de exibição
- [Aplicar. A — Pinças de Conector](appa-connector-pinouts) — Recomendações para Pin
