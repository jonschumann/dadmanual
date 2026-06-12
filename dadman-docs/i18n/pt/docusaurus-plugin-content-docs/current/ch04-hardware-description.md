---
title: "Capítulo 4 - Descrição de Hardware"
sidebar_label: "Cara. 4 - Descrição de Hardware"
sidebar_position: 6
---

# Capítulo 4 - Descrição de Hardware

> **Documento:** Usuário do DADman Manual  
> **Status do Capítulo:** Projecto v0. — Fotos no painel e dados da porta integrados; Foto de painel da retaguarda Core 256 e seção DAD Junior pendente de  
> **Última atualização:** Junho de 2026

---

## Neste Capítulo

| Turma               | Capas                                               | Relevante para        |
| ------------------- | --------------------------------------------------- | --------------------- |
| 4.1 | AX Center - painel frontal e traseiro               | Usuários do Centro AX |
| 4.2 | Core 256 - painel frontal e traseiro                | Usuários do Core 256  |
| 4.3 | AX 64 — painel frontal e traseiro                   | Usuários AX 64        |
| 4.4 | MOM — controla referência                           | Usuários de MOM       |
| 4.5 | DAD Júnior - painel frontal e traseiro              | Usuários DAD Júnior   |
| 4.6 | Penta 720 / 721s — painel frontal e traseiro        | Penta users           |
| 4.7 | Estado de LED (todos os modelos) | Todos os usuários     |

> **NOTAS — Como usar este capítulo:** Este capítulo é uma referência de hardware. Ele identifica cada controle físico e conector de cada produto suportado. Para o roteamento de sinal e procedimentos de configuração, veja [Capítulo 7 — Operação]. Para instalação e cabo, consulte [Capítulo 3 — Instalação].

---

## Centro AX 4.1

### 4.1.1 Visão geral

O AX Center é uma montaria 1U de estilo Thunderbolt interface de áudio na família de produtos do Thunder\^\\Core. Ele fornece duas entradas mic/linha/instrumento e saídas de monitoramento estéreo diretamente no painel frontal, com MADI, ADAT, palavra relógio, slots de expansão analógica e dual Thunderbolt 3 portos na retaguarda. Todo roteamento, ganho, monitoramento e configuração é realizada via DADman sobre Ethernet. O Centro AX também hospeda o MOM (Monitor de Módulos Operacionais) quando usado como um sistema de controle de área de trabalho — o MOM se conecta ao AX Center via USB-C.

### Painel de Painel 4.1.2

![Painel frontal do centro AX](/img/panel-ax-center-front.png)
_Figura 4.1 — Painel de frente do centro AX. Os callouts numerados correspondem à Seção 4.1.3._

![Painel traseiro do centro AX](/img/panel-ax-center-rear.png)
_Figura 4.2 — Painel da retaguarda do centro AX. Os callouts numerados correspondem à Seção 4.1.4._

### 4.1.3 - Controle do Painel Frontal

