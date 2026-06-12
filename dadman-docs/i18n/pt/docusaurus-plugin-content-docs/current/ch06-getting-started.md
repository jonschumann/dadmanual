---
id: ch06-getting-started
title: "Capítulo 6 — Primeiros passos"
sidebar_label: "Cara. 6 — Primeiros passos"
sidebar_position: 8
slug: /getting-started
---

# Capítulo 6 — Primeiros passos

> **Documento:** Usuário Manual do DADman  
> **Versão do software coberta:** DADman v5.8. construir 2  
> **hardware de exemplo principal:** DAD AX Center  
> **Status do capítulo:** Traço v0. — Capturas de tela pendentes (Passos 1, 2, 4, 5, 6, 7, 9 e orientação da interface anotada de tela)  
> **Última atualização:** Junho 2026

---

## Objetivo

Este capítulo te leva a uma configuração completa e funcional do DADman — desde o primeiro lançamento até áudio confirmado — no caminho mais curto possível. Ele presume que o DADman já está instalado no seu computador. Se não for, complete o [Capítulo 3 - Instalação] primeiro.

Cada passo indica o que fazer, o que você deve ver, e onde encontrar a referência completa quando precisar de mais pormenores.

**Tempo estimado:** 15-20 minutos para uma configuração inicial em uma única unidade.

---

## Antes de Começar

Confirme o seguinte antes de abrir o DADman:

| Requisito                                                                                                                       | Verificar                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| A compilação do DADman v5.8.2 2 (ou posterior) está instalada                | [Capítulo 3, Seção 3.4]                     |
| A unidade de hardware está ligada                                                                                               | Consulte o guia de instalação de hardware                                                                       |
| A unidade de hardware está conectada à mesma rede Ethernet que o seu computador                                                 | TV a cabo direto ou chave compartilhada                                                                         |
| Se estiver usando o Thunderbolt 3 audio: o driver TB3 está instalado e a unidade está conectada via Thunderbolt | [Capítulo 3, Seção 3.5–3.6] |
| Você notou o endereço IP atual da unidade (verifique a tela frontal do painel)                               | —                                                                                                               |

> **OBSERVAÇÃO — Usuários do macOS Sequoia (v15):** O DADman pode não descobrir unidades na rede quando inicia no macOS Sequoia. Se nenhuma unidade aparecer após 30 segundos, saia da sua conta do macOS e entre novamente. Esta é uma questão conhecida a nível de SO; as conexões com Thunderbolt não são afectadas. Veja [Capítulo 3, Seção 3.7] para a solução alternativa completa.

---

## A Interface de DADman em Glória

Quando o DADman abre, a janela principal exibe todas as unidades de hardware organizadas da esquerda para a direita na área **Lista de dispositivos**. Cada unidade é exibida como uma coluna de faixas de canal, bordas na cor atribuída à unidade, com cinco abas que fornecem acesso a diferentes domínios de controle.

### As Cinco Abas

| Tab      | Nome completo            | O que ele controla                                                                                                                                                |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AD**   | Analógico para Digital   | Canais de entrada analógicos — ganho de mic/linha, potência fantasma +48 V, fase inverte (Ö), mudo, medidor, rótulos de canais                 |
| **DIA**  | Digital para o Analógico | Canais de saída analógico — faders de saída, silenciados, medidor de sinal/clipe, rótulos de canal                                                                |
| **Con**  | Conexões                 | A matriz de roteamento completa de sinal — uma grade onde clicar em um ponto cruzado conecta qualquer entrada a qualquer saída                                    |
| **Conf** | Configuração             | Configurações por unidade — fonte do relógio, taxa de amostra, Adaptar To, taxa de quadros MADI, configuração Dante, opções de nível da porta                     |
| **Mon**  | Monitorar                | Monitorar controlador - carregado de um Perfil de Monitor; mostra a seleção de fonte, alto-falantes definir botões, fader nível Ref/Dim/Corte, controles talkback |

> **NOTA:** A aba **Mon** exibe controles ativos somente quando um perfil de Monitor (arquivo `.dmprof`) é carregado. Veja o Passo 9 para carregar ou criar um.

