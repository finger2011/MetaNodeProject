package v1

import (
	"gin/server/model"
	"net/http"
	"time"

	"gin/server/configs"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	Username string `gorm:"type:varchar(100);uniqueIndex;not null"`
	Email    string `gorm:"type:varchar(150);uniqueIndex;not null"`
	Password string `gorm:"type:varchar(255);not null"`
}

func Register(c *gin.Context) {
	var validUser User
	if err := c.ShouldBindJSON(&validUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// 加密密码
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(validUser.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}
	var user model.User
	user.Password = string(hashedPassword)
	user.Username = validUser.Username
	user.Email = validUser.Email
	var db *gorm.DB
	db, err = configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "get db error"})
		return
	}
	if err := db.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "User registered successfully"})
}

func Login(c *gin.Context) {
	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var storedUser model.User
	db, err := configs.GetDB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "get db error"})
		return
	}
	if err := db.Where("username = ?", user.Username).First(&storedUser).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
		return
	}

	// 验证密码
	if err := bcrypt.CompareHashAndPassword([]byte(storedUser.Password), []byte(user.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
		return
	}
	claims := configs.JWTClaims{
		UserID:   storedUser.ID,
		Username: storedUser.Username,
		Exp:      time.Now().Add(time.Hour * 24).Unix(),
	}
	// 生成 JWT
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString([]byte(configs.GetJWTSignedKey()))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}
	// 剩下的逻辑...
	c.JSON(http.StatusOK, gin.H{"message": "User login successfully", "jwt": tokenString})
}
