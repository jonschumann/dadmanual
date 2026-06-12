---
title: "Capítulo 8 — Recursos Avançados"
sidebar_label: "Cara. 8 — Recursos avançados"
sidebar_position: 10
---

# Capítulo 8 — Recursos Avançados

> **Documento:** Usuário Manual do DADman  
> **Versão do software coberta:** DADman v5.8. construir 2  
> **hardware de exemplo principal:** DAD AX Center  
> **Status do capítulo:** Traço v0. — Seções 8.1-8. 5 rascunhos; PRO\├MON e Cue\├Mix pendentes documentação de engenharia DAD; tabelas de parâmetro SPQ e MIDI pendentes; capturas de tela pendentes  
> **Última atualização:** junho 2026

---

## Neste Capítulo

| Turma                | Funcionalidade                                           | Versão necessária                                       |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| 8.1  | Monitorar perfis — configuração e gerenciamento          | Todas as versões                                        |
| 8.2  | Grupos de Ganho do Microfone                             | v5.8.1 e posterior      |
| 8.3  | Clonando configurações entre unidades                    | v5.6.9 e posteriores    |
| 8.4  | Control\➲ Pack — Predefinições de Roteamento             | v5.8.0 e posterior      |
| 8.5  | Integração EuCon                                         | Todas as versões                                        |
| 8.6  | DADLink                                                  | v5.6.9 e posteriores    |
| 8.7  | Executando o DADman na Barra de Menu ou Barra de Sistema | v5.7.0 e posterior      |
| 8.8  | Gerenciamento de arquivos e acesso de linha de comando   | v5.7.0 e posterior      |
| 8.9  | Referência de Preferências DADman                        | Todas as versões                                        |
| 8.10 | Cartão de som virtual Dante como fonte de monitor        | Todas as versões                                        |
| 8.11 | Configuração de nível de saída analógica                 | Todas as versões                                        |
| 8.12 | Cartão de Processamento do Alto-falante SPQ              | Todas as versões (requer cartão SPQ) |
| 8.13 | Workflow de Monitoramento Dolby Atmos                    | Todas as versões                                        |
| 8.14 | LTC sobre Dante                                          | Todas as versões                                        |
| 8.15 | Controle MIDI e Ferramentas Pro Emulação PRE             | Todas as versões                                        |
| —                    | Sistema de Monitoramento MON                             | _(documentação pendente)_            |
| —                    | Mistura de Cue\➲ Mix Zero-Latency                        | _(documentação pendente)_            |

---

## 8.1 Monitorar Perfis — Configuração e gerenciamento

### Conceito 8.1.1

Um **Perfil de Monitor** (extensão de arquivo `. mprof`) define a configuração completa do controlador de monitor para uma unidade de hardware controlado por DADman: quais fontes podem ser monitoradas, quais conjuntos de saída do alto-falante estão disponíveis, como dobrações e combinações maiúsculas são tratadas, configurações de atraso, roteamento de talkback e saídas externas de medição.

Um perfil de Monitor está completamente separado do arquivo de configurações de unidade (`.dms`). A mesma configuração de roteamento físico e ganho pode ser usada com várias configurações de monitoramento diferentes ao carregar perfis diferentes, sem alterar nenhuma outra configuração.

> **NOTA:** Monitorar perfis está armazenado no computador, não na unidade de hardware. Eles devem ser carregados no DADman toda vez que o aplicativo for lançado (a menos que **Abrir último arquivo na inicialização** esteja habilitado para perfis). Se DADman estiver fechado ou o computador estiver desligado, o controlador de monitor continua operando no último estado enviado para a unidade, mas nenhum controle de monitoramento é possível até que DADman reinicie com o perfil carregado.

### 8.1.2 Abrindo o Editor de Perfil do Monitor

Abra o Editor de Perfil de Monitor em **Configurações > Perfil** (macOS: **⌘M** / Windows: **Ctrl+Shift+M**).

O editor tem cinco abas: **Fontes**, **Outputs**, **Fold Downs**, **Delay** e **MOM**.

### 8.1.3 Fontes Configurantes

Uma fonte é qualquer caminho de sinal que os operadores devem poder escolher para monitorização. Fontes típicas incluem uma saída de estereo da DAW, um fluxo Dante, uma fonte de convidados, ou um feed de confiança.

**Para adicionar uma fonte:**

1. Na guia **Fonte**, clique direito e selecione **Adicionar Nova Fonte**.
2. Clique duas vezes no nome da fonte para renomeá-lo (por exemplo, `Ferramentas Pro`, `Convidado`, `Dante Player`).
3. Clique com o botão direito abaixo do **Modo** e selecione **Definir Formato do Grupo** — escolha a contagem e o formato do canal (Mono, Estéreo, 5.1, 7.1.4, etc.).
4. Para cada canal na fonte, clique com o botão direito do mouse no campo de atribuição de canal e selecione a entrada correspondente na matriz de roteamento. Usar Dante, MADI, AES3 ou entradas analógicas disponíveis no hardware conectado.

_[Placeholder: captura de tela — Aba de fontes com duas fontes configuradas (Pro Tools stereo, Dante 7.1)]_

### 8.1.4 Configurando Conjuntos de Saída

Um **conjunto de saída** define um grupo de canais de saída físicos usados como configuração de um alto-falante. Múltiplos conjuntos de saída podem ser definidos usando saídas físicas diferentes (por exemplo, estéreo próximo do campo vs. entor), ou as mesmas saídas físicas com níveis de recorte diferentes (por exemplo, 85 dB SPL vs. 75 dB SPL níveis).

**Para adicionar um conjunto de saída:**

1. Na guia de **saída**, clique com o botão direito e selecione **Adicionar novo conjunto de saída**.
2. Nomeie o conjunto de saída (ex.: `Próximo Campo`, `5.1 Surround`, `85 dB SPL`).
3. Atribuir um **Formato de Grupo** correspondente à configuração do pregador.
4. Atribua cada canal a uma saída analógica física no hardware.
5. Defina um valor **recortado** se este conjunto de saída requer um deslocamento de nível fixo (útil para múltiplas predefinições de nível de referência).

> **NOTA:** Uma vez que os canais de saída são alocados a uma predefinição de roteamento em controle\├Pack, eles estão bloqueados e não podem ser conectados através da matriz de roteamento DADman ou perfil de monitoramento. Veja [Seção 8,4 - Controle \^\\Pacote].

_[Placeholder: captura de tela — Aba de saídas mostrando pacotes de saída estéreo e 5.1 de saída]_

### 8.1.5 Níveis de Referência e Múltiplas Predefinições SPL

A função de nível de referência bloqueia a saída do monitor a um SPL calibrado sem risco de ajuste acidental.

**Para configurar um nível de referência:**

