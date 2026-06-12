---
title: "Anexos"
sidebar_label: "Anexos"
sidebar_position: 13
---

# Anexos

> **Documento:** Usuário do DADman Manual  
> **Status do Capítulo:** Projecto v0. — App G (Glossário) concluído; App E (Changelog) compilado com código fonte; Apps A, B, C, F, pendente de engenharia DAD e legal; App H (Index) para gerar a partir do documento final  
> **Última atualização:** Junho de 2026

---

## Apêndice A — Especificações técnicas

Este apêndice fornece especificações técnicas completas para todo o hardware controlado por DADman na atual linha de produto ativa. As especificações são originadas da documentação oficial dos produtos da DDA. Todos os canais contarão refletem as figuras máximas na taxa amostral indicada; a contagem real depende de cartões de expansão instalados.

> **NOTA:** AX32 (BASE1/BASE2) não está mais em produção ativa e não está incluído aqui. Consulte o manual de hardware AX32 para especificações legadas.

---

### Centro AX A.1 (AXCNTR-ASE)

**Visão geral de produtos:** Compact 1U, interface de áudio modular de 2 slots com I/O analógico nativo. Ideal como peça do centro de estúdio para gravação, controle de monitor e aplicativos de áudio imersivos. Inclui a bordo do Thunderbolt 3, Dante, MADI e ADAT, com dois slots de cartão de expansão para I/O adicionais.

#### Matriz de roteamento

| Recurso                       | Capacidade      |
| ----------------------------- | --------------- |
| Matriz de roteamento          | 1,006 × 1,112   |
| Processador de simulação MON  | 512 × 64 canais |
| Autor SPQ                     | 1,024 filtros   |
| Slots do cartão expansionista | 2               |

#### I/O nativo

| Interface                                  | Contagem de canal                                          |
| ------------------------------------------ | ---------------------------------------------------------- |
| Microfone / Linha / Entrada de instrumento | 2 (selecionável por canal)              |
| Saídas de fones de ouvido estéreo          | 2                                                          |
| Stereo monitor outputs                     | 2                                                          |
| Trovoada 3                                 | 256 ch @ 48 & 96 kHz      |
| AoIP Dante                                 | 256 ch @ 48 kHz; 128 ch @ 96 kHz |
| MADI I/O                                   | 64 ch @ 48 kHz                                |
| ADICIONAR E/S                              | 16 ch / S/PDIF 2 ch                                        |
| DADlink (via SFP)       | Até 256 × 256 ch                                           |

#### Especificações analógicas

**Saída do headphone**

| Parâmatro                                   | Valor                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------- |
| Alcance dinâmico                            | > 120 dB                                                                               |
| THD+N (A-pesado)         | < −100 dB @ −3 dBFS                              |
| Cruzado                                     | < -110 dB                                                     |
| Impedância de carga                         | 18 – 600 Ω                                                                             |
| Impedância de saída                         | < 1 bis                                                       |
| Nível máximo de saída                       | Ajustável -80 a +19 dBu (passos de 0.1 dB)          |
| Latência de conversão @ 96 kHz | 450 s (filtros elevados) / 150 is (curto atraso) |

**Monitorar saída analógica**

| Parâmatro                           | Valor                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| Alcance dinâmico                    | > 128 dB                                                                     |
| THD+N (A-pesado) | < -115 dB @ − 3 dBFS                   |
| Cruzado                             | < −115 dB                                           |
| Nível máximo de saída               | Variável -60 para +24 dBu (passos 0.1 dB) |
| Latência de conversão               | 450 μs @ 96 kHz                                                 |

**Entrada do microfone / instrumento**

| Parâmatro                                      | Valor                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| Alcance dinâmico                               | > 124 dB                                                                 |
| THD+N (A-pesado)            | < -115 dB @ − 3 dBFS               |
| Cruzado                                        | < −115 dB                                       |
| Impedância de entrada                          | 2 k├(Mic) / > 1 Mnis (Instrumento) |
| Intervalo de ganho do microfone                | -21 a +100 dB (0.1 dB steps)          |
| EIN do microfone (A-pesado) | < -131 dBu                                      |
| Latência de conversão                          | 350 s @ 96 kHz                                              |

#### I/O Digital e Sincronização

| Parâmatro                   | Valor                                                                                                                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taxas de amostra suportadas | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| latência do sistema interno | 7 amostras (ajustável 3 - 31 amostras)                                                                                                                                          |
| DADlink format              | Ponto flutuante de 28-bit, latência de amostras zero                                                                                                                                               |
| Synchronisation sources     | Bloco de Palavra, Flash de Vídeo, Dante, ADAT, MADI                                                                                                                                                |
| Interface de rede           | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Trovoada 3                  | 2 × USB-C, link + 15 W potência por porta                                                                                                                                                          |

#### Especificações Elétricas

| Parâmatro                                   | Valor                                                               |
| ------------------------------------------- | ------------------------------------------------------------------- |
| Avaliação máxima do mains                   | 90 O                                                                |
| Tensão de entrada                           | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Ganhar fusível                              | 1 A T, conector IEC montado                                         |
| Conector de fichas                          | IEC 60309                                                           |
| Poder de seção digital                      | 15 O                                                                |
| Potência máxima do cartão de expansão       | 30 O                                                                |
| Poder do Trovão (máximo) | 2 × 15 W                                                            |

#### Especificações Mecânicas

| Parâmatro              | Valor                                                |
| ---------------------- | ---------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 1 RU (44,4 mm) |
| Profundidade do chassi | 320 mm / 12.6"                       |
| Largura corpo          | 435 mm / 17.2"                       |
| Peso                   | 3.2 kg / 7.1 lbs     |

#### Ambiente e Conformidade

| Parâmatro                | Valor                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperatura operacional  | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                  |
| Umidade                  | 20 – 85%, sem condensação                                                                                                                                                                                                                                                                                                                |
| Cumprimento EMC          | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Parte 15 Subparte B |
| Cumprimento de segurança | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                         |

---

### A.2 AX64 (AX64-BASE)

**Visão geral do produto:** Interface de áudio modular de alta contagem de canais 2U, 8-slot. Projetado para aplicativos de grande formato Studio e ao vivo que requerem uma extensão I/O. Suporta fornecimento de energia redundante opcional (AX64-RPS).

#### Matriz de roteamento

| Recurso                       | Capacidade      |
| ----------------------------- | --------------- |
| Matriz de roteamento          | 1,872 × 1,872   |
| Processador de simulação MON  | 512 × 64 canais |
| Autor SPQ                     | 1,024 filtros   |
| Slots do cartão expansionista | 8               |

#### I/O nativo

| Interface                                          | Contagem de canal                                                |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| Trovoada 3                                         | 256 ch @ 48 & 96 kHz            |
| AoIP Dante                                         | 256 ch @ 48 kHz; 128 ch @ 96 kHz       |
| MADI I/O                                           | 64 ch @ 48 kHz                                      |
| ADICIONAR E/S                                      | 16 ch / S/PDIF 2 ch                                              |
| Cartões de expansão (máx)       | Até 1,024 × 1,024 ch                                             |
| DADlink / MADI via SFP (máximo) | Até 256 × 256 DADlink ou 128 × 128 MADI ch @ 48 kHz |

#### I/O Digital e Sincronização

| Parâmatro                   | Valor                                                                                                                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taxas de amostra suportadas | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| latência do sistema interno | 7 amostras (ajustável 3 - 31 amostras)                                                                                                                                          |
| DADlink format              | Ponto flutuante de 28-bit, latência de amostras zero                                                                                                                                               |
| Synchronisation sources     | Word Clock, Video Black Burst, Dante, ADAT, MADI, DADI, DADlink                                                                                                                                    |
| Interface de rede           | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Trovoada 3                  | 2 × USB-C, link + 15 W potência por porta                                                                                                                                                          |

#### Especificações Elétricas

| Parâmatro                                   | Valor                                                                              |
| ------------------------------------------- | ---------------------------------------------------------------------------------- |
| Conexão de energia                          | Entrada única ou dupla; PSU dupla sempre ajustada                                  |
| Avaliação máxima do mains                   | 120 B                                                                              |
| Tensão de entrada                           | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz                |
| Ganhar fusível                              | format@@0 1.5 A T, IEC connector montado |
| Conector de fichas                          | IEC 60309                                                                          |
| Poder de seção digital                      | 15 O                                                                               |
| Potência máxima do cartão de expansão       | 70 O                                                                               |
| Poder do Trovão (máximo) | 2 × 15 W                                                                           |

#### Especificações Mecânicas

| Parâmatro              | Valor                                                                |
| ---------------------- | -------------------------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 2 RU (88.9 mm) |
| Profundidade do chassi | 345 mm / 13.6"                                       |
| Largura corpo          | 435 mm / 17.2"                                       |
| Peso                   | 5.5 kg / 12.2 lbs                    |

#### Ambiente e Conformidade

| Parâmatro                | Valor                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperatura operacional  | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                  |
| Umidade                  | 20 – 85%, sem condensação                                                                                                                                                                                                                                                                                                                |
| Cumprimento EMC          | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Parte 15 Subparte B |
| Cumprimento de segurança | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                         |

---

### Núcleo 256 (CORE256-BASE) A.3

**Visão geral do produto:** Compact unidade de meia rack largura (toda a altura 1U) combinando Thunderbolt 3, Dante, MADI e ADAT I/O com uma grande matriz de roteamento interno. Montarias em uma rack padrão 19" através da opção C256-2MOUNT-BRACKET (uma ou duas unidades por 1U). Desenvolvido por 12 V DC.

#### Matriz de roteamento

| Recurso                      | Capacidade      |
| ---------------------------- | --------------- |
| Matriz de roteamento         | 848 × 848       |
| Processador de simulação MON | 512 × 64 canais |
| Autor SPQ                    | 1,024 filtros   |

#### I/O nativo

| Interface                                          | Contagem de canal                                                |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| Trovoada 3                                         | 256 ch @ 48 & 96 kHz            |
| AoIP Dante                                         | 256 ch @ 48 kHz; 128 ch @ 96 kHz       |
| MADI I/O                                           | 64 ch @ 48 kHz                                      |
| ADICIONAR E/S                                      | 16 ch / S/PDIF 2 ch                                              |
| DADlink / MADI via SFP (máximo) | Até 256 × 256 DADlink ou 128 × 128 MADI ch @ 48 kHz |

#### I/O Digital e Sincronização

| Parâmatro                   | Valor                                                                                                                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taxas de amostra suportadas | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| latência do sistema interno | 7 amostras (ajustável 3 - 31 amostras)                                                                                                                                          |
| DADlink format              | Ponto flutuante de 28-bit, latência de amostras zero                                                                                                                                               |
| Synchronisation sources     | Word Clock, Video Black Burst, Dante, ADAT, MADI, DADI, DADlink                                                                                                                                    |
| Interface de rede           | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Trovoada 3                  | 2 × USB-C, link + 15 W potência por porta                                                                                                                                                          |

#### Especificações Elétricas

