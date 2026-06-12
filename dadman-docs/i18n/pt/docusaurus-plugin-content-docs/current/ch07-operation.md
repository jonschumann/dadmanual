---
id: ch07-operação
title: "Capítulo 7 — Operação"
sidebar_label: "Cara. 7 — Operação"
sidebar_position: 9
slug: /operação
---

# Capítulo 7 — Operação

> **Documento:** Usuário Manual do DADman  
> **Versão do software coberta:** DADman v5.8. build 2  
> **Equipamento de referência principal:** DAD AX Center, Core 256, AX64 (Thunder\├Core generation)  
> **Estado do Capítulo:** Traço v0. — Capturas de tela pendentes; Parâmetros de Conf tab Dante/TB3 pendentes de engenharia DAD; PRO\├MON e SPQ pendentes de  
> **Última atualização:** junho de 2026

---

## Neste Capítulo

| Turma                | Capas                                                         | Quando consultar                                                                                             |
| -------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 7.1  | Gerenciamento de sessão — arquivos, salvamento, inicialização | Início e fim das sessões                                                                                     |
| 7.2  | Layout de janela e navegação                                  | Orientação; primeiro uso                                                                                     |
| 7.3  | Lista de dispositivos                                         | Gerenciando unidades conectadas                                                                              |
| 7.4  | Aba de entradas analógicas (DA)            | Definindo ganho de mic/linha, poder fantasma, fase                                                           |
| 7.5  | Saídas analógicas (aba DA)                 | Definindo níveis de saída e intervalo                                                                        |
| 7.6  | Matriz de roteamento (aba)                 | Patch de entradas para saídas                                                                                |
| 7.7  | Bloqueio e configuração (Aba de Con)       | Configurações do Relógio, taxa de amostragem, porta digital I/O                                              |
| 7.8  | Monitorar controle (aba de modo)           | Mostrar perfil do monitor ativo; seleção de origem e saída                                                   |
| 7.9  | Control\➲ Pack tirada                                         | Controle predefinido de roteamento _(v5.8.0 e posterior)_ |
| 7.10 | Controles de mouse e teclado                                  | Atalhos de eficiência                                                                                        |

> **NOTA — Variação de hardware:** As abas e parâmetros mostrados no DADman refletem as capacidades do hardware conectado. Uma unidade sem entradas analógicas mostra a aba **AN** mas seus controles estarão ausentes ou acinzentados. Os parâmetros marcados _[AX32 / Família 1]_ se aplicam especificamente à série AX32, DX32R e Penta Parâmetros não marcados são aplicados a todos os Thunder\➲ Core hardware (AX Center, Core 256, AX64), a menos que seja notado.

_[Colocador: Captura de tela de janela cheia do DADman v5.8.2 com números de chamada para cada área principal]_

---

## 7.1 Gerenciamento de Sessão

### 7.1.1 Arquivos de Configuração e Monitorar Perfis

DADman usa dois tipos distintos de arquivo para salvar e restaurar o estado do sistema. Compreender a diferença entre eles é essencial para a gestão de sessão.

#### Arquivo de Configurações do DADman (.dms)

Um \*\*Arquivo de configurações do DADman \*\* (`.dms`) armazena um instantâneo de todas as configurações em todas as unidades conectadas no momento de salvar. Isto inclui:

- Ganho de entrada analógico, potência fantasma, pad, fase e rótulos de canal (seção DA)
- Níveis de saída analógico, mutações e rótulos de canal (seção DA)
- Estado completo da matriz de roteamento (seção CC)
- Fonte do relógio, taxa de amostra e configurações de formato (seção Conf)
- Configuração de rede e atribuição de identificação unitária
- Control\➲ Pack configurações predefinidas de roteamento _(v5.8.0 e posterior)_

Os arquivos de configurações são salvos em **Arquivo > Salvar** ou **Arquivo > Salvar Com** e estão armazenados no computador. Eles não afetam a unidade diretamente até que seja carregada — em qual ponto o DADman aplica as configurações armazenadas a(s) unidade(s) conectada(s) através da rede.

> **ATENÇÃO:** As atualizações de firmware redefinem todas as configurações armazenadas na unidade para os padrões de fábrica. Salve sempre um arquivo `.dms` antes de executar uma atualização de firmware. Veja [Capítulo 10, Seção 10.1 — Atualizando Firmware].

#### Arquivo de perfil do DADman Monitor (.dmprof)

Um **Arquivo de Perfil de Monitor** (extensão de arquivo `.dmprof`) armazena a configuração do controlador de monitor independentemente das configurações de unidade. Definição de perfil de monitoramento:

- Monitorar fontes (entradas atribuídas ao controlador de monitoramento)
- Conjuntos de saída do alto-falante (mono, estéreo, envolvente, imersivo - até 64 canais)
- Matrizes de desmontagem (por exemplo, 5.1 para estéreo, predefinições personalizadas para up-match)
- Configurações de atraso por saída
- Roteamento e nível de Talkback
- Configurações do nível de referência

Perfis de monitor são gerenciados através de **Configurações > Perfil Monitor** e são salvos como arquivos separados do arquivo de configurações `.dms`. Esta separação permite o mesmo roteamento físico e ganhar configuração para ser usado com diferentes configurações de monitoramento.

Um perfil de monitor estéreo padrão está disponível para download a partir do portal de suporte DAD.

#### Relacionamento entre os dois tipos de arquivo

