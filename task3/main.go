package main

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const (
	dbDriver   = "mysql"
	dbUser     = "root"
	dbPassword = ""
	dbHost     = "localhost"
	dbPort     = "3306"
	dbName     = "meta"
)

func main() {
	// dep := "技术部"
	// employees, err := QueryEmployeesByDepartment(dep)
	// if err != nil {
	// 	fmt.Println("QueryEmployeesByDepartment error :", err)
	// }
	// fmt.Printf("QueryEmployeesByDepartment:%v", employees)

	// var employee []Employee
	// employee, err = QueryHighestSalaryEmployee()
	// if err != nil {
	// 	fmt.Println("QueryHighestSalaryEmployee error :", err)
	// }
	// fmt.Printf("QueryHighestSalaryEmployee:%v", employee)

	// var books []Book
	// books, err = QueryBooksByPrice(50)
	// if err != nil {
	// 	fmt.Println("QueryBooksByPrice error :", err)
	// }
	// fmt.Printf("QueryBooksByPrice:%v", books)

	db, err := getDB2()
	if err != nil {
		fmt.Println("get db error", err.Error())
	}
	// err = CreateTables(db)
	// if err != nil {
	// 	fmt.Println("create table error", err.Error())
	// }
	// var posts []Post
	// posts, err = QueryPostsByUserID(1, db)
	// if err != nil {
	// 	fmt.Println("QueryPostsByUserID error:", err.Error())
	// } else {
	// 	fmt.Println("QueryPostsByUserID data:", posts)
	// }

	var post Post
	post, err = QueryMostCommentsPost(db)
	if err != nil {
		fmt.Println("QueryMostCommentsPost error:", err.Error())
	} else {
		fmt.Println("QueryMostCommentsPost data:", post)
	}

}

func getDB() (*sqlx.DB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbUser, dbPassword, dbHost, dbPort, dbName)
	db, err := sqlx.Connect(dbDriver, dsn)
	if err != nil {
		return nil, err
	}
	return db, nil
}

func getDB2() (*gorm.DB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPassword, dbHost, dbPort, dbName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}