| Parâmatro                                   | Valor                                                                                   |
| ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Tensão de abastecimento                     | 12 V DC                                                                                 |
| Conector DC                                 | Barril 5.5 × 2.5 mm (ponta positiva) |
| Entrada máxima atual                        | 5 A                                                                                     |
| Avaliação máxima do mains                   | 60 O                                                                                    |
| Poder de seção digital                      | 15 O                                                                                    |
| Poder do Trovão (máximo) | 2 × 15 W                                                                                |

#### Especificações Mecânicas

| Parâmatro              | Valor                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| Fator de formulário    | Largura do meio-rack, 1 RU (44,4 mm) — requer C256-2MOUNT-BRACKET para 19" rack |
| Profundidade do chassi | 231 mm / 9.1"                                                                      |
| Largura corpo          | 211 mm / 8.3"                                                                      |
| Peso                   | 1.3 kg / 2.9 lbs                                                   |

#### Ambiente e Conformidade

| Parâmatro                | Valor                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperatura operacional  | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                  |
| Umidade                  | 20 – 85%, sem condensação                                                                                                                                                                                                                                                                                                                |
| Cumprimento EMC          | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Parte 15 Subparte B |
| Cumprimento de segurança | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                         |

---

### A.4 Penta 720 (PENTA720-BASE)

**Visão geral:** Roteador de áudio modular de 8 caracteres em um sub-rack de 19" com baías de cartões hot-swap, front-access com front. Projetado para instalação de difusão e mídia. O I/O padrão inclui 8 pares AES3 estéreo (16 canais) e uma porta MADI. Módulo Dante opcional (MOD-DANTE-BK3) e módulo dual MADI/DADlink (MOD-MADI-DADLNK) disponível. Não inclui o Thunderbolt 3.

#### Matriz de roteamento

| Recurso                       | Capacidade                                                            |
| ----------------------------- | --------------------------------------------------------------------- |
| Matriz de roteamento          | 1,424 × 1,424                                                         |
| Processador de simulação MON  | 256 × 32 canais                                                       |
| Slots do cartão expansionista | 8 (até 6 cartões analógicos ou 8 cartões digitais) |

#### I/O nativo

| Interface                                          | Contagem de canal                                                     |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| AES3 I/O                                           | 16 ch @ 48 kHz (8 stereo pairs)       |
| MADI I/O                                           | 64 ch @ 48 kHz                                           |
| Cartões de expansão (máx)       | Até 1,024 × 1,024 ch                                                  |
| DADlink / MADI via SFP (máximo) | Até 256 × 256 DADlink ou 128 × 128 MADI/HotLink @ 48 kHz |

#### I/O Digital e Sincronização

| Parâmatro                   | Valor                                                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Taxas de amostra suportadas | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fixo em 48 kHz; opção de Dante em 44,1 – 192 kHz |
| latência do sistema interno | 7 amostras (ajustável 3 - 31 amostras)                                                                         |
| DADlink format              | Ponto flutuante de 28-bit, latência de amostras zero                                                                              |
| Synchronisation sources     | Word Clock, Video Black Burst, AES11, AES3, MADI, DADlink, HotLink                                                                |
| Interface de rede           | 1000BASE-T, RJ45                                                                                                                  |

#### Especificações Elétricas

| Parâmatro                             | Valor                                                               |
| ------------------------------------- | ------------------------------------------------------------------- |
| Conexão de energia                    | Entrada dupla, PSU dupla                                            |
| Avaliação máxima do mains             | 90 O                                                                |
| Tensão de entrada                     | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Ganhar fusível                        | 1 A T, conector IEC montado                                         |
| Conector de fichas                    | IEC 60309                                                           |
| Poder de seção digital                | 15 O                                                                |
| Potência máxima do cartão de expansão | 65 O                                                                |

#### Especificações Mecânicas

| Parâmatro              | Valor                                                                |
| ---------------------- | -------------------------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 2 RU (88.9 mm) |
| Profundidade do chassi | 350 mm / 13.8"                                       |
| Largura corpo          | 435 mm / 17.2"                                       |
| Peso                   | 5.0 kg / 11.0 lbs                    |
| Arrefecimento          | Fãs internos de 2 ×                                                  |

#### Ambiente e Conformidade

| Parâmatro                | Valor                                           |
| ------------------------ | ----------------------------------------------- |
| Temperatura operacional  | 0 – 45 °C / 32 – 113 °F                         |
| Umidade                  | 20 – 85%, sem condensação                       |
| Cumprimento EMC          | EN 55103-1, EN 55103-2, FCC Parte 15 Subparte B |
| Cumprimento de segurança | EN 60950-1:2006                 |

---

### A.5 Penta 721S (PENTA721S-BASE)

**Visão geral de produtos:** Interface de áudio compacta 2U, roteador e placa única. Inclui o módulo Dante padrão e o módulo dual MADI/DADlink como a fábrica equipada. Projetado para transmissão e instalação de mídia onde uma pegada menor é necessária. Um cartão de expansão para I/O adicional.

#### Matriz de roteamento

| Recurso                       | Capacidade      |
| ----------------------------- | --------------- |
| Matriz de roteamento          | 528 × 528       |
| Processador de simulação MON  | 256 × 32 canais |
| Slots do cartão expansionista | 1               |

#### I/O nativo

| Interface                                      | Contagem de canal                                                     |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| AES3 I/O                                       | 16 ch @ 48 kHz (8 stereo pairs)       |
| MADI I/O                                       | 64 ch @ 48 kHz                                           |
| AoIP Dante                                     | 64 ch @ 48 kHz                                           |
| Cartão de expansão (máximo) | Até 128 × 128 ch adicional                                            |
| DADlink / MADI via SFP                         | Até 256 × 256 DADlink ou 128 × 128 MADI/HotLink @ 48 kHz |

#### I/O Digital e Sincronização

| Parâmatro                   | Valor                                                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Taxas de amostra suportadas | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fixed 48 kHz; Dante 44.1 – 192 kHz |
| latência do sistema interno | 7 amostras (ajustável 3 - 31 amostras)                                                                           |
| DADlink format              | Ponto flutuante de 28-bit, latência de amostras zero                                                                                |
| Synchronisation sources     | Word Clock, Video Black Burst, AES11, Dante, MADI, DADI, DADlink, HotLink                                                           |
| Interface de rede           | 1000BASE-T, RJ45                                                                                                                    |

#### Especificações Elétricas

| Parâmatro                             | Valor                                                               |
| ------------------------------------- | ------------------------------------------------------------------- |
| Conexão de energia                    | Entrada dupla, PSU dupla                                            |
| Avaliação máxima do mains             | 45 O                                                                |
| Tensão de entrada                     | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Ganhar fusível                        | 1 A T, conector IEC montado                                         |
| Conector de fichas                    | IEC 60309                                                           |
| Poder de seção digital                | 15 O                                                                |
| Potência máxima do cartão de expansão | 15 O                                                                |

#### Especificações Mecânicas

| Parâmatro              | Valor                                                                |
| ---------------------- | -------------------------------------------------------------------- |
| Fator de formulário    | 19" rack montante, 2 RU (88.9 mm) |
| Profundidade do chassi | 320 mm / 12.6"                                       |
| Largura corpo          | 435 mm / 17.2"                                       |
| Peso                   | 3.3 kg / 7.3 lbs                     |
| Arrefecimento          | Fã de ruído interno de 1 x                                           |

#### Ambiente e Conformidade

| Parâmatro                | Valor                                           |
| ------------------------ | ----------------------------------------------- |
| Temperatura operacional  | 0 – 45 °C / 32 – 113 °F                         |
| Umidade                  | 20 – 85%, sem condensação                       |
| Cumprimento EMC          | EN 55103-1, EN 55103-2, FCC Parte 15 Subparte B |
| Cumprimento de segurança | EN 60950-1:2006                 |

---

### A.6 Júnior Controlador\➲ Pack Controlador (JUNIOR-ASE)

**Visão geral de produtos:** Unidade de controle compacto PoE-powered para controle prático e direto do Controle DADman de Encaminhamento\├Pack de pré-definições e baldes. Conecta diretamente através da Ethernet em qualquer unidade Thunder\├Core. Compatível com CORE256-BASE, AXCNTR-BASE e AX64-BASE. Opera independentemente do software DADman uma vez configurado.

#### Funcionalidades

- 6 botões LED-illuminated RGB
- 6 RGB status LEDs
- 6 caracteres de exibição OLED por botão
- Conexão IP direta com a unidade Thunder\├Core

#### Especificações

| Parâmatro                                   | Valor                                                                                                                                                                                                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interface de rede                           | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                         | IEEE 802.3af, classe 0                                                                                                                                                                                                                                               |
| Entrada de energia DC                       | 12 V, 5.5/2.1 mm barril (tip +5 V)                                                                                                                                                                                                |
| Consumo de energia (máx) | 2.5 O                                                                                                                                                                                                                                                                |
| cotas                                       | 116 × 48 × 40 mm / 4,6" × 1,9" × 1,6"                                                                                                                                                                                                                                                |
| Peso                                        | 0.16 kg / 0.35 lbs                                                                                                                                                                                                                                   |
| Temperatura operacional                     | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Umidade                                     | 20 – 85%, sem condensação                                                                                                                                                                                                                                                            |
| Cumprimento EMC                             | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Cumprimento de segurança                    | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

### A.7 MOM — Monitorar Módulo Operacional (MOM-BASE)

**Visão geral do produto:** Controlador remoto PoE-powered com codificador de volumes, 10 botões definíveis pelo usuário através de 4 camadas (até 40 funções) e entrada de GPI externa para fala de rodapé. Conecta-se via Ethernet para o DADman para controle de qualquer dispositivo NTP/DAD com a capacidade PRO\™️.

#### Funcionalidades

- Codificador rotacional grande de volume com anel de 27 LED (0,5 dB resolução)
- Chaves definíveis pelo usuário × 4 camadas (40 totais)
- Funções pré-configuradas: 3 conjuntos de alto-falantes, 3 fontes, Talkback, Corte, Nível de referência
- Entrada GPI (mini-jack) de 3.5 mm para footswitch externo

#### Especificações

| Parâmatro                                   | Valor                                                                                                                                                                                                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interface de rede                           | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                         | IEEE 802.3af, classe 0                                                                                                                                                                                                                                               |
| Entrada de energia DC                       | 5 V, 5,5/2.1 mm barril (tip +5 V)                                                                                                                                                                                                                 |
| GPI input                                   | mini-jack de 3.5 mm                                                                                                                                                                                                                                                  |
| Consumo de energia (máx) | 5 O                                                                                                                                                                                                                                                                                  |
| cotas                                       | 172 × 110 × 50 mm / 6.8" × 4.3" × 2.0"                                                                                                                                                                                               |
| Peso                                        | 1.0 kg / 2.2 lbs                                                                                                                                                                                                                                     |
| Temperatura operacional                     | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Umidade                                     | 20 – 85%, sem condensação                                                                                                                                                                                                                                                            |
| Cumprimento EMC                             | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Cumprimento de segurança                    | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

## Appendix B - Pinças de conector

_[Placeholder: pinçar diagramas para todos os tipos de conector em todos os equipamentos suportados — XLR, DB25, BNC (MADI), BNC (Word Clock), RJ45, SFP, Thunderbolt 3, USB. A ser fornecido por engenharia DAD.]_

---

## Apêndice C — Formatos e Protocolos de áudio suportados

