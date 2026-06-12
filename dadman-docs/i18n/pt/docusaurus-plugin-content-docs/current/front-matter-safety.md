---
id: segurança frontal
title: "Elemento Frontal & Segurança"
sidebar_label: "FM — Elementos iniciais e Segurança"
sidebar_position: 2
slug: /front-matter-security
---

# Elemento da frente — Avisos de segurança e conformidade

> **Documento:** Usuário do DADman Manual  
> **Aplica a:** Software do DADman e todos os hardware de Tecnologia DAD / NTP compatíveis  
> **Padrões:** IEC/IEEE 82079-1:2019 · IEC 62368-1:2018 · UL 62368-1 · CSA C22. No. 62368-1  
> **Estado:** Rascunho v0. — Declarações regulatórias pendentes de engenharia tecnológica DAD / NTP  
> **Última atualização:** Junho 2026

---

> **READ AND RETAIN THESE INSTRUCTIONS BEFORE OPERATING ANY EQUIPMENT.**  
> This section contains safety information that must be read, understood, and followed before installing, configuring, or operating any hardware controlled by DADman software. Não observar estas instruções poderá resultar em choque elétrico, fogo, dano auditivo, dano do equipamento, ou anulação de garantia.

---

## Definições de Palavra de Sinal FM.1

As seguintes palavras de sinal são usadas em todo este manual para indicar gravidade de risco. Eles aparecem nos avisos formatados como mostrado abaixo e devem sempre ser lidos e observados.

| Palavra do sinal | Nível de perigo                                 | Significado                                                                                                                                                                                                                                      |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **PERIGO**       | Morte imediata ou ferimentos graves             | Essa palavra de sinal indica uma situação iminentemente perigosa que, se não for evitada, **vai** resultar em morte ou danos pessoais graves.                                                                                    |
| **ATENÇÃO**      | Possível morte ou ferimentos graves             | Esta palavra de sinal indica uma situação potencialmente perigosa que, se não for evitada, **pode** resultar em morte ou ferimentos pessoais graves.                                                                             |
| **ATENÇÃO**      | Possível dano secundário ou dano de equipamento | Esta palavra indica uma situação potencialmente perigosa que, se não for evitada, **pode** resultar em pequenas lesões pessoais ou danos em equipamentos.                                                                        |
| **NOTA**         | Sem risco de lesão                              | Esta palavra de sinal indica informações operacionais importantes que, se não forem seguidas, podem resultar em perda de dados, operação incorrecta, ou danos ao equipamento, mas não apresenta riscos para a segurança pessoal. |

Avisos de segurança **sempre aparecem antes** da ação ou situação com a qual se relacionam.

---

## Símbolos de Segurança FM.2

Os seguintes símbolos podem aparecer no hardware de tecnologia DAD / NTP, fontes de energia ou nesta documentação. Cada símbolo é reproduzido aqui com seu significado.

