package main

import (
	"fmt"
	"math"
)

type Shape interface {
	Area() float64
	Perimeter() float64
}

type Rectangle struct {
	width  float64
	height float64
}

func (rec Rectangle) Area() float64 {
	return rec.width * rec.height
}

func (rec Rectangle) Perimeter() float64 {
	return (rec.width + rec.height) * 2
}

type Circle struct {
	radius float64
}

func (cir Circle) Area() float64 {
	return math.Pi * cir.radius * cir.radius
}

func (cir Circle) Perimeter() float64 {
	return 2 * math.Pi * cir.radius
}

func main() {
	task1()
	task2()
}

func task1() {
	cir := Circle{
		radius: 3.8,
	}
	fmt.Println("Circle Area:", cir.Area())
	fmt.Println("Circle Perimeter:", cir.Perimeter())
	rec := Rectangle{
		width:  10.5,
		height: 4.7,
	}
	fmt.Println("Rectangle Area:", rec.Area())
	fmt.Println("Rectangle Perimeter:", rec.Perimeter())
}

type Person struct {
	Name string
	Age  int
}

type Employee struct {
	person     Person
	EmployeeID int
}

func (employee *Employee) PrintInfo() {
	fmt.Println("employee name:", employee.person.Name, ", age:", employee.person.Age, ", id:", employee.EmployeeID)
}

func task2() {
	emp := Employee{
		EmployeeID: 10001,
		person: Person{
			Name: "jam",
			Age:  28,
		},
	}
	emp.PrintInfo()
}