Clicar em um botão do cabeçalho de seção colapsa ou expande essa seção _(v5.7.2 e posterior)_. Isso é útil em telas menores ou quando trabalha com múltiplas unidades simultaneamente.

_[Placeholder: captura de tela anotada — janela principal do DADman mostrando todas as cinco abas, Lista de dispositivos e cor da borda unitária]_

### Lista de dispositivos

Abra a Lista de Dispositivos através de **Configurações > Lista de Dispositivos** ou **⌘➲ L** (macOS) / **Ctrl+Shift+L** (Windows). A lista de dispositivos mostra todas as unidades que o DADman descobriu na rede, com seu nome, ID da unidade, endereço IP e versão do firmware. Clicando com o botão direito uma unidade na Lista de Dispositivos dá acesso a Configurações de Rede, Atualizar Firmware, Redefinição de Fábricas, Clonar e Desconectar.

### Tipos de arquivo

DADman usa dois tipos de arquivo:

| Extensão  | Nome:           | Lojas                                                                                   |
| --------- | ------------------------------- | --------------------------------------------------------------------------------------- |
| `.dms`    | Arquivo de Configurações DADman | Todas as configurações da unidade — roteamento, ganhos, rótulos, parâmetros de Conf tab |
| `.dmprof` | Perfil de Monitor do DADman     | Monitorar a configuração do controlador — fontes, alto-falantes, detetars, palkback     |

Estes ficheiros são independentes. Salvar uma coisa não salva automaticamente a outra. Ambas devem ser salvas e apoiadas.

---

## Passo-a-passo caminhada

### Passo 1 - Inicie o DADman

Abra o **DADman** da sua pasta Aplicativos (macOS) ou o menu Iniciar (Windows).

**Resultado esperado:** A janela principal do DADman abre. Se nenhuma unidade for encontrada imediatamente, a janela da **Lista de dispositivos** abre automaticamente.

> **NOTA:** De DADman v5.7.0, a aplicação continua a se conectar a unidades — não há tempo limite. Se sua unidade estiver ligada e acessível na rede, ela aparecerá na Lista de Dispositivos sem qualquer ação manual necessária.

_[Placeholder: captura de tela — Janela principal do DADman ao iniciar com Lista de Dispositivos vazia]_

---

### Passo 2 - Verificar descoberta de dispositivo

Espere até 30 segundos. Seu Centro AX (ou outra unidade conectada) deve aparecer na **Lista de Dispositivos** como uma linha com uma borda colorida.

**Resultado esperado:** A linha de unidade mostra o nome da unidade, o número do ID unitário e a versão do firmware. O indicador de conexão está ativo (não em cinza).

_[Placeholder: captura de tela — Lista de dispositivos mostrando um AX Center conectado com uma borda colorida]_

Se nenhuma unidade aparecer após 30 segundos:

- Confirme se a unidade está ligada e seu painel frontal **Pronto** LED é verde sólido.
- Confirme se o cabo Ethernet está conectado entre a unidade e o seu computador (ou interruptor).
- Confirme que o endereço IP da unidade está na mesma sub-rede que a interface de rede do seu computador. Verificar através da unidade painel frontal da tela.
- No Windows, confirme que seu firewall não está bloqueando DADman. Adicionar uma exceção de firewall, se necessário.
- Veja [Capítulo 9 — Solução de problemas, Seção 9.2 — Problemas de Rede e Conectividade] para uma tabela completa de diagnóstico.

> **DICA:** Use **Configurações > Lista de Dispositivos** ou **⌘├L** (macOS) / **Ctrl+Shift+L** (Windows) para abrir a Lista de Dispositivos diretamente se não estiver visível.

---

### Passo 3 - Nome da Unidade

Clique no **campo de nome** da unidade na Lista de Dispositivos e digite um nome descritivo — por exemplo, `AX Center - Studio A`.

**Resultado esperado:** O nome é atualizado imediatamente e é armazenado na própria unidade. Ele aparecerá em unidades com painel frontal são exibidas e continuará entre sessões DADman em qualquer computador.

