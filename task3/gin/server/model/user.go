package model

import (
	"gorm.io/gorm"
)

// User 用户模型
type User struct {
	gorm.Model
	Username  string `gorm:"type:varchar(100);uniqueIndex;not null"`
	Email     string `gorm:"type:varchar(150);uniqueIndex;not null"`
	Password  string `gorm:"type:varchar(255);not null"`
	PostCount int    `gorm:"default:0"` // 文章数量统计字段

	// 关联关系
	Posts    []Post    `gorm:"foreignKey:UserID"`
	Comments []Comment `gorm:"foreignKey:UserID"`
}