|                                        | Arquivo de Configurações (.dms)                 | Perfil de Monitoramento (.dmprof) |
| -------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Lojas**                              | Todas as configurações de hardware (ganho, roteamento, relógio) | Monitorar somente a configuração do controlador                      |
| **Escopo**                             | Todas as unidades conectadas                                                       | Um perfil de monitor de cada vez                                     |
| **Carregar via**                       | Arquivo > Abrir                                                                    | Configurações > Perfil de Monitor > Carregar                         |
| **Auto-load on startup**               | Opcional                                                                           | Opcional                                                             |
| **Afetado pela atualização de firmwr** | Sim — configurações para reiniciar a unidade                                       | Não — armazenado apenas no computador                                |

### 7.1.2 Startup and Auto-Load

O DADman pode ser configurado para **carregar automaticamente o último arquivo de configurações** usado no início. Se esta opção estiver ativada, o DADman aplicará as configurações armazenadas às unidades conectadas na inicialização sem exigir ação manual.

> **NOTA:** A opção "Abrir último arquivo na inicialização" faz com que o DADman escreva imediatamente as configurações armazenadas em todas as unidades conectadas ao iniciar. Em ambientes multi-operadores, onde diferentes usuários podem estar fazendo mudanças em tempo real, habilitando esta opção substituirá quaisquer alterações feitas desde a última salvamento.

Para habilitar ou desabilitar o auto-carregamento: **DADman > Preferências** (macOS) ou **Configurações > Opções** (Windows), e então **Abra o último arquivo na inicialização**.

### 7.1.3 - Referência do Menu de Arquivos

| Item de menu             | Acão                                                                                                                                                                                                                                                                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Novo**                 | Limpa a configuração atual no DADman. Não altera nenhuma configuração em unidades conectadas.                                                                                                                                                                                                    |
| **Abrir…**               | Abre um Arquivo de Configurações DADman (`.dms`) e aplica suas configurações armazenadas para unidades conectadas.                                                                                                                                                                            |
| **Salvar**               | Salva o estado atual de todas as unidades conectadas para o arquivo atual aberto `.dms`.                                                                                                                                                                                                                         |
| **Salvar como…**         | Salva o estado atual em um novo arquivo `.dms` em um local que você especifica.                                                                                                                                                                                                                                  |
| **Abrir Perfil…**        | Abre um perfil de Monitor (`.dmprof`) do disco e o carrega na aba Mon.                                                                                                                                                                                                                        |
| **Importar Perfil…**     | Importa um perfil de Monitor de qualquer unidade conectada atualmente e realiza um mapeamento mais adequado para a unidade I/O. Útil na migração de um perfil entre unidades com diferentes configurações de hardware. _(v5.6.2 e posterior)_ |
| **Salvar Perfil**        | Salva o perfil de Monitor atualmente carregado em seu arquivo `.dmprof`.                                                                                                                                                                                                                                         |
| **Salvar perfil como…**  | Salva o perfil de Monitor em um novo arquivo `.dmprof` em um local que você especifica.                                                                                                                                                                                                                          |
| **Fechar Perfil**        | Descarrega o perfil de monitor atual. A aba Mon não mostra controles ativos até que um novo perfil seja carregado.                                                                                                                                                                               |
| **Abrir Perfil Recente** | Abre um submenu de arquivos `.dmprof` usados recentemente para acesso rápido. _(v5.7.2 e posterior)_                                                                                                                                                          |

> **DICA:** Use **Arquivo > Salvar Como** no final de cada sessão, mesmo que as configurações não tenham sido alteradas. O arquivo `.dms` é o único caminho de recuperação após uma atualização de fábrica de unidade ou de firmware.

---

## 7.2 Layout e Navegação

A janela principal do DADman é dividida em quatro zonas horizontais, empilhadas de cima para baixo.

| Zonas                                                    | Conteúdo                                                                                        |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Barra de menus**                                       | Menus **Arquivo** e **Configurações** (e menu **DADman** no macOS)           |
| **Lista de Dispositivos**                                | Uma linha por unidade conectada, cada uma em uma borda colorida                                 |
| **Linha de tabulação**                                   | **AD · DA · Con · Conf · Mon** tab selectors                                                    |
| **Área da faixa do canal**                               | O parâmetro exibe para a guia selecionada, abrangendo todas as unidades conectadas              |
| **Control\➲ Pack strip** _(opcional)_ | Aparece abaixo da área de faixa de canais quando predefinições de roteamento estão configuradas |

Clicar em uma aba altera toda a área de remoção de canal para exibir os controles da guia para todas as unidades conectadas simultaneamente. Cada unidade de controle permanece agrupada dentro da sua borda colorida, independentemente de qual aba está ativa.

As subseções individuais dentro de uma unidade podem ser recolhidas ou expandidas clicando no **botão de cabeçalho da seção** (AD, DA, Con, Conf ou Mon) _(v5. .2 e depois)_. Dicas aparecem ao passar o mouse sobre os botões de cabeçalho de seção para descrever sua função. Isso é útil quando se trabalha com um grande número de unidades para reduzir a rolagem vertical.

### 7.2.1 As Cinco Abas Principais

| Tab      | Nome completo          | O que ele mostra                                                                                                 |
| -------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **AD**   | Analógico-para-Digital | Medição e controle para todas as entradas analógicos: ganho, poder fantasma, mudo, fase, rótulos |
| **DIA**  | Digital-para-analógico | Medição e controle para todos os resultados analógicos: nível, mudo, rótulos, intervalo de saída |
| **Con**  | Conexões               | A matriz de ponto cruzado roteamento — entradas como linhas, saídas como colunas                                 |
| **Conf** | Configuração           | Fonte do relógio, taxa de amostragem, Adaptar as configurações das portas Dante e digital I/O                    |
| **Mon**  | Monitorar              | Perfil de monitor ativo: fontes, saídas, desmontagens, atraso, fala                              |

