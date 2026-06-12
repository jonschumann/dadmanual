---
title: "Capítulo 10 - Manutenção"
sidebar_label: "Cara. 10 - Manutenção"
sidebar_position: 12
---

# Capítulo 10 - Manutenção

> **Documento:** Usuário do DADman Manual  
> **Versão do software coberta:** DADman v5.8.2 build 2  
> **Estado do capítulo:** Projecto v0. — Especificações ambientais específicas de hardware pendentes confirmação por modelo da engenharia DAD  
> **Última atualização:** Junho de 2026

---

## Neste Capítulo

| Turma                | Capas                                                |
| -------------------- | ---------------------------------------------------- |
| 10.1 | Atualizando software do DADman                       |
| 10.2 | Atualizando firmware de hardware                     |
| 10.3 | Atualizando firmware do Dante                        |
| 10.4 | Atualizando o driver Thunderbolt 3                   |
| 10.5 | Verificando as versões atuais do software e firmware |
| 10.6 | Limpeza                                              |
| 10.7 | Armazenamento                                        |
| 10.8 | Fim da vida e eliminação                             |

---

## 10.1 Atualizando Software DADman

Atualizações do DADman são distribuídas como pacotes completos do instalador — não patches incrementais. Instalar uma nova versão substitui a instalação existente.

### 10.1.1 Antes de Atualizar