| Ref. | Descrição                 | tipo                                           | Função                                                                                                                                                                                                                                                                                                                         |
| -------------------- | ------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| —                    | **Apagado**               | Logotipo iluminado                             | Iluminação azul; indica energia                                                                                                                                                                                                                                                                                                |
| 1                    | **Energia**               | Botão push iluminado                           | Inicia a sequência de energia controlada/desligada. Segure 5 s para forçar desligamento de energia.                                                                                                                                                                                            |
| —                    | **Em.**   | Indicador de LED                               | Iluminado quando a unidade está bloqueada para sua própria referência de relógio interno                                                                                                                                                                                                                                       |
| —                    | **Ext.**  | Indicador de LED (verde)    | Mostrar quando a unidade estiver bloqueada para uma fonte de relógio externa (palavra relógio, MADI, ADN ou Dante)                                                                                                                                                                                          |
| —                    | **Erro.** | Indicador de LED (vermelho) | Lit quando um erro de relógio, perda de sincronização ou falha interna é detectada. Veja [Seção 4.7 — Referência do Estado LED] e [Capítulo 9 — Solução de problemas]. |
| 2                    | **Mic/Inst 1**            | Combo XLR/TRS (bloqueando)  | Mic/linha/instrumento de entrada, canal 1. Aceita XLR (mic/line) balanceada ou 6,35 mm TRS/TS (linha/instrumento).                                                                                                                                       |
| —                    | **P48**                   | Indicador de LED                               | Pouco quando a energia do fantasma (+48 V) estiver ativa neste canal de entrada                                                                                                                                                                                                                             |
| —                    | **Microfone**             | Indicador de LED                               | Mostrar quando a entrada é configurada como uma entrada de microfone                                                                                                                                                                                                                                                           |
| —                    | **Instalar**              | Indicador de LED                               | Luz quando o valor de entrada é configurado como um instrumento de alta impedância                                                                                                                                                                                                                                             |
| 3                    | **Mic/Inst 2**            | Combo XLR/TRS (bloqueando)  | Mic/linha/instrumento de entrada, canal 2. Mesma especificação que o canal 1.                                                                                                                                                                                                                  |
| 4                    | **HP 1**                  | jack TRS de 6.35 mm            | Saída 1 do Headphone Nível controlado via DADman ou MOM.                                                                                                                                                                                                                                                       |
| 5                    | **HP 2**                  | jack TRS de 6.35 mm            | Saída do fone de ouvido 2. Nível controlado via DADman ou MOM.                                                                                                                                                                                                                                 |

### Painel traseiro 4.1.4

| Ref. | Descrição                                      | Conector                                                | Função                                                                                                                                                                                                                                                                                                                                                            |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Energia**                                    | Entrada de C14 IEC                                      | Mantém a entrada de energia. 100–240 V AC, 50/60 Hz, com auto-variação interna PSU. Conecte um cabo de energia IEC C13 padrão.                                                                                                                                                                                    |
| 2                    | **EXPANSÃO** (par superior) | Baía SFP 2×                                             | DADLink / expansão óptica do MADI. Aceita módulos SFP para conexão com outras unidades DAD via fibra óptica ativa (DADLink cabo) ou para MADI I/O.                                                                                                                                                             |
| 3                    | **NET 1 / NET 2**                              | 2× RJ45 + bay SFP                                       | Rede de controle Ethernet (NET 1, NET 2: 100/1000BASE-T). A baía de SFP abaixo de NET 1/NET 2 aceita um módulo SFP para conexão de rede de fibras opcional. Conecte o NET 1 ou NET 2 à sua rede de controle do DADman — somente uma porta é necessária para a operação normal. |
| 4                    | **TROVEIRO 1** (superior)   | USB-C (Thunderbolt 3)                | Conexão primária do Thunderbolt 3 para o computador. Conecte esta porta ao Thunderbolt 3 ou USB4 do computador usando um cabo com rating de 20 Gbps. Carrega até 256 canais de áudio bidirecionais a taxas de amostra padrão.                                                                                     |
| 5                    | **TROVEIRO 2** (inferior)   | USB-C (Thunderbolt 3)                | Thunderbolt 3 daisy-chain / passagem. Conecte-se ao próximo dispositivo do Thunderbolt na cadeia.                                                                                                                                                                                                                                 |
| 6                    | **WC/VBB EM**                                  | BNC (75 anos),                       | Entrada de relógio de palavra ou Video Black Burst. Aceita o relógio de palavras (1×, 256×, ou formatos de sincronização de vídeo). Envolva o cancelamento de 75 x no último dispositivo da cadeia de relógio com uma palavra.                                                                 |
| 7                    | **SAÍDA WC**                                   | BNC (75 anos),                       | Saída do relógio Word Exibe a referência de sincronização da unidade atual como um sinal de relógio de palavra.                                                                                                                                                                                                                                   |
| 8                    | **MADI EM**                                    | BNC (75 anos),                       | MADI input (coaxial). Aceita o MADI AES10 no formato de quadro de 56- ou 64 canais. A contagem máxima de canais de 96 kHz, é 32.                                                                                                                                                               |
| 9                    | **SAÍDA DE MADI**                              | BNC (75 anos),                       | MADI output (coaxial). Transmite MADI no formato de quadro e taxa de amostragem configurados.                                                                                                                                                                                                                  |
| 10                   | **ADICIONAR SAÍDA 1 / 2**                      | 2× TOSLINK (óptico)                  | ADICIONAR saída do Lightpipe. Até 8 canais por porta a 44.1/48 kHz; 4 canais por porta a 88,2/96 kHz (S/MUX).                                                                                                                                                                                  |
| 11                   | **ADICIONAR EM 1 / 2**                         | 2× TOSLINK (óptico)                  | ADAT entrada Lightpipe. O mesmo canal conta que as saídas ADAT.                                                                                                                                                                                                                                                                   |
| 12                   | **MONITOR 1**                                  | 2× TRS 6.35 mm (L/R) | Saída de monitor estéreo balanceada. Nível controlado via DADman ou MOM.                                                                                                                                                                                                                                                          |
| 13                   | **MONITOR 2**                                  | 2× TRS 6.35 mm (L/R) | Saída de monitor estéreo balanceada. Nível controlado via DADman ou MOM.                                                                                                                                                                                                                                                          |
| 14                   | **ESLOTE 1 / SLOT 2**                          | Slot de expansão 2× (DB25)           | Slots de expansão I/O analógico. Cada slot aceita um cartão de expansão DAD fornecendo 8 canais de A/D, D/A, ou I/O digital. Tipo do cartão e atribuição de canal está configurada no DADman.                                                                                                                     |

