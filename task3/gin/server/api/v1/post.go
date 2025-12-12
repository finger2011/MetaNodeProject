package v1

import (
	"gin/server/configs"
	"gin/server/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

type PostCreateBind struct {
	Title   string `gorm:"type:varchar(200);not null;index"`
	Content string `gorm:"type:longtext;not null"`
}

func PostCreate(c *gin.Context) {
	var validPost PostCreateBind
	if err := c.ShouldBindJSON(&validPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	post := model.Post{
		Title:   validPost.Title,
		Content: validPost.Content,
		UserID:  c.GetUint("user_id"),
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "get db error"})
		return
	}
	if err := db.Create(&post).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create post"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Post created successfully"})
}

type PostUpdateBind struct {
	Title   string `gorm:"type:varchar(200);not null;index"`
	Content string `gorm:"type:longtext;not null"`
	ID      uint   `gorm:"not null"`
}

func PostUpdate(c *gin.Context) {
	var validPost PostUpdateBind
	if err := c.ShouldBindJSON(&validPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var post model.Post
	err = db.First(&post, validPost.ID).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if post.ID == 0 {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "post not exist"})
		return
	}
	if post.UserID != c.GetUint("user_id") {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "can not update other's post"})
		return
	}
	post.Title = validPost.Title
	post.Content = validPost.Content
	if err := db.Save(&post).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update post"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Post updated successfully"})
}

type PostDeleteBind struct {
	ID uint `gorm:"not null"`
}

func PostDelete(c *gin.Context) {
	var validPost PostDeleteBind
	if err := c.ShouldBindJSON(&validPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var post model.Post
	err = db.First(&post, validPost.ID).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if post.ID == 0 {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "post not exist"})
		return
	}
	if post.UserID != c.GetUint("user_id") {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "can not delete other's post"})
		return
	}
	if err := db.Delete(&post).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete post"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Post delete successfully"})
}

type PostBind struct {
	ID uint
}

func PostList(c *gin.Context) {
	var validPost PostBind
	if err := c.ShouldBindJSON(&validPost); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if validPost.ID != 0 {
		var post model.Post
		err = db.First(&post, validPost.ID).Error
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusCreated, gin.H{"message": "Post List successfully", "posts": []model.Post{post}})
		return
	}
	var posts []model.Post
	err = db.Preload("User").Preload("Comments").Find(&posts).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Post List successfully", "posts": posts})
}
