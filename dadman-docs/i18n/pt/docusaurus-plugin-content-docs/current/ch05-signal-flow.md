---
id: ch05-fluxo sinal-fluxo
title: "Capítulo 5 — Fluxo de Sinal & Arquitetura"
sidebar_label: "Cara. 5 — Sinal Fluxo"
sidebar_position: 7
slug: /sinal-fluxo
---

# Capítulo 5 — Fluxo de Sinal & Arquitetura

> **Documento:** Usuário do DADman Manual  
> **Versão do software coberta:** DADman v5.8.2 build 2  
> **Estado do capítulo:** Projecto v0. — Bloquear diagramas e valores da topologia pendentes; Aguardando revisão técnica pela engenharia DAD  
> **Última atualização:** junho de 2026

---

## Neste Capítulo

| Turma               | Capas                                        | Relevante para    |
| ------------------- | -------------------------------------------- | ----------------- |
| 5.1 | Arquitetura de controle baseada em Ethernet  | Todos os usuários |
| 5.2 | Lista de dispositivos                        | Todos os usuários |
| 5.3 | Recomendações de rede                        | Todos os usuários |
| 5.4 | Endereços IP                                 | Todos os usuários |
| 5.5 | Bloqueio e visão geral da taxa de amostragem | Todos os usuários |
| 5.6 | Taxa de amostragem e capacidade do canal     | Todos os usuários |

---

## 5.1 Arquitetura de Controle Ethernet

O DADman se comunica com todas as unidades de hardware conectadas pela Ethernet usando o protocolo TCP/IP. Isto se aplica a todo hardware suportado — incluindo unidades que também se conectam via Thunderbolt 3. A conexão Ethernet carrega somente dados de controle (mudanças de configuração, monitoramento de status, medição); áudio é transportado separadamente por MADI, Dante, AES3 ou Thunderbolt 3 dependendo do hardware.

Como DADman usa uma rede Ethernet padrão, um único computador executando DADman pode controlar várias unidades simultaneamente, desde que todas as unidades sejam acessíveis na mesma rede. Unidades aparecem na **Lista de Dispositivos** da esquerda para a direita, ordenadas por seu número de ID unitário.

_[Placeholder: diagrama topologia do sistema — computador executando o DADman conectado a uma mudança de rede, com várias unidades de hardware DAD no mesmo subrede Ethernet; Cabo de Thunderbolt mostrado separadamente para unidades de Trovão\➜ Core]_

### 5.1.1 - Caminhos de Comunicação Dupla para o Hardware Thunder├Core

Uma unidade Thunder\➲ Core conectada a um computador usa dois caminhos de comunicação simultâneos e independentes:

| Caminho           | Protocol       | Objetivo                                                                        |
| ----------------- | -------------- | ------------------------------------------------------------------------------- |
| **Ethernet**      | CP/IP          | Controle de DADman — roteamento, ganhar, configuração                           |
| **Thunderbolt 3** | PCIe sobre TB3 | Transporte de áudio — a interface visível para a sua DAW via Core Audio ou ASIO |

Hardware Ethernet-only (AX32, DX32R, Penta series) usa apenas o caminho da Ethernet. Não há nenhum driver Thunderbolt 3 para essas unidades, e elas não aparecem como interfaces de áudio no computador. O áudio dessas unidades é transportado por MADI, Dante ou AES3.

_[Placeholder: diagrama mostrando o driver DADman e TB3 como caminhos paralelos entre o computador e uma unidade Thunder\├Core — DADman comunicando pela Ethernet, O driver TB3 comunica-se sobre o Thunderbolt 3; contrasitado com uma unidade somente Ethernet mostrando apenas o caminho Ethernet]_

---

## 5.2 A Lista de Dispositivos

A Lista de Dispositivos é a visualização de nível superior no DADman mostrando todos descobertos e unidades conectadas. Cada unidade é exibida com uma borda colorida que a identifica visualmente e separa seus controles dos de unidades adjacentes.

Quando o DADman inicia, tenta se reconectar a unidades encontradas na última sessão. Se um Arquivo de Configurações do DADman (`.dms`) for configurado para carregar automaticamente ao iniciar, ele será aplicado às unidades conectadas. Se nenhum arquivo de configuração for carregado na inicialização, as conexões com unidades na Lista de Dispositivos devem ser restabelecidas manualmente.

Veja [Capítulo 7, Seção 7.3 - Lista de Dispositivos] para referência completa à Lista de Dispositivos.

---

## Recomendações de Rede 5.3

> **NOTA:** Para um controle confiável, DAD recomenda fortemente o uso de uma rede Ethernet dedicada para DADman, separando-se da sua rede geral de estúdio ou instalação. Veja [Capítulo 3, Seção 3.7 - Configurando a Conexão da rede] para um guia detalhado de topologia.

O tráfego de controle do DADman é leve. No entanto, compartilhando a rede de controle com o áudio via IP (Dante, AES67), EuControl, ou o tráfego geral de internet pode causar quedas de conectividade intermitentes que interrompem atualizações de parâmetros em tempo real. Um interruptor Ethernet do Gigabit ou uma conexão direta de cabo entre o computador e a unidade é a topologia recomendada para todas as instalações profissionais.