> **NOTICE — Requisito do cabo Thunderbolt:** A conexão com o Thunderbolt 3 requer um rating de cabo de 20 Gbps ou superior. Cabos USB-C padrão não são classificados para velocidades de Thunderbolt 3 e não funcionarão de forma confiável. Use o cabo fornecido com a unidade ou um cabo certificado de Thunderbolt 3 / Thunderbolt 4.

> **NOTICE — Encerramento de relógio de palavra:** O WC/VBB EM porta deve ser terminado (75 l.) quando o AX Center é o último dispositivo em uma cadeia de relógio de palavra. Falha ao encerrar pode causar reflexões que destabilizam a referência de relógio para todos os dispositivos conectados. O interruptor de terminação está localizado adjacente ao conector BNC.

---

## Núcleo 4.2 Core 256

### 4.2.1 Visão geral

O núcleo 256 é uma meia-rack da interface de áudio do Thunderbolt na família de produtos do Thunder\^\\Core. Ele compartilha o mesmo complemento do conector traseiro que o AX Centro, mas omite as microentradas / instrumentos do painel frontal e as saídas do fone de ouvido. Ele é projetado para instalações onde um compacto, rackmountable núcleo de áudio do Thunderbolt é necessário sem front-panel I/O. O Núcleo 256 é alimentado por uma fonte externa de 12 V DC.

> **NOTÍCIA — Fazendo o Núcleo 256:** O Core 256 é uma unidade de meia-raquete largura. É necessário um acessório de hardware dedicado a 1U rack ou o Core 256 para montá-lo em uma raquete padrão de 19-centímetro. Veja [Capítulo 2 — Requisitos de Sistema] para opções de inserção.s]

### Painel de Visão Geral 4.2.2

![Core 256 front panel](/img/panel-core256-front.png)
_Figura 4.3 — Core 256 front. Os callouts numerados correspondem à Seção 4.2.3._

![Core 256 rear panel](/img/panel-core256-rear.png)
_Figura 4.4 — Painel de retaguarda Core 256. Os callouts numerados correspondem à Seção 4.2.4._

### 4.2.3 Controle do Painel Frontal

| Ref. | Descrição                 | tipo                                           | Função                                                   |
| -------------------- | ------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| —                    | **Apagado**               | Logotipo iluminado                             | Iluminação azul; indica energia                          |
| 1                    | **Energia**               | Botão push iluminado                           | Inicia a sequência controlada de liga/desliga            |
| —                    | **Em.**   | Indicador de LED                               | Lado quando bloqueado para referência do relógio interno |
| —                    | **Ext.**  | Indicador de LED (verde)    | Ligar quando bloqueado para a fonte de relógio externo   |
| —                    | **Erro.** | Indicador de LED (vermelho) | Lit no erro de relógio ou falha interna                  |