Esse apêndice resume os formatos de áudio e os protocolos suportados por hardware controlado por DADman, incluindo contagem de canais a cada taxa de amostra. Todas as figuras são máximas; a contagem real de canais depende dos cartões de expansão específicos instalados em cada unidade.

> **Observação:** O canal conta em interfaces com divisões temporais múltiplas (MADI, ADAT, DADLink) diminuem em taxas amostrais mais altas porque mais largura de banda é consumida por canal. Contagens de canais Dante e AES67 dependem das configurações de rede e Dante Controller.

---

### MADI C.1 (AES10)

MADI é suportada em todas as famílias de hardware de tecnologia DAD / NTP como uma opção de cartão de expansão (cartão MADI visual), MADI Module) ou embutido em unidades de seleção.

**Capacidade do canal por porta MADI:**

| Taxa de amostragem              | Modo legado (56-ch frame) | Modo de alta velocidade (64-ch frame) |
| ------------------------------- | -------------------------------------------- | -------------------------------------------------------- |
| 44.1 / 48 kHz   | 56 canais                                    | 64 canais                                                |
| 88.2 / 96 kHz   | 28 canais                                    | 32 canais                                                |
| 176.4 / 192 kHz | 14 canais                                    | 16 canais                                                |

**Padrão:** AES10-2008 (MADI Serial) e AES10-2003 (extensão MADI-E).

**Interfaces físicas:**

- BNC coaxial (75 anos) - comprimento máximo do cabo aproximadamente 100 m (eixo padrão)
- SFP óptico — modo múltiplo ou modo único dependendo do tipo de módulo SFP; até vários quilômetros com modo single-SFP

**Modos da Taxa de Quadros:**

- **Modo legado:** Comprimento de quadro fixado no tamanho do quadro de 48 kHz. Com 88.2/96 kHz, os pares de canais adjacentes são multiplos no tempo (S/MUX2), reduzindo a contagem do canal. Em 176.4/192 kHz, grupos de quatro canais são multifacetados (S/MUX4). Compatível com a maioria dos equipamentos MADI.
- **Modo de alta velocidade:** O comprimento do quadro segue a taxa amostral real, reduzindo a latência em 88,2 kHz e superior. Ambas as extremidades do link MADI devem ser definidas para o mesmo modo.

> **IMPORTANTE:** Ambas as extremidades de cada conexão MADI devem usar o mesmo modo Taxa de Quadros e configuração Tamanho do Quadro. A incompatibilidade não resultará em erros de áudio ou relógio. Verifique as configurações na aba Conf em ambos os dispositivos conectados.

---

### ADICIONAR C.2 (S/PDIF, ADAT Lightpipe)

Interfaces ADAT ópticas são suportadas em cartões de expansão de hardware selecionados do DAD. ADAT usa S/MUX (multiplo multiplexo) para carregar áudio a maiores taxas de amostra.

| Taxa de amostragem              | Canais (por porta ADAT) | Modo        |
| ------------------------------- | ------------------------------------------ | ----------- |
| 44.1 / 48 kHz   | 8 canais                                   | ADAT padrão |
| 88.2 / 96 kHz   | 4 canais                                   | S/MUX2      |
| 176.4 / 192 kHz | 2 canais                                   | S/MUX4      |

**Interface física:** conector óptico TOSLINK.

**Padrão:** Alesis ADAT protocolo óptico.

> **NOTA:** ADAT não está definido acima de 96 kHz no padrão original. Suporte S/MUX4 em 176.4/192 kHz requer que ambos os dispositivos conectados suportem esta extensão. Verificar compatibilidade com equipamentos conectados.

---

### C.3 AES3 (AES/EBU)

O áudio digital AES3 transporta dois canais por par de cabo (um par estéreo). O hardware DAD normalmente fornece AES3 I/O via conectores de rompimento DB25, cada um carregando oito pares estéreo (16 canais).

| Taxa de amostragem              | Canais por par AES3                             | Canais por DB25 (8 pares) |
| ------------------------------- | ----------------------------------------------- | -------------------------------------------- |
| 44.1 / 48 kHz   | 2                                               | 16                                           |
| 88.2 / 96 kHz   | 2 _(Duplo arame/Duplo Wire)_ | 16                                           |
| 176.4 / 192 kHz | 2 _(Fechada do quadro)_      | 16                                           |

**Standard:** AES3-2009.

**Interfaces físicas:**

- XLR Balanceado (profissional — padrão AES3)
- DB25 surto (via TASCAM padrão do setor ou Yamaha pinout wiring)

**Operação de alta amostra:** At 88.2/96 kHz, algumas implementações da AES3 usam **Cabo duplo** (dois pares AES3 por canal para maior largura de banda). No 176.4/192 kHz, o **Wire** usa quatro pares por canal. Os detalhes de implementação AES3 do DADman são do tipo "hardware" — consulte o guia de instalação de hardware para a unidade específica.

---

### C.4 Dante (Audinado)

Dante é um protocolo áudio-sobre-IP que transporta áudio sobre a infraestrutura padrão da Ethernet. Unidades de DADman suportam Dante através de cartões de expansão e módulos integrados.

**Capacidade do canal pela implementação de Dante:**

| Implementação                                                                                             | Máximo de canais (Tx + Rx) | Hardware típico                                        |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------ |
| Cartão de Expansão Dante (Brooklyn 2/3)                                                | 128 Tx + 128 Rx (per card) | AX32 · DX32R · Penta 720 · Penta 721s · MTRX · MTRX II |
| Módulo Dante 64-Channel                                                                                   | 64 Tx + 64 Rx                                 | AX32 · Penta 720 · Penta 721s · MTRX                   |
| Dante 256 IPCore _(v5.8.1.6 firmware)_ | 256 Tx + 256 Rx                               | AX64 · Centro AX · Núcleo 256 · MTRX II                |
| Cartão Dante _(standalone)_                                                            | 512 Tx + 512 Rx                               | Selecione unidades da família 1                        |

**Contadores de canais são taxa de amostragem independente** - Canais Dante não são reduzidos com taxas amostrais mais altas. Em vez disso, taxas de amostragem maiores consomem mais banda de rede por canal. A capacidade de rede deve ser dimensionada em conformidade.

**Requisitos de rede:**

- Gigabit Ethernet recomendado para todas as instalações Dante
- Troca de rede dedicada recomendada para tráfego de áudio
- Os interruptores devem suportar multicast (recomendado bisbilhoteiro IGMP)
- PTP (IEEE 1588) usado para sincronização de relógio em todos os dispositivos Dante

**Protocolos e padrões:**

- Protocolo Dante nativo (Audinate proprietário)
- Modo de interoperabilidade AES67 (reduz a contagem de canais para limites AES67)
- ST 2110-30 _(via DDM do firmware v1.1.2.4; Brooklyn 3 sem DDDM da v1.1.0.3)_

---

### DADLink C.5

DADLink é uma interconexão de ótica patenteada DAD usando o slot do módulo mini MADI com transceiver óptico SFP. Ele proporciona uma interconexão direta de unidade para unidade ultra-latência.

| Taxa de amostragem              | Canais por conexão DADLink |
| ------------------------------- | -------------------------- |
| 44.1 / 48 kHz   | 128                        |
| 88.2 / 96 kHz   | 64                         |
| 176.4 / 192 kHz | 32                         |

**Latência:** Aproximadamente 1 microsegundo (efetivamente zero — todas as entradas e saídas através de unidades conectadas a DADLink estão gradualmente alinhadas, desde que o bloqueio esteja correto).

**Interface física:** Optical SFP — módulos de transceiver SFP compatíveis são necessários em ambos os finais.

**Equipamento compatível:** AX64 · AX Center · Core 256 · MTRX II · AX32 · DX32R · Penta 720 · Penta 721s _(Família 1 de firmware v2. .1.2)_

**Requisito de sincronização:** Unidades ligadas a DADLink devem compartilhar um relógio comum. Use DADLink ou Word Clock como fonte de sincronização entre unidades.

---

### Trovoada C.6 3 (Cordeiro do Trovão\Portugal)

O áudio do Thunderbolt 3 I/O é suportado exclusivamente no Thunder\├Core hardware de geração (AX64, AX Center, Core 256) através do driver DAD Thunderbolt 3.

| Hardware      | Trovoada 3 canais | Observações      |
| ------------- | ----------------- | ---------------- |
| **AX64**      | 64 Tx + 64 Rx     | Às 44,1 / 48 kHz |
| **AX Centro** | 128 Tx + 128 Rx   | Às 44,1 / 48 kHz |
| **Core 256**  | 256 Tx + 256 Rx   | Às 44,1 / 48 kHz |

**A taxas amostrais mais altas:** A contagem de canais do Thunderbolt 3 reduz proporcionalmente. Ao longo de 88,2/96 kHz, o número é metade; às 176.4/192 kHz trimestre.

**Taxis:**

- macOS: Driver de Áudio Core (DADDriverSetup) — versão atual v1.2.2
- Janelas: ASIO driver — versão atual v1.1.2

**Cabo:** cabo certificado do Thunderbolt 3 classificado como mínimo em 20 Gbps. Cabos passivos suportam até aproximadamente 0,5 m; cabos ópticos ativos suportam execuções mais longas.

---

### AES67 C.7 e ST 2110-30

AES67 e ST 2110-30 são padrões de áudio IP suportados pelas interfaces Dante e Ravena em hardware compatível com o DAD.

| Padrão              | Transporte                       | Contagem de canal                               | Disponível desde                                                                                                                        |
| ------------------- | -------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **AES67**           | IP (camada 3) | Até 512 (dependente da rede) | Todos os hardwares equipados com equipamento _(modo de interoperabilidade AES67)_                                    |
| **ST 2110-30**      | IP (camada 3) | Até 512 (dependente da rede) | firmware v5.8.2 via DDM; Brooklyn 3 sem DDM da v1.1.0.3 |
| **Ravenna / AES67** | IP (camada 3) | Até 512 (dependente da rede) | Cartão Ravenna _(opção de hardware v5.8.2)_                                          |

**Requisitos de rede para ST 2110-30:** Interruptores gerenciados por profissionais com PTP (IEEE 1588) de tempo de hardware. Espreitamento IGMP necessário. Consulte SMPTE TR-2110 para orientação de arquitetura de rede.

---

### Formatação de hardware C.8 Matriz

A seguinte matriz mostra quais formatos estão disponíveis em cada família de hardware como padrão ou através de cartões de expansão. ✓ = padrão / embutido; E = opção cartão de expansão; — = não suportado.

