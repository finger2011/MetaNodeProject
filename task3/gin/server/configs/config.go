package configs

import (
	"fmt"

	"github.com/dgrijalva/jwt-go"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type JWTClaims struct {
	UserID   uint   `json:"user_id"`
	Username string `json:"username"`
	Exp      int64  `json:"exp"`
	jwt.MapClaims
}

func GetDB() (*gorm.DB, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPassword, dbHost, dbPort, dbName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}

func GetJWTSignedKey() string {
	return jwtSingedKey
}
