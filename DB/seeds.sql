use cms;

insert into department
    (name)
values
    ("Management"),
    ("Sales"),
    ("Customer Service"),
    ("Tech Support");

insert into role
    (title, salary, department_id)
values
    ("Manager", 150000, 1),
    ("Sales", 60000, 2),
    ("Customer Service Rep", 50000, 3),
    ("Tech Rep", 60000, 4);

INSERT INTO employee
    (first_name, last_name, rold_id, manager_id)
VALUES
    ("John", "Nguyen", 1, 1),
    ("Tim", "Thompson", 2, NULL),
    ("Jenny", "Matrix", 3, NULL),
    ("Brian", "Hac", 4, NULL);