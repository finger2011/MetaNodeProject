package middleware

import (
	"gin/server/configs"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func JWTAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 从 Header 获取 Token
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error": "Authorization header is required",
			})
			c.Abort()
			return
		}

		// 检查 Bearer 前缀
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error": "Authorization header format must be Bearer {token}",
			})
			c.Abort()
			return
		}

		tokenString := parts[1]

		// 解析和验证 Token
		token, err := jwt.ParseWithClaims(tokenString, &configs.JWTClaims{}, func(token *jwt.Token) (interface{}, error) {
			// 验证签名算法
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrSignatureInvalid
			}
			return []byte(configs.GetJWTSignedKey()), nil
		})

		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error":  "Invalid token",
				"detail": err.Error(),
			})
			c.Abort()
			return
		}

		// 验证 Claims
		if claims, ok := token.Claims.(*configs.JWTClaims); ok && token.Valid {
			// 将用户信息存入上下文
			c.Set("user_id", claims.UserID)
			c.Set("username", claims.Username)
			c.Set("claims", claims)

			c.Next()
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{
				"error": "Invalid token claims",
			})
			c.Abort()
		}
	}
}
