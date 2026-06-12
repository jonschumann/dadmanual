---
title: "チャプター2 — パネルの説明"
sidebar_label: "Ch. 2 — パネルの説明"
sidebar_position: 3
---

# チャプター2 — パネルの説明

> **製品:** Digital Audio Denmark Core 256

> **この章の使い方** この章では、Core 256 のすべての制御とコネクタを識別します。 信号レベルと接続手順については、[Ch. 4 — シグナル接続](ch04-connections). LED の状態の意味については、[2.3](#23-led-state-reference)を参照してください。

---

## 2.1 フロントパネル

![Core 256 front panel](/img/panel-core256-front.png)
_図 2.1 — Core 256 front panel._

> **注意:** Core 256 のフロントパネルはステータスインジケータのみを提供します。 フロントパネルにはオーディオ I/O コネクタはありません。

| 参照 | ラベル                      | タイプ           | 関数                                                                                    | ドット                                                                                                                                                                                                                                                       |
| -- | ------------------------ | ------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **DAD**                  | 照明のロゴ         | 青色の照明; 電源オンを示す                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2  | **パワー**                  | 押しボタンを点灯する    | 制御された電源オン/シャットダウンシーケンスを開始                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3  | **Int.** | LED表示         | 内部クロックリファレンスにロックしたときに点灯する                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4  | **終了**                   | LEDインジケーター（緑） | 外部クロックソースにロックしたときに点灯する                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5  | **エラー**                  | LEDインジケーター（赤） | クロックエラーまたは内部障害で点灯します。 [セクション 2.3](#23-led-state-reference) を参照してください。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 リアパネル

![Core 256 リアパネル](/img/panel-core256-rear.png)
_図 2.2 — コア256リアパネル。 番号付けされた吹き出しは以下の表に対応します。_

Core 256の後部パネルには、AXセンターと同じコネクタセットが搭載されており、以下の違いがあります。

| 違い     | AXセンター                                                | コア 256                                        |
| ------ | ----------------------------------------------------- | --------------------------------------------- |
| パワー    | IEC C14 mains inlet (100–240 V AC) | 12 V DC バレルコネクタ (外部PSUが必要) |
| 出力の監視  | 2xステレオTRS(MONITOR 1, MONITOR 2)    | なし                                            |
| 拡張スロット | 2×(SLOT 1, SLOT 2)                 | 2×(SLOT 1, SLOT 2) — 同じ    |

その他すべてのリアパネルコネクタ (EXPANSION / SFPベイ, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WCアウト、MADI IN、MADI OUT、ADAT OUT 1/2、ADAT IN 1/2)はAXセンターと同じです。 →Chを参照。 4 — AX Center Rear Panel](../ax-center/ch04-connections) これらのコネクタの機能と仕様について。

| 参照 | ラベル                                      | コネクタ                                     | 関数                                                                                                               | ドット                                                                                                                                                                                                                                                       |
| -- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **パワー**                                  | 12 V DC バレル                              | DC電源入力。 付属の外部12V電源を接続します。 第三者の供給の代わりにしないでください。                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2  | **Expansion**                            | 2xSFPベイ                                  | DADLink / MADI光学拡張。 AXセンターと同じ。                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3  | **NET 1 / NET 2**                        | 2×RJ45 + SFP bay                         | イーサネット制御ネットワーク(100/1000BASE-T) + オプションのSFPファイバー。 AXセンターと同じ。                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4  | **THUNDERBOLT 1** (上) | USB-C (Thunderbolt 3) | Thunderbolt 3 主要なコンピューターへの接続。                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5  | **THUNDERBOLT 2** (下) | USB-C (Thunderbolt 3) | Thunderbolt 3 デイジーチェーン / パススルー。                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6  | **WC/VBB IN**                            | BNC, 75Ω                                 | ワードクロックまたはビデオブラックバースト入力。                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7  | **WC OUT**                               | BNC, 75Ω                                 | ワードクロック出力。                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8  | **MADI IN**                              | BNC, 75Ω                                 | MADI input (coaxial). AES10 準拠。                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9  | **MADI OUT**                             | BNC, 75Ω                                 | MADI output (coaxial).                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10 | **ADAT OUT 1 / 2**                       | 2×TOSLINK (Optical)   | ADATLightpipe出力。 最大8ch、44.1/48kHz、48ch、88.2/96kHz(S/MUX)で4ch。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11 | **ADAT IN 1 / 2**                        | 2×TOSLINK (Optical)   | ADAT照明パイプ入力. ADAT出力と同じチャネル数。                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12 | **SLOT 1 / SLOT 2**                      | 2×拡張スロット (DB25)       | アナログI/O拡張スロット。 それぞれが8チャンネルのDAD拡張カードを1枚受け付けます。                                                                    | —                                                                                                                                                                                                                                                         |

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