1. Usando tons de teste e um medidor SPL calibrado, defina o fader do nível Mon para o SPL desejado.
2. Em **Configurações > Perfil de Monitor**, abra o conjunto de saída relevante.
3. Digite o nível calibrado como o **Nível de Referência** para esse conjunto de saída.
4. Pressione **Ref** na guia de Mon durante sessões para retornar instantaneamente a este nível.

**Para criar várias predefinições de nível de referência na mesma saída física:**

Defina dois conjuntos de saída apontando para as mesmas saídas físicas, mas com diferentes valores de recorte. Por exemplo:

| Nome do conjunto de saída | Outputs | Recortar | SPL calibrado |
| ------------------------- | ------- | -------- | ------------- |
| Próximo campo 85 dB       | DA 1–2  | 0 dB     | 85 dB SPL     |
| Próximo campo 75 dB       | DA 1–2  | -10 dB   | 75 dB SPL     |

Ambos os conjuntos de saída aparecem como opções de alto-falante selecionáveis na aba Mon. Alternar entre eles fornece o nível de SPL instantaneamente alternando sem tocar nos controles de ganho físico.

### 8.1.6 Pastas e Correspondências

A guia **Fold Downs** define matrizes que convertem entre formatos de alto-falantes — por exemplo, dobrando um 7. mixar no estéreo para uma verificação de compatibilidade, ou combinar uma fonte estéreo com um layout personalizado do pregador.

**DADman padrão para baixo:** DADman inclui matrizes padrão para dobrar (por exemplo, 5,1 para estéreo). Selecione o formato de entrada e saída e o DADman gera os coeficientes de mistura apropriados.

**Combinações personalizadas (up-match ou roteamento seletivo):** Clique com botão direito em uma entrada para baixo existente e selecione **Add new matrix**. Você pode definir o formato de entrada e saída com o mesmo valor - criando efetivamente uma predefinição de roteamento personalizada dentro do caminho de monitor. Essa técnica permite uma desmontagem criativa:

_Exemplo — Seleção do subconjunto do alto-falante:_ Defina uma matriz `Apenas tudo` em 7.1.4 → 7.1.4. No editor matrix, rotacione apenas os quatro canais superficiais (Lt1, Rt1, Ltm, Rtm) para suas saídas correspondentes, deixando todos os outros canais em silêncio. Selecionar esta "desmontagem" na aba Mon resolve efetivamente os alto-falantes do tecto sem alterar a mistura principal.

_Exemplo — gerenciamento de bas:_ Defina matrizes dobraduras personalizadas que roteiam conteúdo de baixa frequência para uma saída sub com coeficientes adequados de rolloff, Mesmo quando o formato de origem não inclui um canal LFE.

### Configuração do Talkback 8.1.7

A Talkback dirige um microfone ou outra fonte para os fones de ouvido do talento, quando ativado. Configure o talkback em **Configurações > Perfil de Monitor > Saídas**.

**Modos do Talkback** _(v5.7.0 e posterior):_

| Modo               | Comportamento                                                                                                                                                | Quando usar                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| **Alternar/Lousa** | O primeiro toque ativa a fala de volta; o segundo toque desativa. Segurar os atalhos mais longos entre os estados da latcha. | ambientes de estúdio onde o engenheiro precisa de talkback fácil      |
| **PREAW**          | O Talkback está ativo somente enquanto o botão estiver segurado; libera quando o botão é lançado.                                            | Ambientes de transmissão onde uma retenção acidental seria disruptiva |

> **NOTA:** Modo RAW aplica-se ao controle de hardware MOM e ao botão de falar no painel frontal do MTRX Studio. As superfícies de controle do EuCon sempre usam o modo Toggle/Latch independentemente dessa configuração.

### Sala de Controle do fone de ouvido 8.1.8

Por padrão, a saída do fone de ouvido é um mix separado, independente da seleção de sala de controle. Para fazer com que a saída do fone de ouvido seja automaticamente rastreada qualquer fonte selecionada nos principais alto-falantes da sala de controle

1. Em **Configurações > Perfil de Monitor > Outputs**, defina o **Modo Monitor** da saída do fone de ouvido para **Master**.
2. Define a saída do conjunto de saída da sala do alto-falante do **Modo Monitor** para **Cue**.

**Resultado:** A saída do fone de ouvido agora é atribuída para a seleção do feed do monitor — qualquer que a fonte estiver ativa nos alto-falantes da sala de controle a mesma fonte joga através dos fones de ouvido. Seleção fonte, desmontagem e escurecer, todos seguem a sala de controle.

> **NOTA — Limitação:** Quando DADman não está rodando, a unidade de hardware volta ao seu modo operacional padrão. Neste fallback, o roteamento do grupo Cue não se traduz no estado padrão do hardware, então o fone de ouvido não siga a sala de controle quando o DADman estiver offline. Como uma alternativa, configure DADman para iniciar automaticamente ao iniciar sessão. Veja [Seção 8.7 — Executando o DADman na Barra de Menu ou System Tray].

### 8.1.9 Salvando e Carregando Perfis de Monitor

| Acão                                                                | macOS                                     | Janelas                                   |
| ------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| Abrir Perfil                                                        | ⌘O                                        | Ctrl+Alt+O                                |
| Importar Perfil (de qualquer unidade compatível) | ⌘I                                        | Ctrl+Alt+I                                |
| Salvar Perfil                                                       | ⌘S                                        | Ctrl+Alt+S                                |
| Salvar perfil como…                                                 | ➜ 7$ S                                    | Ctrl+Alt+Shift+S                          |
| Fechar Perfil                                                       | ⌘W                                        | Ctrl+Alt+W                                |
| Abrir perfil recente                                                | Menu principal → **Abrir perfil recente** | Menu principal → **Abrir perfil recente** |

**Importar Perfil:** A função **Arquivo > Importar Perfil…** importa um Perfil Monitor de qualquer unidade conectada compatível e executa um mapeamento mais adequado para o I/O do hardware atual. Isto é útil ao migrar um perfil entre unidades com diferentes configurações de E/S.

---

## 8.2 Mic Gain Groups _(v5.8.1 build 6 ou superior)_

### Conceito 8.2.1

O Mic Gain Groups permite que vários canais de entrada analógica sejam vinculados para que ajustando o ganho ou silenciado em qualquer canal mova todos os canais do grupo simultaneamente, preservando o ganho relativo entre canais. Isso é projetado para configurações multimáticas — tambores, conjunto orquestral, coro, ou de arrays de gravação de localização — onde relações relativas relativas entre canais devem ser mantidas através de ajustes.

Grupos de Ganho Mic são suportados em todos os hardwares **exceto MTRX Studio**. Uma atualização de firmware é necessária (Carro 1: v2.4.5.1 ou mais tarde; Trovão\├Core: v1.1.1 ou mais tarde).

