---
title: "Capítulo 1 - Introdução e Visão Geral do Produto"
sidebar_label: "Cara. 1 — Introdução"
sidebar_position: 3
---

# Capítulo 1 - Introdução e Visão Geral do Produto

> **Documento:** Usuário do DADman Manual  
> **Versão do software coberta:** DADman v5.8.2 build 2  
> **Estado do capítulo:** Projecto v0. — Revisão técnica pendente pela engenharia DAD  
> **Última atualização:** Junho de 2026

---

## Neste Capítulo

| Turma               | Capas                                              | Relevante para    |
| ------------------- | -------------------------------------------------- | ----------------- |
| 1.1 | O que o DADman é e o que ele faz                   | Todos os usuários |
| 1.2 | Principais recursos                                | Todos os usuários |
| 1.3 | Componentes de software e suas relações            | Todos os usuários |
| 1.4 | Hardware compatível                                | Todos os usuários |
| 1.5 | Famílias de hardware e compatibilidade de clonagem | Todos os usuários |
| 1.6 | Como usar este manual                              | Todos os usuários |
| 1.7 | Sobre Tecnologia DAD / NTP                         | Todos os usuários |

> **NOTA — Escopo deste manual:** Este manual é escrito para usuários do hardware DAD (Dinamarca de Áudio Digital). Todos os exemplos, capturas de tela e procedimentos usam produtos DAD — principalmente o AX Center, Core 256 e AX64 — como a plataforma de referência. A Avid MTRX, a MTRX II e a MTRX Studio são produtos OEM que usam software DADman e são funcionalmente idênticos a partir de uma perspectiva de controlo DADman; os procedimentos neste manual aplicam-se igualmente a esses produtos. Tópicos específicos do Avid-hardware (iLok, integração ferramentas Pro, download de Conta Avid) são notados onde é relevante, mas não são o foco deste documento.

---

## 1.1 O que é DADman?

DADman é um software que configura e controla hardware de áudio profissional do DAD (Digital Audio Denmark), Tecnologia NTP e Avid sobre uma rede Ethernet padrão. É o único ponto de controle para todas as unidades conectadas — fornecendo acesso ao ganho de entrada analógico, Níveis de saída, roteamento, relógio, sincronização e monitoramento de controle a partir de uma interface unificada.

DADman é uma interface **orientada por canais**. Cada unidade conectada aparece na lista de dispositivos, e suas entradas, saídas, e controles de roteamento são apresentados como um conjunto de tiras de canais verticais — semelhante em conceito às tiras de canais em um console de mistura. Isto significa que independentemente de qual unidade de hardware você está trabalhando, a interface DADman segue um layout consistente.

### 1.1.1 O Princípio Fundamental: Configurações ao vivo na Unidade

> **NOTA:** Este é o conceito arquitetônico mais importante a ser entendido antes de usar DADman.

Todas as configurações configuradas em DADman — roteamento, ganho, níveis de saída, fonte de relógio, rótulo de canal, e todos os outros parâmetros — são **armazenados na unidade de hardware em si**, não no software DADman ou no computador que o executa. DADman lê o estado atual da unidade da rede e a exibe; quando você fizer uma mudança, DADman envia essa mudança para a unidade, que a armazena.

Isto tem consequências práticas:

- Se o DADman estiver fechado ou o computador estiver desligado, a unidade de hardware continuará a operar com as suas últimas configurações armazenadas. O áudio passa ininterrupto.
- Se o DADman está aberto e uma unidade é encontrada na rede, DADman mostra imediatamente o estado atual da unidade — mesmo que essas configurações tenham sido configuradas pela última vez em um computador diferente.
- Para recuperar as configurações após uma atualização de fábrica ou de firmware, você deve recarregar um arquivo de configuração salvo. Veja [Capítulo 7, Seção 7.1 — Gerenciamento de Sessão].

---

## 1.2 Principais Capacidades

DADman fornece os seguintes recursos de controle através de hardware compatível:

