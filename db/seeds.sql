-- Inserting values into the 'department' table
INSERT INTO department (name)
VALUES
("Production"),
("Editorial"),
("Publicity"),
("Administration"),
("Human Resources"),
("Accounting");

-- Inserting values into the 'role' table
INSERT INTO role (title, salary, department_id)
VALUES 
("Typesetter", 50000, 1),
("Copy Editor", 50000, 2),
("Publicist", 60000, 3),
("CEO", 150000, 4),
("Human Resources", 70000, 5),
("Accountant", 100000, 6);

-- Inserting values into the 'employee' table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Jane", "Doe", 1, 4),
("Shannon", "Willow", 2, 4),
("Grace", "Brown", 3, 4),
("Julia", "Crooks", 4, 4),
("Robert", "Jones", 5, 4),
("Lily", "Heintz", 6, 4);

-- Add FOREIGN KEY constraint
ALTER TABLE employee
ADD CONSTRAINT fk_manager
FOREIGN KEY (manager_id) REFERENCES employee(id);