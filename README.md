# Key & value update

## Install

Clone the repository and install the NPM modules:

```
npm install
```

## Start the app

```
npm run start
```

## SQL Queries

### Create database

```
CREATE DATABASE keyUpdate;
```

### Use database

```
use keyUpdate;
```

### Create table

```
CREATE TABLE keyValue (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
objectKey VARCHAR(1000) NOT NULL,
objectValue VARCHAR(1000) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
```
