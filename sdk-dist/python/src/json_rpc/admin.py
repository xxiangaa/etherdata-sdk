import requests
from typing import List, Optional, Any
from dataclasses import dataclass, field
from dataclasses_json import dataclass_json, config


@dataclass_json
@dataclass
class NodeInfoResponsePorts:
    
    discovery:float 
    """
    The discovery of the port
    """

    listener:float 
    """
    The listener of the port
    """

@dataclass_json
@dataclass
class NodeInfoResponseNodeInfo:
    
    enode:str 
    """
    The enode
    """

    id:str 
    """
    The id of the node
    """

    ip:str 
    """
    The ip of the node
    """

    listenAddr:str 
    """
    The listen address of the node
    """

    ports:NodeInfoResponsePorts 
    """
    The Object if the port
    """

@dataclass_json
@dataclass
class Network:
    
    localAddress:str 
    """
    The local address of each peer
    """

    remoteAddress:str 
    """
    The remote address of each peer
    """

@dataclass_json
@dataclass
class Etd:
    
    difficulty:float 
    """
    The difficulty of the protocal
    """

    head:str 
    """
    The head of the protocal
    """

    version:float 
    """
    The version of the protocal
    """

@dataclass_json
@dataclass
class Protocols:
    
    etd:Etd 
    """
    The details of ETD protocal
    """

@dataclass_json
@dataclass
class PeersArray:
    
    caps:List[str] 
    """
    The caps of each peer
    """

    id:str 
    """
    The id of each peer
    """

    name:str 
    """
    The name of each peer
    """

    network:Network 
    """
    The network environment of each peer
    """

    protocols:List[Protocols] 
    """
    The protocol(s) used by each peer
    """


class Admin:
    """
    The admin API gives you access to several non-standard RPC methods,  which will allow you to have a fine grained control over your Getd instance,  including but not limited to network peer and RPC endpoint management
    """

    def __init__(self, url: str):
        self.url = url


    
    def addPeer(self, enode:str)-> bool:
        """
        The addPeer administrative method requests adding a new remote node to the list of tracked static nodes
         The node will try to maintain connectivity to these nodes at all times, reconnecting every once in a while if the remote connection goes down
         The method accepts a single argument, the enode URL of the remote peer to start tracking and returns a BOOL indicating whether the peer was accepted for tracking or some error occurred
        :param enode: The enode URL of the remote peer to start tracking
        :return accepted: Indicating whether the peer was accepted for tracking or some error occurred.
        """
        response = requests.post(self.url, data={
          "method": "admin_addPeer",
          "params": [enode],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def datadir(self, )-> str:
        """
        The datadir administrative property can be queried for the absolute path the running Getd node currently uses to store all its databases
        :return absPath: The absolute path that the running Getd node is currently using to store all its databases
        """
        response = requests.post(self.url, data={
          "method": "admin_datadir",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def nodeInfo(self, )-> NodeInfoResponseNodeInfo:
        """
        The nodeInfo administrative property can be queried for all the information known about the running Getd node at the networking granularity
         These include general information about the node itself as a participant of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
        g
         etd, les, shh, bzz)
        :return nodeInfo: Get all the information known about the running Getd node at the networking granularity
        """
        response = requests.post(self.url, data={
          "method": "admin_nodeInfo",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return NodeInfoResponseNodeInfo.from_dict(response.json())
        
    def peers(self, )-> List[PeersArray]:
        """
        The peers administrative property can be queried for all the information known about the connected remote nodes at the networking granularity
         These include general information about the nodes themselves as participants of the ÐΞVp2p P2P overlay protocol, as well as specialized information added by each of the running application protocols (e
        g
         etd, les, shh, bzz)
        :return peersArray: All the information known about the connected remote nodes
        """
        response = requests.post(self.url, data={
          "method": "admin_peers",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return PeersArray.schema().load(response.json(), many=True)
        
    def startRPC(self, host:Optional[str], port:Optional[float], cors:Optional[str], apis:Optional[str])-> bool:
        """
        The startRPC administrative method starts an HTTP based JSON RPC API webserver to handle client requests
         All the parameters are optional
        :param host: Network interface to open the listener socket on (defaults to "localhost")
        :param port: Network port to open the listener socket on (defaults to 8545)
        :param cors: cross-origin resource sharing header to use (defaults to "")
        :param apis: API modules to offer over this interface (defaults to "etd,net,web3")
        :return hTTPlistenerOpen: A boolean flag specifying whether the HTTP RPC listener was opened or not. Please note, only one HTTP endpoint is allowed to be active at any time.
        """
        response = requests.post(self.url, data={
          "method": "admin_startRPC",
          "params": [host, port, cors, apis],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def startWS(self, host:Optional[str], port:Optional[float], cors:Optional[str], apis:Optional[str])-> bool:
        """
        The startWS administrative method starts an WebSocket based JSON RPC API webserver to handle client requests
         All the parameters are optional
        :param host: Network interface to open the listener socket on (defaults to "localhost")
        :param port: Network port to open the listener socket on (defaults to 8546)
        :param cors: cross-origin resource sharing header to use (defaults to "")
        :param apis: API modules to offer over this interface (defaults to "etd,net,web3")
        :return wEBlistenerOpen: A boolean flag specifying whether the WebSocket RPC listener was opened or not. Please note, only one WebSocket endpoint is allowed to be active at any time.
        """
        response = requests.post(self.url, data={
          "method": "admin_startRPC",
          "params": [host, port, cors, apis],
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def stopRPC(self, )-> bool:
        """
        The stopRPC administrative method closes the currently open HTTP RPC endpoint
         As the node can only have a single HTTP endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
        :return hTTPendpointClosed: A boolean indicating whether the endpoint was closed or not.
        """
        response = requests.post(self.url, data={
          "method": "admin_stopRPC",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
    def stopWS(self, )-> bool:
        """
        The stopWS administrative method closes the currently open WebSocket RPC endpoint
         As the node can only have a single WebSocket endpoint running, this method takes no parameters, returning a boolean whether the endpoint was closed or not
        :return wEBendpointClosed: A boolean indicating whether the endpoint was closed or not.
        """
        response = requests.post(self.url, data={
          "method": "admin_stopWS",
          "params": None,
          "jsonrpc": "2.0",
          "id": 1
        })
        return response.json()
        