| Formato                                    | AX Centro | Núcleo 256 | AX64 | AX32 | DX32R | Penta 720 | Penta 721s | MTRX II | Estúdio MTRX |
| ------------------------------------------ | --------- | ---------- | ---- | ---- | ----- | --------- | ---------- | ------- | ------------ |
| MADI (coaxial)          | E         | E          | E    | ✓    | ✓     | ✓         | ✓          | ✓       | —            |
| MADI (SSFP)             | E         | E          | E    | E    | —     | E         | E          | E       | —            |
| ADICIONAR                                  | E         | E          | E    | E    | —     | —         | —          | E       | ✓            |
| AES3 (cartão analógico) | E         | E          | E    | E    | ✓     | E         | E          | E       | ✓            |
| Dante                                      | E         | E          | E    | E    | ✓     | E         | ✓          | ✓       | ✓            |
| Dante 256 IPCore                           | ✓         | ✓          | ✓    | —    | —     | —         | —          | ✓       | —            |
| DADLink                                    | E         | E          | E    | E    | E     | E         | E          | E       | —            |
| Trovoada 3                                 | ✓         | ✓          | ✓    | —    | —     | —         | —          | —       | —            |
| Cartão da Coroa                            | E         | E          | E    | —    | —     | —         | —          | —       | —            |
| AES67                                      | E         | E          | E    | E    | ✓     | E         | ✓          | ✓       | ✓            |
| ST 2110-30                                 | E         | E          | E    | E    | —     | —         | —          | ✓       | —            |
| Palavra relógio I/O                        | ✓         | ✓          | ✓    | ✓    | ✓     | ✓         | ✓          | ✓       | ✓            |

_E = requer cartão de expansão ou módulo. As opções de expansão variam de acordo com a geração de produtos e slots de cartão disponíveis. Consulte o guia de instalação de hardware específico para obter detalhes de configuração de slot._

