package model

import (
	"errors"

	"gorm.io/gorm"
)

// Comment 评论模型
type Comment struct {
	gorm.Model
	Content string `gorm:"type:text;not null"`

	// 外键和关联关系
	UserID uint `gorm:"not null;index"`
	User   User `gorm:"foreignKey:UserID"`

	PostID uint `gorm:"not null;index"`
	Post   Post `gorm:"foreignKey:PostID"`
}

func (comment *Comment) AfterCreate(db *gorm.DB) error {
	var post Post
	err := db.First(&post, comment.PostID).Error
	if err != nil {
		return err
	}
	if post.ID == 0 {
		return errors.New("user not exist")
	}
	post.CommentCount += 1
	return db.Save(post).Error
}

func (comment *Comment) AfterDelete(db *gorm.DB) error {
	var post Post
	err := db.First(&post, comment.PostID).Error
	if err != nil {
		return err
	}
	if post.ID == 0 {
		return errors.New("post not exist")
	}
	post.CommentCount -= 1
	return db.Save(post).Error
}