> **NOTA:** Nomes de unidades são armazenados na unidade de hardware. Rótulos de canal atribuídos no Passo 5 são armazenados no arquivo de configurações `.dms` no computador - não na unidade.

---

### Passo 4 - Definir a Fonte do Relógio e Taxa de Amostra

> **Essa etapa deve ser concluída antes de atualizar.** Todos os dispositivos de áudio digitais em seu sistema devem compartilhar um relógio de exemplo comum. Configurar o roteamento antes de confirmar as configurações do relógio pode causar cliques, pops ou silêncio que são mais difíceis de diagnosticar após o fato.

1. Clique na aba **Conf**.
2. Na seção **Sincronização**, defina **Fonte** para corresponder ao seu sistema:

| Configuração do Sistema                                          | Configuração de fonte                                                                  |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Esta unidade é o mestre do relógio do sistema                    | **Interno**                                                                            |
| Travando de um sinal de relógio por palavra                      | **Relógio de Palavra**                                                                 |
| Bloqueio da rede Dante                                           | **Atenciosamente**                                                                     |
| Combinando a taxa de amostragem do DAW conectado automaticamente | **Adaptar para** → **Thunderbolt 3** (ou entrada digital relevante) |

3. Defina a **taxa de amostragem** para coincidir com sua sessão — normalmente **48 kHz** para transmissão ou pós-produção, **44.1 kHz** para música.
4. Se usando entrada de relógio por palavra, defina **Terminação de sincronização** para **75 ¡**.

**Resultado esperado:** A taxa de amostragem mostrada na aba **Conf** corresponde à sua taxa pretendida. Se **Adaptar Para** estiver definido como uma fonte externa, as atualizações da taxa exibida automaticamente para coincidir com a taxa externa detectada.

_[Placeholder: captura de tela — Aba de contexto mostrando taxa de fonte e amostra configurada]_

> **DICA:** Se o seu AX Center é o único dispositivo digital em seu sistema, defina **Fonte** para **Interna** e selecione sua taxa de amostra manualmente. Isso lhe dá controle total sem dependência de um relógio externo.

Referência completa: [Capítulo 7, Seção 7.3 - Relógio e Sincronização]

---

### Passo 5 — Etiqueta e configuração analógica de entradas

1. Clique na aba **AD**.
2. Para cada canal de entrada ativa:
   - Clique no campo **rótulo do canal** e digite um nome (ex: `Kick`, `OH L`, `Room`).
   - Selecione o tipo de entrada: **MIC** ou **LINE**.
   - Para microfones condensadores: habilite a potência de **+48V**. Não ative a energia fantasma nos microfones de fita, a menos que o fabricante confirme a compatibilidade.
   - Define o controle deslizante de **ganho MIC** para um nível de início conservador. Ajuste para cima durante a verificação do som.
   - Habilitar **Ö** (fase invertida) se necessário.

**Resultado esperado:** O **Sinal** LED (verde) ilumina quando o áudio está presente acima − 42 dBFS. O **Clip** LED não deve iluminar durante os níveis normais de sinal.

_[Placeholder: captura de tela — Aba AD com dois canais de microfone configurado, Luz de sinal litro]_

> **DICA:** Com um canal selecionado, use as teclas de seta **├/econtr** para ajustar o ganho em incrementos 0.1 dB. Adicione **Shift** para uma resolução ainda melhor. Isto é mais preciso do que arrastar o mouse (0,5 dB steps).

Referência completa: [Capítulo 7, Seção 7.4 — Ganha e Gerenciamento de Nível]

---

### Passo 6 - Route Inputs para Saídas

1. Clique na aba **Con**.
2. A grade de roteamento exibe **entradas como linhas** na esquerda e **saídas como colunas** no topo.
3. Clique no ponto de cruzamento na interseção de uma coluna de entrada e saída para conectá-los. Um **quadrado azul cheio** confirma a conexão.

