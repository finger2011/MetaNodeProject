package v1

import (
	"gin/server/configs"
	"gin/server/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CommentCreateBind struct {
	Content string `gorm:"type:longtext;not null"`
	PostID  uint   `gorm:"not null"`
}

func CommentCreate(c *gin.Context) {
	var validComment CommentCreateBind
	if err := c.ShouldBindJSON(&validComment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var post model.Post
	comment := model.Comment{
		UserID:  c.GetUint("user_id"),
		PostID:  validComment.PostID,
		Content: validComment.Content,
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "get db error"})
		return
	}
	err = db.First(&post, comment.PostID).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Post not exist"})
		return
	}
	if err := db.Create(&comment).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create comment"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Comment created successfully"})
}

type CommentUpdateBind struct {
	Content string `gorm:"type:longtext;not null"`
	ID      uint   `gorm:"not null"`
}

func CommentUpdate(c *gin.Context) {
	var validComment CommentUpdateBind
	if err := c.ShouldBindJSON(&validComment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var comment model.Comment
	err = db.First(&comment, validComment.ID).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if comment.ID == 0 {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "comment not exist"})
		return
	}
	if comment.UserID != c.GetUint("user_id") {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "can not update other's comment"})
		return
	}
	comment.Content = validComment.Content
	if err := db.Save(&comment).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update comment"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Comment updated successfully"})
}

type CommentDeleteBind struct {
	ID uint `gorm:"not null"`
}

func CommentDelete(c *gin.Context) {
	var validComment CommentDeleteBind
	if err := c.ShouldBindJSON(&validComment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var comment model.Comment
	err = db.First(&comment, validComment.ID).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if comment.ID == 0 {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "comment not exist"})
		return
	}
	if comment.UserID != c.GetUint("user_id") {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "can not delete other's comment"})
		return
	}
	if err := db.Delete(&comment).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete comment"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Comment delete successfully"})
}

type CommentBind struct {
	PostID uint
}

func CommentList(c *gin.Context) {
	var validComment CommentBind
	if err := c.ShouldBindJSON(&validComment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if validComment.PostID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "no post"})
		return
	}
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var comments []model.Comment
	err = db.Preload("User").Preload("Post").Where("post_id = ?", validComment.PostID).Find(&comments).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"message": "Comment List successfully", "comments": comments})
}