**Parâmetros agrupados:** Ganhe e silencie.  
**Sem agrupamento:** Poder Phantom (+48 V) e fase invertem (Ö). Estas continuam a ser controladas individualmente, mesmo quando há canais num grupo.

### 8.2.2 Criando e gerenciando grupos

**Para adicionar um canal em um grupo:**

1. Na guia **AD**, clique com o botão direito do mouse no controle de um canal (ou use o menu de contexto do canal).
2. Selecione **Adicionar para Ganhar Grupo** e escolha um número de grupo (grupos são numerados; você pode criar vários grupos independentes).
3. Repita para que cada canal seja incluído no grupo.

**Para remover um canal de um grupo:**

Clique com o botão direito do mouse no controle de ganho e selecione **Remover do grupo de ganho**.

### Comportamento do grupo 8.2.3

Quando vários canais compartilham um grupo:

- Movendo o ganhador de controle deslizante em qualquer canal agrupado move **todos os canais no grupo** pelo mesmo incremento. O deslocamento relativo entre canais é preservado.
- Silenciar qualquer canal agrupado silencia todos os canais no grupo.

**Substituição de canal individual — Modificador de alternativa:**

Segure **Alt** (Windows) ou **Option** (macOS) enquanto ajusta o ganho ou silenciamento de um canal somente nesse canal, ignorando o grupo:

| Acão                                                                     | Com Alternação/Opção                           |
| ------------------------------------------------------------------------ | ---------------------------------------------- |
| Arraste o mouse sobre o controle deslizante de ganho                     | Ajusta apenas o canal selecionado              |
| ★ teclado (ganho com controle deslizante selecionado) | Ajusta apenas o canal selecionado              |
| Clique no campo obter valor abaixo do controle deslizante                | Ajusta apenas o canal selecionado              |
| Click Mute                                                               | Simutes/não silencia somente canal selecionado |

### Comportamento 8.2.4 EuCon

Ao controlar canais agrupados através de uma superfície de Avid EuControl :

- Ganhe sliders e botões das superfícies EuCon afetam o grupo (todos os canais se movem juntos).
- Mudo de uma superfície EuCon afeta todos os canais agrupados simultaneamente.

> **NOTA:** Alt/Opção por canal de substituição só está disponível via mouse/teclado no DADman — ele não pode ser acionado a partir de uma superfície EuCon.

---

## Definições de clonagem 8.3 entre Unidades _(v5.6.9 e posterior)_

### Conceito 8.3.1

A função **Clone** copia todas as configurações de uma unidade de hardware para outra dentro da mesma família de hardware. É útil para duplicar uma configuração conhecida para uma segunda unidade idêntica, restaurando configurações para uma unidade de substituição, ou inicializando uma nova unidade a partir de um perfil existente.

A clonagem só é permitida entre unidades dentro do mesmo grupo familiar:

| Familiares | membros                                                 |
| ---------- | ------------------------------------------------------- |
| Família 1  | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s |
| Família 2  | MTRX II · AX64 · Centro AX · Núcleo 256                 |
| Família 3  | Estúdio MTRX                                            |

### Procedimento de clone 8.3.2

**Para clonar de uma unidade conectada a outra:**

1. Na lista de dispositivos, clique com o botão direito do mouse na unidade **alvo** (o que deseja receber as configurações).
2. Selecione **Clonar de…** e escolha a unidade de origem da lista.
3. Confirme a operação de clone.

**Para clonar de um arquivo de configurações salvo em uma unidade conectada:**

1. Abra o arquivo de configurações `.dms` via **Arquivo > Abrir…**.
2. Clique com o botão direito na unidade de alvo na Lista de Dispositivos
3. Selecione **Clonar do arquivo** e escolha a unidade de origem relevante no arquivo de configurações carregadas.

> **ATENÇÃO:** A clonagem substitui todas as configurações da unidade de destino. Certifique-se de que as configurações da unidade de destino foram salvas em um arquivo `.dms` antes de prosseguir se recuperação pode ser necessária.

### 8.3.3 Comportamento da unidade não idêntico

Para melhores resultados, as unidades de origem e destino devem ser configuradas de forma idêntica — os mesmos tipos de cartão instalados nas mesmas posições de slot. Quando as configurações difere:

- Configurações de cartas presentes na fonte, mas ausentes na **mesma posição de slot** no alvo, estão definidas para padrões de fábrica no alvo.
- As configurações de cartões presentes no destino, mas ausentes na fonte não são modificadas.

---

## Pacote de controle 8.4 — Predefinições de roteamento _(v5.8.0 compilação 8 ou superior)_

### Conceito 8.4.1

Control\➲ Pack fornece um sistema de pré-ajuste de roteamento para produtos do Thunder\➲ Core (AX64, AX Center, Core 256). Até 32 predefinições de roteamento podem ser definidas por unidade, cada uma com até quatro camadas de entrada independentes — chamadas de **baldes** — que mudam para 256 fontes para 256 destinos simultaneamente em uma única amostra de áudio.

Alternar entre baldes pode ser:

- **Manual** - Acionado pelo operador de Controle da tirada de Pack no DADman
- **Automatizado** — disparado por detectadores de sinal embutidos monitorando canais de entrada para presença de sinal, integridade do piloto AE6 ou conectividade de nível da porta

Control\➲ Pack presets são armazenadas na unidade de hardware do Thunder\➲ Core. Eles podem ser controlados a partir de várias instâncias DADman simultaneamente, e a partir de um controle dedicado\^\\Pack painel de hardware sem nenhuma conexão DADman.

**Firmware necessário:** Thunder\├Core firmware v1.1.0.3 ou posterior.

### Especificações de chave 8.4.2

| Parâmatro                                                                 | Valor                                              |
| ------------------------------------------------------------------------- | -------------------------------------------------- |
| Máximo de predefinições por unidade                                       | 32                                                 |
| Máximo de baldes (camadas de entrada) por predefinição | 4                                                  |
| Fontes máximas por balde                                                  | 256                                                |
| Máximo de saídas por predefinição                                         | 256                                                |
| Alternar tempo (balde, interruptor automatizado)       | Dentro de 1 amostra de áudio                       |
| Tempo de troca (manual, seleção direta)                | 0 amostras de áudio                                |
| Tempo de resposta de detecção/ativação do sinal                           | < 1 ms                    |
| Geradores de sinal (embutidos)                         | Sine wave pilot tone · Toque de piloto digital AE6 |

### 8.4.3 Geradores de Sinal

Cada unidade do Thunder\➲ Core inclui dois geradores de sinais embutidos:

| Gerador                  | tipo                                                                  | Parâmetros                                                                         |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Sine wave pilot tone** | Movimento contínuo seno                                               | Nível: -60 a 0 dBFS; Frequência: de 20 Hz a 20 kHz |
| **Tonelada digital AE6** | Sinal repetitivo binário (valor hexadecimal 0xAE6) | Padrão fixo                                                                        |