### 7.2.2 - Vista Multiunidade

Quando várias unidades estão conectadas, DADman exibe todas dentro da mesma janela, separadas por suas fronteiras coloridas. Guias se aplicam globalmente — selecionando **AD** mostra os controles de entrada analógicos para todas as unidades conectadas simultaneamente. Isto permite que um único operador gerencie um sistema multiunidade complexo de uma visualização sem alternar entre janelas separadas de aplicativos.

### 7.2.3 Esquemas de Cores

Três esquemas de cores estão disponíveis em **Configurações > Opções** (Windows) ou **DADman > Preferências** (macOS). O esquema padrão é usado em todos os exemplos deste manual. A seleção de esquema é uma preferência local armazenada no computador e não afeta nenhuma unidade conectada.

### 7.2.4 - Referência do menu de configurações

| Item de menu                                                                                     | Acão                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Opções…** (Windows) / **DADman > Preferências…** (macOS) | Abre a janela Preferências                                                                                                                                                                   |
| **Perfil de Monitor**                                                                            | Abre o editor do Perfil de Monitor — veja [Seção 7.8] e [Capítulo 8] |
| **Predefinições de roteamento**                                                                  | Abre a janela de configuração de Roteamento de Pacote de Pacote _(v5.8.0 e posterior)_                                                    |
| **Ativar EuCon**                                                                                 | Habilita a integração do EuControl para conectividade superficial de controle Avid                                                                                                           |
| **Lista de Dispositivos**                                                                        | Abre a janela de gerenciamento da Lista de Dispositivos                                                                                                                                      |

---

## Lista de dispositivos 7.3

A Lista de Dispositivos é a faixa horizontal na parte superior da janela do DADman mostrando todas as unidades de hardware descobertas. Unidades aparecem **da esquerda para a direita em ordem de ID ascendente**.

_[Colocador: captura de tela com lista de dispositivos anotada mostrando duas unidades com bordas coloridas, campos de ID da unidade, campos de nome de unidade e indicadores de status de conexão]_

### Colunas de Lista de Dispositivos 7.3.1

| Elemento               | Descrição:                                                                                                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID da unidade**      | Um número que determina a posição da unidade na Lista de Dispositivos (esquerda para a direita). Editável — clique no campo ID para alterá-lo. O ID está armazenado na unidade. |
| **Nome da unidade**    | Um nome atribuído pelo usuário para a unidade. Editável — clique no campo nome para renomear. Armazenado na unidade e mostrado nas unidades com exibição no painel frontal.                        |
| **Status da conexão**  | Indica se DADman tem uma conexão ativa com a unidade. Uma unidade desconectada é mostrada acinzentada.                                                                                                             |
| **Versão do firmware** | Exibe a versão atual de firmware em execução na unidade.                                                                                                                                                                           |

> **TIP (v5.8.1.6, somente macOS):** A Lista de Dispositivos pode ser classificada clicando nos cabeçalhos de coluna — nome da unidade, ID, versão do firmware e outras colunas. Isso é útil para gerenciar um grande número de unidades. A classificação é uma preferência de exibição somente e não altera IDs de unidade.

### Menu de Contexto da Lista de Dispositivos 7.3.2

Clicar com o botão direito do mouse em uma linha unitária (Windows) ou usando o botão **Ação** (macOS) abre um menu de contexto com as seguintes opções:

| Alternativa                 | Acão                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| **Configurações de rede**   | Abre o diálogo de configuração de endereço IP e rede para a unidade selecionada              |
| **Clonar de…**              | Copia todas as configurações de outra unidade na mesma família de hardware para esta unidade |
| **Atualização de Firmware** | Inicia uma atualização de firmware para a unidade selecionada                                |
| **Redefinição de Fábrica**  | Redefine todas as configurações na unidade para os padrões de fábrica                        |
| **Desconectar**             | Remove a unidade da lista de dispositivos ativa sem excluí-la                                |

> **ATENÇÃO:** **Redefinição de fábricas** e **Atualização de Firmware** limpam todas as configurações armazenadas na unidade. Salve um arquivo `.dms` antes de usar qualquer opção.

### 7.3.3 Nomes do Canal

Nomes dos canais (rótulos para canais de entrada e saída individuais) são atribuídos nas abas AD e DA.

> **NOTA — Importante:** Nomes dos canais são armazenados no **Arquivo de Configurações do DADman (`.dms`)** no computador, **não** no hardware unitário. Isto significa que os nomes dos canais são perdidos se o DADman for usado sem carregar um arquivo `.dms`, ou se um computador diferente se conectar à unidade. Sempre incluir nomes de canal ao salvar os arquivos de configuração.

---

## 7.4 AD Guia — Entradas analógicas

A aba **AD** exibe medição e controle para todos os canais de entrada analógicos — mic, DI e nível de linha — em unidades conectadas. Se uma unidade não tem cartões de entrada analógicos instalados, esta guia estará presente mas vazia para esta unidade.

_[Placeholder: captura de tela de aba AD anotada mostrando o canal microfone com ganho de slider, phantom, fase, mudo e clipe/sinal indicadores]_

### Controles de faixa de canal 7.4.1

Cada canal de entrada analógico exibe os seguintes controles de cima para baixo:

