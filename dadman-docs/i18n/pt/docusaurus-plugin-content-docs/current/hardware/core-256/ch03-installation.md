---
title: "Capítulo 3 - Instalação"
sidebar_label: "Cara. 3 — Instalação"
sidebar_position: 4
---

# Capítulo 3 - Instalação

> **Produto:** Bolsa de Áudio Digital Core 256

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

O núcleo 256 é uma unidade meia. É necessário uma prateleira de 1U (disponível separadamente) ou acessório de hardware de Core 256 para montá-lo em uma raquete padrão de 19inch.

1. Anexe as orelhas de corrida à unidade usando os parafusos fornecidos.
2. Posicione a unidade no rack no local desejado.
3. Seguro com parafusos de rack em porcas de gaiola ou tiras de compartimento segmentadas.

> **ATENÇÃO:** Use todos os quatro parafusos rack Não se baseie em menos de quatro pontos de ligação.

---

## 3.3 - Conexão de potência

_[Colocador — procedimento de conexão de energia.]_

Externo. Conector de barril CC 12 V PSU externa fornecida.

1. Conecte um cabo de energia IEC C13 adequado ao inlet IEC C14 da unidade.
2. Conecte o outro extremo a uma tomada de aterramento.
3. Ative a unidade usando o botão liga/desliga do painel frontal.

> **ATENÇÃO:** Apenas se conecte a uma fonte de energia terrestre/aterrada. Não derrote o terreno.

---

## 3.4 - Instalação do driver Thunderbolt

O driver DAD Thunderbolt deve ser instalado no computador host antes que a unidade seja detectada pelo DADman.

_[Colocador — procedimento de instalação do motorista. Referência cruzada para o manual de DADman 3.]_

1. Baixar o pacote do driver DAD Thunderbolt de [digitalaudio.dk](https://digitalaudio.dk/support).
2. Execute o instalador e siga as instruções na tela.
3. Reiniciar o computador quando solicitado.
4. Ligue a unidade e conecte o cabo do Thunderbolt.
5. Abra o DADman — a unidade deve aparecer na Lista de Dispositivos

> **NOTA:** Configurações de segurança do Thunderbolt no macOS podem exigir que o usuário aprove o novo dispositivo Thunderbolt na primeira conexão. Consulte o capítulo de instalação do DADman para mais detalhes.

---

## Inicialização 3.5

_[Colocador — procedimento de primeira-potência e etapas de verificação]_

1. Confirme que todos os cabos de sinal estão desconectados antes de primeiro ligar.
2. Aplique potência.
3. Observe os LEDs do painel frontal — veja [Ch. 2 — Descrição do painel](./ch02-panel-description) para os estados LED esperados.
4. Conecte a unidade ao computador de host (Thunderbolt 3).
5. Abra o DADman e confirme que a unidade aparece na lista de dispositivos.

---

## Referências cruzadas

- [Elemento Frontal — Segurança](./fm-safety)
- [Ch. 2 — Descrição do painel](./ch02-panel-description)
- [Manual do Usuário do DADman — Ch. 3 — Instalação](/installation) — Configuração de computador de host
