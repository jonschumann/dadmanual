---
id: ch03-instalação
title: "Capítulo 3 - Instalação"
sidebar_label: "Cara. 3 — Instalação"
sidebar_position: 5
slug: /instalação
---

# Capítulo 3 - Instalação

> **Documento:** Usuário Manual do DADman  
> **Versão do software coberta:** DADman v5.8.1.  
> **Versão do driver TB3 coberta:** Última — veja o centro de download no suporte digitaláudio. om  
> **Status do Capítulo:** Rascunho v0.1 — Revisão técnica pendente pela engenharia DAD  
> **Última atualização:** Junho 2026

---

## Neste Capítulo

Este capítulo abrange tudo o que é necessário para instalar e configurar o DADman e o software driver associado no seu computador. Ele está organizado para instalação pela primeira vez; se você está atualizando uma instalação existente, veja [Capítulo 10, Seção 10.1 - Atualizando DADman e Firmware].

| Turma               | Capas                                                              | Relevante para                                                |
| ------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 3.1 | Resumo da instalação                                               | Todos os usuários                                             |
| 3.2 | Obtendo o software                                                 | Todos os usuários                                             |
| 3.3 | Instalando DADman                                                  | Todos os usuários                                             |
| 3.4 | Instalando o driver Thunderbolt 3                                  | Série MTRX AX64, Centro AX, Somente série Core 256, Avid MTRX |
| 3.5 | Configurando o driver Thunderbolt 3                                | Série MTRX AX64, Centro AX, Somente série Core 256, Avid MTRX |
| 3.6 | macOS Sequoia: configuração de segurança adicional | macOS 15 (Sequoia) e posterior             |
| 3.7 | Configurando a conexão de rede                                     | Todos os usuários da Ethernet                                 |
| 3.8 | Verificando a instalação                                           | Todos os usuários                                             |

---

## 3.1 Visão Geral da Instalação

### 3.1.1 Componentes do Software

DADman e o driver DAD Thunderbolt 3 são **dois aplicativos separados e independentes**. Se você precisa de ambos — ou apenas DADman — depende da forma como seu hardware se conecta ao computador.

| Componente                         | Objetivo                                                                                                                                                                   | Obrigatório para                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **DADman**                         | Configura e controla todos os equipamentos DAD, NTP e Ethernet conectados                                                                                                  | Todo hardware suportado                                   |
| **Motorista DAD do Thunderbolt 3** | Explica a interface Thunder\├Core como um dispositivo de áudio Core (macOS) ou ASIO (Windows) para DAW e uso de aplicativos de áudio | Apenas produtos MTRX AX64, Center, Núcleo 256 e Avid MTRX |

> **NOTA:** O driver Thunderbolt 3 fornece o áudio _transporte_ entre seu computador e o hardware — seu DAW vê ele como uma interface de áudio. O DADman fornece a camada _control_ — roteamento, ganho, monitoramento e configuração. Ambos podem ser instalados e executados no mesmo computador simultaneamente sem conflito.

Caso seu hardware se conecte ao computador somente por Ethernet (por exemplo, uma unidade AX32, DX32R, ou Penta), você precisará apenas de DADman.

### 3.1.2 Topologia de Conexão

DADman se comunica com todas as unidades conectadas através da rede do seu computador usando o protocolo Ethernet (IP), independente se essas unidades também se conectam via Thunderbolt 3. Veja [Seção 3.7 - Configurando a Conexão de rede] para orientação antes da instalação.

---

## 3.2 obtendo o Software

### 3.2.1 DAD e usuários de hardware NTP

Baixe o DADman e o driver Thunderbolt 3 do portal de suporte ao DAD:

**[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)**

É necessário acessar o Download Center de tecnologia de DAD / NTP gratuitamente. Se você não tem uma conta:

1. Navegue até o portal de suporte e selecione **Create account**.
2. Preencha o formulário de inscrição.
3. Depois de verificar o seu endereço de e-mail, faça login e navegue até **Baixar Centro**.
4. Localize a entrada DADman para o seu sistema operacional e baixe o instalador.
5. Se o seu hardware é um produto do Thunder\├Core (AX64, AX Center, ou Core 256), também baixe o driver Thunderbolt 3 para o seu sistema operacional.