Geradores de sinal podem ser encaminhados para qualquer saída da unidade através da matriz de roteamento. O sinal AE6 foi projetado para a verificação de integridade — pode ser detectado no final do recebimento para confirmar que a cadeia de sinal não está processada e não está modificada. Se o sinal AE6 passar por um conversor de taxa de amostragem, estágio analógico ou qualquer mudança de nível, seu padrão é alterado e não pode ser reconhecido.

### Tipos de gatilho 8.4.4

Cada balde pode ser atribuído a até quatro fontes de acionamento. Três tipos de gatilho estão disponíveis:

| Tipo de gatilho    | Detecta                                                            | Observações                                                                                                     |
| ------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Nível de Sinal** | A presença de sinal de áudio acima − 40 dBFS em uma janela de 1 ms | Funciona com qualquer entrada analógica ou digital                                                              |
| **AE6**            | Integridade do toque piloto digital AE6 em uma entrada digital     | O sinal deve ser não processado (sem SRC, sem alteração de nível) para detecção bem-sucedida |
| **Porta**          | Status de conectividade da porta física                            | Portas do Thunderbolt 3, MADI, DADLink, ADAT, ou AES3                                                           |

### 8.4.5 Configurando Predefinições de Roteamento

Abra o editor de Predefinições de Roteamento em **Configurações> Predefinições de Roteamento**.

A configuração segue quatro etapas:

**Etapa 1: selecione a unidade de destino**

No menu suspenso na parte superior da janela de predefinição de roteamento, selecione a unidade Thunder\^\\Core para configurar. Se a unidade não estiver conectada, clique em **Abrir Lista de Dispositivos** para conectá-la primeiro.

**Etapa 2: Adicionar uma predefinição de roteamento**

Clique direito na lista predefinida e selecione **Adicionar Predefinição**. Informe um nome e o número de canais de saída para a predefinição. Habilite a predefinição selecionando sua caixa de seleção. Predefinições podem ser reordenadas dentro da lista _(v5.8.1 e posterior)_.

**Etapa 3: configurar baldes e gatilhos**

Para cada balde na predefinição:

1. Clique com o botão direito do mouse no campo **Definir Origem** e digite um nome para o bucket (por exemplo, `Ferramentas Profissionais`, `Backup DAW`, `Teste Gerador`).
2. Defina a **Prioridade de Ativação** para o bucket. Buckets com maior prioridade são preferidos quando seus detectadores reportam um sinal válido. Se todos os baldes tiverem prioridade igual, a mudança é apenas manual.
3. Selecione até quatro **Fontes de Ativação** das entradas disponíveis. Combinar tipos de gatilho (Nível + AE6) para detecção de falhas robustas.

**lógica de troca automatizada:**

- O balde com a **maior prioridade** onde todos os detectores atribuídos relatório de detecção OK é encaminhado para as saídas.
- Se os detectores de balde ativos relatarem um erro, o sistema alterna para o balde de maior prioridade com todos os detectores OK.
- O override manual está sempre disponível — clique duas vezes no botão de um balde para forçá-lo independentemente do status do detector.

**Etapa 4: Atribuir canais de entrada e saída**

Clique com o botão direito na coluna de canal de saída para selecionar canais de saída das saídas disponíveis na unidade. Clique com o botão direito em cada coluna (bucket) para atribuir canais de origem. Uma vez que os outputs são atribuídos a uma predefinição, eles estão **bloqueados** — eles não podem ser conectados através da matriz de roteamento de DADman ou do perfil de monitor enquanto a predefinição está ativa.

_[Placeholder: captura de tela — Editor de Pré-configuração de roteamento mostrando uma predefinição de dois baldes com fontes de acionamento configurada]_

### Operação 8.4.6

Uma vez configurado, a faixa de controles\├Pack aparece abaixo das principais faixas de canal do DADman. Cada predefinição é mostrada com botões de balde, metros de fonte PPM, medidores de saída PPM e indicadores de status.

**Estado da cor do botão Balde:**

| Cor          | Significado                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| **azul**     | Este balde está ativo — modo manual (sem troca automatizada) |
| **Verde**    | Este balde está ativo — modo automatizado, armado e pronto para alternar        |
| **Vermelho** | Erro de detector de sinal neste balde — perda de sinal ou falha AE6 detectada   |

**Troca entre modo manual e automático:**

- **Clique duas vezes em um botão verde** → muda para manual (botão fica azul)
- **Clique duas vezes em um botão azul** → Rearmar automação (botão ficar verde)

**Acionar indicadores de status** abaixo do botão de balde mostra status de passagem/falha em tempo real para cada detector atribuído (de 0 a 4 indicadores por balde).

_[Placeholder: captura de tela — Control\├Pack tira mostrando duas predefinições, uma automatizada (verde), uma manual (azul)]_

> **DICA:** Em eventos ao vivo ou transmissão, automação armada (**verde**) durante a verificação em linha quando o sinal é confirmado em todas as entradas. Se uma entrada falhar durante a exibição, a predefinição alterna automaticamente sem a intervenção da operadora. Clicar duas vezes o balde preferido a qualquer momento força-o independentemente do estado de automação.

---

## Integração 8.5 EuCon

### 8.5.1 Habilitando a EuCon

O DADman comunica com o Avid EuControl através do protocolo EuCon, permitindo superfícies de controlo da aviação (S1, S6, S6L, MTRX Studio front-panel) e o app Avid Control para controlar as funções de monitoramento de DADman.

**Para ativar o EuCon:**

1. No DADman, vá para **Configurações > Habilitar EuCon**.
2. Certifique-se de que o EuControl esteja rodando no mesmo computador e esteja conectado à superfície de controle ou app.

### 8.5.2 Monitoramento DADman para EuControl

Para que os controlos de monitorização apareçam em uma superfície de controlo da Aviação ou no aplicativo de controle da Aviação, o DADman deve estar vinculado ao EuControl:

1. Leve o DADman para o primeiro plano (clique na janela do DADman para torná-lo o aplicativo ativo).
2. Em EuControl, abra a guia **Atribuir**.
3. Habilite a caixa de seleção de atribuição de monitoramento para DADman (ela aparece porque o DADman está em primeiro plano).

> **DICA:** Se a página de monitoramento no Avid Control mostra apenas um mestre e não outros controlos, o passo vinculativo não foi concluído. Leve o DADman para o primeiro plano e repita o procedimento da aba Atribuir.

### Monitoramento de bloqueio 8.5.3 para DADman

Uma vez vinculado ao DADman, o monitoramento você pode bloquear a seção de monitoramento para que ela permaneça sob controle de DADman, independentemente de qual aplicativo está atualmente em primeiro plano:

1. Na aba **Atribuir** do EuControl com a seção de monitoramento vinculada ao DADman, clique em **Bloquear** (ou o equivalente para seu modelo de superfície).
2. Alterne para o seu aplicativo DAW. A secção de controlo da superfície continua a controlar o DADman.

