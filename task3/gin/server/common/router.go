package common

import (
	v1 "gin/server/api/v1"
	"gin/server/middleware"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InitRouter() error {
	r := gin.Default()
	{
		user := r.Group("/user")
		// 用户注册
		user.POST("/register", v1.Register)
		// 用户登陆
		user.POST("/login", v1.Login)
		user.GET("/", func(ctx *gin.Context) {
			ctx.JSON(http.StatusOK, gin.H{"message": "helloword"})
		})
	}
	// 文章
	{
		post := r.Group("/post")
		post.Use(middleware.JWTAuthMiddleware())
		// 文章创建
		post.POST("/create", v1.PostCreate)
		// 文章读取
		post.POST("/list", v1.PostList)
		// 文章更新
		post.POST("/update", v1.PostUpdate)
		// 文章删除
		post.POST("/delete", v1.PostDelete)
	}

	// 评论
	{
		comment := r.Group("/comment")
		comment.Use(middleware.JWTAuthMiddleware())
		// 创建评论
		comment.POST("/create", v1.CommentCreate)
		// 读取评论
		comment.POST("/list", v1.CommentList)
	}

	if err := r.Run(); err != nil {
		return err
	}
	return nil
}
