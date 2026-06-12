---
title: "Capítulo 9 — Solução de problemas"
sidebar_label: "Cara. 9 — Solução de problemas"
sidebar_position: 11
---

# Capítulo 9 — Solução de problemas

> **Documento:** Usuário do DADman Manual  
> **Versão do software coberta:** DADman v5.8.2 build 2  
> **Estado do capítulo:** Projecto v0. — Acesso ao arquivo de log documentado (9.1–9,9. ); catálogo de mensagens de erro e tabelas do estado LED ainda pendentes de engenharia DAD  
> **Última atualização:** Junho de 2026

---

## Como usar este Capítulo

Encontre a seção que corresponde à categoria de seu problema e localize o sintoma que descreve mais de perto o que você está experimentando. Cada linha dá a causa e reparação prováveis. Nos casos em que o remédio implica um procedimento a várias etapas, é dada uma referência cruzada em vez de repetir aqui os passos.

**Antes de entrar em contato com o suporte**, obtenha informações de diagnóstico usando:  
**Menu do DADman > Sobre o DADman > Copiar Informações** _(v5.7. e mais tarde)_  
Esta copia a versão DADman, a versão do dispositivo conectado e a versão do driver Thunderbolt para a área de transferência. Incluir isto em qualquer solicitação de suporte.

| Turma               | categoria                           |
| ------------------- | ----------------------------------- |
| 9.1 | Conectividade de rede e dispositivo |
| 9.2 | Problemas de Áudio                  |
| 9.3 | Software e Inicialização            |
| 9.4 | Trovoadas e motorista               |
| 9.5 | Relógio e sincronização             |
| 9.6 | Controle de Monitoramento           |
| 9.7 | Reiniciar Procedimentos             |
| 9.8 | Problemas conhecidos pela versão    |
| 9.9 | Obtendo suporte                     |

---

## 9.1 Rede e Conectividade do Dispositivo

_Categoria mais comum para novas instalações e após mudanças de rede ou hardware._

| Soprador                                                                     | Causa provável                                                                                                                          | Remeto                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nenhuma unidade aparece na lista de dispositivos após o lançamento do DADman | Unidade não alimentada em                                                                                                               | Ligue a unidade; confirme o painel frontal **Pronto** LED é verde sólido                                                                                                                                                                                                                                                       |
|                                                                              | Unidade não na mesma rede Ethernet                                                                                                      | Conecte a unidade e o computador ao mesmo interruptor ou através de cabo direto; confirme se o cabo é Cat5e ou Cat6                                                                                                                                                                                                            |
|                                                                              | Unidade e computador em subredes diferentes                                                                                             | Defina a interface de rede de computador para a mesma sub-rede que a unidade (por exemplo, ambos `192.168.1.x`). Verificar o IP da unidade através do painel frontal                                                                                                                        |
|                                                                              | Problema de descoberta do SO (v15): MacOS Sequoia (v15): Problema | Saia da conta do usuário do macOS e entre novamente. Conexões com Thunderbolt não são afectadas. Veja [Seção 9.3] e [Ch. 3, Seção 3.7] |
|                                                                              | Windows: firewall bloqueando DADman                                                                                     | Adicionar uma exceção de firewall para DADman. Com BitDefender, atualize para v5.7.2 ou mais tarde                                                                                                                                                                             |
| Unidade aparece na Lista de Dispositivos mas mostra como desconectada        | Cabo Ethernet desconectado ou com defeito                                                                                               | Verificar o cabo em ambos os lados; substituir se danificado                                                                                                                                                                                                                                                                   |
|                                                                              | Reinicialização de unidade (por exemplo, após atualização de firmware)                                               | Espere até 60 segundos; confirme O LED Pronto é sólido verde                                                                                                                                                                                                                                                                   |
|                                                                              | Conflito de endereço IP — dois dispositivos que compartilham o mesmo IP                                                                 | Verificar todos os dispositivos de rede para IPs duplicados; atribua IPs estáticos únicos                                                                                                                                                                                                                                      |
| Unidade conectada, depois desapareceu                                        | Interrupção da rede                                                                                                                     | Verifique o interruptor, o cabo e a porta. DADman tenta continuamente _(v5.7.0+)_ — a unidade reaparece automaticamente quando a conexão é restaurada                                                                                                       |
| Apenas algumas unidades aparecem (sistema multi-unidade)  | Incompatibilidade de máscara de sub-rede                                                                                                | Confirme todas as unidades e o computador compartilham a mesma máscara de sub-rede (por exemplo, `255.255.255.0`)                                                                                                                                                                                           |
|                                                                              | Endereço IP duplicado                                                                                                                   | Conecte-se e configure uma unidade por vez; atribua IPs únicos                                                                                                                                                                                                                                                                 |
| A unidade visível, mas as configurações diferem do esperado                  | Arquivo `.dms` aplicado na inicialização com configurações diferentes                                                                   | Se "Abrir último arquivo na inicialização" estiver ativado, o DADman aplica o arquivo salvo às unidades ao iniciar. Verifique **Arquivo > Abrir** para confirmar qual arquivo está carregado                                                                                                                   |