- Revise as **notas de versão** para a nova versão antes de instalar. Notas de lançamento do documento testou as versões do sistema operacional, requisitos de compatibilidade de firmware, mudanças de comportamento e quaisquer problemas conhecidos com novas versões do sistema operacional. As notas de lançamento estão disponíveis no Centro de Downloads em [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
- Confirme se o seu sistema operacional está listado como suportado pela nova versão DADman. Consulte as notas de lançamento — nem todas as versões de DADman suportam todas as versões do SO.

### Atualizando DADman 10.1.2 — macOS

1. Baixe o novo instalador do DADman (`.pkg`) do portal de suporte do DAD ou sua conta do Avid Mestre.
2. Sair do DADman se estiver correndo.
3. Clique duas vezes no instalador e siga as instruções na tela. A nova versão substitui a instalação existente automaticamente.
4. Após a instalação, inicie o DADman e confirme o número da versão no **DADman > Sobre o DADman**.

### Atualizando DADman 10.1.3 — Windows

1. Baixe o novo instalador DADman (`.exe` ou `.msi`) do portal de suporte DAD.
2. Feche o DADman se ele estiver correndo.
3. Clique duas vezes no instalador e siga as instruções na tela. Clique em **Sim** se uma solicitação de Conta de Usuário aparecer.
4. Após a instalação, inicie o DADman e confirme o número da versão em **Ajuda> Sobre o DADman**.

> **NOTA:** a atualização do DADman não atualiza o hardware firmware. Trata-se de operações separadas, que exigem procedimentos separados. Sempre verifique as notas de lançamento para determinar se uma atualização de DADman recomenda ou requer uma atualização de firmware correspondente.

---

## 10.2 Atualizando Hardware Firmware

### 10.2.1 Crítico: Salvar configuração antes de atualizar

> **ATENÇÃO — As configurações serão perdidas**  
> \*\*Atualizações do Firmware redefinem todas as configurações armazenadas na unidade de hardware para os valores padrão de fábrica. \* Configurações de roteamento, ganhar configurações, rótulos de canal, perfis de monitor, predefinições de roteamento e todos os outros parâmetros armazenados são apagados permanentemente durante uma atualização de firmware. A única maneira de recuperar estas configurações é recarregar um Arquivo de Configurações do DADman (`.dms`).

**Antes de atualizar qualquer firmware de hardware:**

1. Abra o DADman e confirme que a unidade a ser atualizada está conectada e visível na Lista de Dispositivos
2. Vá para **Arquivo > Salvar Como…** e salve as configurações atuais em um arquivo `.dms` com um nome de arquivo claro (por exemplo, `StudioA_AXCenter_pre-update_2026-06.dms`).
3. Se um perfil de Monitor for carregado, salve-o separadamente: **Arquivo > Salvar Perfil Como…**
4. Confirme que ambos os arquivos são salvos em um local que possui backup.

> **DICA:** O aviso de atualização de firmware no DADman _(v5.7.2 e posterior)_ inclui um lembrete para fazer backup das configurações antes de prosseguir. Não descarte esta caixa de diálogo sem confirmar que o backup está completo.

### 10.2.2 obtendo Arquivos Firmware

Arquivos de firmware para todos os hardware de tecnologia DAD e NTP estão disponíveis no centro de download em [digitalaudiosupport.com](https://www.digitalaudiosupport.com). É necessária uma conta gratuita.

Baixe o arquivo de firmware para o seu modelo de hardware específico. Não use o firmware de um modelo em um modelo diferente - o firmware não é intermutável entre famílias de hardware.

### 10.2.3 Executando a atualização de Firmware via DADman

1. Abre o DADman. Confirme que a unidade a ser atualizada está conectada e visível no Lista de Dispositivos
2. Na lista de dispositivos, clique com o botão direito do mouse na unidade (Windows) ou use o botão Ação (macOS).
3. Selecione **Atualizar Firmware**.
4. Clique em **Reconhecer** ou **Continuar** quando o diálogo de lembrete de backup aparecer (depois de confirmar seu backup está completo).
5. Navegue até o arquivo de firmware baixado e selecione-o
6. A atualização de firmware começa. Um indicador de progresso mostra o status de atualização.
7. Não interrompa o poder da unidade ou feche o DADman durante a atualização. Uma atualização de firmware interrompida pode tornar a unidade indisponível e exigir recuperação de fábrica.
8. Após a conclusão da atualização, a unidade reinicia automaticamente. A Lista de Dispositivos mostra a unidade que se desconecta e reconecta. Espere o LED **Pronto** retornar a um verde sólido (até 60 segundos).
9. Confirme a nova versão do firmware na Lista de Dispositivos Recarregue seu arquivo de configurações `.dms` através de **Arquivo > Abrir…**.

> **ATENÇÃO:** Não interrompa o poder do hardware durante uma atualização de firmware sob qualquer circunstância. Se ocorrer uma falha de alimentação na meio da atualização, entre em contato com o suporte DAD para support@ntp.dk antes de ligar a unidade novamente.

### 10.2.4 - Referência do Histórico de Versão Firmware

Para um registro completo de versões de firmware, datas de lançamento e o que mudou em cada versão, consulte o **Histórico da Versão** documento compilado:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

As versões atuais de firmware para cada família de hardware no momento da publicação (DADman v5.8.2 compilação):

| Família de hardware                                             | Firmware atual                                           |
| --------------------------------------------------------------- | -------------------------------------------------------- |
| AX64, Centro AX, Núcleo 256, MTRX II, Controle 01/02            | v1.1.2.4 |
| Dante 256 IPCore                                                | v1.0.3.1 |
| AX32, DX32R, Penta 720, Penta 721s, Avid MTRX                   | v2.4.4.4 |
| Módulo Brooklyn 2 Dante                                         | v1.0.3.1 |
| Módulo Brooklyn 3 Dante                                         | v1.1.0.3 |
| Estúdio MTRX                                                    | v1.1.6.3 |
| format@@0 MTRX Studio Dante 64 IPCore | v1.0.3.1 |
| Cartão Dante                                                    | v1.0.3.1 |

---

## 10.3 Atualizando Dante Firmware

O Dante firmware (para módulos Dante e hardware IPCore em unidades do DAD) é atualizado separadamente do firmware do board principal, usando a ferramenta **Dante Updater** dentro de **Dante Controller** — não via DADman.

### Requisitos 10.3.1

- O **Dante Controller** precisa estar instalado no computador. Baixar de [audinate.com](https://www.audinate.com).
- A unidade DAD deve estar conectada à rede Dante e visível no Dante Controller.
- Baixe o arquivo de firmware apropriado do Dante (`.dnt`) do portal de suporte ao DAD. Arquivos Dante firmware são empacotados com cada versão de software do DADman.

### 10.3.2 Dante Firmware Update Procedure

1. Abra **Controlador Dante**.
2. Navegue até **Dispositivo > Dante Updater** para abrir a ferramenta Dante Updater.
3. Na Dante Updater **Configurações Avançadas**, ative **Permitir Imported Firmware**. Isto é necessário para carregar arquivos de firmware fornecidos pelo DAD.
4. Na Atualizador de Dante, selecione a aba **Biblioteca** e clique em **Arquivos Importados**.
5. Importe os arquivos de firmware baixados do portal de suporte DAD clicando em **Importar**.
6. Retorne ao menu **Home** do Dante Updater e selecione **Imported Firmware Files** no seletor de código do firmware.
7. Selecione a unidade DAD para ser atualizada na lista de dispositivos.
8. Siga as instruções na tela para iniciar a atualização.
9. Aguarde a atualização completar. O módulo Dante reinicia automaticamente.

> **NOTA:** Usuários do módulo Brooklyn 3 Dante: da firmware v1.1.0.3 (lançado em janeiro de 2026), o Brooklyn 3 suporta o protocolo **ST 2110** sem o DDM (Dante Domain Manager). Isso requer tanto o firmware Dante atualizado quanto a última versão do Dante Controller. Veja as notas de lançamento para detalhes.

---

## 10.4 Atualizando o driver do Thunderbolt 3

_Aplica-se apenas aos usuários AX64, AX Center, Core 256 Skip for Ethernet-only hardware._

O motorista DAD Thunderbolt 3 (DADDriverSetup) é atualizado separadamente de DADman. Atualizações de driver são lançadas juntamente com atualizações de firmware quando melhorias de funcionalidade do Thunderbolt estão incluídas.

### 10.4.1 macOS — Procedimento de atualização do driver

> **NOTA:** No macOS, a versão antiga do driver deve ser removida antes de instalar a nova. Instalar sobre um driver existente sem removê-lo primeiro não resulta em um driver que funcione corretamente no macOS Sequoia ou mais tarde.

1. Baixar o novo instalador de driver Thunderbolt 3 (`.pkg`) do [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Localize o **DADDriverSetup.app** na sua pasta Aplicações.
3. Mova-o para a Lixeira (**clique direito > Mover para a Lixeira**). O macOS exibe um aviso de que a extensão do sistema será removida — confirme para continuar.
4. Execute o novo instalador do driver : clique duas vezes no `.pkg` baixado e siga as instruções on-screen.
5. Quando solicitado, aprove a nova extensão do sistema em **Configurações do Sistema>Privacidade e Segurança**.
6. Reiniciar o computador quando solicitado.
7. Após a reinicialização, abra o **DADDriverSetup** de Aplicações e confirme o número da versão mostrado.
8. Conecte o seu hardware do Thunder\├Core e confirme que ele aparece na **configuração de Áudio MIDI**.

### 10.4.2 Windows — Procedimento de atualização do driver

1. Baixar o novo instalador do ASIO (`.msi`) de [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Sair de qualquer aplicativo de áudio usando o driver ASIO.
3. Abra **Configurações > Aplicativos** (ou **Painel de Controle > Programas**) e desinstale o driver DAD Thunderbolt 3 ASIO.
4. Reinicie o computador.
5. Execute o novo instalador do driver (`.msi`) e siga as instruções na tela.
6. Abra seu aplicativo de áudio e confirme que a versão atualizada do driver está visível nas configurações do dispositivo ASIO.

### 10.4.3 Versões atuais do driver

| Motorista                                                             | Plataforma | Versão atual                           |
| --------------------------------------------------------------------- | ---------- | -------------------------------------- |
| DAD Thunderbolt 3 Core Driver de áudio (DADdriver) | macOS      | v1.2.2 |
| Thunderbolt DAD 3 ASIO Driver                                         | Janelas    | v1.1.2 |

_Atual a partir da compilação DADman v5.8.2 (janeiro de 2026)._

---

## 10.5 verificando as versões atuais do Software e Firmware

### Versão do DADman 10.5.1

- **macOS:** **Menu do DADman > Sobre o DADman**
- **Windows:** **Ajude > Sobre o DADman**

O diálogo Sobre o DADman mostra o número e a compilação do DADman. De v5.7. , o botão **Copiar Informações** copia a informação completa de diagnóstico — versão do DADman, Versão do sistema operacional, lista de dispositivos e versões do driver Thunderbolt — para a área de transferência.

### 10.5.2 Versão de Hardware Firmware

A versão do firmware para cada unidade conectada é exibida na **Lista de Dispositivos** juntamente com o nome e ID da unidade. Passe o mouse sobre o campo da versão do firmware para detalhes adicionais onde disponível.

### 10.5.3 Versão do driver Thunderbolt

A versão do driver Thunderbolt está incluída na saída **Sobre DADman > Copiar Informações** _(v5.7.2 e mais tarde)_. Ele também pode ser encontrado em **DADDriverSetup** (macOS) ou na caixa de diálogo de configuração do ASIO (Windows).

### 10.5.4 - Notas de Lançamento e Histórico de Atualizações

Todas as notas de lançamento são arquivadas no [digitalaudiosupport.com](https://www.digitalaudiosupport.com) no centro de downloads. Um histórico de versão compilado também é mantido em:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

---

## Limpeza 10.6

**Materiais de limpeza:** Use apenas um pano leve e seco para limpar os painéis frontais e traseiros e o invólucro de todos os hardwares DAD. Não utilizar:

- Limpadores de líquidos, solventes ou limpezas de spray de qualquer tipo
- Panos ou almofadas abrasivas
- Ar comprimido direcionado para a abertura de ventilação ou papel de conector

**Conectores:** Não insira objetos na página do conector para fins de limpeza. Caso um conector pareça contaminado, consulte o pessoal do serviço qualificado.

> **ATENÇÃO:** Desconecte a unidade da fonte de alimentação principal antes de limpar. Não permitir que qualquer líquido digite o invólucro através de aberturas de ventilação ou apertures de conector.

**Telas e exibições:** Unidades com telas de painel frontal LCD (AX Center, MTRX Studio) podem ser limpas com um pano suave e seco. Não usa fluidos de limpeza de tela.

**Frequência:** Inspecione e limpe as aberturas do painel frontal e da ventilação como parte de uma agenda de manutenção regular — no mínimo, uma vez por ano num ambiente de estúdio limpo; mais frequentemente em ambientes com níveis de poeira elevados.

---

## Armazenamento 10.7

Se uma unidade de hardware for armazenada por um longo período (mais de algumas semanas), as seguintes condições devem ser mantidas:

| Parâmatro       | Condição                                                                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Temperatura** | − 20°C a +60°C (− 4°F a +140°F)                                                                                                                                                           |
| **Umidade**     | 10% a 80% de umidade relativa, não-condensação                                                                                                                                                               |
| **Embalagem**   | Armazenar embalagem original, se disponível. Se a embalagem original não estiver disponível, use embalagens anti-estáticas para qualquer placa de circuito exposta ou interfaces de conector |
| **Orientação**  | Armazene unidades de rackmount horizontalmente com o painel frontal virado para cima                                                                                                                         |
| **Energia**     | Desconectar da energia principal antes do armazenamento                                                                                                                                                      |

> **NOTA:** Permite que a unidade atinja a temperatura da sala antes de ligar após o armazenamento em condições de frio. Ligar uma unidade fria em um ambiente quente pode causar a condensação em componentes internos.

---

## 10.8 Fim da Vida e Lixeira

O hardware de tecnologia DAD / NTP e os cabos associados estão sujeitos à Directiva REEE Europeia (Resíduos Elétricos e Eletrônicos Equipamentos. A Directiva 2012/19/UE e os regulamentos nacionais e regionais equivalentes.

**Não elimine este equipamento em resíduos domésticos não classificados.**

No fim da vida, o equipamento deve ser:

- Retornado a um negociante ou distribuidor autorizado para reciclagem, ou
- Entregue a um ponto de coleta de reciclagem local autorizado, ou
- Retornado para tecnologia DAD / NTP para adequada eliminação

Contacte a tecnologia DAD / NTP para assistência em eliminação:  
Email: info@digitalaudio.dk  
Web: www.digitalaudio.dk

O símbolo REEE (bin de rodas cruzadas) no produto ou sua embalagem o identifica como sujeito a requisitos de recolha separados. Veja também [Matéria frontal, Seção FM.8 — Lixeira e REEE].

---

_[Aguardando engenharia do DAD:]_  
_— Temperatura do fã e temperatura do armazenamento por modelo confirmada / intervalos de umidade (valores acima são indicativos)_  
_— Intervalo de limpeza de filtro fã e procedimento para unidades com filtros de fãs substituíveis (se aplicável)_  
_— Procedimento de tipo e de substituição por modelo de hardware (para ser adicionado por modelo, como aplicável)_
