ビルド手順
npm run buildを実行


最初の環境構築手順
1. virtualboxのインストール(公式のインストーラーを使用)
2. vagrantのインストール(brewもしくは公式のインストーラの使用)
3. pythonをインストール
4. pipをインストール
5. python -m venv ansibleを実行
6. source ansible/bin/activeを実行し仮想環境を有効にする
7. pip install ansibleを実行

参考文献
https://knowledge.sakura.ad.jp/2882/
https://mekou.com/linux-magazine/centos-7-%E3%81%AB-node-jsnpm-node-%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E6%89%8B%E9%A0%86/

環境構築手順
1. virtualboxのインストール(公式のインストーラーを使用)
2. vagrantのインストール(brewもしくは公式のインストーラの使用)
3. pythonをインストール
4. pipをインストール
5. python -m venv ansibleを実行

・TODO
ansibleによる環境管理

・ansibel作業書
virtualbox guest addtionのインストール(ホストでvagrant-vbguestのインストールをすれば解決)
yumのupdate
gccのインストール
gitのインストール
nodenvのインストール
node-updateのインスト０る
node-buildのインストール

hint
ゲストosのホームディレクトリを共有ディレクトリに指定したときに.sshを消してしまいログインできなくなる
npm startでlocahost:3000にアクセスするとアプリが見れる

ホットリロードに関するノウハウメモ
CHOKIDAR_USEPOLLING=trueをプロジェクト内の.envに追加すれば良い
仮想環境だと上記のフラグが必要
https://create-react-app.dev/docs/troubleshooting/#npm-start-doesnt-detect-changes
Vagranfile のsynced folder に追加 type: "rsync", rsync_auto: true

ゲストからホストへのrsync方法
vagrant plugin install vagrant-rsync-back
vagrant rsync-back