> **NOTA:** Esta matriz reflete capacidades de hardware como a compilação DADman v5.8.2 (janeiro de 2026). Novas opções de cartão de expansão podem ser introduzidas em revisões de firmware ou hardware subsequentes. Verifique [digitalaudiosupport.com](https://www.digitalaudiosupport.com) para o configurador atual do produto.

---

## Apêndice D — Atalhos de teclado

Veja [Capítulo 7, Seção 7.10.3] para a referência completa de atalho de teclado.

---

## Apêndice E — Registro de alterações

Esse apêndice documenta que o software DADman lança de 2019 para a versão coberta por este manual. Os lançamentos são listados os mais recentes primeiro. Cada entrada mostra a versão do software, as versões de firmware do companheiro, novas funcionalidades e correções de erros notáveis. Versões somente de Firmware-only são observadas separadamente.

Notas de lançamento completas, incluindo registros detalhados de alterações de firmware, estão disponíveis no Centro de Downloads em [digitalaudiosupport.com](https://www.digitalaudiosupport.com).

---

### Versão do DADman v5.8.2 2 2 — 2026-01-19 _(versão atual)_

| Componente                                                      | Versão                                                                                    |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                                                          | v5.8.2 b2 — macOS 10.13–15, Windows 10/11 |
| Driver TB3 — macOS                                              | v1.2.2 _(sem mudança)_                 |
| Driver TB3 — Windows                                            | v1.1.2 _(sem alteração)_               |
| Firmware Thunder\➲ Core                                         | v1.1.2.4                                  |
| Dante 256 IPCore                                                | v1.0.3.1                                  |
| Firmware da Família 1                                           | v2.4.4.4                                  |
| Módulo Brooklyn 2 Dante                                         | v1.0.3.1                                  |
| Módulo Brooklyn 3 Dante                                         | v1.1.0.3                                  |
| Firmware MTRX Studio                                            | v1.1.6.3                                  |
| format@@0 MTRX Studio Dante 64 IPCore | v1.0.3.1                                  |
| Firmware do Dante Card                                          | v1.0.3.1 _(novo)_      |

**Novo no DADman:**

- Cartão Ravenna agora suportado no DADman
- Cartão Dante e cartão Ravenna: a taxa de amostra de rede agora é configurável quando a SRC é habilitada
- EuCon: número de metros aumentou para 16

**Novo no firmware:**

- Todos os firmware do Dante atualizados para as versões mais recentes
- ST 2110-30 e AES67 aprimorado disponível para todas as implementações Dante via DDM
- Módulo Brooklyn 3: ST 2110-30 agora disponível sem DDM (requer controle Dante mais recente)
- Suporte para o novo cartão Ravenna (RAVENNA / AES67 / ST 2110-30)
- Controle de Dynaudio 02 agora suportado junto com controle 01

**Correções de erros:**

- macOS: Menu Talkback não mostrando o valor selecionado correto na caixa de diálogo do perfil Monitor
- EuCon: Nível da sala de controle não reativado após alternar o nível de Ref desativado
- macOS: Estabilidade de comunicação do Thunderbolt melhorada
- Várias correções menores

---

### DADman v5.8.1 build 6 — 2025-05-01

| Componente              | Versão                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| DADman                  | v5.8.1 b6 — macOS 10.13–15, Windows 10/11   |
| Driver TB3 — macOS      | v1.2.2 _(sem mudança)_                   |
| Driver TB3 — Windows    | v1.1.2 _(sem alteração)_                 |
| Firmware Thunder\➲ Core | v1.1.1                                                      |
| Firmware da Família 1   | v2.4.5.1                                    |
| Firmware MTRX Studio    | v1.1.5.1 _(sem mudança)_ |

**Novo no DADman:**

- **Grupos de Ganho do Microfone** — múltiplos canais de entrada do microfone podem ser vinculados para que o ajuste de ganho ou silenciado em qualquer canal mova todos os canais do grupo simultaneamente, preservando offsets relativos entre canais. Suportado em todos os produtos **exceto MTRX Studio**. Requer atualização de firmware. Poder e inversão de fase fantasma não são agrupados. Segure Alt/Opção para ajustar um canal individual dentro de um grupo sem afetar os outros.
- Control\➲ Pack: Predefinições de roteamento agora podem ser reordenadas dentro da caixa de diálogo de predefinição de roteamento _(requer atualização de firmware)_
- Control\web+graphie://ka-perseus-graphie.s3.amazonaws.com/Pack: Status do gatilho agora é exibido na caixa de diálogo de configuração de roteamento
- macOS: Colunas da Lista de dispositivos podem ser ordenadas clicando nos cabeçalhos de coluna

**Correções de erros:**

- Control\「Pacote: Várias correções para roteamento de caixa de diálogo Predefinição
- Janelas: Roteamento gráficos do medidor predefinido melhorados
- Janela: Colapso ao lidar com MIDI resolvido
- macOS: Gráficos de issues em telas escalonadas com janelas DADman grandes
- macOS: Erro na atualização da cor do status no diálogo de roteamento de predefinição

---

### Versão somente de firmware — 2025-01-09

| Componente              | Versão                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------- |
| DADman                  | v5.8.0 b8 _(sem mudança)_            |
| Firmware Thunder\➲ Core | v1.1.0.4 _(bug fix)_ |

**Correções de erros no firmware:**

- AX Center: erro de tempo do chipset ADC que impediu que o áudio passasse em alguns casos - corrigido
- AX Center Dante Card: Sincronização externa com o cartão de rede Dante não configurada corretamente - corrigida

---

### Compilação DADman v5.8.0 8 — 2024-12-01

| Componente              | Versão                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| DADman                  | v5.8.0 b8 — macOS 10.13–15, Windows 10/11 |
| Driver TB3 — macOS      | v1.2.2 _(novo)_                        |
| Driver TB3 — Windows    | v1.1.2 _(sem alteração)_               |
| Firmware Thunder\➲ Core | v1.1.0.3                                  |
| Firmware da Família 1   | v2.4.1                                                    |
| Firmware MTRX Studio    | v1.1.5.1                                  |

**Novo no DADman:**

- **Control\├Pack** — Sistema de pré-ajuste de roteamento para unidades Thunder\├Core (AX64, AX Center, Núcleo 256) com até 32 presets por unidade, cada uma suportando até quatro baldes de entrada alternáveis. Inclui a mudança automática através da detecção de nível de sinal, integridade do tom de piloto AE6 e gatilho de conectividade da porta. Requer atualização de firmware.
- Suporte para CARD-2MADI-SO (720251A) — Cartão MADI com conversão de taxa de amostragem bidirecional
- Visualização de tela: os controles dobrados agora exibidos em colunas quando muitas dobrações estão configuradas
- Windows: O Sistema Operacional mínimo suportado agora é o Windows 10 (Windows 7 e 8 já não são suportados)

**Novo no driver TB3 (v1.2.2):**

- Quando a extensão do DriverKit não está ativada corretamente, instruções e uma captura de tela são mostrados para guiar o usuário
- Quando a instalação é concluída e a extensão é ativada, o driver leva o instalador para o primeiro plano e sai de forma limpa
- Quando nenhum dispositivo está conectado: uma mensagem "Nenhum dispositivo conectado" é mostrada em vez de suspensões vazios

**Correções de erros:**

- Monitorar Perfil: Carregar e cancelar um perfil corromperia o arquivo na próxima gravação - corrigido
- macOS: Artefatos rolantes em resoluções de tela escalonadas - corrigidos
- macOS: Crash quando o DADman foi aberto, clicando duas vezes em um arquivo no Finder - corrigido
- macOS: Problema raro de comunicação do Thunderbolt — corrigido _(também requer atualização do driver TB3 para a v1.2.2)_
- macOS: Arquivos abertos não permitem mais selecionar diretórios

> **Problema conhecido (macOS 15 Sequoia):** DADman pode não se conectar a dispositivos de rede na primeira inicialização do macOS 15. Soluções: sair e entrar novamente. As conexões com Thunderbolt não são afectadas. Veja: _Capítulo 9, Seção 9.3_.

---

### Compilação DADman v5.7.2 - 2024-09-25

| Componente              | Versão                                                                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman                  | v5.7.2 b1 — macOS 10.13–15 (incl. Sequoia), Windows 10/11 |
| Driver TB3 — macOS      | v1.26                                                                                                                        |
| Driver TB3 — Windows    | v1.1.2 _(sem alteração)_                                                                  |
| Firmware Thunder\➲ Core | v1.0.6.3                                                                                     |
| Firmware da Família 1   | v2.4.3.1                                                                                     |
| Firmware MTRX Studio    | v1.0.4.2                                                                                     |

**Suporte a novos hardware:** Controle de Dynaudio 01 monitor controller.

**Novo no DADman:**

- Suporte para macOS 15 Sequoia _(problema conhecido de conectividade de rede — veja v5.8.0)_
- Suporte para o módulo Thunderbolt 722150B
- Botões de cabeçalho de seção (AD / DA / Mon / Con / Conf) agora mostram dicas de ferramenta; Clicar em um cabeçalho de seção recolhe ou expande essa seção
- "Sobre DADman" agora tem um botão **Copiar Informações** — copia a versão DADman, a lista de dispositivos conectados, Versão do sistema operacional e versões do driver para a área de transferência para uso em pedidos de suporte
- Menu "Abrir Perfil Recente" adicionado à barra de menu principal
- macOS: Monitor perfil janela agora é redimensionável; a última aba ativa foi restaurada ao reabrir
- Janelas: opção "Minimize to Tray" substituída pela opção **Mostrar In** com três opções: Barra de tarefas · Barra de tarefas e bandeja de sistema · Apenas bandeja do sistema
- A fase inverte o símbolo "Ph" para "Ö" para evitar confusão com o poder fantasma

**Correções de erros:**

- Monitorar erro de mapeamento de parâmetros EQ ao alternar entre conjuntos de saída do monitor — corrigido
- Windows: DADman falhou em iniciar em alguns sistemas devido à falta de `VCRUNTIME140_1.DLL` — corrigido
- Janelas: Bloqueio do dispositivo com firewall do BitDefender em certos intervalos de IP - corrigido
- macOS: Falha de leitura/gravação do arquivo agora alertar o usuário
- Relatório de quadros de saída MADI corrigido para DSD sobre PCM
- Atraso de processamento de erro para canais acima de 16 - corrigido

**Novo no firmware (Thunder\├Core v1.0.6.3):**

- ADICIONAR canal 3 a 88.2/96 kHz fixo; ADAT PLL e bloqueio melhorado
- Erro na fase do cartão DA no canal 8 corrigido (painel base analógico antigo)
- Filtragem de saída de taxa de amostra DADLink corrigida
- Dante: Alarme de erro de cartão falso corrigido; supervisão FPGA adicionada
- Suporte para o módulo Thunderbolt 722150B adicionado

---

### Versão somente firmware — 2024-03-06

| Componente            | Versão                                                                         |
| --------------------- | ------------------------------------------------------------------------------ |
| DADman                | v5.7.0 b1 _(sem alteração)_ |
| Firmware da Família 1 | v2.4.2 _(bug fix)_          |

**Correção de bugs:** Cronometragem da interface DigiLink e erro de formato introduzido no firmware do Family 1 v2.4.1.2 - corrigido. Não aplicável ao hardware com marca DAD.

---

### build 1 do DADman v5.7.0 — 2023-11-15

| Componente              | Versão                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| DADman                  | v5.7.0 b1 — macOS 10.13–14, Windows 10/11 |
| Driver TB3 — macOS      | v1.1.26 _(sem alteração)_              |
| Driver TB3 — Windows    | v1.1.2 _(sem alteração)_               |
| Firmware Thunder\➲ Core | v1.0.5.2                                  |
| Firmware da Família 1   | v2.4.1.2                                  |
| Firmware MTRX Studio    | v1.3.1                                                    |

> **Nota:** macOS 10.10 (Yosemite), 10.11 (El Capitan), e 10.12 (Sierra) não são mais suportados desta versão.

**Novo no DADman:**

_Modos Menu Bar e bandeja do sistema:_ DADman pode agora ser executado em segundo plano com uma presença mínima na área de trabalho. macOS: três modos de exibição — Apenas o Dock, Barra de Menu e Barra de Menu (oculta do Dock); restaure com ⌘➲ 1 ou lançando de novo DADman). Windows: Modo Bandeira do sistema adicionado — clique com o botão esquerdo para mostrar/esconder; clique direito para opções de Mostrar/Ocultar/Parar.

_Modo RAW do Talkback:_ Um novo modo de fala em que o retorno do talkback é ativo apenas enquanto o botão é mantido e termina quando liberado (pressionar-para-falar). O modo alternativo/latch anterior permanece disponível. O modo RAW aplica-se ao hardware MOM e ao controle do painel frontal do MTRX Studio; as superfícies EuCon sempre usam o modo alternativo/latcha.

_DADLink para todos os produtos:_ DADLink está agora disponível no hardware da Família 1 (AX32, DX32, Penta 720, Penta 721s) através do firmware v2. .1.2, além de unidades do Thunder\➲ Core.

_Melhorias de exibição em matriz:_ Tamanho máximo de visualização da matriz agora pode ser configurado nas Preferências (32×32, 64×64, 128×128 ou 256×256). Dicas na matrix mostram números e rótulos de canais. Rastreador / rolagem da roda agora roda a exibição da matriz em vez da janela completa. Nomes de portas DADLink mostrados nas dicas de ferramentas.

_Manipulação de arquivos:_ `.dms` e `.dmprof` agora podem ser abertos diretamente do Finder ou do Windows Explorer clicando duas vezes. Abertura de arquivo de linha de comando suportada: `abrir -a DADman settings.dms profile.dmprof` (macOS); `DADman.exe settings.dms profile.dmprof` (Windows). DADman agora recupera continuamente conexões unitárias, em vez de expirar. Windows: DADman salva arquivos automaticamente ao iniciar sessão, desligar ou reiniciar.

**Atalhos do teclado (primeiro formalmente documentado nesta versão):**

| Acão                          | macOS     | Janelas          |
| ----------------------------- | --------- | ---------------- |
| Arquivo > Abrir…              | ⌘O        | Ctrl+O           |
| Arquivo > Salvar              | ⌘S        | Ctrl+S           |
| Arquivo > Salvar como…        | redondo S | Ctrl+Shift+S     |
| Arquivo > Abrir Perfil…       | ⌘O        | Ctrl+Alt+O       |
| Arquivo > Importar Perfil…    | ⌘I        | Ctrl+Alt+I       |
| Arquivo > Salvar Perfil       | ⌘S        | Ctrl+Alt+S       |
| Arquivo > Salvar Perfil como… | ➜ 7$ S    | Ctrl+Alt+Shift+S |
| Arquivo > Fechar Perfil       | ⌘W        | Ctrl+Alt+W       |
| Mostrar janela principal      | ⌘⇧1       | —                |
| Lista de dispositivos         | redondo L | Ctrl+Shift+L     |
| Perfil de Monitoramento       | redondo M | Ctrl+Shift+M     |
| Configurações / Opções        | ⌘,        | Ctrl+,           |

**Correções de erros:**

- Corrupção de dados fixos ao adicionar matrizes dobradas com mais de 1.024 elementos

---

### DADman v5.6.9 build 1 — 2023-06-14 _(aproximado)_

| Componente              | Versão                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| DADman                  | v5.6.9 b1 — macOS 10.10–13, Windows 10/11   |
| Driver TB3 — macOS      | v1.26                                                                       |
| Driver TB3 — Windows    | v1.1.2 _(primeira versão oficial)_       |
| Firmware Thunder\➲ Core | v1.0.3.4                                    |
| Firmware da Família 1   | v2.3.6.1 _(sem mudança)_ |

**Novo no DADman:**

- **Avid MTRX II** adicionado à lista de hardware suportada
- **Clonar Configurações** — copiar todas as configurações de uma unidade de hardware para outra dentro do mesmo grupo familiar. Três grupos familiares definidos: Família 1 (MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721), Família 2 (MTRX II · AX64 · Centro AX · Núcleo 256), Família 3 (MTRX Studio)
- **DADLink** — entrelaçamento de áudio de alta contagem de canais proprietário para AX64, AX Center, Core 256 e MTRX II via mini módulo MADI com SFP transceivers ópticos. Até 128 canais a 48 kHz, 64 canais a 96 kHz, 32 canais a 192 kHz por link. Aproximadamente 1 latência s.
- Lançamento do driver ASIO do Windows — primeiro oficial (não-beta)

---

### Caixa DADman v5.6.7 1 — 2023-02-06

| Componente           | Versão                                                                                    |
| -------------------- | ----------------------------------------------------------------------------------------- |
| DADman               | v5.6.7 b1 — macOS 10.10–12, Windows 10/11 |
| Driver TB3 — macOS   | v1.1.22                                                   |
| Driver TB3 — Windows | v1.0.8                                                    |

> **Nota:** Suporte a Windows 7 descartado desta versão.

**Novo no DADman:**

- **Centro AX DADAS** adicionado à lista de hardware suportada
- Driver ASIO do Windows oficialmente lançado (fora do beta)

---

### Versão somente firmware — 2022-12-05

| Componente            | Versão                                                                               |
| --------------------- | ------------------------------------------------------------------------------------ |
| DADman                | v5.6.5 b1 _(sem mudança)_         |
| Firmware da Família 1 | v2.3.6.1 _(novo)_ |

**Novo no firmware:**

- Módulo Brooklyn 3 Dante agora suportado ao lado do Brooklyn 2
- Mecanismo de reposição de cartão SDI melhorado - corrige um problema de tempo que poderia impedir canais de SDI de ativar corretamente após o power-up

---

### DADman v5.6.3 build 8/23 — 2022-07-01

| Componente         | Versão                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| DADman             | macOS v5.6.3 b8 · Windows v5.6.3 b23 |
| Driver TB3 — macOS | v1.1.9.4 _(beta)_                 |

**Novas funções:**

- Suporte a **Windows 11** adicionado
- Definição de origem e saída na configuração do perfil de monitor agora pode ser reorganizada após a configuração inicial
- Windows: DADman agora busca automaticamente dispositivos de rede quando conexões de rede mudam

**Correções de erros:**

- Modo escuro: rótulos dobrados agora exibindo corretamente

---

### Construção DADman v5.6.2 13b — 2022-05-27

| Componente         | Versão                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| DADman             | v5.6.2 b13b — macOS 10.10–12, Windows 7/8/10 _(beta)_ |
| Driver TB3 — macOS | v1.1.9.4 _(primeira versão — beta)_                   |

**Novas funções:**

- **Suporte de hardware do Thunder\➲ Core** — primeira versão suportando AX64, AX Center, e Core 256 via Thunderbolt 3
- Suporte ao macOS 12 Monterey
- Abrir lista de dispositivos automaticamente quando o DADman iniciar sem unidades conectadas.
- **Importar Perfil** adicionado ao menu Arquivos — importa um Perfil de Monitor de qualquer unidade conectada e aplica uma configuração mais adequada para a pasta I/O da unidade atual
- Modo escuro: Renderização da Etiqueta para Descer Melhorada

---

### DADman v5.5.0 build 2 — 2021-06-03

| Componente | Versão                                                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.5.0 b2 — macOS 10.10-11 (Intel e Apple Silicon M1), Windows 7/8/10 |

**Novas funções:**

- \*\*Suporte nativo da Apple Silicon (M1) \*\* - DADman funciona nativamente na tradução Apple Silicon sem Rosetta 2
- MOM: Os botões de ligar/desligar e ligar/desligar do formulário agora estão disponíveis como chaves do MOM atribuíveis no PRO\├MON

---

### Caixa DADman v5.4.5 1 — 2021-01-10 / 2021-03-18

| Componente | Versão                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.4.5 b1 — macOS 10.10–11 (Intel), Windows 7/8/10 |

**Novas funções:**

- NTP Penta 721s adicionados à lista de hardware com suporte _(compilação de janeiro 202)_
- Suporte macOS 11 Big Sur (Apenas Intel) _(compilação de Março de 2021)_

---

### Desenvolvimento de DADman v5.4.4 2 — 2020-09-30

**Apenas correções de erros:** Comportamento de graves em múltiplas saídas secundárias; Revogação da EuCon no Avid S6; Erro de configuração SPQ introduzido na v5. .4 b1; tempo para atualização de firmware do MTRX Studio.

---

### Construindo DADman v5.4.3 2 — 2020-08-20

| Componente | Versão                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.4.3 b2 — macOS 10.10–15 _(Catalina novo)_, Windows 7/8/10 |

**Novas funções:**

- Suporte para macOS 10.15 Catalina
- Dicas sobre botões e botões por toda a interface do DADman
- Auto-atribuição de canais sucessivos no diálogo de perfis do Monitor
- AD / DA / Mon / Con / seção Conf expandida/estado recolhido armazenado nas Preferências
- Checkmarks para os valores selecionados nos menus popup
- Aviso exibido quando baixando o firmware que é mais antigo ou o mesmo que a versão instalada atualmente
- Medição de pico/segure em canais AD e DA para AX32, Pento e MTRX _(requer firmware v2.3.2.1 ou superior)_
- Rótulos longos de canal truncados com elipse para evitar o fluxo de layout

---

### Compilação DADman v5.3.4 3 — 2019-08-01

| Componente | Versão                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.3.4 b3 — macOS 10.10-14 _(Mojave novo)_, Windows 7/8/10 |

**Novas funções:**

- **Marcação de portas para cartões digitais I/O** — cada porta física (MADI, Dante, AES3) pode receber um rótulo de texto individual; os rótulos são armazenados na unidade de hardware e exibidos na exibição da grade
- Suporte a cartão DigiLink _(Avid MTRX somente - não aplicável ao hardware DAD)_
- Suporte ao macOS 10.14 Mojave _(não requer mais trabalho do perfil de cor)_
- Lançamento mais rápido de aplicativos no macOS; redução de carregamento geral da CPU

---

## Apêndice F — Declarações de conformidade

Veja [Matéria Fronteira, Seção FM.9 — Conformidade Regulador] para as declarações CE, FCC, ICES-003, UKCA e RHS.

_[Declarações finais a serem inseridas pela engenharia tecnológica DAD / NTP e legais antes da publicação.]_

---

## Appendix G — Glossary

Os termos estão listados em ordem alfabética. Onde um termo tem uma abreviatura comum, a entrada aparece sob a forma completa com a abreviação anotada, e uma referência cruzada é colocada na posição alfabética da abreviação. Os nomes dos produtos DAD e os termos das marcas registradas são apresentados como aparecem no produto ou no DADman.

---

**Ap tab**
A aba _Analógico a Digital_ no DADman. Exibe a faixa de canal para todos os canais de entrada analógicos nas unidades de hardware conectadas, fornece controles de ganho de entrada de mic/linha, mudo, inversão de etapa, potência fantasma (+48 V) e rótulos de canal. Medição para cada entrada é mostrada nesta guia. Veja também: _Guia DA_.

**ADAT** (interface óptica de Gravação de Áudio Digital em Alesis)
Um padrão de interface de áudio digital transmitindo até 8 canais de áudio em 44. ou 48 kHz, ou 4 canais em 88,2 ou 96 kHz, em um único cabo de fibra TOSLINK óptica. Suportado como uma opção de E/S em selecionar hardware DAD. Em taxas de amostragem dupla, a contagem de canal é reduzida pela metade — isso é referido como _S/MUX_. Veja também: _S/MUX_.

**AES3** (AES/EBU)
Um padrão profissional equilibrado de interface de áudio digital definido pela Sociedade de Engenharia de Áudio (AES) e a União Europeia de Transmissão (EBU). Carrega dois canais de áudio PCM em um único cabo XLR equilibrado. Comumente referido como AES/EBU. Suportado em hardware DAD como um formato I/O discreto, normalmente através de conectores de rompimento DB25 que transportam vários pares AES3. Veja também: _AES67_.

**AES67**
Um padrão de interoperabilidade para áudio-sobreIP (AoIP) definido pela Sociedade de Engenharia de Áudio. A AES67 define uma camada de transporte comum que permite que Dante, Ravenna, WNUE e outras implementações da AoIP troquem fluxos de áudio. hardware DAD com interfaces Dante ou Ravenna podem ser configurados para o modo AES67. Veja também: _Dante_, _Ravana_, _ST 2110-30_.

**ASIO** (Entrada de Audio Stream Input/Output)
Uma arquitetura de driver de áudio de baixa latência para Windows desenvolvida por Steinberg. O Thunderbolt DAD 3 ASIO expõe o Thunder\├Core interfaces (AX64, AX Center, Core 256) como dispositivos ASIO no Windows DAWs. Configurado através do painel de controle do driver DAD ASIO, que fornece tamanho de buffer, taxa de amostragem e configurações de contagem de canais.

**Autoboot**
A configuração do DADman para ser executada automaticamente quando o computador inicia, opcionalmente carregando um arquivo de configurações especificado e monitorando o perfil sem interação do usuário. No macOS, o autoboot é alcançado através de Itens de Login ou de um launcher de atraso da AppleScript. No Windows, através da pasta de inicialização do Windows ou do agendador de tarefas. Veja: _Capítulo 8, Seção 8.7_.

**AX Center**
Uma interface de áudio DAD na família de produtos Thunder\├Core. Combina a bordo A/D e D/A conversão com uma interface de rede Dante e conectividade Thunderbolt 3. Suporta até 128 canais sobre o Thunderbolt a 44,1/48 kHz. Controlado e configurado via DADman.

**AX32**
Um roteador e conversor de áudio DAD. O produto emblemático do grupo de hardware da Família 1, que suporta até 256×256 roteando em uma matriz baseada em Ethernet com slots de cartão de expansão para MADI, Dante, AES3, I/O, SDI e SPQ. Controlado via DADman.

**AX64**
Uma interface de áudio DAD na família de produtos do Thunder\➲ Core. Fornece 64 canais da conectividade Thunderbolt 3 mais opções de expansão para MADI, Dante, AES3 e I/O analógico. Controlado via DADman.

**Bucket**
Em Control\➲ Pack de predefinições de roteamento, um _bucket_ é uma das até quatro camadas de entrada independentes dentro de uma única predefinição de roteamento. Cada grupo define um conjunto completo de canais de origem que podem ser trocados para as saídas predefinidas como uma única ação. Os baldes são alternados manualmente ou automaticamente baseados em gatilhos de sinal. Veja também: _Control\├Pack_, _Predefinição de Rota_, _Trigger_. Veja: _Capítulo 8, Seção 8.4_.

**CE** (Conformite├Europe enne)
Uma marcação obrigatória do produto para produtos vendidos dentro da Área Econômica Europeia, a indicação do produto cumpre todas as directivas comunitárias aplicáveis em matéria de segurança, compatibilidade electromagnética e outros requisitos regulamentares. O hardware de tecnologia DAD / NTP carrega a marcação CE. A Declaração de Conformidade completa está disponível a partir do DAD e reproduzida no _Apêndice F_.

**Clonar / Clonar**
Uma operação DADman que copia todas as configurações de uma unidade de hardware conectada para outra dentro do mesmo grupo familiar de hardware. A clonagem é realizada através do menu de contexto da Lista de dispositivos. As unidades devem estar no mesmo grupo familiar; as configurações para cartões I/O não presentes na unidade de destino estão definidas como padrões de fábrica. Veja: _Capítulo 8, Seção 8.3_. Veja também: _Grupo de Família_.

**Aba do gato**
A guia _Conexões_ no DADman. Exibe a matriz de roteamento completa de pontos de cruzamento para a unidade conectada, com entradas em um eixo e saídas no outro. Os quadrados azuis indicam conexões ativas. Conexões são feitas clicando em pontos de cruz; várias conexões podem ser feitas simultaneamente usando Shift+clique para reparos de estéreo. Veja também: _Crosspoint_, _Matriz de roteamento_.

**Conf tab**
A guia _Configuração_ do DADman. Fornece controle sobre os parâmetros de sincronização (fonte de relógio, taxa de amostra, Adaptar Para), configurações específicas de formato (taxa de quadros MADI, configuração Dante, opções AES3) e configuração de nível da porta. O conteúdo da aba de Conf varia de acordo com o modelo de hardware e cartões de expansão instalados.

**Controle 01 / Control 02**
controladores de hardware DAD . Compacto, unidades de hardware dedicadas para controle prático das funções de monitoramento DADman sem exigir uma superfície de controle de terceiros. Suportado a partir do build DADman v5.8.2 (Control 01) e v5.8.2 build 2 (Control 02, introduzido de Janeiro de 2026).

**Control\├Pack**
Um sistema de pré-ajuste de roteamento para o hardware Thunder\➲ Core (AX64, AX Center, Core 256) introduzido na build 8 do DADman v5.8.0. Permite até 32 predefinições de roteamento por unidade, cada uma com até quatro baldes de entrada que alternam simultaneamente dentro de uma única amostra de áudio. Interruptor automático baseado na detecção do nível de sinal, integridade do tom de piloto AE6 ou status de conectividade da porta Veja: _Capítulo 8, Seção 8.4_. Veja também: _Balde_, _Predefinição de roteamento_, _Trigger_.

**Core 256**
Uma interface de áudio DAD na família de produtos do Thunder\➲ Core. Suporta até 256 canais sobre o Thunderbolt 3 a 44.1/48 kHz, com extensas opções de cartões de expansão. O membro da maior capacidade da família Thunder\„Core no momento da publicação. Controlado via DADman.

**Áudio principal**
Arquitetura audio I/O da Apple para macOS. DAD Thunder\├Core units aparecem como dispositivos de áudio Core quando o DAD Thunderbolt 3 Core Audio driver está instalado, tornando-os disponíveis para qualquer aplicativo de áudio do macOS. Veja também: _ASIO_.

**Crosspoint**
Uma única interseção na matriz de roteamento de DADman que representa uma conexão entre uma entrada e uma saída. Ativando um roteamento de ponto cruzado o sinal dessa entrada para essa saída. Um quadrado azul na aba Cão indica um ponto de passagem ativo. Múltiplos pontos de cruzamento podem compartilhar a mesma entrada (fan-out). Veja também: _Aba de gato_, _Matriz de roteamento_.

**Cue\├Mix**
Uma função de monitor de modo zero no ouvido do mixer no DADman. Permite que cada fone de ouvido ou mixes IEM sejam criadas independentemente da mistura da sala de controle principal. _Documentação pendente — requer entrada de engenharia DAD. Veja: Capítulo 8, Documentação pendente._

**DA tab**
A aba _Digital to Analogue_ no DADman. Exibe faixas de canal para todos os canais de saída analógicos na(s) unidade(s) de hardware conectada(s), fornecendo controles para fadadores de nível de saída, museus e rótulos de canal. A aba DA contém também os controles de calibração do nível de saída analógico (alinhamento do dBu). See also: _AD tab_.

**DAD** (Dinamarca de Áudio Digital)
O nome da marca usada para hardware de áudio e produtos de software desenvolvidos pelo NTP Technology A/S, uma empresa dinamarquesa de tecnologia de áudio. Os produtos DAD incluem o AX32, AX64, AX Center, Core 256, DX32R, MW e o software de controle DADman. Veja também: _Tecnologia NTP A/S_.

**DADLink**
Um formato de interconexão de áudio de alta contagem de canais desenvolvido por DAD. Usa o slot do módulo mini MADI em hardware compatível com transceivers SFP ópticos. Fornece até 128 canais a 44,1/48 kHz com aproximadamente 1 microsegundo de latência entre unidades conectadas. Compatível com AX32, AX64, AX Center, Core 256, DX32R, Penta 720, Penta 721s e MTRX/MTRX II. Veja: _Capítulo 8, Seção 8.6_.

**DADman**
A aplicação de software de controle desenvolvida pelo NTP Technology A/S (DAD) para configurar, monitorar, e controlando todos os produtos de hardware de tecnologia DAD e NTP, bem como as interfaces de áudio de Avid MTRX II e MTRX Studio. Disponível para macOS e Windows. DADman se comunica com unidades conectadas através de Ethernet (e opcionalmente via Thunderbolt 3 para Thunder\├Core units). O aplicativo inclui controles de faixa de canais (AD, DA, Con, Conf, Mon abas), lista de dispositivos, gestão de perfil, roteamento configuração predefinida e configurações de preferências.

**DAW** (Estação Digital de Áudio)
Um aplicativo de software usado para gravação, edição, mistura e produção de áudio digital. Ferramentas Pro, Lógica Pro, Nuendo, Reaper e Cubase são exemplos comuns. O DADman se integra com DAWs via Ethernet (EuCon), MIDI, Dante e Thunderbolt 3.

**dBFS** (decimais em relação à escala total)
Uma unidade de medida para o nível de sinal de áudio digital. 0 dBFS é o nível digital máximo possível; todos os níveis de sinal prático são valores negativos (por exemplo, − 18 dBFS, − 6 dBFS). Medição de DADman exibe níveis de sinal no dBFS. Veja também: _dBu_.

**dBu**
Uma unidade de medida para o nível de sinal de áudio analógico, referenciada a 0.775 V RMS. Os equipamentos de áudio profissionais normalmente operam em +4 dBu nominal, com sala de cabeça para +18 dBu ou +24 dBu. Os controles de nível de saída da aba DADman DA definem o nível analógico que corresponde a 0 dBFS, alinhando os domínios de sinal digital e analógico. Veja também: _dBFS_.

**DDM** (Dante Domain Manager)
Audinate's centralised management system for enterprise-scale Dante networks, providing authentication, network segmentation, and cross-subnet routing. Alguns recursos avançados Dante (como ST 2110-30 em certos tipos de módulo) requerem DDM. Veja também: _Dante_.

**Lista de dispositivos**
A área de exibição da unidade no DADman, mostrando todas as unidades de hardware conectadas da esquerda para a direita em ordem de seus números de ID unitário. Cada unidade é exibida com uma borda colorida, mostrando suas atuais controles DA, DA e Conf como faixas de canais. A Lista de Dispositivos fornece a interface primária para operações de nível do dispositivo (atualização de firmware, redefinição de fábrica, clone, configurações de rede).

**DMS** (DADman Settings File)
O formato do arquivo (extensão `. ms`) usado pelo DADman para salvar a configuração completa de todas as unidades de hardware conectadas — conexões de roteamento, Ganhar configurações, rótulos de canal, parâmetros de Conf e todas as outras configurações de nível unitário. As configurações são armazenadas na própria unidade de hardware; um arquivo `.dms` é um backup das configurações realizadas no computador. Veja também: _DMPROF_.

**DMPROF** (DADman Monitor Perfil Arquivo)
O formato do arquivo (extensão `. mprof`) usado pelo DADman para salvar um Perfil de Monitor - a configuração completa do controlador de monitor para uma unidade de hardware, incluindo fontes, conjuntos de saída, dobramento, roteamento de palestras e medição de atividades. Um arquivo `.dmprof` é armazenado no computador, não na unidade de hardware. Veja também: _Perfil de Monitor_, _DMS_.

**Latência de DPC** (Latência de Chamada de Procedimento Adiada)
Uma métrica de desempenho do sistema Windows medindo o tempo gasto por drivers de hardware e processos de sistema para lidar com solicitações de interrupção. latência alta do DPC causa drops de áudio em aplicativos de áudio em tempo real. Causas comuns incluem drivers de redes sem fio, configurações de gerenciamento de energia USB e software antivírus. Relevante para o desempenho de ASIO principal no Windows. Veja: _Capítulo 9, Seção 9.4_.

**DVS** (Dante Virtual Soundcard)
Um aplicativo de software do Audinate que faz um Mac ou PC aparecer como um dispositivo de áudio Dante na rede, direcionando o áudio do sistema do computador para Dante. Usado para trazer a saída de qualquer aplicativo de áudio de computador para o sistema de monitoramento de DADman como fonte. Veja: _Capítulo 8, Seção 8.10_.

**DX32R**
Um roteador e ponte de áudio digital DAD. Suporta roteamento entre os formatos AES3, MADI e Dante em um invólucro 1RU. Membro da família 1 grupo de hardware. Controlado via DADman.

**EuCon**
Protocolo de superfície de controle proprietário do Avid, Usado para comunicação entre DAWs (particularmente ferramentas Pro) e superfícies de controle da aviação (S1, S6, S6L) e o aplicativo de controle da aviação. DADman implementa a EuCon para expor as funções de controle de monitor — seleção de fonte, volume, cortar, talkback e dobrar — a qualquer superfície EuCon conectada. Ativado no DADman através de _Configurações > Habilitar EuCon_. Veja: _Capítulo 8, Seção 8.5_.

**Grupo de Família**
Um agrupamento de compatibilidade de hardware usado pelo DADman para a função Clonar e para identificar unidades que compartilham o mesmo ramo de firmware. Existem três grupos familiares: Família 1 (MTRX, AX32, DX32, Penta 720, Penta 721s); Família 2 (MTRX II, AX64, Centro AX, Núcleo 256); Família 3 (MTRX Studio). Veja também: _Clonagem / Clonagem_.

**FCC** (Federal Communications Commission)
A agência reguladora dos Estados Unidos responsável pela frequência de rádio e padrões electromagnéticos de compatibilidade. O hardware de tecnologia DAD / NTP vendido nos EUA deve cumprir a Parte 15 do FCC (radiadores não intencionais). Veja: _Apêndice F_.

**Firmware**
Software incorporado armazenado na memória flash interna da unidade de hardware que controla as funções de processamento de áudio principal da unidade, roteamento e I/O. Firmware é separado do DADman (que é executado no computador host). Atualizações de firmware são aplicadas via DADman de um arquivo de firmware baixado do portal de suporte do DAD. Veja: _Capítulo 10, Seção 10.2_.

**Fold-Down**
Uma matriz de mixagem em um perfil de DADman Monitor que converte uma fonte de áudio de contador superior de canal em um formato de contagem de canais inferior para monitoramento de compatibilidade. Por exemplo, uma dobradinha de 7.1 para estéreo permite verificar como uma mistura surround se traduz para reprodução de dois canais. Matrizes personalizadas também podem ser usadas para seleção de subconjunto de alto-falantes e up-matching. Veja: _Capítulo 8, Seção 8.1.6_. Veja também: _Correspondência_, _Perfil de Monitor_.

**LTC** (Linear Timecode)
SMPTE timecode codificado como um sinal de áudio-frequência que pode ser transferido através de qualquer conexão de áudio analógico ou digital, incluindo um canal de Dante. LTC codifica horas, minutos, segundos e quadros para sincronizar equipamentos de áudio e vídeo. Veja: _Capítulo 8, Seção 8.14_.

**MADI** (Multicanal Audio Digital Interface, AES10)
Uma interface de áudio digital profissional definida pela Sociedade de Engenharia de Áudio (AES10). Transmite até 64 canais de áudio em 44,1 ou 48 kHz (32 canais em 88,2/96 kHz em modo de alta velocidade; 16 canais em 176. /192 kHz) sobre um cabo coaxial ou fibra óptica usando módulos SFP. MADI usa dois modos de taxa de quadros: Legado (56-channel) e Alta Velocidade (64-channel). Ambas as extremidades de uma conexão MADI devem usar o mesmo modo de taxa de quadros.

**Modo barra de menu**
O modo de exibição de macOS para DADman no qual o aplicativo se esconde do Dock quando sua janela principal é fechada e é acessível somente através de um ícone na barra de menu do sistema macOS. Usado em ambientes de instalação permanentes onde DADman deve ser executado em segundo plano. Veja: _Capítulo 8, Seção 8.7_.

**Mic Gain Group**
A função DADman (v5.8. construa 6 e mais tarde) que liga vários canais analógicos de entrada para que os ajustes obtidos e silenciados em qualquer canal afetem todos os canais do grupo simultaneamente, preservando o ganho relativo entre canais. Poder e inversão de fase fantasma não são agrupados. Suportado em todos os hardware, exceto o MTRX Studio. Veja: _Capítulo 8, Seção 8.2_.

**MADE** (Monitorar Módulo Operacional)
Um controlador de hardware DAD - um compacto, unidade de hardware de pilha ou área de trabalho fornecendo botões físicos e botões para controlar funções de monitoramento DADman (volume, seleção de fonte, escurecer, cortar, talkback, mute). O MOM se comunica com o DADman por Ethernet. Veja: _Capítulo 8, Seção 8.5_.

**Aba Deus**
A aba _Monitor_ do DADman. Exibe controles de monitor para o perfil de monitor carregado: botões de seleção de origem, Seleção de saída do alto-falante, fader de nível principal, escurecer, cortar, botão de Ref, talkback e seletores dobrados. A aba Mon só é preenchida quando um arquivo de Perfil do Monitor `.dmprof` é carregado. Veja também: _Perfil de Monitor_.

**Monitorar Perfil**
Um arquivo de configuração do DADman (`. mprof`) Definindo a configuração completa do controlador de monitor: fontes disponíveis, conjuntos de saída física, matrizes dobradas, roteamento de falas, configurações de atraso e medição de saída. Um perfil de Monitor está completamente separado do arquivo de configurações de unidade (`.dms`). Perfis são armazenados no computador e devem ser carregados no DADman durante o lançamento. Veja: _Capítulo 8, Seção 8.1_. Veja também: _DMPROF_, _Source (monitor)_, _Output Set_.

**MTRX / MTRX II / MTRX Studio**
Os produtos de interface de áudio da marca Avid, desenvolvidos pela NTP Technology A/S (DAD) nos termos do acordo OEM. MTRX e MTRX II são membros da família 1 e da família 2 respectivamente. MTRX Studio é Família 3. Todos os três são configurados e controlados através do software DADman. Para fluxos de trabalho específicos do Avid, consulte a documentação relevante da Avid. Veja: _Matéria frontal, Seção FM.3_.

\*\*NTP Technology A/S
A empresa dinamarquesa (NTP Technology A/S, Copenhagen) que desenvolve e fabrica produtos de software e hardware DAD. Anteriormente conhecido como NTP / Tecnologia da NEVE. Também desenvolve produtos de áudio sob a marca NTP Penta. DAD é a marca voltada para o consumidor; O NTP Technology A/S é a entidade legal. Veja também: _DAD_.

**Conjunto de saída**
Em um perfil DADman Monitor, um grupo nomeado de canais de saída físicos representando uma configuração de um pregador — por exemplo, `Próximo Campo`, `5. Surround`, ou `85 dB SPL`. Vários conjuntos de saída podem ser definidos usando diferentes saídas físicas ou as mesmas saídas com diferentes níveis de recorte para criar várias predefinições de nível de referência. Veja: _Capítulo 8, Seção 8.1.4_. Veja também: _Nível de referência_, _recorte_.

**Penta 720 / Penta 721s**
Tecnologia NTP roteador de áudio A/S e produtos para conversor. Membros da família 1 grupo de hardware. Tenha as mesmas opções de cartões de expansão que o AX32. Controlado via DADman. Fabricado pela NTP Technology A/S; distribuído sob a marca NTP Penta.

**PCIe** (Periferal Componente Interconectar Express)
Um padrão de barramento de computador de alta velocidade usado internamente em computadores para comunicação entre CPU, RAM e dispositivos periféricos. O Thunderbolt 3 expõe externamente a largura de banda PCIe, que é como os dispositivos Thunder\├Core se comunicam com o computador hospedeiro perto de zero latência.

**PoE** (Power over Ethernet)
Um padrão (IEEE 802. af/at) permitindo que o interruptor de rede forneça energia elétrica a dispositivos conectados no mesmo cabo Ethernet usado para dados. O controlador do monitor MOM e alguns acessórios da DAD suportam PoE, eliminando a necessidade de um fornecimento separado de energia.

**Emulação PREITA**
Um recurso de DADman que permite ferramentas Pro para controlar ganhos de pré-ampliação ligados a DADman via MIDI, tratando o hardware como uma unidade preamplificadora _Avid PRE_. Permite ajustar o ganho de microfone de dentro da configuração de E/S das Ferramentas Pro ou uma superfície de controle conectada sem mudar para DADman. Veja: _Capítulo 8, Seção 8.15_.

**PRO\➲ MON**
Uma licença opcional de software DADman que estende o sistema de controle de monitor além do conjunto básico de Perfil de Monitor, adicionando roteamento avançado de monitoramento, talkback, autocarro de cue e capacidade de integração para ambientes de monitoramento complexos de estúdio e streaming. Usado principalmente com AX32, DX32R, Penta 720 e MTRX Studio. _Documentação completa pendente — requer entrada de engenharia DAD. Veja: Capítulo 8, Documentação pendente._

**PTP** (Precision Time Protocol, IEEE 1588)
Um protocolo de rede para sincronizar relógios em uma rede local com precisão de sub-microsegundos. Usado em redes Dante e Ravena para alinhar streams de áudio de diferentes dispositivos de rede sem exigir um relógio de palavra dedicado. Veja também: _Dante_, _Ravana_.

**Ravé**
Um protocolo de transporte de áudio por IP desenvolvido pela ALC NetworX. Usado em transmissões de alta qualidade e aplicações profissionais de áudio. Interoperável com AES67. O cartão DAD Ravenna (versão suportada por DADman v5.8.2 2) adiciona Ravenna/AES67/ST 2110-30 de conectividade para compatíveis com as unidades Troveja\ Core. Veja também: _AES67_, _ST 2110-30_.

**LEDADO**
Um indicador de status de painel frontal presente em todas as unidades de hardware de tecnologia DAD / NTP Quando verde sólido, a unidade é ligada, inicializada e se comunica normalmente. Um LED flashing ou não-verde Ready indica uma inicialização em progresso, uma atualização de firmware, ou uma condição de falha

**Nível de Referência**
Em um Perfil de Monitoramento DADman, um nível de saída calibrado para um conjunto de saída específico, criado com tons de teste e um medidor SPL. Uma vez definido, pressionar o botão **Ref** na aba Mon bloqueia o controle fader para este nível, impedindo mudanças acidentais de volume durante a escuta crítica. Veja: _Capítulo 8, Seção 8.1.5_.

**Roteando Matriz**
O mecanismo de roteamento de sinal de uma unidade de hardware controlado por DADman, permitindo que qualquer entrada esteja conectada a qualquer saída. A matriz de roteamento é exibida e editada na aba **Con** do DADman como uma grade de pontos de cruzamento. O hardware DAD suporta matrizes até 1.500×1.500 crosspoints (model-dependente). Veja também: _Aba de gato_, _Crosspoint_.

**Pré-definição de roteamento**
Em Control\├Pack, uma configuração nomeada que define quais canais de saída são controlados pela predefinição e quais os baldes de origem estão disponíveis para mudar. Até 32 predefinições de roteamento podem ser configuradas por unidade Thunder\➲ Core. Veja também: _Control\├Pack_, _Bucket_. Veja: _Capítulo 8, Seção 8.4_.

**Rodas** (Restrição de Substâncias Perigosas)
Directiva da UE 2011/65/UE que restringe o uso de substâncias perigosas específicas (chumbo, mercúrio, cádmio, cromo hexavalente, certos retardadores de chama) em equipamentos eléctricos e electrónicos. O hardware de tecnologia DAD / NTP está de acordo com o RoHS. Veja: _Apêndice F_.

**Taxa de amostra**
O número de amostras de áudio capturadas ou reproduzidas por segundo, expressas em kHz. Tarifas padrão: 44.1 kHz, 48 kHz (definição padrão); 88.2 kHz, 96 kHz (definição alta); 176.4 kHz, 192 kHz (definição ultra-alta). Taxas de amostragem maiores reduzem o número de canais em interfaces com tempo-múltiplo (MADI, ADAT, DADLink). A taxa de amostragem é configurada por unidade na guia de **Conf** DADman.

**SFP** (Small Form-factor Pluggable)
Um compacto, hot-swappable optical ou elétrico módulo de transceiver usado em conexões MADI e DADLink em hardware DAD. Os módulos SFP estão disponíveis em várias configurações para modo multimodo ou modo único, ou coaxial MADI. O tipo SFP determina o tipo de cabo e a distância máxima de transmissão.

**S/MUX** (Sample Multiplexing)
Uma técnica para transmitir áudio de amostra maior sobre o ADAT usando vários canais ADAT para transportar dados de um único canal. Com uma contagem de 88.2/96 kHz, S/MUX reduz o número do canal ADAT para 4 canais (S/MUX2). Em 176.4/192 kHz, S/MUX4 reduz ainda mais a contagem de 2 canais. Veja também: _ADAT_.

**Fonte** _(monitor)_
Em um perfil de DADman Monitor, um caminho de sinal de entrada nomeado disponível para seleção de monitoramento. As fontes são atribuídas a canais de entrada específicos na unidade de hardware (analogue, Dante, MADI, AES3, etc.) e aparecem como opções selecionáveis na guia Mon. Exemplos: `Ferramentas Pro`, `DVS`, `Dante Player`, `Convidado`. Veja: _Capítulo 8, Seção 8.1.3_. Veja também: _Perfil de Monitor_.

**SPQ** (Signal Processing card)
Um cartão opcional de expansão de DSP para hardware DAD compatível (AX32 variantes) fornecendo EQ paramétrico por canal em saídas de monitoramento analógico. Usado para alto-falantes e correção de sala. Os dados de filtro SPQ são gerados tipicamente a partir de medidas acústicas feitas com o Assistente de EQ (ou ferramentas similares) e importadas para o DADman através da aba SPQ. Veja: _Capítulo 8, Seção 8.12_.

**SRC** (Sample Rate Converter)
Um componente de hardware ou software que converte áudio digital entre diferentes taxas de amostra. Inserir um SRC em um caminho de sinal quebra qualquer relação gradualmente coerente com o relógio de amostra original, que pode corromper sinais sensíveis ao tempo, como o LTC e o tom piloto AE6. Unidades de DADman suportam SRC em interfaces I/O quando configuradas na guia Conf.

**ST 2110-30**
Um padrão SMPTE (SMPTE ST 2110-30) para o transporte de áudio não comprimido por redes IP, derivado do padrão AES67. Usado em ambientes de transmissão profissional. Suportado em interfaces DAD Dante e Ravenna da firmware v1.1.2.4 (janeiro de 2026). Módulos Brooklyn 3 suportam ST 2110-30 sem DDDM de firmware v1.0.3. Veja também: _AES67_, _Ravana_, _DDM_.

**Thunder\├Core**
O termo DAD para a tecnologia da interface do Thunderbolt 3 integrado em AX64, AX Center e Core 256 unidades de hardware. O Thunder\├Core fornece áudio de alta latência I/O entre a unidade de hardware e o computador de hospedagem em um cabo Thunderbolt 3, além do controle DADman baseado em Ethernet padrão.

**Thunderbolt 3**
padrão de interface periférica de alta velocidade, oferecendo até 40 Gbps de largura de banda em um conector USB-C. Usado por Unidades DAD Trovão\├Núcleo de Áudio I/O para o computador host. Requer o driver DAD Thunderbolt 3 (ore Audio no macOS; ASIO no Windows). A especificação mínima para o cabo para operação correta é uma certificação feita pelo Thunderbolt 3 com relação a 20 Gbps. Veja: _Capítulo 3, Seção 3.2_ e _Capítulo 9, Seção 9.4_.

**Aparar**
Em um conjunto de saída do perfil de DADman Monitor, um deslocamento de nível fixo aplicado a esse conjunto de saída, em relação ao fader do monitor principal. Usado para criar várias predefinições de nível de referência nas mesmas saídas físicas sem hardware adicional. Por exemplo, -10 dB recorte num segundo conjunto de saída, apontando para os mesmos alto-falantes que o conjunto primário fornece um deslocamento instantâneo do nível de referência de 10 dB. Veja também: _Conjunto de saída_, _Nível de referência_.

**Disparar**
Em Control\➲ Pack predefinições de roteamento, um _gatilho_ é uma condição de detecção atribuída a um balde que determina se a fonte do balde é considerada válida. Tipos de ativação: Nível de sinal (sinal de áudio acima -40 dBFS limite); AE6 (integridade do toque piloto digital AE6); Porta (estado de conectividade de porta física). Veja: _Capítulo 8, Seção 8.4.4_. Veja também: _Balde_, _Controle \^\\Pacote_.

**UKCA** (UK Conformity Assessed)
Uma marcação de produto necessária para os produtos vendidos na Grã-Bretanha (Inglaterra, Escócia, País de Gales, a partir de 1 de Janeiro de 2021, substituindo a marcação CE para o mercado do Reino Unido após o Brexit. Equivalente ao escopo de CE. O hardware tecnológico DAD / NTP vendido na Grã-Bretanha traz marcação do UKCA. Veja: _Apêndice F_.

**Up-Match**
Uma matriz dobrada personalizada em um perfil DADman Monitor que roteia um formato de fonte de contagem inferior para uma saída de contagem de canais, por exemplo, espalhando um 5. fonte através de um layout de 7.1.4 alto-falante. Configurado na guia Fold Downs do editor do Perfil Monitor. Veja também: _Seguir-Baixo_. Veja: _Capítulo 8, Seção 8.1.6_.

**REEE** (Equipamento Elétrico e Eletrônico de Resíduos)
Diretiva da UE 2012/19/UE que rege a recolha, reciclagem e eliminação de equipamentos elétricos e eletrônicos. O hardware de tecnologia DAD / NTP carrega o símbolo REEE (bobina de rodas cruzadas), indicando que não deve ser eliminado em resíduos domésticos não classificados. Veja: _Capítulo 10, Seção 10.8_ e _Matéria Frontal, Seção FM.8_.

**Relógio de Palavra**
Um sinal de sincronização de ondas quadradas usado para bloquear gradualmente equipamentos de áudio digitais a uma referência de taxa de amostragem compartilhada. O relógio de palavra é distribuído na taxa de amostragem de operação (por exemplo, 48 kHz) por volta de 75 cabos BNC. O hardware DAD suporta o Word Clock dentro e fora para integração em sistemas de sincronização de instalações. Conexões de relógio de palavra requerem 75 x término no dispositivo final da cadeia. Veja: _Capítulo 9, Seção 9.5_.

---

## Apêndice H — Índice

_[Placeholder: índice a ser gerado a partir do documento final compilado.]_
