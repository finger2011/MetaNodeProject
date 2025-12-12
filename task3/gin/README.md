## 创建数据库
在数据库中已存在名为blog（数据库名称参考/server/configs/costant中dbName）的database
在主路径下执行命令
```bash
go run ./server/cmd/mysql/main.go
```

## 后端路由
| 功能 | method | url | header | 参数 | 响应 ｜
|:-------|:-------|:-------|:-------|:-------|:-------|
| 用户创建 | POST   | user/register | 无 | {"username":"user1","email":"user1@example.com","password":"123456"} |{"message": "User registered successfully"} |
| 用户登陆 | POST   | user/login | 无 | {"username":"user1","password":"123456"} |{"message": "User login successfully", "jwt":"xxxx"} |
| 文章创建 | POST   | post/create | jwt | {"title":"php","content":"php is a programming language"} |{"message": "Post created successfully"} |
| 文章修改 | POST   | post/update | jwt | {"title":"go","content":"go is a programming language","ID":13} |{"message": "Post updated successfully"} |
| 文章删除 | POST   | post/delete | jwt | {"ID":13} |{"message": "Post delete successfully"} |
| 文章列表 | POST   | post/list | jwt | {"ID":1} |{"message": "Post List successfully", "posts":[{}]} |
| 评论创建 | POST   | comment/create | jwt | {"postID":14,"content": "go2 comment"} |{"message": "Comment created successfully"} |
| 评论列表 | POST   | comment/list | jwt | {"postID":1} |{"message": "Comment List successfully", "comments":[{}]} |

## JWT用户授权
用户登陆接口返回jwt，在后续接口中在header中传入bearer 来验证用户身份信息
jwt中间件参考./server/middleware/jwt.go中的JWTAuthMiddleware方法

## 错误日志处理
通过调用./server/common/ginlog.go中的GinLog来存储上下文信息至数据库，方便后续调试和维护