---

## Endereço IP 5.4

Cada unidade de hardware requer um endereço IP único na mesma sub-rede que o computador executa DADman. Unidades podem ser configuradas com endereços IP estáticos (recomendado para redes de controle dedicadas) ou endereços atribuídos a DHCP.

Os endereços IP são configurados através da exibição do painel frontal da unidade, através de uma interface de navegador web, ou através do DADman após a conexão inicial. Consulte o guia de instalação para o modelo de hardware específico para o procedimento de atribuição IP pela primeira vez.

---

## 5.5 - Reputação e Taxa de Amostra

O bloqueio determina a taxa de amostragem a que todo o áudio no sistema opera. Como os hardware controlados por DADman normalmente se encontram no centro de uma infraestrutura de áudio maior — receber e rotear áudio de múltiplas fontes — a configuração do relógio é um dos aspectos mais importantes da configuração do sistema.

### 5.5.1 A Hierarquia de Relógio

Todos os dispositivos de áudio digitais em um sistema conectado devem compartilhar um exemplo comum para evitar cliques, pops, e artefatos de áudio causados pela incompatibilidade da taxa de amostra. Um dispositivo atua como o **mestre do relógio**; todos os outros são **escravos** que sincronizam com ele.

O hardware controlado por DADman pode agir como mestre ou escravo, e pode derivar seu relógio de múltiplas fontes:

| Fonte do relógio        | Descrição:                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Interno**             | A unidade gera seu próprio relógio na taxa de amostra selecionada - use quando a unidade é o mestre do relógio do sistema                                                 |
| **Relógio de palavras** | Um sinal de relógio de palavra externo na entrada de relógio BNC                                                                                                          |
| **MADI**                | Relógio extraído de um fluxo MADI recebido                                                                                                                                |
| **Atenciosamente**      | Relógio derivado da rede de áudio Dante (PTP-base)                                                                                                     |
| **AES3**                | Relógio extraído de um sinal de entrada AES3                                                                                                                              |
| **Thunderbolt 3**       | Relógio derivado do computador conectado _(Thunder\├Core hardware)_                                                                                    |
| **Adaptar Para**        | DADman corresponde automaticamente à taxa de amostra de um sinal digital de entrada — útil para adaptação às Ferramentas Pro ou outras mudanças de taxa de amostragem DAW |

_[Placeholder: diagrama de hierarquia de relógio mostrando relógio master → word clock bus → relógio eslavos; com Dante PTP como referência alternativa]_

A fonte de relógio e a taxa de amostragem são configuradas na guia **Conf** de DADman. Veja [Capítulo 7, Seção 7.5 - Bloqueio e Configuração] para a referência completa.

---

## 5.6 Taxa de Amostra e Capacidade de Canal

Alguns formatos de áudio trazem menos canais com taxas de amostra mais altas. A tabela abaixo mostra como a capacidade do canal muda com a taxa de amostra para os formatos mais comuns no hardware DAD.

| Formato                                                                                          | Canais a 44.1 / 48 kHz | Canais a 88,2 / 96 kHz          | Canais de 176.4 / 192 kHz |
| ------------------------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------- | ----------------------------------------- |
| MADI (standard)                                                               | 64                                     | 32 (S/MUX 2) | 16 (S/MUX 4)           |
| MADI (Alta Velocidade)                                                        | 64                                     | 64                              | 32                                        |
| Dante (padrão)                                                                | 64                                     | 32                              | 16                                        |
| Dante 256 IPCore _(v5.8.1.6)_ | 256                                    | 128                             | 64                                        |
| ADICIONAR Lightpipe                                                                              | 8                                      | 4 (S/MUX 2)  | —                                         |
| Thunderbolt 3 (motorista DAD)                                                 | Até 256                                | Até 256                         | Até 256                                   |

> **NOTA:** os valores da capacidade do canal na tabela acima são tipicamente; os valores reais dependem do seu modelo de hardware específico e versão de firmware. Confirme a capacidade da sua unidade nas Especificações Técnicas no Apêndice A.

---

## Referências cruzadas

- **Capítulo 1 — Introdução:** Lista de hardware compatível; Resumo das famílias de hardware
- **Capítulo 3 — Instalação:** Instalando o DADman e configurando a rede
- **Capítulo 4 - Descrição de hardware:** Conectores frontais e traseiros; E/S físico
- **Capítulo 7 — Operação:** Referência de aba de configuração de relógio e configurações de taxa de amostra
- **Apêndice A — Especificações:** Tabelas de especificação de hardware completo incluindo capacidades de roteamento matriz

---

_[Pendente de engenharia DAD:]_  
_— números de portas TCP/UDP usados para descoberta e controle de unidade (necessário para Ch. 9 firewall solução de problemas)_  
_— Confirmação da lista de unidades suportada por Dante 256 IPCore (v5. .1.6)_  
_— Figuras de três blocos identificadas como espaços reservados acima_