### Painel traseiro 4.2.4

O painel traseiro Core 256 carrega o mesmo conjunto de conector que o AX Center (veja [Seção 4.1.3]), com as seguintes diferenças:

| Diferença         | AX Centro                                               | Núcleo 256                                                         |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| Liga/Desliga      | IEC C14 mains inlet (100–240 V AC)   | Conector de barril 12 V DC (requer PSU externo) |
| Monitorar saídas  | 2× stereo TRS (MONITOR 1, MONITOR 2) | Não presente                                                       |
| Slots de expansão | 2× (LOT 1, SLOT 2)                   | 2× (SLOT 1, SLOT 2) — mesmo                     |

Todos os outros conectores de painel traseiro (Bays XPANSION / SFP, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC SAi, MADI IN, MADI OUT, ADATE 1/2, ADAT EM 1/2) são idênticos ao AX Center. Consulte a tabela de conector de painel da retaguarda AX Center na [Seção 4.1.3] para função e especificação desses conectores.

---

## 4.3 X 64

### 4.3.1 Visão geral

O AX 64 é uma rack-mount Thunderbolt interface de áudio com até oito slots de cartões de expansão, dando até 64 canais do analógico I/O em uma única unidade (dependente de cartões de expansão equipados). Como o AX Center, todo o controle é via DADman sobre Ethernet. O AX 64 carrega a mesma conectividade central que o AX Center (MADI, ADAT, palavra relógio, Thunderbolt 3, dual Ethernet), mas soma até oito slots de cartões de expansão analógicos no formato DB25 ao invés dos painéis front-panel fixos I/O.

### Painel de Painel 4.3.2

![Painel frontal AX 64](/img/panel-ax64-front.png)
_Figura 4.5 — Painel frontal AX 64. Os callouts numerados correspondem à Seção 4.3.3._

![Painel traseiro AX 64](/img/panel-ax64-rear.png)
_Figura 4.6 — Painel traseiro AX 64. Os callouts numerados correspondem à Seção 4.3.4._

### 4.3.3 - Controles do Painel Frontal

| Ref. | Descrição                 | tipo                                           | Função                                                   |
| -------------------- | ------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| —                    | **Apagado**               | Logotipo iluminado                             | Iluminação azul; indica energia                          |
| 1                    | **Energia**               | Botão push iluminado                           | Inicia a sequência controlada de liga/desliga            |
| —                    | **Em.**   | Indicador de LED                               | Lado quando bloqueado para referência do relógio interno |
| —                    | **Ext.**  | Indicador de LED (verde)    | Ligar quando bloqueado para a fonte de relógio externo   |
| —                    | **Erro.** | Indicador de LED (vermelho) | Lit no erro de relógio ou falha interna                  |

> **NOTA:** O painel frontal AX 64 fornece apenas indicadores de status. Todas as conexões de áudio de E/S são feitas no painel traseiro (Figure 4.6).

### Painel traseiro 4.3.4

