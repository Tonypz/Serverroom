#!/usr/bin/env python
import socket
sockClient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
HOST = 'localhost'
PORT = '8080'
sockClient.connect((HOST,PORT))
sockClient.sendall('Hello, world')
data = sockClient.recv(1024)
sockClient.close()
print('Recived cmplete')
repr(data)