| Controles                                        | Descrição:                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Seletor de tipo de entrada**                   | Alterna a entrada entre **MIC** (microfone preamplificador) e **LINE** (nível da linha). Disponível apenas em canais com hardware preamp do microfone.                                                                                                                                                                                                     |
| **Poder do fantasma (+48 V)** | Habilita o poder do fantasma 48 V no canal selecionado. Disponível apenas no modo MIC. Aplicar apenas a microfones condensadores - não permite a utilização de microfones de fita a menos que o fabricante especifique a compatibilidade.                                                                                                                                        |
| **Fase inverte (Ö)**          | Inverte a polaridade do sinal de entrada em 180°.                                                                                                                                                                                                                                                                                                                                                                |
| **Mono / stereo link**                           | Links pares de canais ímpares/mesmo para operações estéreo. Controles para o par são agrupados quando vinculados.                                                                                                                                                                                                                                                                                |
| **MIC ganha controle deslizante**                | Define o ganho de preamplificador do microfone. Veja [Seção 7.4.2] sobre incrementos de ajustamento.                                                                                                                                                                                                         |
| **Silenciar**                                    | Silencia o canal de entrada. O estado de silenciamento é armazenado na unidade.                                                                                                                                                                                                                                                                                                                  |
| **LED sinal**                                    | Ilumina quando o sinal de entrada excede -42 dBFS. Indica presença de sinal; não indica que o sinal está em um nível útil.                                                                                                                                                                                                                                                                       |
| **LIGAR PELO**                                   | Ilumina quando o sinal de entrada excede -0.5 dBFS. Indica transferência digital iminente ou real. Reduz imediatamente o ganho se este LED for aceso durante a operação normal.                                                                                                                                                                                  |
| **Pico segurado**                                | O nível mais alto de sinal alcançado é mantido na barra de medidores, se estragando lentamente. Fornece um registro visual de picos transitórios sem monitoramento contínuo. Disponível no hardware MTRX e AX32, _(requer firmware v2.3.2.1 ou posterior, de DADman v5.4.3)_. |
| **Nome do canal**                                | Nome atribuído pelo usuário ao canal. Armazenado no arquivo `.dms`. Clique para editar.                                                                                                                                                                                                                                                                                          |

### Ajuste de ganho 7.4.2

O controle deslizante de ganho do MIC pode ser ajustado usando os seguintes métodos:

| Método                                                       | Incremento                                                                  |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Arraste o mouse                                              | 0.5 dB por passo                                            |
| Teclado \*\* + x \*\* (canal selecionado) | 0.1 dB por passo                                            |
| Teclado **Página para cima / Página para baixo**             | Passo maior (valor a ser confirmado pela engenharia DAD) |

> **DICA:** Selecione uma faixa de canal clicando nele, em seguida, use setas de teclado para ajustar o ganho durante uma sessão sem mover as mãos para o mouse.

### 7.4.3 Mic Gain Groups _(v5.8.1.6 e posterior)_

Grupos de ganhos do Mic permitem que vários canais de entrada sejam ajustados simultaneamente — útil para configurações multimímicas nos tambores, sessões orquestrais, ou qualquer situação que exija uma relação consistente obtém relações através de um grupo.

**Para criar um grupo de Ganho Mic:**

1. Clique com o botão direito no controle de ganho de um canal (ou use o menu de contexto do canal).
2. Selecione **Adicionar para Ganhar Grupo** e atribua um número de grupo.
3. Repita para que cada canal seja incluído no grupo.

**Comportamento do grupo:**

- Movendo o controle do ganho em qualquer canal agrupado move todos os canais do grupo na mesma quantidade.
- **Alt / Option key + Arraste** ajusta apenas o canal sob o cursor, permitindo ajuste individual sem quebrar o grupo.
- Silenciamento aplica-se a todos os canais agrupados simultaneamente, independente das teclas modificadoras.

> **NOTA:** Mic Gain Groups funcionam como esperado quando o DADman é controlado via EuControl — ganha sliders e botões nas superfícies Avid afetam todos os canais agrupados. Silenciar em uma superfície de controle silencia todos os canais agrupados simultaneamente.

> **NOTA:** Grupos de Ganho Mic não são suportados no MTRX Studio. _(v5.8.1.6)_

---

## Guia 7.5 DA — Saídas analógicas

A guia **DA** exibe medição e controle para todos os canais de saída analógicos em unidades conectadas. Se uma unidade não tiver cartões de saída analógicos instalados, a aba estará presente mas vazia para essa unidade.

_[Placeholder: captura de tela de aba DA anotada mostrando o canal de saída com fader de nível, silenciar, operadora / sinal/clip indicadores]_

### 7.5.1 Controles da Faixa de Canal

| Controles                | Descrição:                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Fader level de saída** | Define o nível de saída analógico. O valor corresponde ao nível analógico do dBu que é produzido quando é aplicado um sinal digital 0 dBFS. Veja [Seção 7.5.2] para detalhes do intervalo. |
| **Silenciar**            | Silencia o canal de saída.                                                                                                                                                                                                                                                                                     |
| **Mono / stereo link**   | Links pares de canais ímpares/mesmo para operações estéreo.                                                                                                                                                                                                                                                    |
| **Operadora válida LED** | Em canais de saída digital: ilumina quando um sinal digital válido está presente na saída. Em cartões de saída analógicos: ilumina quando o cartão de saída está presente e ativo.                                                                             |
| **LED sinal**            | Ilumina quando o sinal de saída excede -42 dBFS.                                                                                                                                                                                                                                                               |
| **LIGAR PELO**           | Ilumina quando o sinal de saída exceder -0.5 dBFS.                                                                                                                                                                                                                                             |
| **Pico segurado**        | Mantém o nível de produção mais alto alcançado na barra de medidores. Mesma disponibilidade que a aba AD — AX32, Pento e MTRX com firmware v2.3.2.1 ou posterior.                                                                              |
| **Nome do canal**        | Nome atribuído pelo usuário. Armazenado no arquivo `.dms`. Clique para editar.                                                                                                                                                                                                 |