| Funcionalidade                                                      | Descrição:                                                                                                                                              |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Controle analógico**                                              | Ganho de Mic/linha, potência do fantasma (+48 V), raquete de inversão de etapa, etiquetagem de canal                                                 |
| **Controle analógico de saída**                                     | Nível de saída, mudo, rotulagem de canais, seleção de intervalo de saída (+18/+24 dBu)                                                               |
| **Roteando matriz**                                                 | Matriz de roteamento de pontos de cruzamento completo — até 1.500 × 1,500 crosspoints em hardware suportado                                             |
| **Relógio e sincronização**                                         | Seleção de taxa, sincronização de fonte, adaptação de relógio                                                                                                           |
| **Controle do monitoramento**                                       | Monitorar perfis com fontes, saídas, dobrações, atraso e fala                                                                                                           |
| **Multipli-unit control**                                           | Controle várias unidades de hardware simultaneamente a partir de uma única janela DADman                                                                                |
| **Integração EuCon**                                                | Compatível com Avid EuControl para integração superficial de controle                                                                                                   |
| **Pro Tools PRE emulation**                                         | Emulação preamp controlada por MIDI para unidades MTRX                                                                                                                  |
| **Predefinições de roteamento (Control\➲ Pack)** | Até 32 predefinições de roteamento por unidade com gatilho automático de comutação _(v5.8.0 e posterior)_            |
| **Microfone ganha grupos**                                          | Agrupe vários canais de entrada do microfone para ajuste simultâneo de ganho _(v5.8.1.6 e superior)_ |
| **Backup das configurações**                                        | Salvar e restaurar todas as configurações de unidade para arquivos de configuração do DADman (`.dms`) no computador                                  |
| **Clonagem da unidade**                                             | Copiar todas as configurações de uma unidade para outra na mesma família de hardware                                                                                    |

---

## format@@0 1.3 Software Components and Their Relationships

DADman é uma parte de um sistema de software com dois componentes. Compreender a distinção entre os dois componentes é essencial para uma instalação correta e solução de problemas.

### 1.3.1 Os Dois Componentes

| Componente                         | O que ele faz                                                                                                                                                                                       | Obrigatório para                                              |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **DADman**                         | Configura e controla unidades de hardware sobre Ethernet - roteamento, ganho, monitoramento, relógio                                                                                                | Todo hardware suportado                                       |
| **Motorista DAD do Thunderbolt 3** | Faz com que a interface de áudio do Thunder\├Core seja visível para o computador como um dispositivo de áudio Core (macOS) ou ASIO (Windows) para uso no DAWs | Série MTRX AX64, Centro AX, Somente série Core 256, Avid MTRX |

Essas duas aplicações são **independentes**. Não se comunicam entre si. O driver Thunderbolt 3 não é necessário para o DADman funcionar, e DADman não é necessário para que o driver Thunderbolt 3 apresente a interface de áudio a uma DAW. No entanto, para uma operação completa de hardware do Thunder\➲ Core — configurar a unidade _e_ gravar ou reproduzir áudio de volta através dele — ambos devem estar instalados.

_[Placeholder: diagrama mostrando o driver DADman e TB3 como caminhos paralelos entre o computador e a unidade de hardware — DADman se comunicando pela Ethernet, O driver TB3 se comunicando sobre o Thunderbolt 3]_

### Caminhos de comunicação 1.3.2

Uma unidade Thunder\➲ Core conectada a um computador usa dois caminhos de comunicação simultâneos e independentes:

| Caminho           | Protocol       | Objetivo                                                                        |
| ----------------- | -------------- | ------------------------------------------------------------------------------- |
| **Ethernet**      | CP/IP          | Controle de DADman — roteamento, ganhar, configuração                           |
| **Thunderbolt 3** | PCIe sobre TB3 | Transporte de áudio — a interface visível para a sua DAW via Core Audio ou ASIO |

Hardware Ethernet-only (AX32, DX32R, Penta series) usa apenas o caminho da Ethernet. Não há nenhum driver Thunderbolt 3 para essas unidades, e elas não aparecem como interfaces de áudio no computador. O áudio dessas unidades é transportado por MADI, Dante ou AES3.

### 1.3.3 Histórico de Versão

