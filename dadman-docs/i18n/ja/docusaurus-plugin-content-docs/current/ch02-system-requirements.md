---
id: ch02システム要件
title: "第 2 章 — システム要件"
sidebar_label: "Ch. 2 — システム要件"
sidebar_position: 4
slug: /system-requirements
---

# 第 2 章 — システム要件とパッケージ内容

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.1.6  
> **TB3 Driver version covered:** Latest — see Download Centre at digitalaudiosupport.com  
> **Chapter status:** Draft v0.1 — Minimum RAM/storage requirements and package contents pending from DAD engineering  
> **Last updated:** June 2026

---

## この章では

| セクション               | カバー                       | 関連性：                                 |
| ------------------- | ------------------------- | ------------------------------------ |
| 2.1 | DADman ソフトウェアシステム要件       | すべてのユーザー                             |
| 2.2 | DAD Thunderbolt 3 ドライバの要件 | AX64, AXセンター, コア256, Avid MTRXシリーズのみ |
| 2.3 | パッケージの内容                  | すべてのユーザー                             |

---

## 2.1 DADman ソフトウェアシステム要件

### 2.1.1 オペレーティングシステムとプラットフォーム

| 要件                   | macOS                                                                                                                                      | Windows                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **サポートされているOSバージョン** | macOS 10.13 High Sierra through 15 Sequoia (Intel and Apple Silicon)                                    | Windows 10 (64-bit), Windows 11 (64-bit)           |
| **CPUアーキテクチャ**       | x86-64 (Intel) および ARM64 (Apple Silicon M1 以降) — v5.5.0 からのネイティブサポート | x86-64                                                                                   |
| **最小RAM**            | [To be confirmed by DAD engineering]                                                   | [To be confirmed by DAD engineering] |
| **最小ストレージ**          | [To be confirmed by DAD engineering]                                                   | [To be confirmed by DAD engineering] |
| **ネットワーク**           | イーサネットポートが必要です (チャプター3、セクション3.5を参照してください)。実稼働時にはWi-Fiは推奨されません                                           | イーサネットポートが必要です。Wi-Fiは推奨されません                                                             |
| **現在のバージョン**         | 5.8.2 ビルド 2                                                                                                | 5.8.2 ビルド 2                                              |

> **ご注意 — Windowsレガシーサポート:** DADman v5.7.0は、Windows 7とWindows 8をサポートする最終リリースとなりました。 以降のバージョンはすべて、Windows 10またはWindows 11が必要です。

> **ご注意 — Avid hardware users:** DADmanをAvid MTRX、MTRX IIで使用している場合。 またはMTRX Studioでは、Avid ハードウェア用に承認されたDADmanのバージョンを使用する必要があります。 このバージョンは、Avid Master Accountからダウンロードし、DADサポートポータルからダウンロードします。 承認されていないバージョンを使用すると、Avid ハードウェアとの互換性の問題が発生する可能性があります。

---

## 2.2 DAD Thunderbolt 3 ドライバシステム要件

> **注意:** このセクションはハードウェアがAX64、AXセンター、Core 256、またはAvid MTRX製品の場合にのみ適用されます。 ハードウェアがイーサネット経由でコンピュータに接続されている場合(AX32、DX32R、Pentaシリーズなど)、Thunderbolt 3ドライバは必要ありません。

| 要件                       | macOS                                                                                       | Windows                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **サポートされているOSバージョン**     | macOS 11 Big Sur 以降 (Intel と Apple Silicon)                              | Windows 10, Windows 11                                         |
| **Minimum DADman バージョン** | 5.6.7.1 以降                                  | 5.6.7.1 以降     |
| **Thunderbolt ケーブル**     | Thunderbolt 3 または USB-C ケーブルは、20 Gbps 以上に対応しています。                                           | Thunderbolt 3 または USB-C ケーブルは、20 Gbps 以上に対応しています。              |
| **互換性のあるハードウェア**         | AX64, AXセンター, AXセンター, コア256, Avid MTRX, Avid MTRX II, Avid MTRX Studio, Dynaudio Control 01 | AX64, AXセンター, コア256, Avid MTRX, Avid MTRX II, Avid MTRX Studio |

> **CAUTION — ケーブルの仕様:** 20 Gbps まで定格されていないケーブルを使用すると、Thunderbolt 接続が不安定になったり、故障したりする可能性があります。 Thunderbolt認定を受けていない標準USB-Cケーブルでは十分ではありません。 インストール前にケーブルを確認してください。

---

## 2.3 パッケージの内容

> **注意: パッケージ内容保留中**  
> 各製品のハードウェアパッケージ内容をDADエンジニアリングにより確認します。 こちらには、DADman対応のラインナップごとに表を挿入します。

\*[Placeholder: 各製品のパッケージコンテンツテーブル — DAD エンジニアリングによって提供されます。 ハードウェアユニット、電源/IECケーブル、ラックイヤ、ネジ、付属のケーブル、ドキュメンテーションカード、付属のソフトウェアまたはライセンス文書が含まれている必要があります。

### 2.3.1 ソフトウェア

DADman ソフトウェアと Thunderbolt 3 ドライバは、物理メディア上では提供されません。 これらは、DADサポートポータルまたはAvid Masterアカウントからダウンロードされます。 [第3章、セクション3.2 — ソフトウェアの入手]を参照してください。

---

## 相互参照

- **第 1 章 — はじめに:** 互換性のあるハードウェア・ファミリー
- **第 3 章 — インストール:** DADman と Thunderbolt 3 ドライバのダウンロードとインストール; ネットワーク設定
- **付録 A — 仕様:** 製品ごとの完全な技術仕様

---

_[Pending from DAD engineering:]_  
_— Minimum RAM and storage requirements for DADman on macOS and Windows_  
_— Package contents for each hardware model (Core 256, AX Center, AX64, MOM, DAD Junior)_
