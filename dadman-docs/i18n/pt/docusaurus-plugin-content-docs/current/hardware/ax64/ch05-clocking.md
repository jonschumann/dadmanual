---
title: "Capítulo 5 - Bloqueio e sincronização"
sidebar_label: "Cara. 5 - Bloqueio"
sidebar_position: 6
---

# Capítulo 5 - Bloqueio e sincronização

> **Produto:** Dinamarca de Áudio Digital AX64

---

## 5.1 Visão geral

O AX64 suporta várias fontes de referência de relógio. A fonte do relógio ativo está selecionada no DADman. Apenas um dispositivo em uma sessão DADman deve ser o mestre do relógio; todos os outros dispositivos devem ser escravos.

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

## 5.4 MADI Embutido Relógio

_[Placeholder — bloqueio do MADI incorporado ou do sinal de referência AES11.]_

---

## 5.5 ADAT Embedded Clock

_[Placeholder — bloqueio do ADAT incorporado ou fonte do PTP na rede.]_

---

## Configuração de relógio 5.6 no DADman

_[Placeholder — como selecionar a fonte de relógio e verificar o bloqueio no DADman. DADman manual de referência cruzada Ch. 5.]_

1. No DADman, abra a Configuração do Dispositivo para o AX64.
2. Navegue até a seção **Clock**.
3. Selecione a fonte de relógio desejada no menu suspenso.
4. Verifique se o painel frontal **Ext.** Iluminados LED (para referência externa) ou **Int.** LED (para interno).

---

## Referências cruzadas

- [Ch. 2 — Descrição do painel](./ch02-panel-description) — Estados com LED de relógio
- [Manual do Usuário do DADman — Ch. 5 — Sinal Flow](/signal-flow) — topologia do relógio do sistema
