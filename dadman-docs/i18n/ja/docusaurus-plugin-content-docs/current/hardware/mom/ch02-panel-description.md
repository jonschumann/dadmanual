---
title: "チャプター2 — コントロールリファレンス"
sidebar_label: "Ch. 2 — コントロールリファレンス"
sidebar_position: 3
---

# チャプター2 — コントロールリファレンス

> **製品:** Digital Audio Denmark MOM (Monitor Operating Module)

> **この章の使い方** この章では、MOMの正面のすべてのコントロールを識別します。 MOMにはオーディオ回路が含まれていません。オーディオ信号はそれを通してルーティングされません。 設定手順については、[Ch. 6 — 操作](ch06-operation).

---

## 2.1 コントロールリファレンス

![MOM control face](/img/panel-mom.png)
_Figure 2.1 — MOM control face. 番号付けされた吹き出しは、以下の参照テーブルに対応します。_

| 参照 | ラベル                        | タイプ                                                   | 関数                                                                                                                                        | ドット                                                                                                                                                                                                                                                       |
| -- | -------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **Spkr 1**                 | 押しボタンを点灯する                                            | スピーカー出力セット1(メインモニターなど)を選択します。 DADman のアクティブな Monitor Profile で設定されたスピーカー出力に相当します。                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2  | **Spkr 2**                 | 押しボタンを点灯する                                            | スピーカー出力セット 2 (たとえば、近接フィールドモニタ) を選択します。                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 3  | **Spkr 3**                 | 押しボタンを点灯する                                            | スピーカー出力セット3(例:翻訳スピーカーまたはアトモスベッド)を選択します。                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 4  | **Src. A** | 押しボタンを点灯する                                            | アクティブなモニタプロファイルで定義されているモニタリングソースAを選択します。                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5  | **Src. B** | 押しボタンを点灯する                                            | モニタリングソースBを選択します。                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#C2410C'}}></span> |
| 6  | **Src. C** | 押しボタンを点灯する                                            | モニタリングソースCを選択します。                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |
| 7  | **レイヤー**                   | 押しボタンを点灯する                                            | 制御レイヤー間のMOMを切り替えます。 レイヤーを押すと、設定されたレイヤーをサイクルし、Spkr を再割り当てます。 と Src ボタンをクリックします。                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8  | **Status LED 1–4**         | LED表示                                                 | 4 つのアクティブなモニタリングレイヤーまたはプリセットのステータスを示します。 対応するレイヤーがアクティブなときに点灯します。                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#4F46E5'}}></span> |
| 9  | **統計**                     | LEDインジケーター（緑）                                         | MOMはAXセンター/AX64に接続され、正しく通信されます。 初期化中に点滅します。 切断時にオフ                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#A78BFA'}}></span> |
| 10 | **TB**                     | プッシュボタン                                               | Talkback トークバックマイク(DADmanで構成)をタレントフィードにルーティングします。                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11 | **参照**                     | プッシュボタン                                               | 参照レベル。 モニター出力を、アクティブなモニタープロファイルで定義されているキャリブレーション済みリファレンスレベルに切り替えます。 もう一度押すと、前のレベルに戻ります。                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#16A34A'}}></span> |
| 12 | **切り取り**                   | 押しボタンを点灯する                                            | モニター出力を切り取り (ミュート) します。 アクティブ時に赤色を点灯します。                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 13 | **Dim**                    | 押しボタンを点灯する                                            | アクティブモニタープロファイル(通常は-20 dB)に設定された薄暗い量のモニター出力を減衰させます。 アクティブ時に琥珀色を点灯します。                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 14 | **レベル**                    | LEDリング付きロータリーエンコーダformat@@0 | マスターモニターレベルコントロール。 出力レベルを調整するために回します。 LEDリングは、リファレンスレベルに対する現在のレベルの位置を示します。 範囲:リファレンスに対する相対値は-40dB~+6dBです。 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |

> **ご注意 — MOMとモニタープロファイル:** Spkr、Src、およびレイヤーボタンの機能は、DADmanにロードされたモニタープロファイルによって決定されます。 セッションでMOMを使用する前に、モニタープロファイルを構成します。 [Ch. を参照してください。 8 — 高度な機能、セクション 8.1 — プロファイルの監視]。

> **ご注意 — MOM接続:** MOMはホストユニットの背面にあるUSB-C経由でAXセンターまたはAX64に接続します。 コンピュータのUSBポートに直接接続されません。 DDman は、MOM が機能するために実行する必要があります。

---

## 2.3 LED 状態リファレンス

### MOM状態LED

| 統計情報 LED                        | 意味                                                    |
| ------------------------------- | ----------------------------------------------------- |
| 着実な緑                            | MOMが接続され、ホストAXセンター/AX64と通信しています                       |
| スローフラッシュ (緑) | MOM is initializing or waiting for DADman to response |
| オフ                              | MOMが接続されていないか、ホストユニットの電源が切れています                       |

> **注意事項:** MOMボタンの照明状態(Cut = red, Dim = amber, Spkr./Src./Layer = white) は[Ch. 6 — Operation].

---

## 相互参照

- [Ch. 6 — Operation](ch06-operation) — プロファイルの設定を監視する; MOM 構成
- [Ch. 8 — 高度な機能](/advanced-features) — プロファイルの監視
