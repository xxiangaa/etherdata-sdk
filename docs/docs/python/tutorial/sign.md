---
title: Signing and Sending Transaction
---
    
本教程将会介绍如何使用Etherdata-SDK 签署交易。

## 创建Account Object

```python
from etherdata_sdk import Transaction
from etherdata_sdk.account import Account
from etherdata_sdk.json_rpc import JsonRpcMethods

account = Account()
```

## 初始化Account的 Private Key和address

> 具体API请参见[文档](/docs/python/api/etherdata_sdk/account/create)

```python

# 通过助记词
account.create_private_key_from_mnemonic(mnemonic)

# 创建随机的account
account.create_random_private_key()

# 保存钥匙
account.save(output_file="./abc.key")

# 从pk文件创建新的account
account.read_private_key_from_file("abc.key")
```

## 创建交易对象
下面将会展示一个完整的交易对象的创建过程，包括发送人的account，和接受人的account。
 
#### 创建一个发送人和接受人的account

```python
from_account = Account().create_random_private_key()
to_account = Account().create_random_private_key()
```

#### 创建一个交易Object

```python
transaction = Transaction(to=to_account.address, value=30000, gas=1000, gas_price=300, nonce=1, chain_id=3101)
```

#### 由发送者签署交易

```python
signed = from_account.sign_transaction(transaction)
```


## 发送交易

```python
#用公网结点测试
client = JsonRpcMethods("https://rpc.etdchain.net")
client.send_raw_transaction(signed.raw_transaction)
```
