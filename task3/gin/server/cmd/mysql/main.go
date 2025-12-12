package main

import (
	"fmt"
	"gin/server/configs"
	"gin/server/model"
)

func main() {
	db, err := configs.GetDB()
	if err != nil {
		fmt.Println("获取数据库连接失败")
		return
	}
	// 设置表选项
	db.Set("gorm:table_options", "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci")

	err = db.AutoMigrate(
		&model.User{},
		&model.Post{},
		&model.Comment{},
	)
	if err != nil {
		fmt.Println("创建表失败: ", err)
		return
	}
	fmt.Println("创建表成功")
}
