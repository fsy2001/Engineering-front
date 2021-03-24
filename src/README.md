# 图书馆管理系统

使用 Spring Boot 开发的图书馆管理系统服务器端。

## 构建说明

使用 JDK 15 进行构建，并依赖以下外部资源：

- Spring Data JPA
- Spring Security
- Thymeleaf
- Spring Web MVC
- MySQL Connector

## 数据模型

使用 MySQL 进行数据的存储和访问。

`user` 存放用户数据，包括用户名、密码、角色。

`book` 存放书籍数据，包括 ISBN、标题、作者、描述以及封面图片的路径（待实现）。

`copy` 存放馆藏数据，包括对应书籍的ID、状态、位置。

建立数据库操作：

```mysql
CREATE DATABASE library;
CREATE USER 'library_admin'@'%' IDENTIFIED BY '8Do7lErJBnMyky4';
GRANT ALL ON library.* TO 'library_admin'@'%';
```

数据库内部的表会由服务器在每次启动时创建，无须手动操作。

## 代码结构

代码结构大致分为 3 层：网页请求处理（Controller）- 业务逻辑（Service） - 数据库访问（Repository）。相应的数据实体类存放在 `model` 包下。

### 数据库访问

建立实体并建立相应的 Repositoy 接口用于访问数据库，相应方法由 Spring Data JPA 提供。

### 权限控制

采用权限和角色结合的方式进行控制。

角色有 `STUDENT, TEACHER, LIBRARIAN`，每个角色具有相应的权限。

## 接口

注：所有链接以 `http://hostname/api/` 开头，以下省略。

### 用户信息

| **API**                             | **权限** | **描述**                       |
| ----------------------------------- | -------- | ------------------------------ |
| `GET .../user/{userid}`             | 登录用户 | 获取用户信息                   |
| `POST .../user`  (JSON Body)        | 无       | 注册，内容为JSON格式的用户对象 |
| `DELETE .../user/{userid}`          | 管理员   | 删除用户                       |
| `PUT .../user/{userid}` (JSON Body) | 管理员   | 更新用户信息（待完成）         |

### 书籍信息

| **API**                                             | **权限** | **描述**                       |
| --------------------------------------------------- | -------- | ------------------------------ |
| `GET .../book/search/{params: isbn, title, author}` | 无       | 根据相关信息查询书（返回列表） |
| `GET .../book/{id}`                                 | 无       | 根据ID查询书                   |
| `POST .../book` (JSON Body)                         | 管理员   | 图书上新                       |
| `DELETE .../book/{id}`                              | 管理员   | 删除图书                       |
| `PUT .../book/{id}` (JSON Body)                     | 管理员   | 图书信息更新                   |