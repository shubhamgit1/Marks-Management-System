# Marks-Management-System
This is a student's marks management system

## Steps to run the application in localhost
1. Follow the below instructions to install the NodeJS in Ubuntu
   - Open the terminal and run **curl -fsSL https://<span></span>deb.nodesource.com/setup_14.x | sudo -E bash -**
   - Run **sudo apt-get install -y nodejs**
2. Follow the below instructions to install mysql-server in Ubuntu
   - Run **sudo apt install mysql-server** in terminal.
   - To check the version enter **mysql --version**
   - To set root password run **sudo mysql_secure_installation**
   - Open mysql by running **sudo mysql**
   - To check the plugin of root run **select user, authentication_string, plugin from mysql.user;**
   - If plugin of root is auth_socket, change it to mysql_native_password by running **ALTER USER 'root'@'localhost'IDENTIFIED WITH mysql_native_password by 'sc123456';**
   - To make the changes effectively and immediately run **FLUSH PRIVILEGES;**
   - Now you can open mysql using command **sudo mysql -u root -p**
3. Clone this repo.<br>
4. Open the terminal and go to the main directory of the project i.e. 'Marks-Management-System'.<br>
5. Install all the packages mentioned in the 'dependencies' section of package.json using the command **npm install** <br>
6. If you have mysql-server password other than 'sc123456', then go to the file database.js and change password from 'sc123456' to your password at line 5.
7. Run the application by running the command **node app.js** and it will automatically create the required database and table.<br>