---

## 9.2 Problemas de Áudio

| Soprador                                                      | Causa provável                                                                                                 | Remeto                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nenhum áudio na saída analógica                               | Entrada não roteada para saída                                                                                 | Abrir a aba **Con**; verifique se existe um ponto de cruzamento azul entre a entrada e a saída requerida                                                                                                                                                                                               |
|                                                               | Canal de saída silenciado                                                                                      | Verifique a guia **DA**; confirme **Mudo** não está engajado                                                                                                                                                                                                                                           |
|                                                               | Canal de entrada silenciado                                                                                    | Verifique a guia **AD**; confirme **Mudo** não está engajado                                                                                                                                                                                                                                           |
|                                                               | Nível de saída com pelo menos                                                                                  | Aumente o fader de saída DA para uma configuração apropriada para o equipamento a jusante                                                                                                                                                                                                              |
|                                                               | Incompatibilidade do relógio causando silêncio                                                                 | Na aba **Con**: indicador de estado amarelo em uma linha de entrada = perda de sincronização. Vá para a guia **Conf** e verifique a Fonte e a Taxa de Amostragem. Veja [Seção 9.5] |
| Áudio diferenciado a níveis altos de sinal                    | Nível de saída definido muito alto para equipamento a jusante                                                  | Na guia **DA**, reduz o fader no nível de saída. Exemplo: +24 dBu saída em um máximo de dispositivo de entrada +18 dBu faz o equipamento a jusante em aproximadamente -6 dBFS                                                                                          |
| Sinal de LED não iluminado apesar do sinal conhecido          | Entrada ganho muito baixo para exceder o limite de 42 dBFS                                                     | Aumenta o **ganho de MIC** na aba **AD**                                                                                                                                                                                                                                                               |
|                                                               | Tipo de entrada errado selecionado                                                                             | Verifique o MIC ou LINHA selecionada corretamente                                                                                                                                                                                                                                                      |
|                                                               | Cabo de origem com defeito ou desconectado                                                                     | Verificar conexões físicas                                                                                                                                                                                                                                                                             |
| Iluminação do LED do clipe durante níveis normais             | Ganho de entrada muito alto                                                                                    | Reduzir ganho do MIC na aba **AD**                                                                                                                                                                                                                                                                     |
|                                                               | Clipping de equipamento a jusante                                                                              | Reduza o nível de saída DA — veja "Áudio distorado" acima                                                                                                                                                                                                                                              |
| Cliques ou pop-ups em áudio                                   | Taxa de amostragem ou incompatibilidade de relógio                                                             | Veja [Seção 9.5 — Relógio e Sincronização]                                                                                                                                                                                         |
|                                                               | Tamanho de buffer muito pequeno (Thunderbolt)                                               | Aumentar tamanho do buffer ASIA; veja [Seção 9.4]                                                                                                                                                                                  |
| Apenas um canal de um par estéreo carrega áudio               | Link estéreo não ativado                                                                                       | Ativa o link Mono/Estéreo na guia **AD** ou **DA** para o par de canais                                                                                                                                                                                                                                |
|                                                               | Apenas um ponto cruzado conectado                                                                              | Na guia **Con**, **Shift + clique** para conectar os dois canais do par simultaneamente                                                                                                                                                                                                                |
| Entradas AX Center analógicas não passando áudio              | Erro de tempo ADC no firmware antes v1.1.0.4                   | Atualize o firmware do AX Center para v1.1.0.4 ou posterior _(hotfix de janeiro de 2025)_                                                                                                                                           |
| Erro na fase AX Center / Trovão\├Core do canal de cartão DA 8 | Erro no firmware antes da v1.0.6.3                             | Atualizar o firmware Thunder\├Core para v1.0.6.3 ou posterior _(Setembro de 2024)_                                                                                                                                                  |
| ADAT canal 3 não está funcionando em 88,2 ou 96 kHz           | Erro no firmware antes da v1.0.6.3                             | Atualizar o Thunder\├Core para v1.0.6.3 ou posterior                                                                                                                                                                                                   |
| Atraso não aplicado em canais acima de 16                     | Erro no firmware antes da v1.0.6.3                             | Atualizar o Thunder\├Core para v1.0.6.3 ou posterior                                                                                                                                                                                                   |
| Canais 3G SDI não habilitado após o power-up                  | Erro de tempo no firmware da Família 1 antes da versão 2.3.6.1 | Atualização AX32 / DX32R / Penta firmware para v2.3.6.1 ou posterior _(Dezembro de 2022)_                                                                                                                                           |