| Símbolo                                                        | Referência IEC 60417       | Significado                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚠                                                              | IEC 60417-5036             | **Cuidado/atenção geral necessário.** Consulte o texto que acompanha o risco específico.                                                                                                                                                      |
| ⚡                                                              | IEC 60417-5031             | **Risco elétrico elétrico.** Tensão perigosa dentro. Risco de choque elétrico. Não abra.                                                                                                                      |
| ⏚                                                              | IEC 60417-5019             | **Protetor da terra / chão.** Este terminal deve estar conectado a um condutor de terra protetor.                                                                                                                                             |
| **~**                                          | IEC 60417-5032             | **Alterando a corrente (AC).** Indica a entrada de energia AC.                                                                                                                                                             |
| **⏻**                                                          | IEC 60417-5009             | **Poder / espera.**                                                                                                                                                                                                                                           |
| ♻                                                              | Directiva REEE             | **Não elimine os resíduos domésticos.** Este produto deve ser eliminado através de um esquema de reciclagem ou recolha de resíduos autorizado. Veja [Seção FM.8 — Disposição e REEE](#fm8-disposal-and-weee). |
| **[RoHS]** | Directiva da UE 2011/65/UE | **RAS.** Esse produto está em conformidade com a directiva de Restrição de Substâncias Perigosas.                                                                                                                                             |

> **NOTA:** Se um símbolo aparecer no hardware ou embalagem e não estiver listado na tabela acima, consulte o guia de instalação fornecido com esta unidade de hardware específica.

---

## Segurança elétrica FM.3

### FM.3.1 Mains de Poder e Mancha

> **PERIGO — Risco elétrico de elétrico**  
> \*\*Conexão imprópria do condutor de aterramento de equipamentos resulta num risco de choque elétrico. \* Não modifique o plugue fornecido com o produto. Se o plugue não encaixar na praia, tenha um eletricista qualificado que instale uma tomada adequada. Não use um adaptador que derrote a função do condutor de aterramento de equipamentos. Se não se sabe ao certo se o produto está devidamente fundamentado, consulte um eletricista qualificado antes de utilizar o equipamento.

Todo hardware principal desenvolvido pela tecnologia DAD / NTP **deve estar de base**. Em caso de mau funcionamento ou desagregação, a aterramento fornece um caminho de menos resistência para a corrente de defeitos, reduzindo o risco de choque elétrico. Cada produto primário é fornecido com um cabo de alimentação equipado com um condutor de aterramento de equipamento e um plugue de aterramento. O plugue tem de ser inserido numa saída devidamente instalada e fundamentada que esteja em conformidade com todos os códigos e ordenamentos eléctricos locais aplicáveis.

> **AVISO**  
> Não derrote a finalidade de segurança do plugue polarizado ou de aterramento. Um plugue polarizado tem duas lâminas, uma mais larga que a outra. Um plugue de aterramento tem duas lâminas e um terceiro pino de aterramento. A lâmina larga e o terceiro pino são fornecidos para sua segurança. Se o plugue fornecido não encaixar na sua tomada, consulte um eletricista para substituir a tomada obsoleta. Esta instrução aplica-se a todas as regiões e substitui qualquer prática de conveniência local.

### Proteção de Cordão Potente FM.3.2

> **AVISO**  
> Protege o cabo de alimentação de ser ligado ou piscado, particularmente em plugues, principais saídas e no ponto em que as cordas saem do chassis do equipamento. Para que o equipamento seja devolvido ao serviço, é necessário substituir um técnico de serviço qualificado. Não opere equipamentos com uma medalha de poder visivelmente danificada ou descontrolada.

### Desconexão e Relâmpago FM.3.3

- Desconecte todos os equipamentos principais durante tempestades elétricas.
- Desconecte todos os equipamentos principais quando não for utilizado por um longo período de tempo.
- Ao desconectar um cabo de energia, agarre o corpo do plugue firmemente — não puxe para o cabo em si.

### FM.3.4 Power over Ethernet (PoE) Dispositivos

Algum hardware DAD (incluindo o Monitor do Módulo Operacional) é alimentado via Power over Ethernet (PoE) ao invés de uma cabo de alimentação principal. O seguinte aplica-se a dispositivos PoEM:

- Conecte dispositivos PoE-powered apenas a interruptores de rede ou injetores que estejam em conformidade com IEEE 802. af (15.4 W) ou IEEE 802.3at (30 W) conforme o apropriado para o dispositivo.
- Não conecte dispositivos PoE-powered a portos de rede padrão somente de dados que não sejam capazes de fornecer energia PoE.
- O carregador de energia PoE dentro do interruptor de rede ou injetor está sujeito às instruções gerais de segurança principais na [Seção FM.3.1](#fm31-mains-power-and-grounding).

---

## Segurança Ambiental FM.4

### FM.4.1 Lunar e Liquidas

> **ATENÇÃO**  
> Não use nenhum hardware de tecnologia DAD / NTP perto da água ou em locais onde possa ocorrer condensação, chuva ou derrames líquidos. O lençol líquido pode causar choque elétrico, fogo ou danos irreparáveis à electrónica.

- Mantenha os líquidos longe de todos os equipamentos.
- Tome cuidado para garantir que os objetos não caiam e que os líquidos não sejam derramados em equipamentos através de aberturas de ventilação ou aperturas do conector.
- Se o líquido foi derramado em ou em equipamento, desconecte a potência principal imediatamente e consulte [Seção FM. — Condições de Serviço](#fm6-service-conditions) antes de retornar o equipamento ao serviço.

### Ventilação FM.4.2 e Calor

> **AVISO**  
> Este equipamento gera calor durante a operação normal. A obstrução de aberturas de ventilação pode causar sobre-aquecimento, fogo ou falha prematura de componentes internos.

- Não bloqueie nenhuma abertura de ventilação. Instale o equipamento de acordo com as instruções do fabricante e as eliminações especificadas no guia de instalação para o modelo de hardware.
- Não instale equipamentos perto de fontes de calor, como radiadores, registros de calor, fornos ou outros aparelhos - incluindo amplificadores de energia - que produzem calor significativo.
- O produto deve ser instalado para que a sua posição não interfira com a sua ventilação adequada.
- Observe a distância mínima de rack e a distância de temperatura da operação especificada nas Especificações Técnicas de seu hardware. Em geral, o hardware do DAD requer um mínimo de 1U de espaço livre acima e abaixo da unidade, a menos que especificado de outra forma.

### FM.4.3 Estabilidade Mecânica

> **ATENÇÃO**  
> O equipamento que cai pode causar danos pessoais e equipamentos severos. Quando estiver montando hardware em uma pilha ou em um carrinho, certifique-se de que a estrutura de montagem está estável, avaliado a carga, e devidamente protegido antes de liberar o equipamento.

- Usar apenas invólucro de rack, estábulos, carrinhos ou parênteses especificados pelo fabricante ou fornecidos com o equipamento.
- Ao usar um carrinho de equipamento com rodas, tenha cuidado ao mover a combinação de carrinho e equipamento para evitar a gorjeta.
- Unidades de montagem elétrica devem ser protegidas com todos os parafusos fornecidos antes da operação.

---

## Segurança auditiva FM.5

> **ATENÇÃO — Risco de dano auditivo permanente**  
> software DADman controla os níveis de saída analógica e digital de hardware conectado. Este equipamento, seja usado sozinho ou em combinação com amplificadores de energia e alto-falantes ou fones de ouvido, é capaz de produzir níveis de pressão sonora (SPL) que podem causar **perda auditiva permanente**.

- Não actuem em níveis de produção que sejam desconfortáveis. Em caso de dúvida sobre níveis de monitorização seguros, consulte orientação profissional sobre os limites da SPL para escuta estendida (uma referência comum é 85 dB SPL como um nível contínuo seguro para monitoramento profissional).
- Reduz os níveis de saída antes de conectar novas fontes de sinal, fazer mudanças de roteamento ou recarregar os arquivos de configuração.
- Se você tiver alguma perda auditiva, tinho (tocando nas orelhas), ou maior sensibilidade ao som após uma sessão de audição, consulte um audiólogo prontamente. Estes podem ser indicadores precoces de danos auditivos induzidos pelo ruído.

> **NOTA:** Os controles de saída de DADman e a função de nível de referência de perfil (o botão **Ref**) são especificamente concebidos para permitir que os níveis de saída sejam definidos e bloqueados nos valores SPL calibrados. Usar essas características para a gestão disciplinada da estrutura de ganhos reduz significativamente o risco de exposição inadvertida a um SPL inseguro. Veja [Capítulo 8 — Recursos Avançados, Seção 8.X — Monitorar perfis e níveis de referência] para obter orientação.

---

## Condições de serviço FM.6

> **ATENÇÃO**  
> Não há peças utilizáveis dentro do hardware de tecnologia DAD / NTP. Abrir o invólucro expõe tensões perigosas. Indique todos os serviços além do que está descrito nesse manual a pessoal de serviço qualificado.

O hardware deve ser retirado do serviço e referido ao pessoal de serviço qualificado quando existir qualquer uma das seguintes condições:

1. O cabo de alimentação ou plugue principais foram fisicamente danificados.
2. Os objectos caíram, ou o líquido derramou-se para o equipamento.
3. O equipamento foi exposto à chuva ou umidade.
4. O equipamento não parece funcionar normalmente ou exibe uma mudança marcada no desempenho.
5. O equipamento foi derrubado ou o invólucro foi danificado fisicamente.

Não tente atender o produto além dos procedimentos de manutenção do usuário descritos no [Capítulo 10 — Manutenção] deste manual. O serviço não autorizado anulará a garantia e poderá criar riscos adicionais de segurança.

> **ATENÇÃO — Movendo partes**  
> Algumas unidades de lanchonete DAD (incluindo o AX32) contêm refrigerantes com **partes perigosas em movimento** acessíveis quando a cobertura da unidade é removida. Mantenha os dedos e todas as outras partes do corpo longe dos conjuntos de ventiladores internos a todo momento.

---

## Software FM.7 e segurança dos dados

A seguinte orientação a nível de NOTICE aplica-se à operação de software DADman e não envolve riscos para a segurança pessoal. Não observar estas práticas pode resultar na perda de dados de configuração.

> **NOTÍCIAS — Salvar configuração antes de atualizações de firmware**  
> O Firmware atualiza todas as configurações armazenadas na unidade de hardware para os valores padrão de fábrica. Configurações de roteamento, ganhar configurações, monitorar perfis, rótulos de canal e todos os outros parâmetros armazenados serão perdidos a não ser que seja salvo primeiro. Sempre salvar um Arquivo de Configurações do DADman (`.dms`) usando **Arquivo > Salvar Como** antes de iniciar qualquer atualização de firmware. Veja [Capítulo 3, Seção 3.X — Atualizando DADman e Firmware] para o procedimento completo.

> **NOTICE — Backup de arquivos de configuração**  
> Arquivos de Configurações do DADman (`.dms`) e Arquivos de Perfil de Monitor (`.dmprof`) representam um investimento significativo na instalação. Manter backups regulares desses arquivos para um local separado do computador executando o DADman (por exemplo, armazenamento em nuvem ou um disco externo). Estes arquivos são o único meio de recuperar sua configuração após uma redefinição de fábrica.

> **NOTAS — Segurança da rede**  
> DADman se comunica com unidades de hardware pela rede sem autenticação por padrão. Em ambientes com múltiplos usuários ou acesso a rede de fora do estúdio, coloque um hardware controlado por DADman em um dedicado, segmento de rede isolado para impedir acesso não autorizado à configuração da unidade.

---

## FM.8 Lixeira e SEMANA

Os produtos tecnológicos DAD / NTP estão sujeitos à Directiva Europeia REEE (Resíduos de Equipamentos Elétricos e Eletrônicos, Directiva 2012/19/UE) e regulamentos nacionais e regionais equivalentes.

> **Não elimine este equipamento em resíduos urbanos não classificados (resíduos domésticos/rejeições gerais).**

Os equipamentos eléctricos e electrónicos devem ser recolhidos e eliminados separadamente através de pontos de recolha autorizados ou devolvidos a um distribuidor autorizado ou ao fabricante para uma reciclagem adequada. Contate sua autoridade local, serviço de gestão de resíduos, ou tecnologia DAD / NTP para orientação de eliminação.

O símbolo do bin de rodas cruzadas (:recicling_symbol: com um X) impresso ou afixado no produto identifica-o como sujeito a requisitos de recolha separados.

---

## Complicação Regulatória FM.9

> **Observação — Declarações pendentes**  
> As declarações de conformidade regulatória nesta seção são fornecidas como espaços reservados. Declarações finais, incluindo versões de directivas aplicáveis, informação notificada do corpo (se aplicável), e detalhes representativos autorizados, devem ser confirmados e inseridos pela engenharia tecnológica DAD / NTP e pela legalidade antes da publicação.

### Declaração de Conformidade CE FM.9.1 (União Europeia)

A DAD / NTP Technology declara que os produtos de hardware controlados pelo software DADman cumprem os requisitos das seguintes directivas da União Europeia:

- **Diretiva de Equipamentos Radio (RED) 2014/53/EU** — _[Aplicável a produtos com radio/Wi-Fi; confirme a aplicabilidade por produto]_
- \*\*Diretiva de baixa tensão (LVD) 2014/35/UE — Aplicável a hardware principal
- **Directiva de Compatibilidade Eletromagnética (EMC) 2014/30/EU**
- **Diretiva Rosa 2011/65/EU** — Restrição de Substâncias Perigosas
- **Diretiva REEA 2012/19/EU** — Equipamentos Elétricos e Eletrônicos

_[Complete a Declaração de Conformidade a ser inserido aqui. Deve incluir: nome do(s) produto(s), número(s) de modelo (s), signatário autorizado, data e lista de padrões harmonizados aplicados (EN 55032, EN 55035, EN IEC 62368-1, etc.).]_

**Authorised Representative (EU):**  
NTP Technology A/S  
Nybrovej 99, DK-2820 Gentofte, Denmark  
Email: info@digitalaudio.dk

### FM.9.2 Declaração de Conformidade da FCC (Estados Unidos)

_[Declaração do FCC a ser inserida pela engenharia do DAD. Deve incluir: FCC ID (se aplicável), nome e endereço da parte responsável, e declaração de conformidade por 47 CFR Parte 15.]_

Este dispositivo está de acordo com a Parte 15 das Regras do CC. A operação está sujeita às seguintes duas condições:

1. Este dispositivo não pode causar interferência prejudicial.
2. Este dispositivo deve aceitar qualquer interferência recebida, incluindo interferências que possam causar operações indesejadas.

> **NOTA:** Alterações ou modificações não aprovadas expressamente pela NTP Technology A/S poderiam anular a autoridade do usuário para operar o equipamento.

### FM.9.3 ICES-003 (Canada)

_[Declaração de conformidade da indústria Canada ICES-003 a ser inserida.]_

Este aparelho digital da classe B está em conformidade com o ICES-003 canadense.

### FM.9.4 RoHS conformidade

O hardware tecnológico DAD / NTP é fabricado em conformidade com a Directiva 2011/65/UE (Directiva RSP 2) e com a Directiva 2015/863/UE (Directiva RSP 3), que restringem o uso de substâncias perigosas, incluindo chumbo, mercúrio, cádmio, crómio hexavalente, bifenilos polibromados (PBB), etos difenílicos polibromados (PBDE) e quatro ftalatos em equipamentos eléctricos e electrónicos.

_[Certificado de conformidade da RSH ou referência da declaração a ser inserida.]_

### FM.9.5 Conformidade no Reino Unido avaliada (UKCA) — Grande Grã-Bretanha

_[Declaração do UKCA a ser inserida para produtos colocados no mercado GB pós-Brexit, se aplicável.]_

---

## Informações legais do FM.10

### Direitos autorais

2026 Tecnologia NTP A/S. Todos os direitos reservados.

DAD — Digital Audio Denmark é uma marca registrada da NTP Technology A/S. Todas as outras marcas registradas são de propriedade de seus respectivos proprietários.

Nenhuma parte deste manual pode ser reproduzida, transmitida ou traduzida de qualquer forma ou por qualquer meio — eletrônico, mecânico, fotocopiando, gravação ou de outra forma - sem a permissão prévia por escrito da NTP Technology A/S.

### Renúncia

O NTP Technology A/S reserva-se o direito de fazer alterações em produtos de hardware e software sem aviso prévio. Características do produto e especificações descritas neste manual estão sujeitas a alterações.

A NTP Technology A/S não será responsável por erros técnicos ou editoriais ou omissões contidas neste documento, nem por danos acidentais ou consequentes resultantes da mobilidade, do desempenho, da utilização deste manual ou dos produtos que descreve.

### contato

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

E-mail: info@digitalaudio.dk  
Web: www.digitalaudio.dk  
Suporte: www.digitalaudiosupport.com

---

## Resumo das notificações de segurança

Por IEC/IEEE 82079-1:2019, todos os avisos de PERIGO e AVISO neste documento são coletados aqui para uma referência rápida. Os avisos individuais também aparecem no contexto em todos os capítulos em que se aplica o risco relevante.

| Local:                       | Palavra do sinal | Summary                                                                      |
| -------------------------------------------- | ---------------- | ---------------------------------------------------------------------------- |
| Seção FM.3.1 | **PERIGO**       | Acumulação imprópria — risco de choque elétrico                              |
| Seção FM.3.1 | **ATENÇÃO**      | Não derrote a finalidade de segurança do plugue de energia                   |
| Seção FM.3.2 | **ATENÇÃO**      | Proteja e não opere com um cabo de alimentação danificado                    |
| Seção FM.4.1 | **ATENÇÃO**      | Não use perto da água — risco de choque e fogo                               |
| Seção FM.4.2 | **ATENÇÃO**      | Não obstrua ventilação — risco de fogo e sobreaquecimento                    |
| Seção FM.5                   | **ATENÇÃO**      | Níveis de saída capazes de causar perda permanente de audição                |
| Seção FM.6                   | **ATENÇÃO**      | Nenhuma peça utilizável — tensão perigosa dentro                             |
| Seção FM.6                   | **ATENÇÃO**      | Peças móveis perigosas (AX32 e unidades com fãs internos) |

---

_[Pendente de legal e engenharia tecnológica DAD / NTP:]_  
_— Declaração final CE de texto e signatário_  
_— Números de identificação FCC e declarações de conformidade por modelo de produto_  
_— Declaração ICES-003_  
_— Declaração do UKCA (se aplicável)_  
_— Referência de certificado RoHS_  
_— Confirmação de padrões harmonizados aplicáveis (EN series)_
