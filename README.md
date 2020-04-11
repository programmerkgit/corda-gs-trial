# Corda Getting Started
Documentに沿ってCordaを利用してみるプロジェクト。
詰まった点などをメモします。 20/04/11

# corda-gs-trial


## 手順

```
cd cordapp-example
git checkout release-V4
```
a
### SDKの設定 ad
プロジェクトで利用するJavaのSystem Development Kitを設定。アノテーション情報などが含まれる。
Java 8以上(1.0.8)

```
File > Project Structure
New... > JDK, Apply
```

### Modules
corda-examples フォルダからModuleをImport

```
Modules > + > Import Module
Import module from external model > Gradle > Next, Use auto-import > Finish > Ok
```