---

## 9.3 Software e Inicialização

| Soprador                                                                                                              | Causa provável                                                                                                                                                | Remeto                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman não inicia no Windows                                                                                          | Faltando `VCRUNTIME140_1.DLL`                                                                                                                                 | Atualizar para DADman v5.7.2 ou posterior                                                                                                                                                                                                                                              |
|                                                                                                                       | Instalação incompleta                                                                                                                                         | Desinstalar, reiniciar, reinstalar do [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                                   |
| macOS Sequoia: DADman não pode se conectar a unidades na rede no lançamento                           | Problema de descoberta de dispositivos com nível macOS 15                                                                                                     | **Workaround:** Saia (**Apple menu > Sair**), e então entre novamente. Conexões com Thunderbolt não são afectadas. _(Conhecido problema aberto a partir da v5.8.2; correção no desenvolvimento)_ |
| DADman falha ao clicar duas vezes em um arquivo `.dms` no Finder (macOS)                           | Erro antes da v5.8.0                                                                                                          | Atualize para DADman v5.8.0 ou posterior                                                                                                                                                                                                                                               |
| Monitorar o arquivo de perfil fica corrompido após cancelar uma carga                                                 | Erro antes da v5.8.0                                                                                                          | Atualize para DADman v5.8.0 ou mais tarde; restaure a partir de um arquivo de backup `.dmprof`                                                                                                                                                                                         |
| Janelas: Falha MIDI no DADman                                                                         | Erro antes da v5.8.1                                                                                                          | Atualize para a compilação DADman v5.8.1 6 ou posterior                                                                                                                                                                                                                                |
| macOS: Exibir artefatos de escala (linhas finas ao rolar)                          | Erro antes da v5.8.0 em telas dimensionadas                                                                                   | Atualize para DADman v5.8.0 ou posterior                                                                                                                                                                                                                                               |
| DADman não salvando arquivos no macOS logout ou desligamento                                                          | Erro antes da v5.7.0 (geral); antes da v5.8.0 no modo Apenas Barra de Menu | Atualizar para DADman v5.8.0 ou mais tarde; ative o **Sempre salvar arquivo** nas Preferências                                                                                                                                                                                         |
| macOS: DADman não se tornará mais importante a partir do ícone de bandeja (Sonoma) | Erro antes da v5.8.0                                                                                                          | Atualize para DADman v5.8.0 ou posterior                                                                                                                                                                                                                                               |
| Windows: Firewall BitDefender causando bloqueio do dispositivo                                        | Conhecer o conflito antes da v5.7.2                                                                                           | Atualizar para DADman v5.7.2 ou posterior                                                                                                                                                                                                                                              |
| Corrupção de dados ocultos com matrizes > 1024 elementos                                                              | Bug antes da v5.7.0                                                                                                           | Atualizar para DADman v5.7.0 ou posterior                                                                                                                                                                                                                                              |

---

## 9.4 Thunderbolt e Driver

_Aplica-se apenas a AX64, Centro AX, Núcleo 256. Skip for Ethernet-only hardware._

| Soprador                                                                               | Causa provável                                                                     | Remeto                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unidade não aparecendo na instalação do macOS Audio MIDI                               | Extensão do sistema não permitida                                                  | Abra **Configuração do Sistema> Privacidade e Segurança**; permita a extensão da Dinamarca de Áudio Digital / Tecnologia NTP A/S; reinicie                                                                                                                                                                            |
|                                                                                        | macOS Sequoia: segurança acessória reforçada                       | Defina **Sistema de Configurações > Privacidade e Segurança > Acessórios** para **Permitir automaticamente** ou **Sempre Permitir**. Veja [Ch. 3, Seção 3.7]                                                      |
|                                                                                        | Driver não instalado                                                               | Instalar o driver DAD Thunderbolt 3 de [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                                 |
|                                                                                        | Versão antiga do driver conflitando com a atualização do macOS                     | Remova o antigo `DADDriverSetup.app` (arraste para o Trash; aprove a remoção), e então reinstale o último driver                                                                                                                                                                                   |
| O dispositivo aparece na instalação de MIDI de áudio sem canais                        | Taxa de amostragem ou contagem de canais incompatível                              | Abra **DADDriverSetup** e verifique a Taxa de Amostra e as configurações de Canais correspondem ao formato esperado da sua DAW                                                                                                                                                                                        |
| Windows ASIO: **Críticas perdidas** contra zero                        | Contenção de interrupção do sistema                                                | Aumentar tamanho do Buffer ASIO (512 ou 1024 amostras); fechar aplicativos de segundo plano desnecessários; desabilitar Wi-Fi                                                                                                                                                                      |
| Windows ASIO: Alta **PCIe Load**                                       | Muitos canais configurados                                                         | Reduzir configuração de canais na configuração do driver ASIO                                                                                                                                                                                                                                                         |
| ASIO: Alta **Latência DPC**                                            | Windows agendando atrasos de motoristas de terceiros                               | Use um analisador de Latência em DPC para identificar o motorista envolvente. Causas comuns: adaptadores sem fios, gestão de energia USB, antivírus. Ativar plano de energia de alto desempenho                                                                       |
| macOS: DADman não pode se comunicar com a unidade sobre o Thunderbolt  | Problema de pilha de comunicação Thunderbolt                                       | Atualize o driver DAD Thunderbolt 3 para a versão 1.2.2 ou posterior **e** atualize o Thunder\├Core para a versão 1.1.0.3 ou posterior. Ambas as atualizações são necessárias _(Dezembro de 2024)_ |
| dropouts de áudio sobre Thunderbolt                                                    | Cabo de Trovão abaixo de 20 Gbps                                                   | Substitua o cabo por um cabo certificado de Thunderbolt 3 classificado como mínimo de 20 Gbps                                                                                                                                                                                                                         |
| Janelas: driver ASIO não visível no aplicativo de áudio                | Driver não instalado                                                               | Instale o driver DAD Thunderbolt 3 ASIO — é um instalador separado do DADman                                                                                                                                                                                                                                          |
| AX Center Dante Card: sincronização externa Dante não está funcionando | Erro no firmware antes da v1.1.0.4 | Atualize o firmware do AX Center para v1.1.0.4 ou posterior _(Janeiro de 2025)_                                                                                                                                                                    |

---

## 9.5 Relógio e Sincronização

| Soprador                                                                  | Causa provável                                                                | Remeto                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Indicador de estado amarelo em uma linha de entrada da aba Con            | Sincronizar perda ou taxa de amostragem incompatível com essa entrada digital | Verifique se a taxa de amostra do dispositivo de origem corresponde à unidade DAD. Na guia **Conf**, confirme a Fonte e a Taxa de Amostra estão corretas. Se essa entrada deve ser o mestre do relógio, defina **Fonte** para essa entrada (por exemplo, MADI Coax, Dante, Word Clock) |
| Cliques e aparece em todo o áudio                                         | Unidade não trancada para um relógio estável                                  | Na guia **Conf**, a fonte de verificação está definida corretamente e a fonte selecionada está ativa e estável                                                                                                                                                                                                                            |
|                                                                           | Rede sobrecarregada afetando a estabilidade do relógio Dante                  | Coloque o tráfego de controle do DADman e o áudio Dante em redes dedicadas separadas                                                                                                                                                                                                                                                      |
| Entrada de relógio de palavra não irá bloquear                            | Sincronização terminada incorreta                                             | Coloca **Terminação de sincronização** para **75 anos** na aba **Conf**                                                                                                                                                                                                                                                                   |
|                                                                           | Cabo de relógio de palavra muito longo ou de má qualidade                     | Use 75 container coaxial; comprimento máximo de confiabilidade é de aproximadamente 30 m                                                                                                                                                                                                                                                  |
| Entrada MADI mostra o status amarelo mas a taxa de amostra parece correta | Incompatibilidade da taxa de quadros MADI                                     | Na guia **Conf**, verifique a **taxa de quadro** (Legado vs. Alta Velocidade) corresponde ao dispositivo de envio. Ambas as extremidades de um link MADI devem usar o mesmo ajuste de Taxa de Frame                                                                                    |
| "Adaptar Para" não seguindo mudanças na taxa de amostra DAW               | Adaptar para definir a entrada errada                                         | Define o **Adaptar Para** para a entrada digital conectada ao DAW (por exemplo, **Thunderbolt 3**)                                                                                                                                                                                                                     |
|                                                                           | DAW not update Core Audio / ASIO rate do dispositivo de amostra               | Feche e abra novamente as configurações do dispositivo de áudio do DAW para forçar uma atualização                                                                                                                                                                                                                                        |

---

## 9.6 Controle de Monitor

| Soprador                                                                                                  | Causa provável                                                            | Remeto                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aba da moda não mostra controles                                                                          | Nenhum perfil de monitor carregado                                        | Carregue um arquivo `.dmprof` via **Arquivo > Abrir Perfil…** ou crie um novo perfil em **Configurações > Perfil de Monitor**                                                                                                                                                                                                |
| Página de monitoramento em branco na superfície Avid Control ou Avid                                      | DADman não ligado ao EuControl                                            | Na EuControl **Atribuir** aba, com DADman em primeiro plano, habilite a atribuição de monitoramento por DADman. Confirme **Ativar EuCon** está marcado no menu **Configurações** do DADman                                                                                                                   |
| EuCon: Nível da sala de controle não reativado após a alternância no Ref                  | Erro antes da v5.8.2                      | Atualize para compilação do DADman v5.8.2 ou posterior                                                                                                                                                                                                                                       |
| macOS: O menu Talkback mostra um valor incorreto na caixa de diálogo de perfil do Monitor | Erro antes da v5.8.2                      | Atualize para compilação do DADman v5.8.2 ou posterior                                                                                                                                                                                                                                       |
| Headphone não está seguindo seleção de sala de controle                                                   | Modo de Monitorar para fones de ouvido definido como Cue em vez de Master | Em **Configurações> Perfis de Monitoramento**, defina o modo de monitoramento de saída do fone de ouvido para **Mestre**; defina os alto-falantes de sala de controle para o modo **Cue**. Veja [Ch. Seção 8, Turma 8.2] |
| Botão Ref não tem efeito                                                                                  | Nenhum nível de referência definido no perfil Monitor                     | Em **Configurações > Perfil de Monitor**, digite o valor calibrado do nível de referência para o conjunto de saída ativo                                                                                                                                                                                                     |
| Monitorar perfil corrompido na próxima vez após carga cancelada                                           | Erro antes da v5.8.0                      | Atualize para DADman v5.8.0 ou mais tarde; restaure do backup `.dmprof`                                                                                                                                                                                                                      |

---

## Procedimentos de reinicialização 9.7

Tentativa de reinicialização na ordem listada — mais leve primeiro.

### Arquivo de Configuração de Recarregamento 9.7.1

Restaura as configurações salvas sem afetar o hardware:

1. Vá para **Arquivo > Abrir…** e selecione o arquivo mais recente `.dms`.
2. Confirmar a atualização de todos os parâmetros na janela do DADman.

### 9.7.2 - Restauração de fábrica via DADman

> **ATENÇÃO:** Apaga todas as configurações armazenadas na unidade de hardware. Salve um arquivo `.dms` primeiro.

1. Na lista de dispositivos, clique com o botão direito do mouse na unidade (ou use o botão de ação no macOS).
2. Selecione **Redefinição de Fábrica** e confirme quando solicitado.
3. Após a reinicialização da unidade (até 60 segundos), recarregue o arquivo `.dms` via **File > Open…**.

### Redefinição IP do Painel Frontal 9.7.3

Se o endereço IP da unidade é desconhecido ou mal configurado e você não pode se conectar via DADman:

- O botão **Reconfig** (acessado através de um pequeno buraco no painel traseiro com uma caneta ou objeto ponto) redefine a unidade para o endereço IP padrão de sua fábrica quando pressionado durante a ligação.
- IP padrão de fábrica para a maioria do hardware DA: `10.0.7.20` — confirme no seu guia de instalação de hardware.
- Após a reconfiguração, reconecte via DADman e reconfigure via Lista de Dispositivos **> Configurações de rede**.

### 9.7.4 - Ciclo de energia

Se a unidade não responde e não pode ser redefinida através de DADman:

1. Na Lista de Dispositivos do DADman: clique direito na unidade **> desconectar**.
2. Desligue a unidade de hardware no interruptor principal.
3. Espere 10 segundos.
4. Eleve a unidade de volta.
5. Espere até 60 segundos para o LED Pronto mostrar verde sólido.
6. A unidade reaparece automaticamente na Lista de Dispositivos

---

## 9.8 Problemas Conhecidos pela Versão

| Soprador                                                                                                      | Versões afetadas                                                                               | Corrigido em                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Windows: DADman falha ao iniciar (VCRUNTIME DLL faltando)                  | Antes da v5.7.2                                                | v5.7.2 (Setembro 2024)                                           |
| macOS: Clique duplo em .dms no Finder                                         | Antes da v5.8.0                                                | v5.8.0 (dezembro de 2024)                                        |
| Monitorar perfil corrompido após carga cancelada                                                              | Antes da v5.8.0                                                | v5.8.0 (dezembro de 2024)                                        |
| macOS: Exibir artefatos de escala                                                             | Antes da v5.8.0                                                | v5.8.0 (dezembro de 2024)                                        |
| macOS: DADman não se tornará o mais importante da bandeja (Sonoma)         | Antes da v5.8.0                                                | v5.8.0 (dezembro de 2024)                                        |
| macOS: Falha de comunicação do Thunderbolt Raro                                               | Antes da v5.8.0 + driver 1.2.2 | v5.8.0 + driver 1.2.2 (Dez 2024) |
| Janelas: Erro de MIDI                                                                         | Antes da v5.8.1                                                | v5.8.1 b6 (Maio de 2025)                                         |
| macOS: Problemas gráficos em telas dimensionadas com janelas grandes                          | Antes da v5.8.1                                                | v5.8.1 b6 (Maio de 2025)                                         |
| EuCon: Nível da sala de controle não reativado após a alternância no Ref                      | Antes da v5.8.2                                                | v5.8.2 b2 (Jan 2026)                                             |
| macOS: valor incorreto selecionado do menu Talkback                                           | Antes da v5.8.2                                                | v5.8.2 b2 (Jan 2026)                                             |
| Windows: Bloqueio do dispositivo de firewall BitDefender                                      | Antes da v5.7.2                                                | v5.7.2 (Setembro 2024)                                           |
| **Firmware:** AX Center ADC não está passando áudio (erro de temporização) | Antes do firmware v1.1.0.4                     | v1.1.0.4 (Jan 2025)                              |
| **Firmware:** Sincronização externa do Cartão AX Center Dante incorreta                       | Antes do firmware v1.1.0.4                     | v1.1.0.4 (Jan 2025)                              |
| **Firmware:** Erro no canal do cartão DA 8 fases                                              | Antes do firmware v1.0.6.3                     | v1.0.6.3 (Setembro 2024)                         |
| **Firmware:** Canal de ADAT 3 a 88,2/96 kHz                                                   | Antes do firmware v1.0.6.3                     | v1.0.6.3 (Setembro 2024)                         |
| **Firmware:** Atraso não aplicado nos canais > 16                                             | Antes do firmware v1.0.6.3                     | v1.0.6.3 (Setembro 2024)                         |
| **Firmware:** Canais 3G SDI não habilitam após o power-up                                     | Antes do firmware do Família 1 v2.3.6.1        | v2.3.6.1 (Dez 2022)                              |

**Abrir issue conhecida (como a compilação v5.8.2 2):**

| Soprador                                                                                                                             | SItuação                             | Solução                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| macOS Sequoia (v15): DADman não pode se conectar a dispositivos de rede na primeira inicialização | Aberto — correção no desenvolvimento | Saia e entre novamente na conta de usuário do macOS. Conexões com Thunderbolt não são afetadas |

---

## 9.9 Recebendo suporte

**DAD Support Portal**  
[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)  
Base de conhecimentos, downloads de firmware, boletins técnicos e fórum da comunidade.  
É necessária uma conta gratuita.

**Email**  
support@ntp.dk

**Quando contatar o suporte, incluir:**

1. **DADman > Sobre DADman > Copiar Informações** _(v5.7.2+)_
2. Versão do modelo de unidade de hardware e firmware (visível na Lista de Dispositivos)
3. Descrição do sintoma, quando ele começou, e o que mudou antes de ele aparecer
4. Todas as mensagens de erro exibidas na tela
5. Saída de registro Relevante (veja abaixo)

### 9.9.1 Acessando logs do DADman — macOS

DADman escreve entradas de log através do sistema de registro do macOS Unificado. Os registros não são armazenados como arquivos de texto simples; use os seguintes métodos para coletá-los.

**Console.app (método mais simples):**

1. Abra **Console.app** (Aplicações > Utilidades > Console).
2. No campo de busca, digite `DADman` e pressione Retorno.
3. Reproduza o problema. O console mostra entradas de log do DADman em tempo real.
4. Selecione as entradas relevantes, clique direito e escolha **Copiar** para colar em um ticket de suporte.

**Terminal (exportação de registros com prazo de tempo):**

```bash
log show --predicate 'process == "DADman"' --info --last 1h > ~/Desktop/dadman-log.txt
```

Ajuste `--last 1h` quando necessário (por exemplo, `--last 30m`, `--last 2h`). O arquivo resultante pode ser anexado a um ticket de suporte.

**Relatórios de erro:**  
Se DADman falhou, um relatório de falha foi escrito para:

```
~/Biblioteca/Logs/Relatórios de diagnóstico/
```

Procure por arquivos chamados `DADman_<date>_<hostname>.ips` ou `DADman_<date>.crash`. Estes também são visíveis no Console.app sob **Relatórios de Colisão**.

**TB3 Driver logs:**  
To collect Thunderbolt driver log entries:

```bash
show --predicate 'process == "DADThunderboltDriver" OU subsistema CONTAINS "ntp"' --info --last 1h > ~/Desktop/tb3-driver-log.txt
```

### Acessando Logs de DADman 9.2 - Windows

**Visualizador de Evento Windows:**

1. Abrir **Visualizador de Eventos** (Iniciar → pesquisar "Visualizador de Eventos").
2. Navegue até **Windows Logs > Aplicativo**.
3. Clique em **Filtrar Log Atual…** e digite `DADman` no campo **Fontes de Evento**.
4. Copie ou exporte as entradas filtradas para o suporte

**Pasta de dados de aplicativo:**  
DADman armazena configurações e pode armazenar arquivos de log em:

```
%AppData%\NTecnologia TP\DADman\
```

Abra este caminho no Windows Explorer (`Win + R` → cole o caminho → Enter) e inclua qualquer arquivo `.log` encontrado lá ao contatar o suporte.

> **NOTA:** Os caminhos exatos do arquivo de log acima foram verificados para instalações padrão. Se DADman foi instalado em um local não padrão ou executado em uma conta de usuário diferente, os caminhos podem ser diferentes. O suporte DAD pode fornecer orientações se essas localizações não contiverem os arquivos esperados.

---

_[Pendente de engenharia DAD:]_  
_— Catálogo de mensagens de erro (texto de alerta de tela → causa → remedy)_  
_— Tabelas de estado do painel frontal por modelo de hardware_