Isso permite que os controles de transportes e canais sigam a DAW, enquanto a seção de monitoramento permanece permanentemente atribuída ao DADman - o fluxo de trabalho padrão para ambientes pós-produção e rastreamento de música.

### 8.5.4 EuCon e Mic Gain Groups

Quando os Grupos de Ganho do Mic são configurados:

- Ganhe sliders e ganhe botões nas superfícies EuCon movem todos os canais agrupados.
- Mudo de uma superfície EuCon silencia todos os canais agrupados.
- Substituição por canal via Alt/Opção não está disponível em superfícies da EuCon.

### 8.5.5 expandindo o botão do Talkback em um Touchscreen

Se o botão de falar na tela de toque do aplicativo de Controle Avid for pequeno demais, use a página **Chaves Soft** e atribua vários botões de tecla soft para a função talkback. Múltiplos botões adjacentes que todos ativam o talkback dão um toque efetivo maior.

---

## 8.6 DADLink _(v5.6.9 e posterior)_

### Conceito 8.6.1

DADLink é um formato proprietário de interconexão de contagem alta de canais, desenvolvido pela DAD. Ele usa o slot do módulo mini MADI em unidades compatíveis com módulos SFP ópticos para transportar áudio entre unidades em latência muito baixa.

DADLink foi projetado para conectar várias unidades DAD diretamente — por exemplo, vinculando um Centro AX a um Centro AX64 para expandir a contagem total de canais, ou conectar unidades em diferentes locais físicos dentro de uma instituição.

**Equipamento compatível:** AX64 · Centro AX · Core 256 · AX32 · DX32R · Penta 720 · Penta 721s _(do firmware v2.4.1.2 para Família)_

### 8.6.2 Capacidade do Canal

| Taxa de amostragem              | Canais por conexão DADLink |
| ------------------------------- | -------------------------- |
| 44.1 / 48 kHz   | Até 128 canais             |
| 88.2 / 96 kHz   | Até 64 canais              |
| 176.4 / 192 kHz | Até 32 canais              |

### Latência 8.6.3

latência de DADLink é aproximadamente **1 microsegundo** — efetivamente zero de uma perspectiva de alinhamento de áudio. Todas as entradas e saídas em unidades conectadas via DADLink são alinhadas faseadamente, desde que o **atraso Digi** seja definido para o mesmo valor em cada unidade.

### 8.6.4 Requisito de Sincronização

> **NOTA:** Para alinhamento adequado de fases de entradas e saídas através de unidades conectadas a DADLink, use ou **DADLink** ou **Word Clock** como fonte de sincronização entre a unidade mestre do relógio e todas as unidades de seguidores. Todas as unidades de uma rede DADLink devem compartilhar um relógio comum.

### Instalação de hardware 8.6.5

