---
title: "Capítulo 3 - Instalação"
sidebar_label: "Cara. 3 — Instalação"
sidebar_position: 4
---

# Capítulo 3 - Instalação

> **Produto:** Penta da Dinamarca de Áudio Digital 720

> **Antes de começar:** Leia [Elemento da Frente — Segurança e Convenções](./fm-safety) antes de instalar esta unidade.

---

## 3.1 Requisitos do Site

_[Placeholder — requisitos ambientais: temperatura, umidade, limpeza de ventilação.]_

| Parâmatro                    | Especificação                                                             |
| ---------------------------- | ------------------------------------------------------------------------- |
| Temperatura operacional      | 0 °C a 40 °C (32 °F a 104 °F)                          |
| Temperatura de armazenamento | -20 °C a 60 °C                                                            |
| Umidade relativa             | 20% a 80% (não condensação)                            |
| Limpeza de ventilação        | Mínimo de 1U (44 mm) acima e abaixo da unidade no rack |

---

## Montando 3.2 Rack

_[Placeholder — procedimento de montagem. Inclua números de peças de hardware e especificações de torque.]_

O Penta 720 é uma unidade 2U rackmount (assisti modular) que monta diretamente em uma rack padrão de 19 centímetros com os rack fornecidos.

1. Anexe as orelhas de corrida à unidade usando os parafusos fornecidos.
2. Posicione a unidade no rack no local desejado.
3. Seguro com parafusos de rack em porcas de gaiola ou tiras de compartimento segmentadas.

> **ATENÇÃO:** Use todos os quatro parafusos rack Não se baseie em menos de quatro pontos de ligação.

---

## 3.3 - Conexão de potência

_[Colocador — procedimento de conexão de energia.]_

Interno. IEC C14 inlet. 100–240 V AC, 50/60 Hz, 0.45-0.20 A. PSUs redundantes opcionais.

1. Conecte um cabo de energia IEC C13 adequado ao inlet IEC C14 da unidade.
2. Conecte o outro extremo a uma tomada de aterramento.
3. Ative a unidade usando o botão liga/desliga do painel frontal.

> **ATENÇÃO:** Apenas se conecte a uma fonte de energia terrestre/aterrada. Não derrote o terreno.

---

## 3.4 Configuração de rede

A unidade conecta ao computador hospedeiro através do Ethernet. É necessária uma rede dedicada ao Gigabit Ethernet.

_[Posicionador — procedimento de configuração de rede. Referência cruzada para o manual de DADman 3.]_

1. Conecte a porta NET 1 da unidade a um seletor de Ethernet dedicado.
2. Conecte o NIC dedicado do computador de host ao mesmo interruptor.
3. Configure o NIC do host com um endereço IP estático na mesma subrede que a unidade.
4. Ligue a unidade.
5. Abra o DADman — a unidade deve ser descoberta automaticamente.

> **Observação — É necessária uma rede dedicada:** tráfego de rede de áudio é sensível à latência. Não rode áudio da rede DAD através de interruptores compartilhados com o tráfego geral de TI.

---

## 3.4 Initial Startup

_[Colocador — procedimento de primeira-potência e etapas de verificação]_

1. Confirme que todos os cabos de sinal estão desconectados antes de primeiro ligar.
2. Aplique potência.
3. Observe os LEDs do painel frontal — veja [Ch. 2 — Descrição do painel](./ch02-panel-description) para os estados LED esperados.
4. Conecte a unidade ao computador de host (Ethernet (sem Thunderbolt)).
5. Abra o DADman e confirme que a unidade aparece na lista de dispositivos.

---

## Referências cruzadas

- [Elemento Frontal — Segurança](./fm-safety)
- [Ch. 2 — Descrição do painel](./ch02-panel-description)
- [Manual do Usuário do DADman — Ch. 3 — Instalação](/installation) — Configuração de computador de host
