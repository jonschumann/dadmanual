---
title: "Capítulo 9 — Solução de problemas"
sidebar_label: "Cara. 9 — Solução de problemas"
sidebar_position: 10
---

# Capítulo 9 — Solução de problemas

> **Produto:** Penta da Dinamarca de Áudio Digital 720

> Se você não conseguir resolver um problema usando este capítulo, entre em contato com o suporte da Dinamarca de Áudio Digital em [digitalaudio.dk/support](https://digitalaudio.dk/support). Ao contatar o suporte, tenha o número de série unitário, a versão do firmware e a versão do DADman disponível.

---

## 9.1 Referência Rápida

| Soprador                         | Primeira verificação                                              | Referência                                                |
| -------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------- |
| Sem energia / unidade não inicia | Verifique o cabo de energia e a tomada principal. | [Ch. 3 — Instalação](./ch03-installation) |

Unidade não descoberta pelo DADman, verifique o cabo Ethernet e mude a conexão. Verificar se o host NIC está na mesma sub-rede. Verificar configurações QoS na chave gerenciada. £[Ch. 3 — Instalação](./ch03-installation#34-network-setup) £
eterna dropouts de áudio na Ethernet trava de rede necessária — não compartilhe com o tráfego de TI. Verificar configuração do switch QoS. £[Ch. 3 — Instalação](./ch03-installation) ➲
Error Clock (Err. Luz de LED litro). Verifique se a fonte de referência externa está presente e na taxa de amostragem correta. Verifique encerramento de relógio de palavras. £[Ch. 5 — Relógio](./ch05-clocking) £
Audio silencie em todos os canais, verifique o roteamento no DADman. Verificar sessão taxa de amostragem correspondente. Verifique as conexões físicas. £[Ch. 4 — Conexões](./ch04-connections) £
£A atualização de Firmware falhou e não desligue o dispositivo. Aguarde 5 minutos para a unidade expirar. Contate o suporte DAD se a unidade não reiniciar. £[Ch. 8 — Manutenção](./ch08-maintenance) ¶

---

## 9.2 - Solução de problemas detalhada

### 9.2.1 Unidade Não Liga

_[Colocador — Diagnóstico passo-a-passo para condições de ausência de energia.]_

1. Confirme se a tomada principal está ao vivo usando um dispositivo conhecido-bem.
2. Verifique se o cabo de potência IEC está totalmente sentado a ambas as extremidades.
3. Verifique que o botão Liga/Desliga do painel frontal está funcionando (pressione e segure 2 segundos).
4. Se a unidade ainda não iniciar, entre em contato com o suporte DAD.

---

### 9.2.2 Unidade não detectada no DADman

_[Colocador — árvore de decisão pela falha de detecção.]_

---

### 9.2.3 Erros do Relógio

_[Marcador — procedimento sistemático de resolução de problemas de relógios.]_

---

### 9.2.4 Problemas de Áudio

_[Placeholder — silêncio, distorção, ruído, canal de troca de fluxo de diagnóstico.]_

---

## Referências cruzadas

- [Ch. 2 — Descrição do painel](./ch02-panel-description) — referência do estado LED
- [Ch. 5 — Relógio](./ch05-clocking)
- [Manual do Usuário do DADman — Ch. 9](/troubleshooting) — Solução de problemas no lado do software
