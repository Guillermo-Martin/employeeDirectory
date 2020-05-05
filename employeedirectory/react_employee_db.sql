DROP DATABASE IF EXISTS react_employee_db;

CREATE DATABASE react_employee_db;

USE react_employee_db;

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name)
VALUES ("Ryan", "Atwood"), ("Seth", "Cohen"), ("Marissa", "Cooper"), ("Summer", "Roberts");

SELECT * FROM employee;