DADLink requer o **mini módulo MADI** instalado no slot mini MADI de cada unidade conectada, ajustado com compatíveis com os módulos de transceiver SFP ópticos. Conecte unidades com cabos de fibra óptica entre os transceivos SFP. Consulte o DADLink e Mini MADI Guia de Instalação do Módulo (disponível na [digitalaudiosupport.com](https://www.digitalaudiosupport.com)) para os tipos de módulo SFP específicos e o procedimento de instalação.

Uma vez instalado, DADLink entradas e saídas aparecem na matriz roteadora de DADman, juntamente com entradas de MADI, Dante e outros formatos. O formato é visível na aba Conf onde o DADLink aparece como uma opção de interface.

---

## DADman de execução 8.7 na Barra de Menu ou Bandeja de Sistema _(v5.7.0 e superior)_

### MacOS 8.7.1 — Modos da Barra de Menu

DADman pode ser configurado para minimizar a sua presença na área de trabalho do macOS, tornando-o adequado para instalações permanentes onde deve ser executado em segundo plano. Três modos estão disponíveis em **DADman > Preferências**:

| Modo                     | Comportamento                                                                                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Somente doca**         | DADman se comporta como um aplicativo macOS normal — visível na barra de dock e tarefas. Padrão.                                                                                                               |
| **Barra de Menu e Doca** | DADman também mostra um ícone na barra de menu do sistema macOS para acesso rápido.                                                                                                                                            |
| **Apenas Barra de Menu** | O DADman se esconde no Dock quando a janela principal é fechada. Apenas o ícone da barra de menu do sistema está visível. Clique para revelar o menu do DADman (Opa, Sair). |

**Para mostrar a janela principal do modo Apenas da Barra de Menu:**

- Clique na barra de menu do DADman → **Exibir**
- Clique duas vezes um arquivo `.dms` ou `.dmprof` no Finder
- Pressione **⌘➲ 1**
- Abra o DADman novamente a partir de Aplicações

> **NOTA:** No modo Apenas barra de menu, se o DADman ainda aparece no Dock após alterar a configuração, clique direito no ícone da Doca → **Opções > Manter na Doca** e desativá-lo.

> **NOTA:** Apenas no modo na barra de menu com o DADman oculto, O DADman não salva arquivos quando o usuário desconecta ou o sistema desliga a menos que **Sempre salvar arquivo** esteja ativado em Preferências.

### 8.7.2 - Modo Bandeja de Sistema

No Windows, configure o comportamento da bandeja em **Configurações > Opções**:

| Modo                                             | Comportamento                                                                                                                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Barra de tarefas (padrão)** | DADman se comporta como um aplicativo Windows normal.                                                                                                   |
| **Barra de tarefas e bandeja do sistema**        | DADman também mostra um ícone de bandeja para acesso rápido.                                                                                            |
| **Apenas bandeja do sistema**                    | O DADman lança somente na bandeja. Clique no ícone da bandeja para mostrar a janela principal; clique com o botão direito para Mostrar / Ocultar / Sair |

### 8.7.3 - Auto-Inicialização no Login (macOS)

Para que o DADman inicie automaticamente ao iniciar sessão e carregar um arquivo de configuração:

**Método 1 — Itens do macOS:**

1. Abra **Configurações do Sistema > Geral > Itens de Login**.
2. Clique em **+** e adicione **DADman.app** de sua pasta Aplicativos.
3. Habilite o arquivo **Abrir último na inicialização** nas Preferências, então o DADman carrega o arquivo correto `.dms`.

**Método 2 — Launcher de atraso da AppleScript** _(para Sonoma e posterior, onde esconder itens de login é restrito):_

Desde que o macOS Sonoma removeu a capacidade de ocultar itens de login, use um script de atraso para iniciar o DADman após o login:

```applescript
delay 5
dizer aplicativo "Finder"
  ative
  abra o arquivo de aplicativo "DADman. pp" de pasta "Aplicativos" do disco de inicialização
diz para
atraso 8
dizer ao aplicativo "Eventos de sistema"
  definir visível do processo "DADman" para false
fim dizer
```

Para usar este script:

1. Abra **Editor de script** (Applications > Utilities > Editor de script).
2. Cole o script, ajustando os valores do atraso conforme necessário.
3. Exportar como **Aplicativo** (**Arquivo > Exportar** → Formato: Aplicativo).
4. Adicione a aplicação resultante à **Configuração do Sistema > Geral > Itens de Login**.

O script lança o DADman após um atraso de 5 segundos, então o esconde após mais 8 segundos. Ajuste os atrasos para adequá-los ao tempo de inicialização do seu hardware.

---

## Gerenciamento de arquivos 8.8 e acesso a linhas de comando _(v5.7.0 e posterior)_

### 8.8.1 Abrindo arquivos do Finder ou do Windows Explorer

Os arquivos DADman v5.7.0, `.dms` e `.dmprof` podem ser abertos diretamente clicando duas vezes neles no Finder (macOS) ou Windows Explorer. DADman abre, carrega o arquivo e aplica as configurações para unidades conectadas.

Se ambos os arquivos `.dms` e `.dmprof` forem selecionados e abertos simultaneamente, o DADman carrega o primeiro `. arquivo ms` encontrado e o primeiro arquivo `.dmprof` encontrado, ignorando arquivos adicionais.

### Abertura do arquivo de linha de comando 8.8.2

Abra o DADman com arquivos específicos de um terminal ou script:

**macOS:**

```bash
abra -a DADman /caminho/para/settings.dms /path/to/profile.dmprof
```

O `-a DADman` é opcional, mas garante que DADman seja usado mesmo se outros aplicativos forem registrados para arquivos `.dms`.

**Janelas:**

```cmd
DADman.exe C:\path\to\settings.dms C:\path\to\profile.dmprof
```

Isso permite a integração com sistemas de controle externos, mostrar launchers de arquivos ou scripts de login que precisam carregar uma configuração específica do DADman na inicialização.

### 8.8.3 Abrindo Múltiplas Instâncias DADman (Windows)

Por padrão, abrir o DADman quando já está sendo executado traz a instância existente para o primeiro plano ao invés de lançar uma segunda cópia. Lançar explicitamente uma segunda instância independente:

```cmd
DADman.exe -m
```

---

## Referência de Preferências do DADman 8.9

Acesse preferências via **DADman > Preferências** (macOS) ou **Configurações > Opções** (Windows).

| Preferência                                          | Descrição:                                                                                                                            | Observações                                                                                                                                                                                         |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Abra o último arquivo na inicialização**           | Automaticamente carrega o arquivo de configurações `.dms` usado e o aplica a unidades conectadas ao iniciar                                           | Recomendado para instalações permanentes; use com cuidado em ambientes multi-operador                                                                                                               |
| **Layout da interface**                              | Seleciona um dos três esquemas de cores para a interface DADman                                                                                       | Armazenado localmente; não afeta o hardware                                                                                                                                                         |
| **Tamanho máximo de visão da matriz**                | Define o tamanho máximo da exibição de detalhes da matriz de roteamento: 32×32 (padrão), 64×64, 128×128 ou 256×256 | Tamanhos maiores permitem visualizar mais da matriz de roteamento ao mesmo tempo; podem afetar o desempenho de sistemas mais antigos _(v5.7.0+)_ |
| **Show Mode** (macOS)             | Dock apenas · Barra de Menu e Dock · Apenas Barra de Menu                                                                                             | Veja [Seção 8.7.1]                                                                                              |
| **Mostrar In** (Windows)          | Barra de tarefas apenas · Barra de tarefas e bandeja do sistema · Apenas bandeja do sistema                                                           | Veja [Seção 8.7.2]                                                                                              |
| **Sempre salvar arquivo** (macOS) | Guarda automaticamente o arquivo `.dms` atual ao fazer logout, reiniciar ou desligar                                                                  | Necessário para operação confiável no modo Apenas Barra de Menu                                                                                                                                     |

---

## 8.10 Dante Virtual Soundcard como Fonte de Monitor

O **Dante Virtual Soundcard (DVS)** do Audinate permite que um Mac ou PC apareça como um dispositivo de áudio Dante na rede, direcionando a saída de áudio do sistema do computador para a rede Dante e para qualquer unidade de hardware controlado por DADman. Isto é útil para monitorar a reprodução DAW através de um DAW que suporta Dante, ou para usar o áudio do sistema macOS/Windows (YouTube, Spotify, faixas de referência) através do sistema de monitor principal sem I/O adicional.

### 8.10.1 Pré-requisitos

- Dante Virtual Soundcard instalado e licenciado no computador host
- Dante Controller instalado (gratuito de Audinate)
- Uma unidade controlada por DADman com entrada Dante (AX Center, Core 256, AX64, AX32 com cartão de expansão Dante, etc.)

### Procedimento de configuração 8.10.2

**Etapa 1 — Execute e configure o DVS**

1. Abra o aplicativo Dante Virtual Soundcard.
2. Define a contagem de canais conforme necessária (por exemplo, **8×8** por uma fonte de 7.1 ou 7.1.2).
3. Pressione **Start** para ativar o serviço de DVS. O computador agora aparece como um dispositivo Dante na rede.

**Etapa 2 - Patch de DVS para a unidade de hardware no Controlador Dante**

1. Abra **Controlador Dante**.
2. Na matriz **Routing**, localize o transmissor DVS (ele aparecerá sob o nome de host do computador).
3. Roteie as saídas do DVS para os canais de entrada Dante desejados na unidade de hardware do DADman (ex. ., Saídas DVS 1–8 → MTRX Dante inputs 1–8, ou entradas AX Center Dante 1–8).

**Etapa 3 - Definir a saída de áudio do sistema para DVS (macOS)**

Segure **Option** e clique no ícone de volume macOS na barra de menu, depois selecione o Dante Virtual Soundcard como dispositivo de saída do sistema. Alternativamente, defina-o em **Configurações do Sistema > Som > Saída**.

**Passo 4 - Adicionar uma fonte de DVS no perfil do DADman Monitor**

1. No DADman, vá para **Configurações > Monitorar Perfil**.
2. Na guia **Fonte**, clique direito e selecione **Adicionar Nova Fonte**.
3. Nomeie a fonte (ex.: `DVS`, `System Audio`, `Mac Output`).
4. Clique com o botão direito do mouse na coluna **Modo** e selecione **Definir Formato do Grupo** — escolha a contagem do canal para coincidir com a configuração do DVS (Stereo, 5.1, 7.1, etc.).
5. Para cada canal, clique com o botão direito na atribuição do canal e selecione o canal de entrada Dante correspondente que recebe o sinal DVS (como corrigido em Dante Controller).

**Etapa 5 - Verificar**

Volte para a guia DADman **Mon** . A fonte de DVS deve agora aparecer como uma fonte de monitor selecionável. Reproduzir áudio no computador — você deve ver a medição na linha de origem DVS.

> **NOTA:** A fonte de DVS só aparecerá na lista de origem do monitor quando o DADman tiver um perfil de monitor ativo carregado com a fonte de DVS configurada. Se um perfil diferente for carregado, a fonte DVS não estará acessível até que o perfil correto seja recarregado.

---

## Configuração de nível de saída 8.11 analógico

Os controles de nível de saída analógico na guia **DA** definem o alinhamento do sinal entre o domínio digital da unidade de hardware (em dBFS) e o nível de saída analógica (em dBu). Essa é uma configuração de calibração — não é um controle de nível operacional.

### Conceito 8.11.1

O controle deslizante de nível de saída DA especifica qual nível analógico corresponde a 0 dBFS. Ele não controla o nível de monitoramento; o volume de monitoramento é controlado pelo fader na aba **Mon**. A configuração do nível de saída da DA existe apenas para alinhar a saída analógica do hardware com os requisitos de salões do equipamento a jusante.

**Exemplo:** Se o nível de saída DA estiver definido como +18 dBu, um sinal digital 0 dBFS produz +18 dBu na saída analógica. Se o equipamento a jusante (amplificador de energia ou monitoramento ativo) clipes em +18 dBu, um sinal em 0 dBFS irá cortar o amplificador — portanto, o nível DA deve ser definido para corresponder à especificação de entrada máxima do equipamento a jusante.

> **ATENÇÃO:** Definir um nível elevado de saída DA nem sempre é vantajoso. Definir +24 dBu quando o clipe de equipamento a jusante em +18 dBu fará com que a entrada para o clipe 6 dB antes de uma escala completa digital. Sempre combine o nível de saída DA com a especificação máxima de entrada de amplificadores ou monitores conectados.

### Alcance de nível de saída 8.11.2

Os outputs da linha DA (no conectores DB25) oferecem dois intervalos máximos de níveis de saída selecionáveis:

| Range                  | Barra deslizante                 |
| ---------------------- | -------------------------------- |
| -66 dBu a **+18 dBu**  | Padrão                           |
| − 60 dBu a **+24 dBu** | Ativado pelo botão **6 dB Gain** |

Ative o botão **6 dB Gain** em um canal para estender seu intervalo de saída para +24 dBu. Isto é apropriado ao se conectar a equipamentos profissionais com entradas máximas de +24 dBu.

### 8.11.3 Configuração por canal

Diferentes canais de saída podem ser definidos para diferentes níveis analógicos, permitindo conexões de equipamento misto a partir de uma única unidade. Por exemplo, monitores próximos ao campo alimentados por um clipping amplificador de energia estéreo em +18 dBu pode ser definido como +18 dBu, enquanto palestrantes circundantes alimentados por amplificadores com sala de ouvido +24 dBu pode ser definida como +24 dBu na mesma unidade.

_[Placeholder: captura de tela — aba DA mostrando controles deslizantes por canal por canal com valores de calibração diferentes]_

---

## Cartão de Processamento do Pregador 8.12 SPQ

O **SPQ (cartão de Processamento do Alto-falante** é um cartão de expansão opcional de DSP para unidades de hardware DAD (AX32 e MTRX variantes). Ele fornece EQ paramétrico por canal nas saídas de monitoramento analógico, permitindo o falante no hardware e a correção de sala sem um processador externo no caminho do sinal.

> **NOTA:** O cartão SPQ é uma opção de hardware. Deve estar fisicamente instalado na unidade. Caso nenhum cartão SPQ esteja presente, a aba SPQ não aparecerá no DADman.

### Visão geral do fluxo de trabalho SPQ 8.12.1

O fluxo de trabalho típico SPQ é:

1. **Medir a sala** usando um programa de medição acústica (por exemplo, o **Assistente de Quarto EQ**, disponível em roomeqwizard.com). Use um microfone de medição calibrado na posição de escuta.
2. **Gere filtros de correção do EQ** dos resultados de medição dentro do software de medição.
3. **Importe os filtros** para o DADman pela aba SPQ. DADman aceita dados do EQ em um formato de exportação compatível do Mago do Quarom EQ.
4. **Aplique a correção** — o cartão SPQ processa as saídas analógicas em tempo real usando os coeficientes de filtro importados.

### Guia SPQ do 8.12.2 no DADman

A aba SPQ aparece no DADman quando um cartão SPQ compatível é detectado na unidade conectada. Na aba SPQ você pode:

- Exibir e editar curvas por saída do EQ
- Importar dados de medição do Assistente de Quarto EQ
- Habilitar ou ignorar o processamento de SPQ por canal de saída
- Salvar configurações SPQ como parte do arquivo de configurações unitárias (`.dms`)

> **NOTA:** Configurações do SPQ são armazenadas na unidade de hardware, não no perfil de monitor. Eles persistem durante as sessões do DADman sem exigir que um perfil seja carregado.

_[Placeholder: parâmetro SPQ completo de referência e processo de importação de Wizard do EQ passo a passo - documentação de engenharia pendente de DAD]_

---

## Workflow de Monitoramento de Dolby Atmos 8.13

O sistema de perfil de monitor do DADman suporta o monitoramento do Dolby Atmos a partir das configurações de unidade única até 64 canais. A seguir está uma visão geral conceitual de um típico Atmos que monitora o caminho de um sinal usando uma unidade controlada por DADman.

### Resumo do fluxo de sinal 8.13.1

Uma típica cadeia de monitoramento do Dolby Atms:

```
Ferramentas Pro (Atmos session)
      ├(DADLink / MADI / Dante)
Renderizador Dolby (e. ., Dolby Atmos Mastering Suite / Renderer)
      (alto-falante alimenta — até 9. .6 ou mais além)
unidade de hardware DADman (DA saída)
      ├(analógico)
Alto-falantes e palestrantes do pregador
```

DADman lida com a camada de controle do monitor final — seleção de fonte, nível, dobrar e diminuir - nos feeds de saída do processador.

### 8.13.2 Criando um formato de grupo personalizado

Os formatos de grupo padrão DADman cobrem até 7.1.4. Para maiores configurações de Atmos (9.1.6, 7.1.6, etc.), um **formato de grupo personalizado** deve ser definido:

1. Em **Configurações > Perfil de Monitor**, vá para a guia **Saídas**.
2. Clique com o botão direito e selecione **Adicionar formato de grupo personalizado**.
3. Defina a contagem do canal e os rótulos do layout do alto-falante (ex.: L, C, R, Ls, Ls, Lss, Rs, Lts, Rts…).
4. Salve o formato e atribua-o ao conjunto de saída relevante.

### 8.13.3 Fontes e Retorna do Renderizador Dolby

Adicionar cada conjunto de saídas de renderização como uma fonte separada no perfil de monitoramento:

| fonte                       | Canais                                                                            | Objetivo                                                     |
| --------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Atmos Cheios                | 9.1.6 (ou configurado na cama) | Feed do renderizador do alto-falante completo do Atmos       |
| Stereo Downmix              | 2.0                                                               | Remédio de downreo da ITU SINTER                             |
| Binaural                    | 2.0                                                               | Retornar binaural do processador de ouvido                   |
| 5.1 Downmix | 5.1                                                               | Dobra de compatibilidade 5.1 do Renderizador |

### 8.13.4 Fold-Downs para Atmos

Use a guia **Fold Downs** para adicionar opções de monitoramento de compatibilidade que não exijam a troca de fontes no renderizador — por exemplo, dobraduras que aplicam uma soma estéreo dos canais de alto-falantes de Atmos diretamente no DADman para um mono rápido ou uma verificação estéreo estreita. Estes complementos, em vez de substituírem, as próprias saídas de downmix do renderizador.

> **NOTA:** Para downmixes com especificação Dolby-especification, sempre use a mistura de downputs do Dolby Renderer em vez de desmontagens de DADman. As desmontagens do DADman não são processos cerrados por dólar.

_[Placeholder: captura de tela — 9.1.6 monitor perfil com Atmos fontes configuradas]_

---

## 8.14 LTC sobre Dante

Unidades controladas por DADman com uma interface Dante podem transportar **LTC (Linear Timecode)** dentro de um canal de áudio Dante. Isso permite que uma fonte de código de tempo seja distribuída pela rede Dante para qualquer unidade na mesma rede sem um código de tempo específico.

### Conceito 8.14.1

LTC é um sinal de frequência de áudio que codifica o código de tempo SMPTE na forma de onda de áudio. Por ocupar o mesmo intervalo de frequência do áudio, pode ser encaminhado através de qualquer canal Dante como se fosse um sinal de áudio mono — não requer nenhuma configuração especial de Dante.

### Configuração 8.14.2

**Para enviar LTC usando Dante:**

1. Conecte a fonte LTC (gerador de tempo de hardware, saída DAW, etc.) para uma entrada analógica ou digital disponível na unidade de hardware DADman.
2. Na guia **Con** de DADman, roteie a entrada do LTC para um canal de saída Dante.
3. No **Dante Controller**, roda o canal Dante para qualquer unidade de recebimento da rede.

**Para receber LTC em uma unidade conectada:**

1. Em Dante Controller, roteie o canal LTC Dante para uma entrada adequada na unidade receptora.
2. Conecte essa entrada ao código de tempo de qualquer dispositivo a jusante que aceite LTC.

> **NOTA:** LTC é uma forma de onda analógica. Se ele passar por um conversor de taxa de exemplo, o sinal de código de tempo pode estar corrompido. Certifique-se de que todas as unidades da rede Dante compartilhem a mesma fonte de relógio (por exemplo, Word Clock, PTP/IEEE 1588) para evitar a inserção SRC no canal de cronograma. Veja [Seção 8.6.4 — Requisito de Sincronização DADLink].

---

## 8.15 Controle MIDI e Ferramentas Pro Emulação de PRE

O DADman pode ser conectado via MIDI para ferramentas Pro, permitindo que as ferramentas Pro tratem os controles sobre uma unidade ligada ao DADman como se fossem controles de pré-instalação de hardware **Avid PRE**. Isto habilita a funcionalidade de controle remoto de preamp das Ferramentas Pro para ajustar o ganho de entrada no hardware DADman diretamente da configuração de E/S das Ferramentas Pro ou uma superfície de controle compatível — sem mudar o foco para DADman.

### Visão geral 8.15.1

Quando a emulação das Ferramentas Pro está ativa:

- Ferramentas Pro envia o MIDI ganhando mensagens de alteração para o DADman
- DADman traduz estes em obter ajustes nas entradas analógicas da unidade de hardware conectada
- A aba do DADman AD exibe os valores atuais de ganho; alterações de Ferramentas Pro são refletidas em tempo real

### Configuração 8.15.2

**Para ativar o controle de MIDI para a emulação de Ferramentas Profissionais:**

1. Certifique-se de que exista uma conexão MIDI entre o computador DADman e o sistema de ferramentas Pro (rede MIDI, USB MIDI ou IAC Driver no macOS).
2. No DADman, vá para **Configurações > MIDI** e configure as portas de entrada e saída do MIDI para corresponder à conexão.
3. **Configuração I/O do nas Ferramentas Pro**, configure a página de preamp para usar a conexão MIDI correspondente ao DADman.

> **NOTA:** O mapeamento exato da atribuição e controle de MIDI depende da versão Pro Tools e da configuração da unidade de MTRX/DAD. Consulte a documentação MTRX relevante ou o suporte DAD para a tabela de parâmetro MIDI correta para o seu modelo de hardware.

_[Placeholder: tabela de parâmetro MIDI detalhado e procedimento passo a passo — documentação de engenharia pendente de DAD]_

---

## Documentação pendente

Os seguintes recursos avançados exigem informações adicionais da engenharia DAD para que possam ser documentados:

| Funcionalidade                                   | SItuação                                                              | Observações                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PRO\|MON Monitor System**                      | Espaço reservado — ainda não documentado                              | PRO\➲ MON é o controlador expandido usado com AX32, DX32R, Penta e MTRX Studio. A documentação completa requer entrada de engenharia DAD no fluxo de trabalho de configuração PRO\^\\MON, referência de parâmetro e integração Cue\purpleMix.                                                                   |
| **Cue\├Mix Mixer de Latência Zero-Latence**      | Espaço reservado — ainda não documentado                              | Listado como um recurso de DADman. Nenhuma documentação de origem disponível. Solicitação de engenharia DAD.                                                                                                                                                                                      |
| **Configuração do cartão SPQ**                   | Rascunho na Seção 8.12 — tabela de parâmetro pendente | Visão geral do workflow elaborada. Procedimento completo passo a passo com referência por parâmetro necessária da DAD. O formato de importação do Assistente do Sala deve ser confirmado com a engenharia do DAD.                                                                                 |
| **Controle MIDI e Ferramentas Pro Emulação PRE** | Rascunho na Seção 8,15 — Tabela de parâmetro MIDI pendente            | Conceito e resumo de configuração rascunho. Tabela de mapeamento de MIDI e controlador MIDI completa para cada modelo de hardware suportado necessário de DAD.                                                                                                                                                    |
| **Capturas de tela — todas as seções**           | PENDENTE                                                              | Todos os espaços reservados de captura de tela (8.1.4, 8.4.5, 8.4.6, 8.11, 8.13) requerem um DADman ao vivo v5.8.2 com um centro AX conectado. |

---

_[Pendente: capturas de tela para seções 8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13 — todas elas requerem DADman ao vivo v5.8.2 com o AX Center ou AX64]_
