---
title: "付録 A — コネクタのピンアウト"
sidebar_label: "アプリ。 A — コネクタのピンアウト"
sidebar_position: 12
---

# 付録 A — コネクタのピンアウト

> **製品:** Digital Audio Denmark AX Center

> \*[プレースホルダー — エンジニアリングの検証済みピンデータにすべての TBC 値を置き換えます。 ] \*

---

## A.1 BNC (MADI、ワードクロック)

BNCコネクタは、75Ωの同軸ケーブルのバランスがとれていません。 信号は中央のピンに運ばれ、外側のシェルにシールドされます。 コネクタ規格を超えて追加のピンアウトテーブルは必要ありません。

---

## A.2 DB25 — アナログI/O (Tascam Pinout)

AX Center ベースユニットには、DB25 コネクタは含まれません。 DB25接続は、2つの拡張スロットに設置された拡張カード(CARD-L8、CARD-M8、CARD-DA8)により提供されます。

DB25 ピンアウトの詳細については、拡張カードのリファレンスページを参照してください:

- [CARD-L8 — 8-Channel AD Line Input](../../expansion-cards/card-l8#db25-input-pinout-tascam)
- [CARD-M8 — 8チャンネルAD マイク/ライン入力](../../expansion-cards/card-m8#db25-input-pinout-tascam)
- [CARD-DA8 — 8チャンネルDA出力](../../expansion-cards/card-da8#db25-output-pinout-tascam)

---

## A.3 XLR — マイク/ライン入力

| ピン留めする | シグナル                        |
| ------ | --------------------------- |
| 1      | グラウンド/シールド                  |
| 2      | ホット (+)  |
| 3      | Cold (-) |

---

## A.4 TOSLINK (ADAT / Optical MADI)

TOSLINK コネクタは光デジタルオーディオを搭載します。 ピン割り当てがありません: パネルで送信(Tx) / 受信(Rx)の向きを確認します。

---

## A.5 RJ45 (Ethernet)

標準 1000BASE-T イーサネット。 TIA-568Bあたりの有線。

| ピン留めする | シグナル |
| ------ | ---- |
| 1      | Tx + |
| 2      | Tx − |
| 3      | Rx + |
| 4      | —    |
| 5      | —    |
| 6      | Rx − |
| 7      | —    |
| 8      | —    |

---

## 相互参照

- [Ch. 2 — Panel Description](./ch02-panel-description) — コネクタの場所
- [Ch. 4 — 信号接続](./ch04-connections) — 接続手順