| Requisito                                                               | Versão mínima                                            |
| ----------------------------------------------------------------------- | -------------------------------------------------------- |
| DADman para suporte ao driver Thunderbolt 3                             | v5.6.7.1 |
| DADman com suporte nativo para Apple Silicon (ARM64) | v5.5.0                   |
| DADman com Controle \「Pack                                              | v5.8.0                   |
| DADman com Grupos de Ganho Microfone                                    | v5.8.1 compilação 6      |
| Suporte ao DADman com cartão Ravenna e ST 2110-30                       | v5.8.2 compilação 2      |
| Última versão do DADman que suporta o Windows 7 / 8                     | v5.7.0                   |
| Versão atual (no momento da publicação)              | v5.8.2 compilação 2      |

---

## Hardware Compatível com 1.4

O DADman controla hardware a partir de três famílias de produtos: produtos tecnológicos DAD/NTP e produtos MTRX. Lista completa do hardware suportado no momento da publicação (DADman v5.8.2 2) é exibida abaixo.

> **NOTA:** Sempre consulte as notas de lançamento para sua versão específica do DADman para confirmar a compatibilidade com as revisões de hardware mais recentes. A lista de hardware suportada pode ser atualizada entre revisões manuais.

### 1.4.1 DAD / Hardware de Tecnologia NTP

| Produto: | categoria                             | Conexão com o computador | Núcleo do Trovão | Matriz de roteamento                                                 |
| ------------------------ | ------------------------------------- | ------------------------ | ---------------- | -------------------------------------------------------------------- |
| **AX Centro**            | Interface analógica e digital modular | Trovoada 3 + Ethernet    | sim              | 1,024 × 1,024                                                        |
| **Core 256**             | Interface de áudio digital            | Trovoada 3 + Ethernet    | sim              | [Para confirmar] |
| **AX64**                 | Interface modular de áudio            | Trovoada 3 + Ethernet    | sim              | [Para confirmar] |
| **AX32**                 | Conversor AD/DA                       | Ethernet apenas          | Não              | [Para confirmar] |
| **DX32R**                | I/O Digital e roteador                | Ethernet apenas          | Não              | 400 inputs                                                           |
| **AX24**                 | Interface de áudio                    | Ethernet apenas          | Não              | [Para confirmar] |

### format@@0 1.4.2 NTP Technology Penta Series

| Produto: | categoria                             | Conexão com o computador | Núcleo do Trovão |
| ------------------------ | ------------------------------------- | ------------------------ | ---------------- |
| **Penta 720**            | Unidade base modular I/O              | Ethernet apenas          | Não              |
| **Penta 721s**           | Interface e roteador de áudio modular | Ethernet apenas          | Não              |

### 1.4.3 Produtos de Terceiros

| Produto: | Fabricante | Conexão com o computador | Núcleo do Trovão | Versão do DADman necessária                        |
| ------------------------ | ---------- | ------------------------ | ---------------- | -------------------------------------------------- |
| **Dynaudio Control 01**  | Dynaudio   | Trovoada 3 + Ethernet    | sim              | v5.7.2 e posterior |
| **Dynaudio Control 02**  | Dynaudio   | Trovoada 3 + Ethernet    | sim              | v5.8.2 e posterior |

### Série MTRX Avid 1.4.4

O Avid MTRX, MTRX II e o MTRX Studio são produtos OEM fabricados por DAD / NTP Technology e vendidos pela Avid. Eles utilizam DADman como seu software de controlo e são funcionalmente idênticos ao hardware de DAD na perspectiva de DADman. Este manual não cobre tópicos específicos do Avid, como licenciamento iLok, integração de Ferramentas Pro, ou gerenciamento de contas principal da Avid.

> **NOTA:** Para Avid MTRX, MTRX II e MTRX Studio, use apenas a versão do DADman aprovada para seu hardware Avid, disponível em sua Conta Mestre do Avid. Veja [Capítulo 3, Seção 3.2 — Obtendo o Software].

| Produto: | Conexão com o computador | Núcleo do Trovão |
| ------------------------ | ------------------------ | ---------------- |
| **Avid MTRX**            | Ethernet apenas          | Não              |
| **Avid MTRX II**         | Trovoada 3 + Ethernet    | sim              |
| **Avid MTRX Studio**     | Trovoada 3 + Ethernet    | sim              |

_[Pendente da engenharia DAD: Capacidades de roteamento da matriz para AX32, AX64, Core 256, AX24, Penta 720, Penta 721s; confirmação do método de conexão AX24]_