| Ref. | Descrição                                    | Conector                                 | Função                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------- | -------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Energia**                                  | Entrada de C14 IEC                       | Mantém a entrada de energia. 100–240 V AC, 50/60 Hz, intervalo automático.                                                                                                                                                                                                                                                                                                  |
| 1a                   | _(Opcional)_              | Entrada de C14 IEC                       | Entrada de alimentação elétrica (opção ajustada a fábrica). Quando a PSU redundante for instalada, um segundo inlet IEC C14 aparece adjacente ao primário.                                                                                                                                                                                               |
| 2, 3                 | **EXPANSÃO**                                 | Baía SFP 2×                              | DADLink / expansão óptica MADI, idêntica ao AX Center. Aceita módulos SFP para DADLink ou MADI I/O óptico.                                                                                                                                                                                                                                                                  |
| 4, 5                 | **NET 1 / NET 2**                            | 2× RJ45 + bay SFP                        | Rede Ethernet de controle Identical to AX Center. Conecte NET 1 ou NET 2 à rede de controle do DADman.                                                                                                                                                                                                                                                                      |
| 6                    | **TROVEIRO 1** (superior) | USB-C (Thunderbolt 3) | Conexão primária do Thunderbolt 3 para o computador.                                                                                                                                                                                                                                                                                                                                        |
| 7                    | **TROVEIRO 2** (inferior) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passagem.                                                                                                                                                                                                                                                                                                                                                       |
| 8                    | **WC EM**                                    | BNC (75 anos),        | Entrada de relógio de palavra.                                                                                                                                                                                                                                                                                                                                                              |
| 9                    | **SAÍDA WC**                                 | BNC (75 anos),        | Saída do relógio Word                                                                                                                                                                                                                                                                                                                                                                                       |
| 10                   | **MADI EM**                                  | BNC (75 anos),        | Entrada coaxial MADI. AES10 compatível.                                                                                                                                                                                                                                                                                                                                     |
| 11                   | **SAÍDA DE MADI**                            | BNC (75 anos),        | Saída coaxial MADI.                                                                                                                                                                                                                                                                                                                                                                         |
| 12, 14               | **ADICIONAR SAÍDA 1 / 2**                    | 2× TOSLINK (óptico)   | ADICIONAR saída do Lightpipe.                                                                                                                                                                                                                                                                                                                                                               |
| 13, 15               | **ADICIONAR EM 1 / 2**                       | 2× TOSLINK (óptico)   | ADAT entrada Lightpipe.                                                                                                                                                                                                                                                                                                                                                                     |
| 16–23                | **Slot 1 – Slot 8**                          | Até 8× DB25                              | Slots de cartões de expansão analógicos. Cada slot aceita um cartão de expansão DAD de 8 canais (A/D, D/A ou I/O) digital. A numeração do lote corre para a esquerda, como vista da retaguarda. (O lote 1 está mais direito). Tipo e roteamento do cartão está configurado no DADman. |

> **NOTÍCIAS — Slots de cartões de expansão:** Os X 64 são enviados com o número de cartões de expansão especificados no momento da ordem. Slots não preenchidos são cobertos por uma tábua. Não remova as placas em branco dos espaços vazios — elas são necessárias para o fluxo correto do ar. Os cartões de expansão só devem ser instalados ou removidos com a unidade desligada.

> **NOTAS — Inspeção de convenção de numeração:** No painel traseiro físico, números de slot são sequestrates acima de cada slot e executam da direita (Slot 1) para a esquerda (Slot 8) como visto pela parte traseira da unidade. No DADman, os slots são rotulados para corresponder a esta numeração física. Verifique as atribuições de slot no DADman ao conectar primeiro uma unidade com cartões de expansão.

---

## 4.4 MOM - Monitorar Módulo Operacional

### 4.4.1 Visão geral

O MOM (Monitor Operacional Module) é um controlador de monitor desktop que se conecta a um AX Center ou AX 64 via USB-C. Ele fornece controle físico sobre a seleção do alto-falante, seleção fonte, nível mestre, escurecimento cortar, falar e nível de referência sem exigir interação com a janela de software DADman. O MOM se comunica com o AX Center ou AX 64 por USB e não contém nenhum circuito próprio de áudio — ele é apenas uma superfície de controle. Os sinais de áudio não são encaminhados através do MOM.

> **NOTA:** O MOM se conecta ao computador executando o DADman através da porta USB-C na traseira do AX Center ou AX 64. Ele não se conecta diretamente à porta USB do computador. O DADman deve estar em execução para que o MOM funcione.

### 4.2 Controles de Referência

![rosto de controle MOM](/img/panel-mom.png)
_Figura 4.7 — rosto de controle MOM. Os callouts numerados correspondem à tabela de referência abaixo._

