package com.etd

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/** different methods to perform etd control */
class Json_rpc_methods(val url: String) {
  data class SyncingResponseSyncObject(
      val startingBlock: Long,
      val currentBlock: Long,
      val highestBlock: Long
  )

  data class SyncingResponse(
      val syncObject: SyncingResponseSyncObject,
      val syncStatus: Boolean,
  )

  data class Obj(
      val from: String,
      val to: String,
      val gas: String,
      val gasPrice: String,
      val value: String,
      val data: String,
      val nonce: String
  )

  data class GetBlockByHashResponseObj(
      val number: String,
      val hash: String,
      val parnetHash: String,
      val nonce: String,
      val sha3Uncles: String,
      val logsBloom: String,
      val transactionsRoot: String,
      val miner: String,
      val difficulty: String,
      val totalDifficulty: String,
      val extradata: String,
      val size: String,
      val gasLimit: String,
      val gasUsed: String,
      val timestamp: String,
      val transaction: List<String>,
      val uncles: List<String>
  )

  data class GetBlockByNumberResponseObj(
      val number: String,
      val hash: String,
      val parnetHash: String,
      val nonce: String,
      val sha3Uncles: String,
      val logsBloom: String,
      val transactionsRoot: String,
      val miner: String,
      val difficulty: String,
      val totalDifficulty: String,
      val extradata: String,
      val size: String,
      val gasLimit: String,
      val gasUsed: String,
      val timestamp: String,
      val transaction: List<String>,
      val uncles: List<String>
  )

  data class GetTransactionByHashResponseObj(
      val blockHash: String,
      val blockNumber: String,
      val from: String,
      val gas: String,
      val gasParice: String,
      val hash: String,
      val input: String,
      val nonce: String,
      val to: String,
      val transactionIndex: String,
      val value: String,
      val v: String,
      val r: String,
      val s: String
  )

  data class GetTransactionByHashAndIndexResponseObj(val data: Any)

  data class GetTransactionByBlockNumberAndIndexResponseObj(val data: Any)

  data class GetTransactionReceiptResponseObj(
      val transactionHash: String,
      val transactionIndex: String,
      val blockHash: String,
      val blockNumber: String,
      val from: String,
      val to: String,
      val cumulativeGasUsed: String,
      val gasUsed: String,
      val contractAddress: String,
      val logs: List<String>,
      val logsBloom: String,
      val root: String,
      val status: String
  )

  data class GetUncleByBlockHashAndIndexResponseObj(val data: Any)

  data class GetUncleByBlockNumberAndIndexResponseObj(val data: Any)

  data class Array(
      val removed: Boolean,
      val logIndex: String,
      val transactionIndex: String,
      val transactionHash: String,
      val blockHash: String,
      val blockNumber: String,
      val address: String,
      val data: String,
      val topics: List<String>
  )

