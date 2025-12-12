package main

// 题目1：使用SQL扩展库进行查询
// 假设你已经使用Sqlx连接到一个数据库，并且有一个 employees 表，包含字段 id 、 name 、 department 、 salary 。
// 要求 ：
// 编写Go代码，使用Sqlx查询 employees 表中所有部门为 "技术部" 的员工信息，并将结果映射到一个自定义的 Employee 结构体切片中。
// 编写Go代码，使用Sqlx查询 employees 表中工资最高的员工信息，并将结果映射到一个 Employee 结构体中。
// 题目2：实现类型安全映射
// 假设有一个 books 表，包含字段 id 、 title 、 author 、 price 。
// 要求 ：
// 定义一个 Book 结构体，包含与 books 表对应的字段。
// 编写Go代码，使用Sqlx执行一个复杂的查询，例如查询价格大于 50 元的书籍，并将结果映射到 Book 结构体切片中，确保类型安全。

type Employee struct {
	ID         int     `db:"id"`
	Name       string  `db:"name"`
	Department string  `db:"department"`
	Salary     float64 `db:"salary"`
}

type Book struct {
	ID     int     `db:"id"`
	Title  string  `db:"title"`
	Author string  `db:"author"`
	Price  float64 `db:"price"`
}

func QueryEmployeesByDepartment(department string) ([]Employee, error) {
	db, err := getDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	var employees []Employee
	query := "select * from employees where department = ?"
	err = db.Select(&employees, query, department)
	if err != nil {
		return nil, err
	}
	return employees, nil
}

func QueryHighestSalaryEmployee() ([]Employee, error) {
	db, err := getDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	var employee []Employee
	query := "select * from employees order by salary desc limit 1"
	err = db.Select(&employee, query)
	if err != nil {
		return nil, err
	}
	return employee, nil
}

func QueryBooksByPrice(lowPrice float64) ([]Book, error) {
	db, err := getDB()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	var books []Book
	query := "select * from books where price > ?"

	err = db.Select(&books, query, lowPrice)
	if err != nil {
		return nil, err
	}
	return books, nil
}