> **NOTA:** Sempre verifique as notas de lançamento na Central de Downloads antes de instalar. Notas de lançamento documentam as versões testadas do SO, quaisquer problemas conhecidos com novos lançamentos do SO, e requisitos de compatibilidade de firmware para aquela versão do DADman.

### 3.2.2 Usuários de hardware avid

Se você estiver usando DADman com Avid MTRX, MTRX II ou MTRX Studio:

1. Faça login na sua **Conta Avid Master** em [https://avid.com](https://avid.com).
2. Navegue até seus downloads e localize a versão do DADman aprovada para seu Avid hardware.
3. Baixe o instalador a partir da sua conta na Avid.

> **NOTA:** Versões do DADman aprovadas pelo vidente podem ser diferentes da versão mais recente disponível no portal de suporte ao DAD. Sempre use a versão da Conta Avid Master para o hardware Avid para garantir a compatibilidade.

---

## 3.3 Instalando DADman

### 3.3.1 macOS

**Antes de começar:** Certifique-se de estar logado em uma conta com privilégios de Administrador. Encerrar qualquer app de áudio que possa estar em execução.

1. Localize o arquivo de instalação do DADman baixado (formato `.pkg`) e clique duas vezes para iniciar o instalador.
2. Leia o contrato de licença e clique em **Continuar** e, em seguida, em **Aceitar** para aceitar.
3. Click **Install**. Quando solicitado, insira sua senha de administrador e clique em **Instalar Software**.
4. Clique em **Fechar** quando a instalação for concluída.
5. Navegue até a pasta **Aplicações** e confirme que **DADman.app** está presente.

O DADman está instalado agora. Não o inicie ainda, se precisar instalar o driver Thunderbolt 3 — vá para [Seção 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

Se seu hardware se conectar somente à Ethernet, você poderá iniciar o DADman agora. Prosseguir para [Seção 3.7 — Configurando a conexão de rede](#37-configuring-the-network-connection).

### 3.3.2 Windows

**Antes de começar:** Certifique-se de estar logado em uma conta com privilégios de Administrador. Encerrar qualquer app de áudio que possa estar em execução.

1. Localize o arquivo de instalação do DADman baixado (formato `.exe` ou `.msi`) e clique duas vezes nele.
2. Se um prompt de Controle de Conta de Usuário aparecer, clique em **Sim** para permitir que o instalador execute.
3. Siga as instruções de instalação, clicando **Próximo** em cada passo.
4. Clique em **Instalar** para iniciar a instalação.
5. Clique em **Terminar** quando a instalação for concluída.
6. Confirme que o DADman aparece no seu menu Início.

Se o hardware se conectar somente à Ethernet, vá para [Seção 3.7](#37-configuring-the-network-connection). Se você precisa do driver do Thunderbolt 3, vá para [Seção 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

---

## 3.4 Instalando o driver Thunderbolt 3 (Somente produtos do Thunder├Core)

> **NOTA:** Esta seção se aplica somente se o seu hardware é AX64, AX Center, Core 256 ou produto de Avid MTRX. Se o hardware se conectar ao computador somente na Ethernet, pule para [Seção 3.7](#37-configuring-the-network-connection).

O driver DAD Thunderbolt 3 permite que o seu Thunder\├Core apareça como um dispositivo de áudio no macOS Core Audio (visível em **Configuração de Áudio MIDI**) ou como um dispositivo ASIO no Windows disponibilizando-o para sua DAW e outros aplicativos de áudio. Instalar o driver não afeta a capacidade do DADman de se comunicar com a unidade sobre a Ethernet — são caminhos de conexão independentes.

> **ATENÇÃO:** Não conecte o hardware do Thunder\├Core à porta do Thunderbolt do computador até que o procedimento de instalação do driver instrua você a fazer isso.

### 3.4.1 macOS

**Antes de começar:** Certifique-se de que você está executando o macOS 11 Big Sur ou mais tarde. Certifique-se de que DADman v5.6.7.1 ou posterior já esteja instalado (consulte [Seção 3.3.1](#331-macos)).

1. Localize o instalador de driver do Thunderbolt 3 baixado (formato `.pkg`) e copie-o para seu computador.
2. Clique duas vezes no arquivo `.pkg` para iniciar o instalador.
3. Siga as instruções na tela. Clique em **Próximo** e depois em **Instalar**.
4. Digite sua senha de administrador quando solicitado e clique em **Instalar Software**.
5. Se esta é a primeira vez que o driver é instalado neste computador, o macOS exibirá uma notificação **"extensão do sistema bloqueada"**.
   - Clique em **Abrir Preferências de Segurança** (ou **Abrir Configurações de Sistema** no macOS Ventura e depois).
6. No painel **Privacidade e Segurança**:
   - Clique no ícone de bloqueio na parte inferior da janela e digite sua senha para desbloquear as configurações.
   - Clique em **Permitir** ao lado da extensão bloqueada da Digital Audio Dinamarca / Tecnologia NTP.
7. Quando solicitado, clique em **Reiniciar** para reiniciar o computador.

> **NOTA:** A notificação de "Extensão de Sistema Bloqueada" é uma parte normal da instalação pela primeira vez no macOS. Não é um erro. A extensão deve ser permitida antes que o motorista funcione.

8. Após reiniciar, abra o **DADDriverSetup** na sua pasta Aplicativos.
9. Conecte o seu hardware do Thunder\├Core ao computador com Thunderbolt 3 ou USB-C usando um cabo com rating de 20 Gbps.

O driver está instalado agora. Avance para [Seção 3.5.1](#351-macos-daddriversetup) para configurar as configurações do driver.

> **NOTICE — macOS Sequoia (15) e depois:** A Apple reforçou significativamente as permissões de segurança acessória do Thunderbolt, começando com o macOS Sequoia. São necessários passos adicionais. Veja [Seção 3.6 — macOS Sequoia: Configuração adicional de segurança](#36-macos-sequoia-additional-security-configuration) antes de prosseguir.

### 3.4.2 Janelas

**Antes de começar:** Certifique-se de que você está executando o Windows 10 ou Windows 11 (64-bit). Certifique-se que DADman v5.6.7.1 ou posterior já está instalado (veja [Seção 3.3.2](#332-windows)).

1. Localize o instalador de driver do Thunderbolt 3 baixado (formato `.msi`) e copie-o para o seu computador.
2. Clique duas vezes no arquivo `.msi` para iniciar o instalador.
3. Se um prompt de Controle de Conta de Usuário aparecer, clique em **Sim**.
4. Siga as instruções na tela. Clique em **Próximo** e depois em **Instalar**.
5. Clique em **Terminar** quando a instalação for concluída.
6. Conecte o seu hardware do Thunder\├Core ao computador com Thunderbolt 3 ou USB-C usando um cabo com rating de 20 Gbps.

O driver está instalado agora. Prossiga para [Seção 3.5.2](#352-windows-asio-configuration) para configurar o driver no seu aplicativo de áudio.

---

## 3.5 Configurando o driver Thunderbolt 3

### 3.5.1 macOS — DADDriverSetup {#351-macos-daddriverp}

O aplicativo **DADDriverSetup** controla a contagem de canais e a seleção de dispositivos para o driver de áudio do Thunderbolt 3 no macOS. As alterações feitas aqui são refletidas imediatamente na **configuração de Áudio MIDI** e são visíveis para qualquer aplicativo compatível com o áudio no computador.

> **NOTA:** A taxa de amostra do driver de áudio do Thunderbolt é configurável tanto de dentro do DADDriverSetup quanto diretamente do DADman. Em operação normal, não é necessário abrir o DADDriverSetup para alterar a taxa de amostra.

\*\*No macOS, a única razão para abrir o DADDriverSetup é alterar o número de canais do Thunderbolt apresentados ao host. \* Todos os outros parâmetros podem ser definidos a partir de dentro do DADman.

> **Observação — Intel vs. Apple Silicon Macs:** Apple M1 e posteriores computadores manipulam 256 canais do Thunderbolt bidirecional, sem dificuldade. Em Macs baseados em inteligentes, O desempenho do sistema pode se beneficiar de reduzir a contagem de canais se o fluxo de trabalho não exigir todos os 256 canais — particularmente com taxas de amostra mais elevadas ou com grande carga de CPU.

**Para mudar a contagem de canais:**

1. Abrir **DADDriverSetup** da sua pasta Aplicativos.
2. Certifique-se de que seu hardware do Thunder\├Core esteja conectado e ligado.
3. Configure as seguintes configurações:

| Parâmatro                  | Opções                                                                                                         | Observações                                                                                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Seleção de Dispositivo** | Lista drop-down de unidades conectadas do Thunder\├Core                                                        | Se várias unidades forem manchadas no ônibus do Trovão 3, cada unidade pode ser selecionada individualmente                                                                                                                                             |
| **Taxa de Amostragem**     | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Também configurável de DADman; alterações aqui são refletidas imediatamente no áudio Core                                                                                                                                                               |
| **Canais**                 | 16, 64, 128, 256 (bi-direcional)                                                            | Todas as Interfaces Thunder\├Core suportam 256 canais bidirecionais em hardware. Macs M1 e posteriores manipulam 256 canais sem problemas. Em Intel Macs, reduzir este valor reduz a sobrecarga da CPU. |

> **NOTA:** A configuração de canais controla quantos canais são visíveis para o núcleo de áudio e sua DAW. Não afecta o número de canais disponíveis internamente dentro da matriz de roteamento de DADman.

4. Depois de fazer as mudanças. abra **Configuração de Áudio MIDI** (**Aplicativos > Utilidades > Configuração de Áudio MIDI**) para confirmar que a interface DAD Thunder\iture Core aparece com o formato correto. O formato mostrado deve corresponder à contagem de canais e taxa de amostra configurada no DADDriverSetup.

> **DICA:** Se a DADDriverSetup abrir e sua unidade do Thunder\├Core conectada aparecer no menu de seleção de dispositivos, o driver Thunderbolt está instalado e funcionando corretamente. Esta é a maneira mais rápida de confirmar a operação do motorista no macOS sem precisar abrir uma DAW.

### 3.5.2 Windows — Configuração ASIO {#352-windows-asio-configuration}

O driver Thunderbolt 3 ASIO está configurado de dentro do diálogo de configurações do ASIO do seu aplicativo de áudio.

**Para configurar o driver:**

1. Abra seu aplicativo DAW ou de áudio.
2. Nas configurações do dispositivo de áudio, selecione **Digital Audio Denmark** como driver do ASIO.
3. Abre o diálogo de configuração do ASIO. Configure os seguintes parâmetros:

| Parâmatro                  | Opções                                                                                                         | Observações                                                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Seleção de Dispositivo** | Lista drop-down de unidades conectadas do Thunder\├Core                                                        | Selecione a unidade para usar como dispositivo ASIO primário                                                                                                                                                           |
| **Tamanho do buffer**      | 16, 32, 64, 256, 512, 1024 amostras                                                                            | Comece com um valor grande (512 ou 1024) para garantir um caminho de áudio estável; reduza assim que o sistema for confirmado                                                                       |
| **Taxa de Amostragem**     | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Controlado pelo aplicativo de áudio; listado aqui para referência                                                                                                                                                      |
| **Canais**                 | 16, 64, 128 (bi-direcional)                                                                 | O driver do Windows Thunderbolt ASIO suporta um máximo de 128 canais bi-direcionais. Reduzir do máximo se nem todos os canais forem necessários para melhorar o desempenho do sistema. |

> **DICA:** Se o diálogo de configuração ASIO abre e sua unidade do Thunder\├Core aparece na seleção de dispositivos, o driver ASIO do Thunderbolt está instalado e funcionando corretamente. Esta é a maneira mais rápida de confirmar a operação do motorista no Windows sem precisar iniciar a reprodução de áudio.

**Diagnóstico do driver — apenas Windows:**

A janela de configuração do driver ASIO inclui três indicadores de desempenho em tempo real. Monitore isso na configuração inicial e se você tiver problemas de áudio:

| Indicador                                                              | Valor aceitável                                                                   | Se estiver fora do intervalo                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **IRs perdidas** (áudio perdido interrompidos)      | 0                                                                                 | As interrupções por áudio estão sendo descartadas pelos processos concorrentes do sistema Windows. Aumente o tamanho do buffer ou reduza o carregamento da CPU em segundo plano.                                                                                                                       |
| **PCIe Load**                                                          | Porcentagem baixa; escalas com contagem de canais                                 | Valores altos indicam que o ônibus PCIe está saturado. Reduza a contagem de canais ou investigue outros consumidores de banda PCIe.                                                                                                                                                                    |
| **Leitura de DPC** (Chamada de Procedimento Adiada) | Baixo (< ~500 lições) | O agendamento da interrupção do Windows OS está introduzindo latência. Use uma ferramenta de analisador de latência de DPC para identificar o motorista descendente. Desative o Wi-Fi, o gerenciamento de energia USB ou outros motoristas que geram interrupções como primeiro passo. |

> **NOTA:** Comece com um grande tamanho de buffer (512 ou 1024 amostras) na primeira configuração do driver ASIO. Uma vez que o sistema é confirmado que está rodando sem interrupções perdidas, você pode reduzir o tamanho do buffer para o valor mais baixo de estabilidade para seu fluxo de trabalho.

---

## 3.6 macOS Sequoia: Configuração de segurança adicional

> **Aplica-se a:** macOS 15 (Sequoia) e todas as versões subsequentes do macOS  
> **Fonte:** Boletim de Suporte Técnico DAD, janeiro de 2026

Começando com o macOS Sequoia, a Apple reforçou significativamente os controles de segurança que regem as conexões com Thunderbolt e USB. Esta alteração afeta todas as interfaces do Thunderbolt de todos os fabricantes — não é específico para hardware DAD ou software.

Se você estiver instalando no macOS Sequoia ou posterior, execute as seguintes etapas **além de** a instalação do driver padrão na [Seção 3.4.1](#341-macos).

### 3.6.1 Configurando permissões de acessório

1. Abra **Configurações do Sistema** (Apple menu > System Settings).
2. Navegue até **Privacidade e Segurança**.
3. Role para baixo até a seção **Acessórios**.
4. Definir a permissão de acesso para qualquer um:
   - \*\*Permitir automaticamente a conexão de novos acessórios \*\* — recomendada para computadores de estúdio que não deixam um ambiente controlado
   - **Sempre Permitir** - permissão máxima; apropriado se você conectar vários dispositivos diferentes de Thunderbolt
5. Quando solicitado, aprove a alteração com sua senha ou Touch ID.

### 3.6.2 - Reinstalando o driver no Sequoia

Se você tiver uma versão anteriormente instalada do driver Thunderbolt 3 e estiver atualizando para uma nova versão no macOS Sequoia:

> **NOTA:** O modelo de segurança da Apple requer a remoção do driver antigo antes de instalar o novo. Simplesmente executar o novo instalador sobre a instalação existente não resultará em um driver que funcione corretamente no Sequoia.

1. Localize o **DADDriverSetup.app** na sua pasta Aplicações.
2. Mova-o para a Lixeira (**clique direito > Mover para Lixeira** ou arraste para a Lixeira).
3. O macOS exibirá um aviso que indica que a extensão do sistema será removida. Este é o resultado esperado e desejado — clique para confirmar a remoção.
4. Baixe o último driver Thunderbolt 3 do portal de suporte DAD em [https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com).
5. Instale o novo motorista seguindo o procedimento na [Seção 3.4.1](#341-macos).
6. Quando o instalador for concluído, o macOS exibirá um diálogo pedindo a aprovação da nova conexão com o Thunderbolt. Clique em **Permitir** (ou equivalente) e permita que o computador reinicie.

Após a reinicialização, o seu Thunder\├Core deve se conectar corretamente.

### 3.6.3 macOS Sequoia — Problema de Conexão de Rede Conhecida

> **Afetos:** Todas as versões do DADman no macOS Sequoia; esperado que sejam resolvidas em uma futura atualização do DADman  
> **Versão observada:** A partir do DADman v5.8.1.6

No macOS Sequoia, DADman pode não conseguir se conectar a dispositivos na rede quando o aplicativo for iniciado. Dispositivos de áudio conectados via Thunderbolt 3 não são afectados por este problema.

**Workaround:**

1. Inicie o DADman e deixe-o rodando mesmo que nenhum dispositivo apareça na Lista de Dispositivos
2. Sair da sua conta de usuário macOS (**Menu da Apple > Sair do Logout**).
3. Inicie a sessão novamente em sua conta de usuário do macOS.
4. DADman agora irá se conectar com sucesso a dispositivos de rede.

> **NOTA:** Definir DADman para ser executado automaticamente ao iniciar sessão elimina a necessidade de executar essa solução manualmente em cada inicialização. Veja [Capítulo 8 — Recursos Avançados, Seção 8.X — Configurando DADman para Iniciar na Inicialização do Sistema].

---

## 3.7 Configurando a Conexão de Rede

### 3.7.1 Visão Geral da Rede

DADman se comunica com todas as unidades conectadas por Ethernet usando o protocolo IP. Isso inclui unidades que também se conectam ao computador via Thunderbolt 3 — ambos os caminhos de conexão estão ativos simultaneamente e servem diferentes propósitos (áudio das transportadoras de Thunderbolt; A Ethernet carrega dados de controle).

DADman usa a rede do seu computador para descobrir e se comunicar com unidades de hardware. As configurações de cada unidade são armazenadas na própria unidade; o DADman lê e grava essas configurações na conexão à rede. Se a conexão de rede for perdida, DADman perde o controle da unidade, mas o áudio passa pela unidade ininterrupta.

### 3.7.2 - Redes fortemente recomendadas

> **NOTÍCIA — Isolamento de rede:** Para uma operação confiável, DAD recomenda fortemente o uso de uma **rede Ethernet dedicada** para o controle de DADman, separado da sua rede geral de estúdio ou instalação. Compartilhar a rede de controle com o áudio sobre o tráfego IP (Dante, AES67), EuControl, ou escritório geral/tráfego de internet introduz o risco de áudio e controlar dropouts.

Topologia de rede recomendada para uma instalação típica do estúdio:

| Rede                          | Objetivo                          | Conexão de computador                            |
| ----------------------------- | --------------------------------- | ------------------------------------------------ |
| Rede de controle dedicado     | DADman ↔️ unidades de hardware    | Porta Ethernet dedicada / adaptador USB-Ethernet |
| Rede de áudio Studio/IP       | Dante / AES67 transporte de áudio | Porta Ethernet dedicada                          |
| Escritório / rede de internet | Uso geral do computador           | Wi-Fi ou terceiro porta Ethernet                 |

Um sistema simples de duas unidades (um computador + uma unidade de hardware) pode usar uma conexão Ethernet direta com um único cabo entre a porta Ethernet do computador e a porta de rede da unidade — nenhum interruptor necessário se ambos estiverem configurados na mesma sub-rede.

### Configuração do endereço IP 3.7.3

DADman descobre unidades por endereço IP. Unidades podem ser configuradas com um endereço IP estático ou endereço DHCP atribuído, dependendo do seu ambiente de rede.

**Para configurações simples de rede de dedicados** (sem servidor DHCP na rede de controle), configure endereços IP estáticos:

| Dispositivo                                  | Exemplo de endereço IP                                       | Máscara de sub-rede                                           |
| -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Computador (controle NIC) | 192.168.1.1  | 255.255.255.0 |
| Unidade de hardware 1                        | 192.168.1.10 | 255.255.255.0 |
| Unidade de hardware 2                        | 192.168.1.11 | 255.255.255.0 |

Os endereços IP são definidos na unidade de hardware usando DADman, a exibição de painel frontal da unidade, ou uma interface de navegador web, dependendo do modelo de hardware. Consulte o guia de instalação de sua unidade de hardware específica para instruções sobre a configuração de seu endereço IP.

> **NOTA:** Após alterar o endereço IP de uma unidade de hardware, você deve atualizar a lista de dispositivos do DADman para refletir o novo endereço antes que a conexão seja reestabelecida.

**Para redes de instalação com um servidor DHCP:** Unidades podem ser configuradas para usar DHCP. No entanto, se o DHCP mudar os atributos, o DADman perderá a faixa das unidades em seu endereço anterior. Atribuindo reservas DHCP (mapeamentos MAC-to-IP) fixos no interruptor ou roteador é recomendado para prevenir isso.

---

## 3.8 Verificando a instalação

Uma vez que o DADman e (se aplicável) o driver Thunderbolt 3 estão instalados e a rede está configurada, realizar as seguintes verificações para confirmar que a instalação está correta antes de prosseguir para [Capítulo 6 — Primeiro].

### 3.8.1 Verificando o DADman

1. Inicie o **DADman** da sua pasta Aplicativos (macOS) ou menu Iniciar (Windows).
2. Aguarde até 30 segundos para que a descoberta do dispositivo seja concluída.
3. Confirme se as unidades de hardware do(s) aparecerão na **Lista de Dispositivos** no topo da janela do DADman.
4. Confirme que a versão atual do firmware da unidade é exibida e corresponde às suas expectativas.

Se nenhum dispositivo aparecer, consulte o [Capítulo 9 — Solução de problemas, Seção 9.2 — Problemas de Rede e Conectividade].

### 3.8.2 Verificando o driver Thunderbolt 3 (macOS)

1. Abrir **Configuração de MIDI de Áudio** (**Aplicativos > Utilidades > Configuração de Áudio MIDI**).
2. Confirme que a interface do **DAD Thunder\➲ Core** aparece na lista de dispositivos à esquerda.
3. Confirme que o formato mostrado (por exemplo, "256 ch, 48000 Hz") corresponde às configurações configuradas no DADDriverSetup.

Se a interface não aparecer, confirme:

- A unidade está ligada e conectada através de um cabo de Thunderbolt com nível 20 Gbps.
- A extensão do sistema foi permitida no **Privacidade e Segurança** (veja [Seção 3.4.1](#341-macos), passo 6).
- Se no macOS Sequoia: a permissão de acessórios está definida corretamente (veja a [Seção 3.6.1](#361-setting-accessory-permissions)).

### 3.8.3 Verificando o driver Thunderbolt 3 (Windows)

1. Abra seu aplicativo DAW ou de áudio.
2. Nas configurações do dispositivo de áudio, confirme que a **Digital Audio Denmark** é selecionável como driver ASIO.
3. Abra o diálogo de configuração do ASIO e confirme que seu dispositivo aparece na seleção de dispositivo.
4. Confirme que o contador de **IRs perdidas** lê **0** após alguns segundos de operação ociosa.

---

## Resumo dos Arquivos Instalados

| Arquivo / Aplicativo    | Plataforma | Local:               | Objetivo                                                               |
| ----------------------- | ---------- | ------------------------------------ | ---------------------------------------------------------------------- |
| `DADman.app`            | macOS      | `/Aplicativos/`                      | Aplicativo de controle principal                                       |
| `DADman.exe`            | Janelas    | `C:\Arquivos de programa\DADman\` | Aplicativo de controle principal                                       |
| `DADDriverSetup.app`    | macOS      | `/Aplicativos/`                      | Configuração do driver Thunderbolt 3                                   |
| driver ASIO DA DAD      | Janelas    | Instalado via `.msi`                 | Driver de áudio ASIO para uso DAW                                      |
| Extensão do sistema DAD | macOS      | Sistema — não acessível pelo usuário | Extensão de Kernel ativando dispositivo de áudio do Thunderbolt 3 Core |

---

## Referências cruzadas

- **Capítulo 1 — Introdução:** Visão geral do arquiteturo; entender como DADman, o motorista TB3 e a rede de comunicação
- **Capítulo 2 — Requisitos de Sistema:** Compatibilidade do sistema operacional e especificações mínimas de hardware
- \*\*Capítulo 6 — Primeiros passos após a instalação — se conectando ao seu dispositivo e verificando o sinal
- **Capítulo 9 — Solução de problemas:** Etapas de diagnóstico se a instalação não for concluída com sucesso ou se dispositivos não forem descobertos
- **Capítulo 10 — Manutenção:** Atualizando DADman e firmware

---

_[Placeholder: figuras a serem inseridas — capturas de tela da instalação do driver TB3 (macOS e Windows), janela de configuração da DADDriverSep, Configuração de Áudio MIDI mostrando a interface DAD, tela do macOS Privacy & Security / Acessórios do Windows, diálogo do ASIO]_

_[Pendente de engenharia DAD: Referência cruzada do procedimento de atualização de firmware completo, instruções de endereçamento de IP confirmadas por modelo de hardware]_
