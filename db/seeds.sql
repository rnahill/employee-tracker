-- Inserting values into the 'department' table
INSERT INTO department (name)
VALUES
("Production"),
("Editorial"),
("Publicity"),
("Marketing"),
("Administration"),
("Human Resources"),
("Accounting");

-- Inserting values into the 'role' table
INSERT INTO role (title, salary, department_id)
VALUES 
("Typesetter", 50000, 1),
("Copy Editor", 50000, 2),
("Publicist", 60000, 3),
("Marketing Manager", 90000, 4),
("CEO", 150000, 5),
("Human Resources Manager", 70000, 6),
("Accountant", 100000, 7),
("Accounting Manager", 120000, 7);

-- Inserting values into the 'employee' table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, NULL),
("Jane", "Doe", 2, NULL),
("Jason", "Williams", 3, 4),
("Shannon", "Marie", 4, NULL),
("Grace", "Brown", 5, NULL),
("Julia", "Crooks", 6, NULL),
("Robert", "Jones", 7, 8),
("Lily", "Heintz", 8, NULL);