| Ref. | Descrição                       | tipo                                        | Função                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1                    | **Espanhol. 1** | Botão push iluminado                        | Seleciona os alto-falantes definidos 1 (por exemplo, monitores principais). Corresponde a uma saída de um alto-falante configurada no perfil ativo do Monitor no DADman.                                                                                                                |
| 2                    | **Espanhol. 2** | Botão push iluminado                        | Seleciona o conjunto de saída do alto-falante 2 (por exemplo, monitores próximos ao campo).                                                                                                                                                                                                             |
| 3                    | **Espanhol. 3** | Botão push iluminado                        | Seleciona o conjunto de saída do alto-falante 3 (por exemplo, alto-falante de tradução ou Atmos bed).                                                                                                                                                                                                   |
| 4                    | **Src. R**      | Botão push iluminado                        | Seleciona a fonte de monitoramento A conforme definido no perfil de Monitor ativo.                                                                                                                                                                                                                                         |
| 5                    | **Src. B**      | Botão push iluminado                        | Seleciona a fonte de monitoramento.                                                                                                                                                                                                                                                                                        |
| 6                    | **Src. C**      | Botão push iluminado                        | Seleciona a fonte de monitoramento C.                                                                                                                                                                                                                                                                                      |
| 7                    | **Camada**                      | Botão push iluminado                        | Altera o MOM entre camadas de controle. Quando várias camadas são configuradas no DADman, pressionar os ciclos de camada através deles, reatribuindo o Spkr. e Src. botões para diferentes conjuntos de alto-falantes e fontes.                                            |
| —                    | **LEDs de status 1–4**          | Indicadores LED                             | Indique o status das quatro camadas de monitoramento ativo ou predefinições. Iluminado quando a camada correspondente está ativa.                                                                                                                                                                          |
| —                    | **Estado.**     | Indicador de LED (verde) | Indica que MOM está conectado ao Centro AX / AX 64 e se comunica corretamente. Flashes durante a inicialização. Desligado quando desconectado.                                                                                                                                             |
| 8                    | **B**                           | Pressionar-botão                            | Talkback. Rota o microfone da fala (configurado em DADman) para o feed de talentos enquanto mantido.                                                                                                                                                                                    |
| 9                    | \*\*Ref.        | Pressionar-botão                            | Nível de referência. Altera a saída do monitor para o nível de referência calibrado definido no perfil de monitor ativo. Pressione novamente para retornar ao nível anterior.                                                                                                              |
| 10                   | **Corte**                       | Botão push iluminado                        | Cortes (mudos) a saída do monitor. Iluminação vermelha quando ativa.                                                                                                                                                                                                                    |
| 11                   | **Dim**                         | Botão push iluminado                        | Acompanha a saída do monitor pela quantidade do Dim configurada no perfil do Monitor ativo (normalmente -20 dB). Iluminação âmbar quando ativo.                                                                                                                                         |
| 12                   | **Nível**                       | Codificador rotativo com anel de LED        | Controle nível de monitor mestre. Virar para ajustar o nível de produção. O anel de LED indica a posição do nível atual em relação ao nível de referência (0 = Ref). Intervalo: aproximadamente -40 dB a +6 dB em relação à referência. |

> **NOTICE — MOM e Perfis de Monitor:** As funções dos botões Spkr., Src., e Layer são determinadas pelo perfil Monitor carregado no DADman. Um MOM sem um perfil de monitor ativo configurado terá spam não funcional. e Src. botões. Configure os Perfis antes de usar o MOM na sessão. Veja [Capítulo 8 — Recursos Avançados, Seção 8.1 — Monitorar Perfis].

---

## 4.5 DAD Júnior

### 4.5.1 Visão geral

_[Placeholder: Visão geral do DAD Junior — aguardando lançamento de produto e documentação de engenharia.]_

### Painel Frontal 4.5.2

_[Placeholder: diagrama de painel frontal anotado - DAD Junior]_

### Painel traseiro 4.5.3

_[Placeholder: Diagrama de painel traseiro anotado - DAD Junior]_

---

## 4.6 Penta 720 / 721s

### 4.6.1 Visão geral

O Penta 720 e Penta 721s são interface áudio modular e plataformas de conversão de sinal a partir da tecnologia NTP. Ao contrário dos produtos principais do Thunder\ ( X Center, AX 64, Core 256), as unidades Penta se conectam ao computador apenas através do Ethernet — não há nenhuma conexão com Thunderbolt. DADman se comunica com as unidades Penta sobre a rede de controle para roteamento, conversão de formato e configuração. Unidades Penta são usadas tipicamente para contagem de alta canalização de AES/EBU e MADI I/O, conversão de formato e distribuição de áudio de rede em ambientes de transmissão e pós-produção.