### 7.5.2 de nível de saída e alinhamento

O fader no nível de saída define o **nível de saída analógico correspondente a 0 dBFS escala digital completa**. Esta é uma configuração de alinhamento de estrutura de ganho que determina o fator de conversão entre o domínio digital (dBFS) e o domínio analógico (dBu).

**Intervalo de nível de saída:** Dois intervalos estão disponíveis, selecionáveis através do botão **6 dB Gain**:

| Modo               | Range             | Saída máxima     |
| ------------------ | ----------------- | ---------------- |
| Padrão             | -66 dBu a +18 dBu | +18 dBu a 0 dBFS |
| +6 dB Gain ativado | -60 dBu a +24 dBu | +24 dBu a 0 dBFS |

> **ATENÇÃO:** Definir um nível de saída alto nem sempre é apropriado. Se o equipamento a jusante tiver um nível máximo de entrada inferior ao nível de saída do DADman, o equipamento a jusante será cortado mesmo quando o sinal DADman estiver limpo. Sempre verifique se a configuração do nível de saída não excede a especificação de entrada máxima do equipamento sendo alimentado. Exemplo: a configuração de saída +24 dBu em equipamentos com entrada máxima de 18 dBu causará um corte de aproximadamente -6 dBFS no sinal DADman.

> **DICA:** Combine o nível de saída com o nível de entrada nominal do equipamento a jusante para a melhor estrutura de ganhos. Por exemplo, se sua sensibilidade de entrada do amplificador for +4 dBu, definir o nível de saída do DADman para +18 dBu dá aproximadamente 14 dB de salão acima do nominal — uma margem confortável para a maioria dos fluxos de trabalho.

---

## 7.6 Con Tab — Matriz de roteamento

A aba **Con** exibe a matriz de roteamento de ponto cruzado — o roteamento completo do motor de roteamento de sinal do hardware conectado. Cada entrada pode ser roteada para qualquer saída, e qualquer número de saídas pode receber a mesma entrada simultaneamente.

_[Placeholder: captura de guia de gato anotado mostrando a matriz visão geral (esquerda), matriz detalhada (direita) e indicadores de status de entrada/saída]_

### Layout de Matriz 7.6.1

A matriz de roteamento é apresentada em dois painéis lado a lado:

| Painel                    | Conteúdo                                                                                                     | Objetivo                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **Matriz de visão geral** | Todas as entradas (linhas) × todas as saídas (colunas), pequena escala | Navegue para uma seção da matriz; mostra estado de roteamento geral de uma olhada |
| **Matriz detalhada**      | Vista expandida da área selecionada na visão geral                                                           | Fazer ou remover conexões de crosspoint individuais                               |

Em ambos os painéis, **as entradas são exibidas como linhas na esquerda** e **as saídas são exibidas como colunas no topo**. Uma conexão é feita na interseção (ponto de cruza) de uma linha de entrada e uma coluna de saída.

> **NOTA:** As entradas e saídas mostradas na matriz refletem as opções de hardware realmente instaladas e o número de canais disponíveis na taxa de amostragem atual. A taxas de amostra mais altas, alguns formatos (MADI, ADAT) transportam menos canais, reduzindo o número de linhas e colunas mostradas.

### 7.6.2 Fazendo e removendo Conexões

| Acão                                        | Resultado                                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Clique único** em um ponto cruzado        | Conecta essa entrada a essa saída (ou desconecta se já estiver conectada)                 |
| **Shift + clique** em um ponto cruzado      | Conecta o canal clicado e o próximo canal consecutivo simultaneamente (um par estéreo)    |
| **Ctrl / Cmd + clique** em um ponto cruzado | Conecta um diagonal completo — mapeia entradas para suas saídas com o mesmo número a partir do ponto clicado |

Um cruzamento conectado é mostrado como um **quadrado azul preenchido**.

### Indicadores de Status da Conexão 7.6.3

**Na coluna de saída cabeçalhos (linha superior):**

| Indicador            | Significado                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------- |
| Sem nota             | A saída não está conectada a nenhuma entrada                                              |
| Praça azul clara     | A saída está conectada a uma entrada que não está visível na exibição detalhada da matrix |
| Quadrado azul escuro | A saída está conectada a uma entrada visível na exibição da matriz detalhada atual        |

> **NOTA:** Uma conexão existente é sempre substituída quando você clica em um novo ponto de passagem cruzada na mesma coluna de saída. A saída foi reatribuída para o novo input; a conexão anterior é removida.

**Na linha de entrada rótulos (rótulo do lado esquerdo da grade detalhada):**

| Cor          | Significado                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Verde**    | Transportadora digital válida presente na entrada (ou cartão analógico está instalado e ativo para canais analógicos) |
| **Amarelo**  | Sincronizar perda ou taxa de amostragem incompatível nesta entrada                                                                       |
| **Vermelho** | Erro — nenhum sinal de entrada válido detectado                                                                                          |

> **DICA:** Status amarelo em uma entrada digital geralmente indica uma incompatibilidade entre a fonte e a configuração de relógio atual da unidade. Verifique a guia **Conf** e verifique se a taxa de amostragem da unidade corresponde à fonte, ou habilite **Adaptar Para** para essa entrada.

---

## Guia de Conf 7.7 — Bloqueio e configuração

A aba **Conf** controla a infraestrutura digital da unidade — fonte de relógio, taxa de amostragem, comportamento de sincronização, e configuração das portas digitais de E/S (MADI, Dante, Word Clock, AES3).