| Acão                                   | Atalho                                       |
| -------------------------------------- | -------------------------------------------- |
| Conectar um canal                      | Clique único                                 |
| Conectar um par de estéreo             | **Shift** + clique no primeiro canal         |
| Conectar diagonal I/O com mesmo número | **Ctrl/Cmd** + clique                        |
| Desconectar                            | Clique novamente no quadrado azul preenchido |

**Resultado esperado:** Quadrados azuis aparecem em cada crosspoint conectado. O cabeçalho da coluna de saída mostra um indicador azul confirmando que a saída é corrigida.

_[Colocador: captura de tela — Aba de cubo com pontos de cruzamento conectados, mostrando visão geral e matriz de detalhes]_

> **NOTA:** O número de entradas e saídas mostradas na matriz reflete a configuração do hardware e a taxa de amostra atual. Em taxas de amostragem mais altas, alguns formatos (MADI, ADAT) transportam menos canais — a matriz se ajusta automaticamente.

Referência completa: [Capítulo 7, Seção 7.2 — Configuração de I/O e atualização]

---

### Passo 7 - Definir níveis de saída

1. Clique na aba **DA**.
2. Defina o **aderente nível de saída** para cada canal de saída ativo para coincidir com a especificação de entrada do equipamento a jusante.

O valor de aderência é o **nível de saída analógico no dBu que corresponde a 0 dBFS digital em escala completa** — não é um controle de volume. Configurações comuns:

| Equipamento a jusante                                                    | Configuração de nível de saída típico |
| ------------------------------------------------------------------------ | ------------------------------------- |
| Amplificadores de poder profissional (+4 dBu nominal) | **+18 dBu**                           |
| Transmitir equipamento (EBU Alinhamento R68)          | **+18 dBu**                           |
| Equipamento Semi-pro / prosumer (-10 dBV nominal)     | **+4 a +8 dBu**                       |

> **ATENÇÃO:** Definir o nível de saída mais alto do que a entrada máxima do seu equipamento a jusante irá cortar esse equipamento mesmo quando o sinal DADman não mostrar sobreposição. Sempre verifique se o nível de saída não excede a especificação máxima de entrada do dispositivo a jusante.

_[Placeholder: captura de tela — aba DA com faders de nível de saída definidos]_

Referência completa: [Capítulo 7, Seção 7.4 — Ganha e Gerenciamento de Nível]

---

### Passo 8 - Verifique o áudio - fim

Com sinal presente nas entradas, confirme o áudio flui através do sistema:

1. **Aba AD:** Iluminar LEDs de sinal (verde) em entradas ativas.
2. **Aba cina:** Indicadores de status de entrada no lado esquerdo da matriz de detalhes mostram verde (sinal válido). O amarelo indica uma incompatibilidade de sincronização/relógio — retornar ao Passo 4.
3. **aba DA:** LEDs sinais iluminam as saídas ativas.
4. **No destino:** Áudio é audível ou mensurável no seu sistema de alto-falantes, gravadores ou medições.

**Se os LEDs de sinal estiverem verdes, mas nenhum áudio atingir a saída:**

- Verifique os crosspoints de roteamento no separador **Con**.
- Confirme que **Mudo** não está envolvido no canal AD ou DA relevante.
- Verifique se o ajuste de relógio **Fonte** na aba **Conf** está correto — um status amarelo na matriz Con sinaliza um problema de relógio.

**Se o LED do Clip iluminar:**

- Reduza o **ganho MIC** na aba **AD**.
- Se o equipamento a jusante estiver sendo cortado, reduza o fader do nível de saída na aba **DA**.

---

### Passo 9 — Carregar ou Criar um Perfil de Monitor

Se você está usando o controlador de monitor de DADman (PRO\├MON), você precisa de um Perfil de Monitor antes que a guia **Mon** exiba controles ativos.

**Para carregar um perfil existente:**

1. **Arquivo > Abrir Perfil…** (macOS: **⌘O** / Windows: **Ctrl+Alt+O**)
2. Selecione o seu arquivo `.dmprof`.

**Para criar um novo perfil:**

