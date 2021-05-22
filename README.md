# Almabetter
Student's marks management system

## Steps to run the application in localhost
1. Follow the below instructions to install the NodeJS in Ubuntu
   - Open the terminal and run **curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -**
   - Run **sudo apt-get install -y nodejs**
2. Follow the below instructions to install mysql-server in Ubuntu
   - Run **sudo apt install mysql-server** in terminal.
   - To check the version enter **mysql --version**
   - To set root password run **sudo mysql_secure_installation**
   - Open mysql by running **sudo mysql**
   - To check the plugin of root run **select user, authentication_string, plugin from mysql.user;**
   - If plugin is auth_socket, change it to mysql_native_password by running **ALTER USER 'root'@'localhost'IDENTIFIED WITH mysql_native_password by 'sc123456';**
   - To make the changes effectively and immediately run **FLUSH PRIVILEGES;**
3. Clone this repo.<br>
4. Open the terminal and go to the main directory of the project i.e. 'Almabetter'.<br>
5. Initialise the project by running the command 'npm init' in the terminal.<br>
6. Install all the packages mentioned in the 'dependencies' section of package.json using the command **npm install** <br>
7. Run the application by running the command 'node app.js' and it will automatically create the required database and table.<br>
