package model

import (
	"errors"

	"gorm.io/gorm"
)

// Post 文章模型
type Post struct {
	gorm.Model
	Title        string `gorm:"type:varchar(200);not null"`
	Content      string `gorm:"type:longtext;not null"`
	CommentCount int    `gorm:"default:0"`

	// 外键和关联关系
	UserID   uint      `gorm:"not null;index"`
	User     User      `gorm:"foreignKey:UserID"`
	Comments []Comment `gorm:"foreignKey:PostID"`
}

// 在文章创建时自动更新用户的文章数量统计字段
func (post *Post) AfterCreate(db *gorm.DB) error {
	var user User
	err := db.First(&user, post.UserID).Error
	if err != nil {
		return err
	}
	if user.ID == 0 {
		return errors.New("user not exist")
	}
	user.PostCount += 1
	return db.Save(user).Error
}

func (post *Post) AfterDelete(db *gorm.DB) error {
	var user User
	err := db.First(&user, post.UserID).Error
	if err != nil {
		return err
	}
	if user.ID == 0 {
		return errors.New("user not exist")
	}
	user.PostCount -= 1
	return db.Save(user).Error
}
