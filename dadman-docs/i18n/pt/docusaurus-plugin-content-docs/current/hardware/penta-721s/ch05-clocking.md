---
title: "Capítulo 5 - Bloqueio e sincronização"
sidebar_label: "Cara. 5 - Bloqueio"
sidebar_position: 6
---

# Capítulo 5 - Bloqueio e sincronização

> **Produto:** Áudio digital Dinamarca Penta 721s

---

## 5.1 Visão geral

O Penta 721s suporta várias fontes de referência de relógio. A fonte do relógio ativo está selecionada no DADman. Apenas um dispositivo em uma sessão DADman deve ser o mestre do relógio; todos os outros dispositivos devem ser escravos.

---

## 5.2 Relógio Interno

_[Placeholder — descreve a especificação do oscilador de cristal interno, a exatidão e quando usar o relógio interno.]_

> **NOTA:** Use o relógio interno apenas quando não estiver disponível nenhuma referência externa, ou quando esta unidade for o mestre do relógio designado para todo o sistema.

---

## 5.3 Relógio Externo de Palavra

_[Colocador — especificação de relógio palavra, taxas aceitas, término BNC.]_

| Formato aceito                                            | Conector                           |
| --------------------------------------------------------- | ---------------------------------- |
| Relógio com palavra (1× taxa amostral) | BNC (WC/VBB EM) |
| Relógio com 256× palavra                                  | BNC (WC/VBB EM) |
| Video Black Burst                                         | BNC (WC/VBB EM) |

---

## 5.4 - AES11 / Referência AES

_[Placeholder — bloqueio do MADI incorporado ou do sinal de referência AES11.]_

---

## 5.5 PTP de rede (IEEE 1588)

_[Placeholder — bloqueio do ADAT incorporado ou fonte do PTP na rede.]_

---

## 5.6 Conversor de taxa de amostragem integrado (SRC)

_[Placeholder — Penta 721s apenas. Descreva recursos SRC, conversões de taxa suportadas e configuração em DADman.]_

O Penta 721s inclui uma CPCP integrada que pode fazer transmissões de áudio ponte funcionando a diferentes taxas amostrais. Isso permite funcionar como um dispositivo de limite entre, por exemplo, uma rede de áudio de 48 kHz e uma sessão de 96 kHz.

---

## Configuração de relógio da 5.7 no DADman

_[Placeholder — como selecionar a fonte de relógio e verificar o bloqueio no DADman. DADman manual de referência cruzada Ch. 5.]_

1. No DADman, abra a configuração do dispositivo para o Penta 721s.
2. Navegue até a seção **Clock**.
3. Selecione a fonte de relógio desejada no menu suspenso.
4. Verifique se o painel frontal **Ext.** Iluminados LED (para referência externa) ou **Int.** LED (para interno).

---

## Referências cruzadas

- [Ch. 2 — Descrição do painel](./ch02-panel-description) — Estados com LED de relógio
- [Manual do Usuário do DADman — Ch. 5 — Sinal Flow](/signal-flow) — topologia do relógio do sistema
