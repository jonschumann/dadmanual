---
title: "チャプター2 — パネルの説明"
sidebar_label: "Ch. 2 — パネルの説明"
sidebar_position: 3
---

# チャプター2 — パネルの説明

> **製品:** Digital Audio Denmark AX 64

> **この章の使い方** この章ではAX 64のすべての制御とコネクタを示します。 信号レベルと接続手順については、[Ch. 4 — シグナル接続](ch04-connections). LED の状態の意味については、[2.3](#23-led-state-reference)を参照してください。

---

## 2.1 フロントパネル

![AX 64 front panel](/img/panel-ax64-front.png)
_図 2.1 — AX 64 front panel. 番号付けされた吹き出しは以下の表に対応します。_

> **注意:** AX 64 フロントパネルはステータスインジケータのみを提供します。 すべてのオーディオI/O接続はリアパネルで行われます(図2.2)。

| 参照 | ラベル                      | タイプ                | 関数                                                                                    | ドット                                                                                                                                                                                                                                                       |
| -- | ------------------------ | ------------------ | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **DAD**                  | 照明のロゴ              | 青色の照明; 電源オンを示す                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2  | **パワー**                  | 押しボタンを点灯する         | 制御された電源オン/シャットダウンシーケンスを開始                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3  | **Int.** | LED表示              | 内部クロックリファレンスにロックしたときに点灯する                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4  | **終了**                   | LEDインジケーター（緑）      | 外部クロックソースにロックしたときに点灯する                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5  | **エラー**                  | LEDインジケーター（赤）      | クロックエラーまたは内部障害で点灯します。 [セクション 2.3](#23-led-state-reference) を参照してください。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6  | **ファンベント**               | Ventilation grille | 内部冷却ファンの排気ポート。 十分な気流を維持するために障害物を避けてください。                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#EF4444'}}></span> |

---

## 2.2 リアパネル

![AX 64 rear panel](/img/panel-ax64-rear.png)
_図 2.2 — AX 64 rear panel. 番号付けされた吹き出しは以下の表に対応します。_

| 参照     | ラベル                                      | コネクタ                                     | 関数                                                                                                                                                                               | ドット                                                                                                                                                                                                                                                       |
| ------ | ---------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | **パワー**                                  | IEC C14 inlet                            | 電源入力。 100–240 V AC、50/60 Hz、オートレンジング。                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 1a     | _(オプション)_             | IEC C14 inlet                            | 冗長電源入口(工場で取り付けられたオプション)。                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2, 3   | **Expansion**                            | 2xSFPベイ                                  | DADLink / MADI光学拡張。 DADLinkまたは光学MADI I/OのSFPモジュールを受け付けます。                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 4, 5   | **NET 1 / NET 2**                        | 2×RJ45 + SFP bay                         | イーサネット制御ネットワーク。 NET 1またはNET 2をDADman制御ネットワークに接続します。                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 6      | **THUNDERBOLT 1** (上) | USB-C (Thunderbolt 3) | Thunderbolt 3 主要なコンピューターへの接続。                                                                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 7      | **THUNDERBOLT 2** (下) | USB-C (Thunderbolt 3) | Thunderbolt 3 デイジーチェーン / パススルー。                                                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 8      | **WCIN**                                 | BNC, 75Ω                                 | ワードクロック入力                                                                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 9      | **WC OUT**                               | BNC, 75Ω                                 | ワードクロック出力。                                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 10     | **MADI IN**                              | BNC, 75Ω                                 | MADI同軸入力。 AES10 準拠。                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 11     | **MADI OUT**                             | BNC, 75Ω                                 | MADI同軸出力。                                                                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 12, 14 | **ADAT OUT 1 / 2**                       | 2×TOSLINK (Optical)   | ADATLightpipe出力。 最大8ch、44.1/48kHz、48ch、88.2/96kHz(S/MUX)で4ch。                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 13, 15 | **ADAT IN 1 / 2**                        | 2×TOSLINK (Optical)   | ADAT照明パイプ入力.                                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 16–23  | **スロット1 – スロット8**                        | 最大 8x DB25                               | アナログ拡張カードスロット。 各スロットは、8チャネルのDAD拡張カード(A/D、D/A、またはデジタルI/O)を1つ受け付けます。 スロット番号付けは、背面から見ると右から左に実行されます(スロット1は右です)。 カードの種類とルーティングは、DADman で設定されます。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **注意 — 拡張カードスロット:** 空きスロットはブランキングプレートで覆われています。 ブランキングプレートは除去しないでください。 拡張カードはユニットの電源が切れた状態でのみインストールまたは取り外す必要があります。

> **注意: スロット番号の規則:** スロット番号は各スロットの上にシルクスクリーニングされ、ユニットの背面から見ると右(スロット1)から左(スロット8)に移動します。 ユニットを拡張カードで最初に接続するときに、DADman でスロット割り当てを確認します。

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
