# Project-3-Website
A website created by Group-16 for the Project 3 elective
----------------------------------------------------------------------

#run server with localhost
----------------------------------------------------------------------
#C:\Windows\System32\drivers\etc\hosts (open in notepad using admin)

Add the following lines underneath the example of localhost
127.0.0.1 localhost
127.0.0.1 petdb.com
======================================================================
#C:\xampp\apache\conf\extra\httpd-vhosts.conf (open in notepad)

add the following block of code to the bottom of the document
<VirtualHost *:80>
    ServerAdmin kingrhegan1234@gmail.com
    DocumentRoot "C:/xampp/htdocs/Project-3-Website"
    ServerName petdb.com
    <Directory C:/xampp/htdocs/Project-3-Website>
        AllowOverride all
        Require all granted
    </Directory>
    ##ErrorLog "logs/dummy-host.example.com-error.log"
    ##CustomLog "logs/dummy-host.example.com-access.log" common
</VirtualHost>