---

## Famílias de Hardware 1.5 e Compatibilidade da Clonagem

DADman organiza hardware compatível em três **famílias**. A filiação familiar determina quais unidades podem trocar configurações entre si usando a função **Clone**.

A clonagem permite que todas as configurações de uma unidade sejam copiadas para outra. Isso é útil para duplicar uma configuração conhecida entre várias unidades idênticas ou para restaurar as configurações para uma unidade de substituição. A clonagem só é permitida entre unidades da **mesma família**.

| Familiares    | membros                                                 | Observações                                   |
| ------------- | ------------------------------------------------------- | --------------------------------------------- |
| **Família 1** | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s | Arquitetura de roteamento de geração original |
| **Família 2** | MTRX II · AX64 · Centro AX · Núcleo 256                 | Geração de núcleos Thunder\├                  |
| **Família 3** | Estúdio MTRX                                            | Autônomo                                      |

> **NOTA — Clonagem entre unidades não idênticas:** Para melhores resultados, as unidades de origem e de destino devem ser exactamente configuradas (as mesmas cartas nos mesmos slots). Configurações de cartas presentes na unidade de origem, mas ausentes na mesma posição do slot na unidade de destino são definidas para os padrões de fábrica do alvo. Configurações de cartões presentes no alvo, mas ausentes na fonte não são afetadas.

---

## 1.6 Como usar este manual

Este manual é organizado para oferecer suporte a leitura do estilo sequencial e de referências.

**Se você é novo no DADman:** Leia os Capítulos 1–3 em ordem, em seguida, siga o Capítulo 6 (Introduzindo) passo a passo. Retorne aos Capítulos 4 a 5 para o plano de fundo do hardware e Capítulo 7 quando precisar de orientação operacional detalhada.

**Se você é um usuário experiente procurando por um tópico específico:** Use o índice de seção no topo de cada capítulo, ou o índice completo no Anexo H.

**Convenções de documentos utilizadas neste manual:**

| Convenção                                                                  | Significado                                                                             |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Bold text**                                                              | Nomes de controle de hardware, itens de menu, rótulos de botões, nomes de aba           |
| `Texto monoespaço`                                                         | Nomes de arquivos, extensões de arquivo, caminhos de pasta, entrada de linha de comando |
| _[Placeholder]_        | Conteúdo a ser confirmado pela engenharia do DAD ou adicionado durante a revisão        |
| _(v5.8.0 e mais tarde)_ | Disponibilidade de recursos — indica a versão mínima do DADman necessária               |
| _(AX32 / Família 1)_                                    | Variação de hardware — parâmetro se aplica especificamente ao hardware nomeado          |

**Cross-references** use o formato [Capítulo X, Seção X.X — Título] para apontar o conteúdo relacionado dentro deste manual.

---

## 1.7 Sobre DAD / Tecnologia NTP

Dinamarca de Áudio Digital (DAD) é uma marca de NTP Technology A/S, sediada em Gentofte, Dinamarca. A tecnologia NTP projeta e fabrica hardware de áudio profissional para aplicativos de transmissão, pós-produção, som ao vivo e estúdio.

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Web: www.digitalaudio.dk  
Suporte: www.digitalaudiosupport.com  
Email: info@digitalaudio.dk

---

## Referências cruzadas

- **Capítulo 2 — Requisitos de Sistema:** Compatibilidade com o sistema operacional, especificações mínimas de hardware, conteúdo de pacotes
- **Capítulo 3 — Instalando:** Instalando DADman e o driver Thunderbolt 3
- **Capítulo 5 — Fluxo de sinal e arquitetura:** Como DADman se comunica com hardware; resumo do relógio
- **Capítulo 6 — Primeiros passos:** Uso passo a passo
- **Capítulo 7 — Operação:** Referência de interface completa e fluxos de trabalho operacionais
- **Appendix A — Especificações:** Complete tabelas de especificação do hardware

---

_[Pendente da engenharia DAD:]_  
_— Capacidades da matriz de roteamento para AX32, AX64, Core 256, AX24, Penta 720, Penta 721s_  
_— Confirmação do método de conexão AX24_  
_— Texto de introdução para seção Sobre o DAD / Tecnologia NTP_
