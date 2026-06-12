---
id: ch02-requisitos de sistema
title: "Capítulo 2 — Requisitos de Sistema"
sidebar_label: "Cara. 2 — Requisitos de Sistema"
sidebar_position: 4
slug: /Requisitos
---

# Capítulo 2 — Requisitos de Sistema e Conteúdo do Pacote

> **Documento:** Usuário Manual do DADman  
> **Versão do software coberta:** DADman v5.8.1.  
> **Versão do driver TB3 coberta:** Última — veja o centro de download no suporte digitaláudio. om  
> **Status do Capítulo:** Traço v0. — Requisitos mínimos de RAM/armazenamento e conteúdo do pacote pendente de engenharia DAD  
> **Última atualização:** junho de 2026

---

## Neste Capítulo

| Turma               | Capas                                    | Relevante para                                                |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| 2.1 | Requisitos de sistema de software DADman | Todos os usuários                                             |
| 2.2 | Requisitos do driver DAD Thunderbolt 3   | Série MTRX AX64, Centro AX, Somente série Core 256, Avid MTRX |
| 2.3 | Conteúdo do pacote                       | Todos os usuários                                             |

---

## 2.1 Requisitos do Sistema de Software DADman

### 2.1.1 Sistema e Plataforma Operacional

| Requisito                                     | macOS                                                                                                                                                  | Janelas                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **Versões do Sistema Operacional suportadas** | macOS 10.13 High Sierra through 15 Sequoia (Intel e Apple Silicon)                                                  | Windows 10 (64-bit), Windows 11 (64-bit)                |
| **Arquitetura da CPU**                        | x86-64 (Intel) e ARM64 (Apple Silicon M1 e posterior) — suporte nativo da v5.5.0 | x86-64                                                                                        |
| **RAM mínimo**                                | [A ser confirmado pelo engenheiro do DAD]                                                          | [A ser confirmado pelo engenheiro do DAD] |
| **Armazenamento mínimo**                      | [A ser confirmado pelo engenheiro do DAD]                                                          | [A ser confirmado pelo engenheiro do DAD] |
| **Rede**                                      | É necessária a porta Ethernet (ver Capítulo 3, Seção 3.5); Não recomendado o uso da rede Wi-Fi para produção        | Porta Ethernet necessária; Wi-Fi não recomendado                                              |
| **Versão atual**                              | 5.8.2 build 2                                                                                                          | 5.8.2 build 2                                                 |

> **NOTICE - Suporte ao legado Windows:** DADman v5.7.0 foi a versão final que apoiou o Windows 7 e Windows 8. Todas as versões subsequentes requerem Windows 10 ou Windows 11.

> **NOTAS — Usuários de hardware Avid:** Se você estiver usando o DADman com o Avid MTRX, MTRX II, ou MTRX Studio, você deve usar a versão do DADman aprovada para o seu hardware de avião. Baixe esta versão da sua Conta em Avid Master e não do portal de suporte DAD. Usar uma versão não aprovada pode causar problemas de compatibilidade com seu hardware do Avid.

---

## 2.2 DAD Requisitos para o Sistema do Driver 3

> **NOTA:** Esta seção se aplica somente se o seu hardware é AX64, AX Center, Core 256 ou produto de Avid MTRX. Se o hardware se conectar ao computador somente por Ethernet (ex.: AX32, DX32R, série Penta), o driver Thunderbolt 3 não é necessário.

| Requisito                                     | macOS                                                                                     | Janelas                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Versões do Sistema Operacional suportadas** | macOS 11 Big Sur e mais tarde (Intel e Apple Silicon)                  | Windows 10, Windows 11                                               |
| \*\*Versão mínima do DADman                   | 5.6.7.1 ou superior                       | 5.6.7.1 ou superior  |
| **Cabo Thunderbolt**                          | Cabo Thunderbolt 3 ou USB-C classificado em 20 Gbps no mínimo                             | Cabo Thunderbolt 3 ou USB-C classificado em 20 Gbps no mínimo        |
| **Hardware compatível**                       | AX64, Centro AX, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio, Dynaudio Control 01 | AX64, Centro AX, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio |

> **ATENÇÃO — Especificação para Cabo:** Usar um cabo que não seja avaliado em pelo menos 20 Gbps pode resultar em conexões instáveis ou falhas do Thunderbolt. Os cabos normais USB-C que não carregam certificação Thunderbolt não são suficientes. Verifique seu cabo antes da instalação.

---

## 2.3 Conteúdo do Pacote

> **Observação — Conteúdo do pacote pendente**  
> O conteúdo do pacote de hardware para cada produto deve ser confirmado pela engenharia DAD. Uma tabela para cada produto na linhagem compatível com DADman será inserida aqui.

_[Colocador: tabela(s) de conteúdo do pacote para cada produto — para ser fornecida pela engenharia do DAD. Deve incluir: unidade de hardware, cabo IEC, capas de bastidores, parafusos, qualquer cabo de documentação, qualquer software incluído ou documentação de licença.]_

### Software 2.3.1

O software DADman e o condutor Thunderbolt 3 não são fornecidos em meios de comunicação físicos. Eles são baixados do portal de suporte DAD ou da sua conta Master do Avid. Veja [Capítulo 3, Seção 3.2 — Obtendo o Software].

---

## Referências cruzadas

- **Capítulo 1 — Introdução:** Lista de hardware compatível; famílias de hardware
- **Capítulo 3 — Instalação:** Baixar e instalar o DADman e o driver Thunderbolt 3.Configuração de rede
- **Apêndice A — Especificações:** Especificações técnicas completas por produto

---

_[Pendente de engenharia DAD:]_  
_— Mínima RAM e requisitos de armazenamento para DADman no macOS e Windows_  
_— Conteúdo do pacote para cada modelo de hardware (Core 256, ÁX Center, AX64, MOM, DAD Júnior)_