_[Placeholder: captura de aba de contexto anotada para AX Center, mostrando Sincronização, Dante e subseções do MADI]_

> **NOTA — AX32 / hardware da família 1:** A aba Conf em AX32, DX32R, e as unidades Penta são rotuladas como **Gerais** e organizadas em subseções (sincronização, Interface MADI Coax, Interface óptica 1/2. Os parâmetros são funcionalmente equivalentes aos descritos aqui. Os parâmetros específicos do AX32 são observados abaixo onde eles diferem.

### Parâmetros de sincronização 7.7.1

| Parâmatro                       | Opções                                                                                                                                 | Descrição:                                                                                                                                                                                                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fonte**                       | Interno · Relógio de Palavra · AES11 · AES/EBU 1–8 · Coax MADI · 1/2 Optica · Dante · Abismelétrico 3                                  | Seleciona a fonte principal do relógio para a unidade. Usar **Interno** quando esta unidade for o mestre do relógio do sistema.                                                                                                                             |
| **Taxa de amostragem**          | 44.1 · 48 · 88.2 · 96 · 176.4 · 192 kHz _(e DXD / 384 kHz no AX32)_ | Define a taxa de amostragem operacional quando **Adaptar Para** é definido para **Interna**. Quando **Adaptar Para** é definido como uma entrada digital, este campo mostra a taxa de amostra detectada dessa entrada (somente leitura). |
| **Adaptar Para**                | Interno · AES11 · AES/EBU 1–8 · Coaxi MADI · Optical · Dante · Thunderbolt 3                                                           | Quando definida como uma entrada digital, a unidade corresponde automaticamente à taxa de amostra dessa entrada. Quando definido para **Interna**, o parâmetro **Taxa de amostragem** acima é usado.                                                        |
| **Desligar Relógio de Palavra** | Hora do Palavra (taxa base) · Relógio de Palavras (taxa real)                                    | Determina se a saída do relógio BNC Word segue apenas a taxa de amostra base ou a taxa de operação real.                                                                                                                                                                    |
| **Sincronizar encerramento**    | Z alto · 75 pol                                                                                                                        | Define se a entrada de relógio de Word foi terminada internamente com 75%. **Recomenda-se fortemente: sempre use 75 to termination** para melhorar a estabilidade do relógio.                                                               |

> **DIP:** Quando usar Dante como rede de áudio e a unidade não é o mestre do relógio Dante, defina **Fonte** para **Dante** e **Adapte Para** para **Dante**. Isso garante a trilha do relógio Dante PTP e evita a conversão da taxa de amostragem no caminho de áudio.

### Configuração de Porta do MADI 7.2

Estas configurações se aplicam a cada porta MADI individualmente (portas Coaxial BNC e Optical SFP são configuradas separadamente).

| Parâmatro                      | Opções                    | Descrição:                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Taxa de quadros**            | Legado · Alta Velocidade  | **Legado:** O comprimento da moldura MADI é mantido a comprimento da moldura de 48 kHz, e os canais adjacentes são fundidos a taxas amostrais mais altas (S/MUX). **Alta velocidade:** O comprimento do quadro segue a taxa de amostragem real — menor latência em 88,2 kHz e superior. Com 44,1 ou 48 kHz, o legado é sempre usado, independentemente dessa configuração. |
| **Frame size**                 | Normal · Estendido        | **Normal:** 56-channel MADI (padrão). **Estendido:** 64-channel MADI. Verifique se o equipamento MADI conectado suporta o modo estendido de 64 canais antes de ativar.                                                                                                                                                                                                     |
| **Ch. estado** | Padrão · Transparente     | **Padrão:** a unidade define os bits de status do canal do sinal MADI de saída. **Transparente:** bits de status do canal da fonte são passados inalterados. Deixe em **Padrão** na maioria das instalações.                                                                                                                                                                                  |
| **Taxa de entrada**            | Automático · Como anúncio | **Automático:** a unidade detecta automaticamente a taxa de amostragem do sinal MADI recebido. Recomendado: **Automático**.                                                                                                                                                                                                                                                                                   |

> **NOTA — Alta velocidade vs. Legado MADI:** A maioria dos dispositivos MADI no modo de legado do mercado. Ativar o modo de alta velocidade em uma extremidade de um link MADI sem ativá-lo no outro não resultará em erros de áudio ou relógio. Verifique se tanto o dispositivo de transmissão e recebimento estão definidos para o mesmo modo de cobrança de quadros antes de operar acima de 48 kHz.

### 7.7.3 - Interface MADI óptica _(AX32)_

_Aplica-se ao AX32 unidades equipadas com um módulo MADI óptico de SFP._

| Parâmatro                      | Opções                          | Descrição:                                                                                                                                                                                                  |
| ------------------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Modo**                       | Desativado · MADI · HotLink NTP | Selecione o modo de operação da interface SFP óptica. Definir para **Desativado** se nenhum módulo SFP estiver instalado. O modo **NTP HotLink** é reservado — não utilize. |
| **Taxa de quadros**            | Legado · Alta Velocidade        | O mesmo que o coaxial do MADI — veja acima.                                                                                                                                                                 |
| **Frame size**                 | Normal · Estendido              | O mesmo que o coaxial do MADI — veja acima.                                                                                                                                                                 |
| **Ch. estado** | Padrão · Transparente           | O mesmo que o coaxial do MADI — veja acima.                                                                                                                                                                 |
| **Taxa de entrada**            | Automático · Como anúncio       | O mesmo que o coaxial do MADI — veja acima.                                                                                                                                                                 |

### 7.7.4 Dante Configuração

Parâmetros de configuração Dante visíveis no controle de tabulações de barra de DADman da operação Dante que são gerenciados no nível de hardware. O roteamento completo de Dante e o gerenciamento de assinatura são executados no aplicativo **Dante Controller** (um aplicativo separado de Audinate, não parte do DADman).

_[Pendente de engenharia do DAD: lista completa dos parâmetros Dante visíveis na guia Conf para AX Center / Core 256 — incluindo taxa de amostragem Dante, os parâmetros redundância e IPCore introduzidos na v5. .1.6]_

> **NOTA — Dante 256 IPCore _(v5.8.1. )_:** Unidades AX64, AX Center e Núcleo 256 equipadas com o módulo Dante 256 IPCore são suportadas por até 256 canais de Dante em 48 kHz. Esta configuração expandida do Dante requer tanto firmware quanto software na v5.8.1.6 ou posterior.

---

## 7.8 Mon Tab — Monitor Control

A guia **Mon** fornece controle em tempo real do controlador de monitor definido no perfil ativo do monitor. É a interface do dia-a-dia do operador para monitoramento — seleção de fonte, alto-falantes mudando, dobrar e falar.

> **NOTA:** A guia Mon exibe os _controles_ definidos no perfil de monitor; a _configuração_ de fontes, saídas, duplicações e roteamento é feita no editor de Perfil de Monitor, acessado em **Configurações > Perfil de Monitor**. Esta seção cobre apenas os controles da Aba Sec. Para a configuração do perfil Monitor, consulte [Capítulo 8 — Recursos Avançados, Seção 8.1 — Monitorar Perfis].

_[Placeholder: Captura na aba anotada que mostra o seletor de origem, botões de saída do alto-falante, seletor de dobração, fadador de nível principal, escurecimento, cortar, talkback e botão de referência no nível]_

### 7.8.1 Mon Tab Controls

| Controles                                        | Descrição:                                                                                                                                                                                 |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Seletor de origem**                            | Seleciona a fonte ativa de monitoramento das definidas no Perfil Monitor.                                                                                                                  |
| **Speaker output buttons**                       | Seleciona o conjunto de alto-falantes ativo (por exemplo, Perto, Mid, Far; ou Stereo, 5.1, 7.1.4).                      |
| **Seletor Folha-down**                           | Aplica uma matriz para baixo ou para correspondência a partir das definidas no Perfil de Monitor.                                                                                          |
| **Arqueiro do nível principal**                  | Controla o nível de monitoramento mestre para o conjunto de alto-falantes ativo. Mostrado em dB em relação ao nível de referência.                                         |
| **Ref (nível de referência)** | Bloqueia o fader no nível principal para o nível de referência calibrado definido no Perfil de Monitor. Pressione uma vez para intervir; pressione novamente para liberar. |
| **Dim**                                          | Aplica uma atenuação fixa (normalmente -20 dB) ao monitoramento da saída sem alterar a posição do leitor.                                                               |
| **Corte**                                        | Silencia todas as saídas de monitoramento imediatamente.                                                                                                                                   |
| **Talkback**                                     | Ativa o caminho de sinal de talkback definido no perfil Monitor.                                                                                                                           |
| **Seção de metro**                               | Exibe o contador em tempo real da fonte e saída de monitor ativo, como configurado no Perfil de Monitor.                                                                                   |

### 7.8.2 Nível de Referência

A função nível de referência permite monitorizar num SPL pré-calibrado sem risco de alterações acidentais.

**Para definir um nível de referência:**

1. Usando tons de teste e um medidor SPL calibrado, defina o nível de saída de monitoramento para a SPL de referência desejada.
2. Observe o valor de dB mostrado no fader do nível principal — este é o seu deslocamento de referência.
3. No editor de Perfil de Monitor (**Configurações > Perfil de Monitor**), insira esse valor como o **Nível de Referência** para o conjunto de alto-falantes.
4. Durante a operação normal, pressione **Ref** para retornar instantaneamente ao nível calibrado após qualquer ajuste manual.

> **DICA:** Múltiplos conjuntos de alto-falantes podem ter seu próprio nível de referência. Por exemplo, um conjunto "Próximo campo 85 dB" e um conjunto "Perto do campo 75 dB" pode compartilhar as mesmas saídas físicas, Diferente apenas no seu ajuste de corte.

---

## 7.9 Control-Strip _(v5.8.0 e mais tarde)_

A faixa de controles\➲ Pack aparece **abaixo** abaixo da área principal de remoção de canal quando predefinições de roteamento foram configuradas para uma ou mais unidades conectadas. Proporciona controlo e acompanhamento de estado em tempo real para todas as predefinições de roteamento configuradas.

> **NOTA:** A faixa de controla\├Pack só é visível depois que predefinições de roteamento forem criadas no editor de predefinições de roteamento (**Configurações > Predefinições de roteamento**). Se nenhuma predefinição estiver configurada, esta área estará ausente da janela do DADman. Veja [Capítulo 8, Seção 8,4 - Control\├Pacote] para uma documentação completa de configuração.

_[Placeholder: controle anotado\├Pack strip captura de tela mostrando botões de nome predefinido, metros PPM e indicadores de status acionar]_

### format@@0 7.9.1 Pack Strip Elements

A faixa mostra uma seção por unidade Thunder\„Core com pré-definições de roteamento configuradas. Dentro de cada seção de unidade, cada predefinição configurada é mostrada com os seguintes elementos:

| Elemento                                     | Descrição:                                                                                                                                |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome da predefinição**                     | O nome atribuído à predefinição no editor de predefinição de roteamento                                                                                   |
| **Botões de balde (1–4)** | Seleciona o conjunto de entrada ativo (bucket) para a predefinição. A cor indica estado — veja abaixo. |
| **Medidores PPM de origem**                  | Contadores de programas em tempo real mostrando o nível de todos os canais do balde.                                                      |
| **Medidores PPM de saída**                   | Contadores de pico em tempo real mostrando o nível de todos os canais de saída para o predefinido.                                        |
| **Acionar indicadores de status**            | Mostra o status dos detectadores de sinal atribuídos como gatilhos para cada bucket.                                                      |

### Estados do botão de balde 7.9.2

| Cor          | Estado:                  | Significado                                                                                                                                                      |
| ------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **azul**     | Ativo (manual)        | Este balde está roteado no momento. A predefinição está no modo manual — sem troca automatizada.                                 |
| **Verde**    | Armado (automatizado) | Este balde é a atual rota ativa. A predefinição está no modo automático e pronta para alternar com base em condições de gatilho. |
| **Vermelho** | Erro ao disparar                         | Um detector de sinal atribuído a este grupo relatou um erro (perda de sinal, falha de integridade AE6).                       |

**Troca entre modo manual e automático:**

- **Clique duas vezes** num botão verde (automatizado) de balde para alternar para o modo manual — o botão fica azul.
- **Clique duas vezes** num balde azul (manual) para rearmar a automação — botão fica verde.

> **DICA:** Em eventos ao vivo ou transmissão, automação do braço durante a verificação da linha. Se uma entrada falhar, a predefinição mudará automaticamente sem a intervenção do operador. Você pode substituir o interruptor automático a qualquer momento clicando duas vezes no botão de balde desejado.

---

## Controles do mouse e do teclado 7.10

### 7.10.1 Ganho e Nível de Ajuste

| Acão                                                           | Modifier                                                             | Resultado                                                                  |
| -------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Arraste o mouse sobre o controle deslizante de ganho MIC       | —                                                                    | 0.5 dB por passo                                           |
| \* \* \* \* \* \* \* \* (canal selecionado) | —                                                                    | 0.1 dB por passo                                           |
| \* \* \* \* \* \* \* \* (canal selecionado) | **Shift**                                                            | Resolução aumentada (superior a 0.1 dB) |
| **Clique** no controle                                         | **Ctrl (Vitória) / Cmd (Mac)** | Redefinir ao valor padrão                                                  |
| Qualquer uma das opções acima                                  | **Alt / Option**                                                     | Aplique somente ao canal selecionado - ignora grupo de Ganho do Microfone  |

### 7.10.2 - Matriz de roteamento

| Acão                                  | Resultado                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------- |
| Clique simples no ponto de cruzamento | Conectar / desconectar                                                              |
| **Shift** + clique                    | Conecte dois canais consecutivos (um par estéreo)                |
| **Ctrl / Cmd** + clique               | Conecte um diagonal completo (numerado E/O a partir deste ponto) |

### 7.10.3 Atalhos de teclado _(v5.7.0 e posterior)_

| Acão                              | macOS     | Janelas          |
| --------------------------------- | --------- | ---------------- |
| **Arquivo > Abrir…**              | ⌘O        | Ctrl+O           |
| **Arquivo > Salvar**              | ⌘S        | Ctrl+S           |
| **Arquivo > Salvar como…**        | redondo S | Ctrl+Shift+S     |
| **Arquivo > Abrir Perfil…**       | ⌘O        | Ctrl+Alt+O       |
| **Arquivo > Importar Perfil…**    | ⌘I        | Ctrl+Alt+I       |
| **Arquivo > Salvar Perfil**       | ⌘S        | Ctrl+Alt+S       |
| **Arquivo > Salvar Perfil como…** | ➜ 7$ S    | Ctrl+Alt+Shift+S |
| **Arquivo > Fechar Perfil**       | ⌘W        | Ctrl+Alt+W       |
| Abrir / ativar a janela principal | ⌘⇧1       | —                |
| Abrir Lista de Dispositivos       | redondo L | Ctrl+Shift+L     |
| Abrir perfil de monitor           | redondo M | Ctrl+Shift+M     |
| Abrir Configurações / Opções      | ⌘,        | Ctrl+,           |

> **NOTA:** Estes atalhos foram introduzidos no DADman v5.7.0. Versões anteriores não suportam atalhos de teclado para operações de arquivo e janela.

---

## Referências cruzadas

- **Capítulo 1 — Introdução:** Explicação perceptual do que cada aba controla e como os tipos de arquivo se relacionam
- **Capítulo 5 — Fluxo e Arquitetura de Sinais:** Arquitetura de rede e bloqueio
- **Capítulo 6 — Primeiros passos:** Passo-a-passo usando esses controles em sequência pela primeira vez
- **Capítulo 8 — Recursos avançados:** Monitorar configuração de Perfil; Control\➲ Pack configurado; Mic Gain Groups; EuCon integração; alinhamento de nível de saída

---

_[Pendente de Engenharia do DAD:]_  
_— Lista de parâmetro de guia de Conf completa para AX Center / Core 256 (Dante params, Parâmetros do Thunderbolt 3 relógios)_  
_— Parâmetros de aba de Conf do Dante 256 IPCore (v5. .1. )_  
_— Complete a lista de atalhos de teclado_  
_— aba de cartão SPQ / controles (subseção separada a ser adicionada quando documentada)_  
_— Controle PRO\^\\MON na aba Mon (requer documentação dedicada de DAD)_  
_— Todas as capturas de tela_
