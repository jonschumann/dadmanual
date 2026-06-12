---
title: "Capítulo 2 - Descrição do Painel"
sidebar_label: "Cara. 2 — Descrição do painel"
sidebar_position: 3
---

# Capítulo 2 - Descrição do Painel

> **Produto:** Bolsa de Áudio Digital Core 256

> **Como usar este capítulo:** Este capítulo identifica todo controle e conector no núcleo 256. Para níveis de sinais e procedimentos de conexão, consulte [Ch. 4 — Conexões de sinal](ch04-connections). Para obter significados do estado LED, veja [Seção 2.3](#23-led-state-reference).

---

## Painel Frontal 2.1

![Core 256 front panel](/img/panel-core256-front.png)
_Figura 2.1 — Core 256 front panel._

> **NOTA:** O painel frontal Core 256 fornece apenas indicadores de status. Não há conectores I/O de áudio no painel frontal.

| Ref. | Descrição                 | tipo                                           | Função                                                                                                                       | Ponto                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Apagado**               | Logotipo iluminado                             | Iluminação azul; indica energia                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2                    | **Energia**               | Botão push iluminado                           | Inicia a sequência controlada de liga/desliga                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3                    | **Em.**   | Indicador de LED                               | Lado quando bloqueado para referência do relógio interno                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4                    | **Ext.**  | Indicador de LED (verde)    | Ligar quando bloqueado para a fonte de relógio externo                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5                    | **Erro.** | Indicador de LED (vermelho) | Erro de relógio ou falha interna. Veja [Seção 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 Painel traseiro

![Núcleo 256 traseiro painel](/img/panel-core256-rear.png)
_Figura 2.2 — Painel traseiro Core 256. Os callouts numerados correspondem à tabela abaixo._

O painel da retaguarda Core 256 carrega o mesmo conector definido como o AX Center com as seguintes diferenças:

| Diferença         | AX Centro                                               | Núcleo 256                                                         |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| Liga/Desliga      | IEC C14 mains inlet (100–240 V AC)   | Conector de barril 12 V DC (requer PSU externo) |
| Monitorar saídas  | 2× stereo TRS (MONITOR 1, MONITOR 2) | Não presente                                                       |
| Slots de expansão | 2× (LOT 1, SLOT 2)                   | 2× (SLOT 1, SLOT 2) — mesmo                     |

Todos os outros conectores de painel traseiro (Bays XPANSION / SFP, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC SAi, MADI IN, MADI OUT, ADATE 1/2, ADAT EM 1/2) são idênticos ao AX Center. Consulte o [Ch. 4 — Painel de Rear AX Centro](../ax-center/ch04-connections) para a função e especificação desses conectores.

| Ref. | Descrição                                    | Conector                                      | Função                                                                                                                                                   | Ponto                                                                                                                                                                                                                                                     |
| -------------------- | -------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Energia**                                  | Barril 12 V DC                                | Entrada de energia DC Conecte o fornecimento externo de energia de 12 V. Não substitua por um fornecimento de terceiros. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2                    | **EXPANSÃO**                                 | Baía SFP 2×                                   | DADLink / expansão óptica do MADI. Identical to AX Center.                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3                    | **NET 1 / NET 2**                            | 2× RJ45 + bay SFP                             | Rede de controle Ethernet (100/1000BASE-T) + fibra SFP opcional. Identical to AX Center.              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4                    | **TROVEIRO 1** (superior) | USB-C (Thunderbolt 3)      | Conexão primária do Thunderbolt 3 para o computador.                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5                    | **TROVEIRO 2** (inferior) | USB-C (Thunderbolt 3)      | Thunderbolt 3 daisy-chain / passagem.                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6                    | **WC/VBB EM**                                | BNC (75 anos),             | Entrada de relógio de palavra ou Video Black Burst.                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7                    | **SAÍDA WC**                                 | BNC (75 anos),             | Saída do relógio Word                                                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8                    | **MADI EM**                                  | BNC (75 anos),             | MADI input (coaxial). AES10 compatível.                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9                    | **SAÍDA DE MADI**                            | BNC (75 anos),             | MADI output (coaxial).                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10                   | **ADICIONAR SAÍDA 1 / 2**                    | 2× TOSLINK (óptico)        | ADICIONAR saída do Lightpipe. Até 8 min às 44.1/48 kHz; 4 ch às 88,2/96 kHz (S/MUX).  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11                   | **ADICIONAR EM 1 / 2**                       | 2× TOSLINK (óptico)        | ADAT entrada Lightpipe. O mesmo canal conta que as saídas ADAT.                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12                   | **ESLOTE 1 / SLOT 2**                        | Slot de expansão 2× (DB25) | Slots de expansão I/O analógico. Cada um aceita um cartão de expansão DAD 8-canais.                                      | —                                                                                                                                                                                                                                                         |

---

## Referência da Fortaleza LED 2.3

### LEDs de Referência do Relógio

| Int. | Ramal | Erro. | Significado                                                                  |
| -------------------- | ----- | --------------------- | ---------------------------------------------------------------------------- |
| ●                    | ○     | ○                     | Travado para referência de relógio interno — modo mestre do relógio          |
| ○                    | ●     | ○                     | Travado para referência de relógio externo — modo de escravo de relógio      |
| ●                    | ●     | ○                     | Adquirindo bloqueio para referência externa (transitório) |
| ○                    | ○     | ●                     | **Erro de relógio** - não pode bloquear a referência selecionada             |
| ●                    | ○     | ●                     | **Falha interna** — ciclo de energia; contate o suporte se persistente       |
| Flash lento          | —     | —                     | Atualização de firmware em andamento — não desligue                          |

### Estado do botão liga/desliga

| Estado: | Significado                                      |
| ----------------------- | ------------------------------------------------ |
| Desligado               | Unidade desligada                                |
| Estável                 | Unidade ligada, operação normal                  |
| Pulso lento             | Sequência de espera ou desligamento em progresso |

---

## Referências cruzadas

- [Ch. 4 — Conexões de sinal](ch04-connections) — Níveis de sinal e procedimentos de conexão
- [Ch. 6 — Operação](ch06-operation) — Controla e operação de exibição
- [Aplicar. A — Pinças de Conector](appa-connector-pinouts) — Recomendações para Pin