1. **Configurações > Perfil de Monitor** para abrir o editor.
2. Clique direito **Fontes** → **Adicionar Nova Fonte** → Atribuir entradas de seu roteamento.
3. Clique direito em **Saídas** → **Adicionar novo conjunto de saída** → atribuir saídas analógicas para cada alto-falante.
4. **Arquivo > Salvar Perfil Como…** (macOS: **thanking ⌘⌘S** / Windows: **Ctrl+Alt+Shift+S**)

**Resultado esperado:** A aba **Mon** mostra o seletor de origem, botões de saída do pregador, fader de nível principal e **Ref**, **Dim** e controles **Corte**.

_[Placeholder: captura de tela — Aba Mon com um perfil de monitor carregado]_

Referência completa: [Capítulo 8, Seção 8.1 — Monitorar perfis]

---

### Passo 10 - Defina um nível de referência (opcional)

Se sua sala foi calibrada acousticamente:

1. Usando tons de teste e um medidor de SPL calibrado, defina o fader de nível principal na guia **Mon** para seu alvo SPL de referência (85 dB SPL é padrão para a maioria dos ambientes de transmissão e pós-produção).
2. Em **Configurações > Perfil de Monitor**, grave este nível como o **Nível de Referência** para o auto-falante ativo.
3. Durante as sessões, pressione **Ref** na aba **Mon** para retornar instantaneamente ao nível calibrado.

> **DICA:** Múltiplos conjuntos de saída de alto-falantes podem compartilhar as mesmas saídas físicas, mas têm offsets de corte diferentes — criando denominado "85 dB SPL" e "75 dB SPL" onde você pode alternar entre eles sem recalibrar.

---

### Passo 11 - Salvar a configuração

> **ATENÇÃO:** As configurações da unidade estão armazenadas no hardware. Uma atualização de reset de fábrica ou de firmware irá apagá-los. O arquivo `.dms` no seu computador é o único backup.

1. **Arquivo > Salvar Como…** (macOS: **⌘⌘S** / Windows: **Ctrl+Shift+S**)
2. Use um nome de arquivo descritivo: `StudioA_AXCenter_2026-06.dms`
3. Salvar em um local que é salvo regularmente.

Se você tiver um Perfil de Monitor, salve-o separadamente:
**Arquivo > Salvar Perfil Como…** (macOS: **➲ ⌘S** / Windows: **Ctrl+Alt+Shift+S**)

> **DICA:** Ativa o **Abrir último arquivo na inicialização** em **DADman > Preferências** (macOS) ou **Configurações > Opções** (Windows) para restaurar esta configuração automaticamente em cada inicialização. Recomendado para instalações permanentes.

---

### Passo 12 - Confirmar Recarregamento

1. Feche o DADman.
2. Reabra DADman.
3. Confirme a recarga de configurações corretamente — todos os roteamentos, configurações de ganho e rótulos de canal devem ser restaurados exatamente como salvo.

**Resultado esperado:** Unidades que são atualizadas online imediatamente quando o arquivo `.dms` carrega. A guia Mon mostra seu perfil de monitor salvo se "Abrir último arquivo na inicialização" for ativado para perfis também.

---

## Instalação concluída

Agora você tem um sistema DADman funcional com:

- Unidades encontradas, conectadas e nomeadas
- Fonte e amostra do relógio confirmadas
- Entradas rotuladas, obtidas e corrigidas para saídas
- Níveis de saída alinhados ao equipamento a jusante
- Áudio verificado ponta a ponta
- Configuração salva e recarregada verificada

---

## Referência do teclado e mouse

### Modificador de Slider

Todos os ganhos, níveis e deslizantes de controle deslizante no DADman suportam as seguintes chaves modificador:

