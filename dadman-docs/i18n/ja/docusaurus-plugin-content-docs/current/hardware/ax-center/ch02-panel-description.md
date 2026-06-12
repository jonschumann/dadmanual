---
title: "チャプター2 — パネルの説明"
sidebar_label: "Ch. 2 — パネルの説明"
sidebar_position: 3
---

# チャプター2 — パネルの説明

> **製品:** Digital Audio Denmark AX Center

> **この章の使い方** この章ではAXセンターのすべての制御とコネクタを識別します。 信号レベルと接続手順については、[Ch. 4 — シグナル接続](ch04-connections). LED の状態の意味については、[2.3](#23-led-state-reference)を参照してください。

---

## 2.1 フロントパネル

![AX Center front panel](/img/panel-ax-center-front.png)
_図 2.1 — AX Center front panel. 番号付けされた吹き出しは以下の表に対応します。_

| 参照 | ラベル                      | タイプ                                  | 関数                                                                                                                                              | ドット                                                                                                                                                                                                                                                       |
| -- | ------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **DAD**                  | 照明のロゴ                                | 青色の照明; 電源オンを示す                                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2  | **パワー**                  | 押しボタンを点灯する                           | 制御されたパワーオン/シャットダウンシーケンスを開始します。 電源を強制的にオフにするには5秒間押し続けます。                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3  | **Int.** | LED表示                                | ユニットが独自の内部クロックリファレンスにロックされているときに点灯する                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4  | **終了**                   | LEDインジケーター（緑）                        | ユニットが外部クロックソースにロックされているときに点灯します（ワードクロック、MADI、ADAT、ダンテ）                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5  | **エラー**                  | LEDインジケーター（赤）                        | クロックエラー、同期損失、または内部障害が検出されたときに点灯します。 [セクション 2.3](#23-led-state-reference) を参照してください。                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6  | **マイク/インスト 1**           | コンボ XLR/TRS (ロック) | マイク/ライン/楽器入力、チャンネル 1. XLR(バランスマイク/ライン)または6.35ミリメートルTRS/TS(ライン/楽器)を受け入れます。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 7  | **P48**                  | LED表示                                | この入力チャンネルでファントム電源(+48 V)が有効な場合に点灯する                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#84CC16'}}></span> |
| 8  | **マイク**                  | LED表示                                | マイク入力として入力が設定された場合に点灯する                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D946EF'}}></span> |
| 9  | **インストール**               | LED表示                                | 入力がハイインピーダンスの装置入力として構成されている場合に点灯する                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F43F5E'}}></span> |
| 10 | **マイク/インスト 2**           | コンボ XLR/TRS (ロック) | マイク/ライン/楽器入力、チャンネル 2. チャネル 1 と同じ仕様です。                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11 | **HP 1**                 | 6.35 mm TRS ジャック     | ヘッドフォン出力 1. DADmanまたはMOM経由で制御されるレベル。                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 12 | **HP 2**                 | 6.35 mm TRS ジャック     | ヘッドフォン出力 2. DADmanまたはMOM経由で制御されるレベル。                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |

---

## 2.2 リアパネル

![AX Center リアパネル](/img/panel-ax-center-rear.png)
_図 2.2 — AX Center リアパネル。 番号付けされた吹き出しは以下の表に対応します。_

| 参照 | ラベル                                      | コネクタ                                                   | 関数                                                                                                                                                                                                 | ドット                                                                                                                                                                                                                                                       |
| -- | ---------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **パワー**                                  | IEC C14 inlet                                          | 電源入力。 100–240 V AC、50/60 Hz、自動測距内蔵PSU。 標準IEC C13電源ケーブルを接続します。                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2  | **EXPANSION** (上部ペア)  | 2xSFPベイ                                                | DADLink / MADI光学拡張。 アクティブ光ファイバー(DADLinkケーブル)または光学MADI I/Oを介して他のDADユニットとの接続のためのSFPモジュールを受け入れます。                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3  | **NET 1 / NET 2**                        | 2×RJ45 + SFP bay                                       | イーサネット制御ネットワーク(NET 1, NET 2: 100/1000BASE-T)。 NET 1/NET 2以下のSFPベイは、オプションのファイバーネットワーク接続用SFPモジュールを受け付けます。 NET 1またはNET 2をDADman制御ネットワークに接続します。通常の動作に必要なポートは1つだけです。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4  | **THUNDERBOLT 1** (上) | USB-C (Thunderbolt 3)               | Thunderbolt 3 主要なコンピューターへの接続。 20 Gbps定格のケーブルを使用して、このポートをコンピュータの Thunderbolt 3 または USB4 ポートに接続します。 標準サンプルレートで最大256の双方向オーディオチャンネルを搭載します。                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5  | **THUNDERBOLT 2** (下) | USB-C (Thunderbolt 3)               | Thunderbolt 3 デイジーチェーン / パススルー。 チェーン内の次の Thunderbolt デバイスに接続します。                                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6  | **WC/VBB IN**                            | BNC, 75Ω                                               | ワードクロックまたはビデオブラックバースト入力。 ワードクロック(1×、256×、またはビデオ同期フォーマット)を受け付けます。 最後のデバイスで75Ωの終端をクロックチェーンに接続します。                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7  | **WC OUT**                               | BNC, 75Ω                                               | ワードクロック出力。 単位の現在の同期リファレンスをワードクロック信号として出力します。                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8  | **MADI IN**                              | BNC, 75Ω                                               | MADI input (coaxial). 56チャネルまたは64チャネルフレームフォーマットでAES10 MADIを受け付けます。 96kHzの場合、最大チャンネル数は32です。                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9  | **MADI OUT**                             | BNC, 75Ω                                               | MADI output (coaxial). 設定したフレームフォーマットとサンプリングレートでMADIを送信します。                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10 | **ADAT OUT 1 / 2**                       | 2×TOSLINK (Optical)                 | ADATLightpipe出力。 ポートあたり最大8チャンネル、44.1/48 kHz、ポートあたり4チャンネル、88.2/96 kHz (S/MUX)です。                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11 | **ADAT IN 1 / 2**                        | 2×TOSLINK (Optical)                 | ADAT照明パイプ入力. ADAT出力と同じチャネル数。                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12 | **MONITOR 1**                            | 2×TRS 6.35 mm (L/R) | バランスの取れたステレオモニター出力 1. DADmanまたはMOM経由で制御されるレベル。                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 13 | **MONITOR 2**                            | 2×TRS 6.35 mm (L/R) | バランスの取れたステレオモニター出力 2. DADmanまたはMOM経由で制御されるレベル。                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 14 | **SLOT 1 / SLOT 2**                      | 2×拡張スロット (DB25)                     | アナログI/O拡張スロット。 各スロットは、8チャンネルのA/D、D/A、またはデジタルI/Oを提供するDAD拡張カードを受け付けます。 カードの種類とチャネルの割り当ては、DADman で設定されます。                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **ご注意 — Thunderbolt ケーブルの要件:** Thunderbolt 3 接続には、20 Gbps 以上の定格ケーブルが必要です。 標準の USB-C ケーブルは Thunderbolt 3 速度に対応しておらず、確実に動作しません。 付属のケーブル、または認定の Thunderbolt 3 / Thunderbolt 4 ケーブルを使用してください。

> **注意 — ワードクロック終端:** AXセンターがワードクロックチェーンの最後のデバイスである場合、WC/VBB INポートを終端(75Ω)する必要があります。 終端スイッチは BNC コネクタに隣接しています。

---

## 2.3 LED 状態リファレンス

### クロックリファレンスLED

| Int. | 外部。 | Err. | 意味                                            |
| -------------------- | --- | -------------------- | --------------------------------------------- |
| ●                    | ○   | ○                    | 内部クロックリファレンスにロック — クロックマスターモード                |
| ○                    | ●   | ○                    | 外部クロックリファレンスにロック — クロックスレーブモード                |
| ●                    | ●   | ○                    | 外部リファレンスへのロックの取得 (トランジェント) |
| ○                    | ○   | ●                    | **クロックエラー** — 選択した参照をロックできません                 |
| ●                    | ○   | ●                    | **内部障害** — パワーサイクル; 永続的な場合はサポートにお問い合わせください    |
| 低速フラッシュ              | —   | —                    | ファームウェアの更新が進行中です — 電源を切らない                    |

### 電源ボタンの状態

| 都道府県：  | 意味                 |
| ------ | ------------------ |
| オフ     | ユニット電源オフ           |
| ステディ   | ユニット電源オン、通常動作      |
| 低速パルス数 | 待機またはシャットダウンが進行中です |

---

## 相互参照

- [Ch. 4 — シグナル接続](ch04-connections) — シグナルレベルと接続手順
- [Ch. 6 — 操作](ch06-operation) — コントロールと表示操作
- [App. A — コネクタPinouts](appa-connector-pinouts) — ピンの割り当て
