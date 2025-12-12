package main

import (
	"errors"
	"fmt"
	"time"

	"gorm.io/gorm"
)

// 题目1：模型定义
// 假设你要开发一个博客系统，有以下几个实体： User （用户）、 Post （文章）、 Comment （评论）。
// 要求 ：
// 使用Gorm定义 User 、 Post 和 Comment 模型，其中 User 与 Post 是一对多关系（一个用户可以发布多篇文章）， Post 与 Comment 也是一对多关系（一篇文章可以有多个评论）。
// 编写Go代码，使用Gorm创建这些模型对应的数据库表。
// 题目2：关联查询
// 基于上述博客系统的模型定义。
// 要求 ：
// 编写Go代码，使用Gorm查询某个用户发布的所有文章及其对应的评论信息。
// 编写Go代码，使用Gorm查询评论数量最多的文章信息。
// 题目3：钩子函数
// 继续使用博客系统的模型。
// 要求 ：
// 为 Post 模型添加一个钩子函数，在文章创建时自动更新用户的文章数量统计字段。
// 为 Comment 模型添加一个钩子函数，在评论删除时检查文章的评论数量，如果评论数量为 0，则更新文章的评论状态为 "无评论"。

// User 用户模型
type User struct {
	gorm.Model
	Username  string `gorm:"type:varchar(100);not null"`
	Email     string `gorm:"type:varchar(150);not null"`
	Password  string `gorm:"type:varchar(255);not null"`
	PostCount int    `gorm:"default:0"` // 文章数量统计字段

	// 关联关系
	Posts    []Post    `gorm:"foreignKey:UserID"`
	Comments []Comment `gorm:"foreignKey:UserID"`
}

// Post 文章模型
type Post struct {
	gorm.Model
	Title        string     `gorm:"type:varchar(200);not null;index"`
	Content      string     `gorm:"type:longtext;not null"`
	Summary      string     `gorm:"type:text"`
	Status       string     `gorm:"type:enum('draft','无评论');default:'draft';index"`
	CommentCount int        `gorm:"default:0"`
	PublishedAt  *time.Time `gorm:"index"`

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

// 在评论删除时检查文章的评论数量，如果评论数量为 0，则更新文章的评论状态为 "无评论"
func (comment *Comment) AfterDelete(db *gorm.DB) error {
	var post Post
	err := db.First(&post, comment.PostID).Error
	if err != nil {
		return err
	}
	if post.ID == 0 {
		return errors.New("user not exist")
	}
	post.CommentCount -= 1
	if post.CommentCount == 0 {
		post.Status = "无评论"
	}
	return db.Save(post).Error
}

// 创建表
func CreateTables(db *gorm.DB) error {
	// 设置表选项
	db.Set("gorm:table_options", "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci")

	// 创建表（按依赖顺序）
	err := db.AutoMigrate(
		&User{},
		&Post{},
		&Comment{},
	)
	if err != nil {
		return fmt.Errorf("创建表失败: %v", err)
	}
	return nil
}

// 查询某个用户发布的所有文章及其对应的评论信息
func QueryPostsByUserID(userId int, db *gorm.DB) ([]Post, error) {
	var posts []Post
	err := db.Model(&Post{}).Preload("Comments").Where("user_id = ?", userId).Find(&posts).Error
	if err != nil {
		return nil, err
	}
	return posts, nil
}

// 查询评论数量最多的文章信息
func QueryMostCommentsPost(db *gorm.DB) (Post, error) {
	var post Post
	err := db.Order("comment_count desc").First(&post).Error
	if err != nil {
		return Post{}, err
	}
	return post, nil
}