| Modifier                                                                                       | Efeito                                                                         |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Arraste** (sem modificador)                                               | Resolução normal — aproximadamente 0.5 dB por pixel            |
| **Shift + arraste**                                                                            | Maior precisão — aproximadamente 0,1 dB por pixel                              |
| **(ExplicitText="/ ├setas do teclado** (focado do litro) | 0.1 dB passos                                                  |
| **SHIFT+/&nbsp**                                                           | Etapas finas (0.01 dB)                      |
| **Ctrl** (Windows) / **Cmd** (macOS) **+ clique**        | Redefinir ao valor padrão                                                      |
| **Alt** (Windows) / **Opção** (macOS)                    | Apenas por canal — ignora o Mic Gain Group, ajusta o canal selecionado sozinho |
| **Alto/Opção + Shift**                                                                         | Ajuste fino por canal                                                          |

### Atalhos do teclado

| Acão                                                                | macOS     | Janelas          |
| ------------------------------------------------------------------- | --------- | ---------------- |
| **Arquivo**                                                         |           |                  |
| Abrir arquivo de configurações                                      | ⌘O        | Ctrl+O           |
| Salvar arquivo de configurações                                     | ⌘S        | Ctrl+S           |
| Salvar arquivo de configurações como…                               | redondo S | Ctrl+Shift+S     |
| Abrir perfil de monitor                                             | ⌘O        | Ctrl+Alt+O       |
| Importar perfil do Monitor                                          | ⌘I        | Ctrl+Alt+I       |
| Salvar perfil de monitor                                            | ⌘S        | Ctrl+Alt+S       |
| Salvar perfil de monitor como…                                      | ➜ 7$ S    | Ctrl+Alt+Shift+S |
| Fechar perfil de monitor                                            | ⌘W        | Ctrl+Alt+W       |
| **Visualizar**                                                      |           |                  |
| Mostrar janela principal (do modo barra de menu) | ⌘⇧1       | —                |
| Abrir Lista de Dispositivos                                         | redondo L | Ctrl+Shift+L     |
| Abrir o editor de perfis                                            | redondo M | Ctrl+Shift+M     |
| Abrir Preferências / Opções                                         | ⌘,        | Ctrl+,           |

### Atalhos em Matriz de roteamento

| Acão                                                  | Método                                                                  |
| ----------------------------------------------------- | ----------------------------------------------------------------------- |
| Conectar um ponto cruzado                             | Clique no cruzamento                                                    |
| Conectar um par de estéreo simultaneamente            | Shift + clique no primeiro canal                                        |
| Conectar o mesmo número de entrada →diagonal de saída | Ctrl/Cmd + clique                                                       |
| Desconectar                                           | Clique no crosspoint ativo (azul)                    |
| Rolar a vista matriz                                  | Rolar a roda / trackpad (não roda a janela completa) |

### Ferramenta de diagnóstico

**Menu do DADman > Sobre o DADman > Copiar Informações** _(v5.7.2 e depois)_

Copia a versão do DADman, a lista de dispositivos conectados, a versão do sistema operacional e versões do driver para a área de transferência. Inclua isto em qualquer solicitação de suporte ao DAD.

---

## Próximos passos

| Para…                                                                                                                    | Ver…                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Configurar as configurações de porta MADI, Dante ou AES3 em profundidade                                                 | Cara. 7, Seção 7.3 - Conf Tab                              |
| Trabalhe com a matriz de roteamento completa                                                                             | Cara. 7, Seção 7.2 — Configuração de E/S e atualização     |
| Configurar monitoramento imersivo (5.1, 7.1.4, Atmos) | Cara. 8, Seção 8.1 - Monitorar perfis                      |
| Configurar predefinições de roteamento com falha automatizada de sinal                                                   | Cara. 8, Seção 8,4 - Controle \「Pacote                                     |
| Ganhos de microfone em grupo para tambores, orquestrais ou multirítmicos                                                 | Cara. 8, Seção 8.2 — Grupos de Ganho do Microfone          |
| Conecte o DADman a uma superfície de Avid EuControl                                                                      | Cara. 8, Seção 8.5 - Integração EuCon                      |
| Diagnóstico de uma conexão ou problema de áudio                                                                          | Cara. 9 — Solução de problemas                                             |
| Atualize o firmware do DADman ou hardware                                                                                | Cara. 10, Seção 10.1 — Atualizando o Software e o Firmware |

---

_[Pendente: capturas de tela para passos 1, 2, 4, 5, 6, 7, 9 — todas requerem um AX Center conectado ao DADman v5.8.2]_
