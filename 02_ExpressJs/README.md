# What is PORT and PORT number ->

In computer networking, a port is a logical constuct that is used to identify a specific process or service running on a computer or other networked device.
Each port is associated with a unique number, called a port number, which allows data to be routed to the correct application or service.
A port address, and the type of transport protocol used for communication an IP address, and the type of transport protocol used for communication.
Specific port numbers are reserved to identify specific services so that arriving packet can be easily forwarded to a running application

# Types of Ports
Ports are further divided into three categories:

Well Known Port
Registered port
Dynamic Port
Well Known Port
It is from the range 0 to 1023
It is reserved for common and specifically used service
It is used by some widely adopted protocols and services like HTTP(port 80), FTP(port 21), DNS(Port 53), SSH(port 22), etc…..
Registered Port
It is from range 1024 to 49151
These are used by applications or services that are not as common
But it is used by those applications or services which require its specific port
Organizations can ask IANA(Internet Assigned Number Authority) for any specific port number within this range
Dynamic Port
It is from range 49152 to 65535
It is also known as Ephemeral or Private Port
It is used for those connections that are temporary or short-lived
It is not registered or assigned and can be used by any process
Importance of Ports
Ports have many significance. Some of them are-

Identification of service- Different application/services that work on the same device can be differentiated by their port numbers. For example, HTTP(Port number 80) and SMTP(port number 25) in the same computer uses different port number to ensure their data goes to the correct service
Efficient Data Routing- When a network device receives data from different places it uses port numbers to efficiently route those data packets to the respective application
Block traffic from specific applications/services- When we have to block incoming or outgoing traffic from a specific application/service then we need to install a firewall and specify the port number of that application/service. We block traffic from/to some specific applications/services when we find any potential threats from those applications/services
Scalability of services- Many services can run simultaneously on the same device and can be differentiated using their port number. This helps the device to scale and support many services at the same time.
Some Popular Port Numbers
Some common/Popular port numbers that are used by those applications/services which are frequently used by us-

Port Number	Used By
80	HTTP(Hyper Text Transfer Protocol)
23	Telnet
25	SMTP(Simple Mail Transfer Protocol)
53	DNS(Domain Name System)
7	Echo
20/21	FTP(File Transfer Protocol)
69	TFTP(Trivial File Transfer Protocol)
443	HTTPS(Hyper Text Transfer Protocol Secure)
22	SSH(Secure Shell)
110	POP3(Post Office Protocol version 3)
67/68	DHCP(Dynamic Host Configuration Protocol0
123	NTP(Network Time Protocol)
143	IMAP(Internet Messaging Access Protocol)
1433	Microsoft SQL
3306	MySQL
5432	PostgreSQL
27017	MongoDB