O Penta 720 é um chassis de montaria 2U que aceita cartões de expansão nos seus slots internos. O Penta 721s é uma variante mais leve 1U. O complemento do conector de painel traseiro depende dos cartões de expansão instalados; o layout mostrado na Seção 4. .3 reflete uma configuração típica com um cartão Dante/AES67 I/O no Slot 1.

### Painel de Visão Geral 4.6.2

![Painel frontal Penta 720](/img/panel-penta720.png)
_Figura 4.8 — Painel frontal Penta 720. Os callouts numerados correspondem à tabela de referência na Seção 4.6.3._

![Painel frontal de 721s Penta (/img/panel-penta721s-front.png)
_Figura 4.9 — Painel frontal de Penta 721s._

![Painel traseiro Penta 721s](/img/panel-penta721s-rear.png)
_Figura 4.10 — Painel traseiro de Penta 721s. Os callouts numerados correspondem à tabela de referência na Seção 4.6.4._

| Ref. | Descrição  | tipo                                           | Função                                                                                                                                                                                         |
| -------------------- | ---------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —                    | **Pronto** | Indicador de LED (verde)    | A unidade concluiu a sequência de inicialização e está pronta para operação                                                                                                                    |
| —                    | **Erro**   | Indicador de LED (vermelho) | Foi detectado um erro interno ou erro de configuração                                                                                                                                          |
| —                    | **PSU OK** | Indicador de LED (verde)    | O carregador principal está funcionando corretamente. Em unidades com PSUs redundantes, um segundo indicador do PSU confirma o status do suprimento do backup. |

### Painel Rear 4.6.4

| Ref. | Descrição                                       | Conector                                | Função                                                                                                                                                                                                                    |
| -------------------- | ----------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Poder (primário)**         | Entrada de C14 IEC                      | Mantém a entrada de energia. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                      |
| 2                    | **Liga/Desliga (backup)**    | Entrada de C14 IEC                      | Redundante carrega energia (quando ajustado). Fornece redundância hot-swap da PSU.                                                                                     |
| 3                    | **AES/EBU I/O 1–4**                             | DB25 (Pingue-pongue) | Áudio digital AES/EBU I/O, canais 1–4 (4 pares estéreo = 8 canais).                                                                                                                    |
| 4                    | **AES/EBU I/O 5–8**                             | DB25 (Pingue-pongue) | Áudio digital AES/EBU I/O, canais 5–8 (4 pares estéreo = 8 canais).                                                                                                                    |
| 5                    | **MADI EM**                                     | BNC (75 anos),       | Entrada coaxial MADI. AES10 compatível.                                                                                                                                                   |
| 6                    | **SAÍDA DE MADI**                               | BNC (75 anos),       | Saída coaxial MADI.                                                                                                                                                                                       |
| 7                    | **I/O óptico**                                  | TOSLINK (ótico)      | MADI óptico ou ADAT I/O (card-dependente).                                                                                                                                             |
| 8                    | **WC/VBB EM**                                   | BNC (75 anos),       | Entrada de relógio de palavra ou Video Black Burst.                                                                                                                                                       |
| 9                    | **SAÍDA WC**                                    | BNC (75 anos),       | Saída do relógio Word                                                                                                                                                                                                     |
| 10                   | **AES11 EM**                                    | XLR (feminino)       | Entrada de sinal de referência de áudio digital AES11 Usado para sincronizar a unidade para uma fonte de referência AES11.                                                                                |
| 11                   | **NET 1**                                       | RJ45 (1000BASE-T)    | Rede de áudio Ethernet e/ou rede de áudio Dante, porta 1.                                                                                                                                                 |
| 12                   | **NET 2**                                       | RJ45 (1000BASE-T)    | Rede de áudio Ethernet ou rede de áudio Dante, porta 2.                                                                                                                                                   |
| 13                   | **SLOT 1** (Dante/AES67 I/O) | 2× SFP                                  | Slot de cartão de expansão 1 Mostrado com um cartão Dante/AES67 I/O que fornece duas portas SFP para conexões de rede óptica ou de cobre Dante. O conteúdo do Slot varia de configuração. |

---

## Referência da Fortaleza LED 4.7

A tabela a seguir cobre os indicadores LED de painel frontal, comuns a todas as unidades de rack do Trovão\ (AX Center, Core 256, AX 64). Unidades Penta usam um conjunto separado de indicadores cobertos na seção Penta acima.

### 4.7.1 LEDs de Referência do Relógio — Unidades Thunder├Core

| Int.                                              | Ramal                                                             | Erro.                                             | Significado                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ● (lit)                                        | (ExplicitText="(desativado) | (ExplicitText="(desativado) | A unidade é bloqueada ao seu próprio oscilador interno. Nenhuma referência externa está conectada ou selecionada. Estado normal para um mestre de relógio.                                                                                                                                                                               |
| (ExplicitText="(desativado) | ● (litro, verde)                               | (ExplicitText="(desativado) | Unidade está bloqueada para a referência externa selecionada (palavra clock, MADI incorporado, ADAT incorporado, ou Dante PTP). Estado normal para um escravo do relógio.                                                                                                                                                             |
| ● (lit)                                        | ● (lit)                                        | (ExplicitText="(desativado) | A unidade está no processo de bloqueio para uma referência externa. O oscilador interno está em execução enquanto o bloqueio é adquirido. Estado transitório — normalmente resolve em alguns segundos.                                                                                                                                   |
| (ExplicitText="(desativado) | (ExplicitText="(desativado) | ● (litro, vermelho)                            | **Erro do relógio.** A unidade não pode bloquear na referência externa selecionada. Verifique se a fonte de referência está presente, na taxa de amostra correta e conectada à entrada correta. Veja [Capítulo 9 — Solução de problemas, Seção 9.3]. |
| ● (lit)                                        | (ExplicitText="(desativado) | ● (litro, vermelho)                            | **Erro interno.** A unidade detectou um erro interno não relacionado ao relógio externo. Observe o estado do painel frontal e o ciclo de energia da unidade. Se o erro persistir, contate o suporte DAD.                                                                                                                 |
| Flash lento                                                       | —                                                                 | —                                                                 | A unidade está executando uma atualização de firmware. Não desligue a unidade durante uma atualização de firmware.                                                                                                                                                                                                                                       |

### 4.7.2 Botão de energia

| Estado:             | Significado                                                   |
| ----------------------------------- | ------------------------------------------------------------- |
| Desligado                           | Unidade desligada                                             |
| Atrasado (firme) | Unidade é ligada e operando normalmente                       |
| Pulso lento                         | Unidade em espera ou realizando uma sequência de desligamento |

### 4.7.3 LEDs DE Status MOM

| Situação                                                          | Significado                                                 |
| ----------------------------------------------------------------- | ----------------------------------------------------------- |
| ● (litro, verde, estady)                       | MOM está conectado e se comunicando com o AX Center / AX 64 |
| Flash lento (verde)                            | MOM está inicializando ou aguardando o DADman responder     |
| (ExplicitText="(desativado) | MOM não está conectado, ou a unidade do host está desligada |

_[Placeholder: sinal por canal/tabelas LED OL/carrier — aplicável aos cartões de expansão AX 64 que incluem o medidor de painel frontal. Documentação de engenharia pendente.]_

---

## Referências cruzadas

- **Capítulo 1 — Introdução:** Lista de hardware compatível; famílias de hardware e compatibilidade de clonagem
- **Capítulo 2 — Requisitos de Sistema:** Conteúdo do pacote por modelo; versões do sistema operacional suportadas
- **Capítulo 3 — Instalação:** Instalação do driver Thunderbolt driver; configuração da rede
- **Capítulo 5 — Fluxo e Arquitetura do Sinal:** Como cada tipo de conector se encaixa no caminho do sinal e do relógio
- **Capítulo 7 — Operação:** Configurar entradas, saídas, roteamento e monitorar perfis no DADman
- **Capítulo 8 — Recursos Avançados:** Monitorar perfis, configuração do MOM, Controle\ Pack
- **Apêndice A — Especificações:** Especificações completas de eletricidade e mecânica por produto
- **Appendix B — Pinça de Conector:** Atribuições de Pin para DB25, XLR, BNC e outros tipos de conector

---