  private val client = HttpClient() { install(JsonFeature) { serializer = GsonSerializer() } }
  /**
   * Returns the current etherdata protocol version
   * @return version The current etherdata protocol version
   */
  suspend fun protocalVersion(): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_protocalVersion", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the current block number
   * @return blockNumber The current blockNumber
   */
  suspend fun blockNumber(): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(method = "eth_blockNumber", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns an object with data about the sync status or false
   * @return syncObject return this ONLY when syncing
   * @return syncStatus return this ONLY when not syncing
   */
  suspend fun syncing(): SyncingResponse {

    val response: JsonRpcResponse<SyncingResponse> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_syncing", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the client coinbase address
   * @return coinbase The client coinbase address
   */
  suspend fun coinbase(): Any {

    val response: JsonRpcResponse<Any> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_coinbase", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns true if client is actively mining new blocks
   * @return isMining True if client is actively mining new blocks.
   */
  suspend fun mining(): Boolean {

    val response: JsonRpcResponse<Boolean> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_mining", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of hashes per second that the node is mining with
   * @return hashrate The number of hashes per second that the node is mining with
   */
  suspend fun hashrate(): Any {

    val response: JsonRpcResponse<Any> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_hashrate", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the current price per gas in wei
   * @return gasPrice The current price per gas in wei (8049999872 Wei in the example)
   */
  suspend fun gasPrice(): Any {

    val response: JsonRpcResponse<Any> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_gasPrice", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns a list of addresses owned by client
   * @return addressAccount The array of accouts
   */
  suspend fun accounts(): List<Any> {

    val response: JsonRpcResponse<List<Any>> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_accounts", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the balance of the account of given address
   * @param address data, 20 Bytes - address to check for balance
   * @param tag quantity_tag - integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return balance quantity - integer of the current balance in wei.
   */
  suspend fun getBalance(address: String, tag: String): Long {

    val response: JsonRpcResponse<Long> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getBalance", params = listOf(address, tag), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the value from a storage position at a given address
   * @param address data, 20 Bytes - address of the storage.
   * @param position The integer of the position in the storage.
   * @param tag quantity_tag - integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return valur The value at this storage position.
   */
  suspend fun getStorageAt(address: Any, position: Any, tag: String): Any {

    val response: JsonRpcResponse<Any> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getStorageAt",
                  params = listOf(address, position, tag),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of transactions sent from an address
   * @param address The address.
   * @param state quantity_tag - integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return number The number of transactions send from this address.
   */
  suspend fun getTransactionCount(address: Any, state: String): Long {

    val response: JsonRpcResponse<Long> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getTransactionCount",
                  params = listOf(address, state),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of transactions in a block from a block matching the given block hash
   * @param data 20 Bytes - The address
   * @param quantity_tag integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return quantity The integer of the number of transactions send from this address.
   */
  suspend fun getTransactionCountByHash(data: String, quantity_tag: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getTransactionCountByHash",
                  params = listOf(data, quantity_tag),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of transactions in a block from a block matching the given block hash
   * @param data 32 Bytes - The hash of a block
   * @return quantity The integer of the number of transactions in this block.
   */
  suspend fun getBlockTransactionCountByHash(data: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getBlockTransactionCountByHash",
                  params = listOf(data),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of transactions in a block matching the given block number
   * @param quantity_tag The integer of a block number, or the string &quot;earliest&quot;,
   * &quot;latest&quot; or &quot;pending&quot;, see the default block parameter
   * @return quantity The integer of the number of transactions in this block.
   */
  suspend fun getBlockTransactionCountByNumber(quantity_tag: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getBlockTransactionCountByNumber",
                  params = listOf(quantity_tag),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of uncles in a block from a block matching the given block hash
   * @param data 32 Bytes - The hash of a block
   * @return quantity_tag The integer of the number of uncles in this block.
   */
  suspend fun getUncleCountByBlockHash(data: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getUncleCountByBlockHash",
                  params = listOf(data),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the number of uncles in a block from a block matching the given block number
   * @param quantity_tag The integer of a block number, or the string “latest”, “earliest” or
   * “pending”, see the default block parameter
   * @return quantity The integer of the number of uncles in this block.
   */
  suspend fun getUncleCountByBlockNumber(quantity_tag: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getUncleCountByBlockNumber",
                  params = listOf(quantity_tag),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns code at a given address
   * @param data 20 Byter - The address
   * @param quantity_tag The integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter
   * @return data The code from the given address.
   */
  suspend fun getCode(data: String, quantity_tag: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_code", params = listOf(data, quantity_tag), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * The sign method calculates an etherdata specific signature with
   * sign(keccak256(&quot;\x19etherdata Signed Message:\n&quot; + len(message) + message)))
   *
   * By adding a prefix to the message makes the calculated signature recognisable as an etherdata
   * specific signature This prevents misuse where a malicious DApp can sign arbitrary data (e g
   * transaction) and use the signature to impersonate the victim
   *
   * Note the address to sign with must be unlocked
   * @param a 20 Bytes - The address
   * @param b N Bytes - The message to sign
   * @return value The signature
   */
  suspend fun sign(a: String, b: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_sign", params = listOf(a, b), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Signs a transaction that can be submitted to the network at a later time using with
   * eth_sendRawTransaction
   * @param obj The transaction object
   * @return data The signed transaction object.
   */
  suspend fun signTransaction(obj: Obj): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_signTransaction", params = listOf(obj), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Creates new message call transaction or a contract creation, if the data field contains code
   * @param obj The transaction object
   * @return data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet
   * available. Use eth_getTransactionReceipt to get the contract address, after the transaction was
   * mined, when you created a contract.
   */
  suspend fun sendTranscation(obj: Obj): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_sendTranscation", params = listOf(obj), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Creates new message call transaction or a contract creation for signed transactions
   * @param data The signed transaction data.
   * @return data 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet
   * available. Use eth_getTransactionReceipt to get the contract address, after the transaction was
   * mined, when you created a contract.
   */
  suspend fun sendRawTransaction(data: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_sendRawTransaction", params = listOf(data), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Executes a new message call immediately without creating a transaction on the block chain
   * @param obj The transaction object
   * @param quantity_tag The integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
   * @return data The return value of executed contract.
   */
  suspend fun call(obj: Obj, quantity_tag: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_call", params = listOf(obj, quantity_tag), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Generates and returns an estimate of how much gas is necessary to allow the transaction to
   * complete The transaction will not be added to the blockchain Note that the estimate may be
   * significantly more than the amount of gas actually used by the transaction, for a variety of
   * reasons including EVM mechanics and node performance
   * @param obj The transaction object
   * @param quantity_tag The integer block number, or the string &quot;latest&quot;,
   * &quot;earliest&quot; or &quot;pending&quot;, see the default block parameter.
   * @return quantity The amount of gas used.
   */
  suspend fun estimateGas(obj: Obj, quantity_tag: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_estimateGas",
                  params = listOf(obj, quantity_tag),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns information about a block by hash
   * @param data 32 Bytes - Hash of a block.
   * @param bool If true it returns the full transaction objects, if false only the hashes of the
   * transactions.
   * @return obj A block object, or null when no block was found
   */
  suspend fun getBlockByHash(data: String, bool: Boolean): GetBlockByHashResponseObj {

    val response: JsonRpcResponse<GetBlockByHashResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getBlockByHash",
                  params = listOf(data, bool),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns information about a block by block number
   * @param quantity_tag The integer of a block number, or the string &quot;earliest&quot;,
   * &quot;latest&quot; or &quot;pending&quot;, as in the default block parameter.
   * @param bool If true it returns the full transaction objects, if false only the hashes of the
   * transactions.
   * @return obj A block object, or null when no block was found
   */
  suspend fun getBlockByNumber(quantity_tag: String, bool: Boolean): GetBlockByNumberResponseObj {

    val response: JsonRpcResponse<GetBlockByNumberResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getBlockByNumber",
                  params = listOf(quantity_tag, bool),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the information about a transaction requested by transaction hash
   * @param data 32 Bytes - hash of a transaction
   * @return obj A transaction object, or null when no transaction was found
   */
  suspend fun getTransactionByHash(data: String): GetTransactionByHashResponseObj {

    val response: JsonRpcResponse<GetTransactionByHashResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getTransactionByHash",
                  params = listOf(data),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns information about a transaction by block hash and transaction index position
   * @param data 32 Bytes - hash of a block.
   * @param quantity The integer of the transaction index position.
   * @return obj See eth_getTransactionByHash
   */
  suspend fun getTransactionByHashAndIndex(
      data: String,
      quantity: String
  ): GetTransactionByHashAndIndexResponseObj {

    val response: JsonRpcResponse<GetTransactionByHashAndIndexResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getTransactionByHashAndIndex",
                  params = listOf(data, quantity),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns information about a transaction by block number and transaction index position
   * @param quantity_tag a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or
   * &quot;pending&quot;, as in the default block parameter.
   * @param quantity The transaction index position.
   * @return obj See eth_getTransactionByHash
   */
  suspend fun getTransactionByBlockNumberAndIndex(
      quantity_tag: String,
      quantity: String
  ): GetTransactionByBlockNumberAndIndexResponseObj {

    val response: JsonRpcResponse<GetTransactionByBlockNumberAndIndexResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getTransactionByBlockNumberAndIndex",
                  params = listOf(quantity_tag, quantity),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns the receipt of a transaction by transaction hash Note That the receipt is not available
   * for pending transactions
   * @param data 32 Bytes - hash of a transaction
   * @return obj A transaction receipt object, or null when no receipt was found
   */
  suspend fun getTransactionReceipt(data: String): GetTransactionReceiptResponseObj {

    val response: JsonRpcResponse<GetTransactionReceiptResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getTransactionReceipt",
                  params = listOf(data),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * eturns information about a uncle of a block by hash and uncle index position
   * @param data 32 Bytes - The hash of a block.
   * @param quantity The uncle’s index position.
   * @return obj See eth_getTransactionByHash Note - An uncle doesn’t contain individual
   * transactions.
   */
  suspend fun getUncleByBlockHashAndIndex(
      data: String,
      quantity: String
  ): GetUncleByBlockHashAndIndexResponseObj {

    val response: JsonRpcResponse<GetUncleByBlockHashAndIndexResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getUncleByBlockHashAndIndex",
                  params = listOf(data, quantity),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns information about a uncle of a block by number and uncle index position
   * @param quantity_tag a block number, or the string &quot;earliest&quot;, &quot;latest&quot; or
   * &quot;pending&quot;, as in the default block parameter.
   * @param quantity the uncle’s index position.
   * @return obj See eth_getTransactionByHash Note - An uncle doesn’t contain individual
   * transactions.
   */
  suspend fun getUncleByBlockNumberAndIndex(
      quantity_tag: String,
      quantity: String
  ): GetUncleByBlockNumberAndIndexResponseObj {

    val response: JsonRpcResponse<GetUncleByBlockNumberAndIndexResponseObj> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getUncleByBlockNumberAndIndex",
                  params = listOf(quantity_tag, quantity),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns a list of available compilers in the client
   * @return array Array of available compilers.
   */
  suspend fun getCompliers(): List<String> {

    val response: JsonRpcResponse<List<String>> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getCompliers", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns compiled solidity code
   * @param string The source code.
   * @return data The compiled source code.
   */
  suspend fun compileSolidity(string: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_compileSolidity", params = listOf(string), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns compiled LLL code
   * @param string The source code.
   * @return data The compiled source code.
   */
  suspend fun complpieLLL(string: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_complpieLLL", params = listOf(string), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns compiled serpent code
   * @param string The source code.
   * @return data The compiled source code.
   */
  suspend fun complieSerpent(string: String): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_complieSerpent", params = listOf(string), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Creates a filter object, based on filter options, to notify when the state changes (logs) To
   * check if the state has changed, call eth_getFilterChanges
   *
   * A note on specifying topic filters Topics are order-dependent A transaction with a log with
   * topics [A, B] will be matched by the following topic filters -[] “anything” -[A] “A in first
   * position (and anything after)” -[null, B] “anything in first position AND B in second position
   * (and anything after)” -[A, B] “A in first position AND B in second position (and anything
   * after)” -[[A, B], [A, B]] “(A OR B) in first position AND (A OR B) in second position (and
   * anything after)”
   * @param obj The filter options
   * @return quantity A filter id.
   */
  suspend fun newFilter(obj: Obj): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_newFilter", params = listOf(obj), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Creates a filter in the node, to notify when a new block arrives To check if the state has
   * changed, call eth_getFilterChanges
   * @return quantity A filter id.
   */
  suspend fun newBlockFilter(): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_newBlockFilter", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Creates a filter in the node, to notify when new pending transactions arrive To check if the
   * state has changed, call eth_getFilterChanges
   * @return quantity A filter id.
   */
  suspend fun newPendingTransactionFilter(): String {

    val response: JsonRpcResponse<String> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_newPendingTransactionFilter",
                  params = listOf(),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Uninstalls a filter with given id Should always be called when watch is no longer needed
   * Additonally Filters timeout when they aren’t requested with eth_getFilterChanges for a period
   * of time
   * @param quantity The filter id.
   * @return bool true if the filter was successfully uninstalled, otherwise false.
   */
  suspend fun uninstallFilter(quantity: String): Boolean {

    val response: JsonRpcResponse<Boolean> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_uninstallFilter",
                  params = listOf(quantity),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Polling method for a filter, which returns an array of logs which occurred since last poll
   * @param quantity The filter id.
   * @return array Array of log objects, or an empty array if nothing has changed since last poll.
   * For filters created with eth_newBlockFilter the return are block hashes (data, 32 Bytes), e.g.
   * [&quot;0x3454645634534...&quot;]. For filters created with eth_newPendingTransactionFilter the
   * return are transaction hashes (data, 32 Bytes), e.g. [&quot;0x6345343454645...&quot;].
   */
  suspend fun getFilterChanges(quantity: String): List<Array> {

    val response: JsonRpcResponse<List<Array>> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getFilterChanges",
                  params = listOf(quantity),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }

  /**
   * Returns an array of all logs matching filter with given id
   * @param quantity The filter id.
   * @return array See eth_getFilterChanges.
   */
  suspend fun getFilterLogs(quantity: String): List<Any> {

    val response: JsonRpcResponse<List<Any>> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_getFilterLogs", params = listOf(quantity), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns an array of all logs matching a given filter object
   * @param obj The filter options
   * @return array See eth_getFilterChanges.
   */
  suspend fun getLogs(obj: Obj): List<Any> {

    val response: JsonRpcResponse<List<Any>> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(method = "eth_getLogs", params = listOf(obj), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Returns the hash of the current block, the seedHash, and the boundary condition to be met
   * (“target”)
   * @return array Array with the following properties -data, 32 Bytes - current block header
   * pow-hash -data, 32 Bytes - the seed hash used for the DAG. -data, 32 Bytes - the boundary
   * condition (“target”), 2^256 difficulty.
   */
  suspend fun getWork(): List<String> {

    val response: JsonRpcResponse<List<String>> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body = JsonRpcRequest(method = "eth_getWork", params = listOf(), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Used for submitting a proof-of-work solution
   * @param a 8 Bytes - The nonce found (64 bits)
   * @param b 32 Bytes - The header’s pow-hash (256 bits)
   * @param c 32 Bytes - The mix digest (256 bits)
   * @return bool returns true if the provided solution is valid, otherwise false.
   */
  suspend fun submitWork(a: String, b: String, c: String): Boolean {

    val response: JsonRpcResponse<Boolean> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_submitWork", params = listOf(a, b, c), jsonrpc = "2.0", id = 1)
        }
    return response.result
  }

  /**
   * Used for submitting mining hashrate
   * @param hashrate A hexadecimal string representation (32 bytes) of the hash rate
   * @param id String - A random hexadecimal(32 bytes) ID identifying the client
   * @return bool Returns `true` if submitting went through succesfully and `false` otherwise.
   */
  suspend fun submitHashrate(hashrate: String, id: String): Boolean {

    val response: JsonRpcResponse<Boolean> =
        client.post(url) {
          contentType(ContentType.Application.Json)
          body =
              JsonRpcRequest(
                  method = "eth_submitHashrate",
                  params = listOf(hashrate, id),
                  jsonrpc = "2.0",
                  id = 1)
        }
    return response.result
  }
}
