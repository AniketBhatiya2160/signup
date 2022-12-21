-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: registration
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `r_id` int NOT NULL AUTO_INCREMENT,
  `c_name` varchar(450) NOT NULL,
  `date` date NOT NULL,
  `model` varchar(450) NOT NULL,
  `miles` int NOT NULL,
  `s_price` int NOT NULL,
  `img` varchar(450) NOT NULL,
  `id` int NOT NULL,
  `car_n` varchar(450) NOT NULL,
  PRIMARY KEY (`r_id`),
  UNIQUE KEY `car_n_UNIQUE` (`car_n`),
  KEY `uid_idx` (`id`),
  CONSTRAINT `id` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'bmw','2022-11-30','M8 Coupe Competition and XM.',11233,50000000,'[\"1671631659689promises example.png\",\"1671631659695promises.png\"]',11,'gj24j2006'),(33,'TEst','2022-11-27','Test234845',100000,52000,'[\"1671624172682BackGround2.jpg\",\"1671624172705bg2.jpg\",\"1671624172717BG.jpg\"]',1,'1248657498/44'),(48,'aniket','2022-12-01','test2',11233,123,'[\"1671631607345Screenshot (1).png\",\"1671631607354Screenshot (2).png\"]',11,'789sassa'),(49,'asdawd','2022-11-29','asdads',12312431,52000,'[\"1671632454258BackGround2.jpg\",\"1671632454282bg2.jpg\"]',2,'adsf354235'),(50,'aniket','2022-12-02','test2',11233,123,'[\"1671634073190carbackground.jpg\",\"1671634073190p1.png\"]',1,'789wedfvbjh'),(51,'parth','2022-12-01','ndkadfn',11233,45,'[\"1671635516143promises.png\",\"1671635516153Screenshot (1).png\",\"1671635516159Screenshot (2).png\",\"1671635516167Screenshot (3).png\"]',1,'789asxc');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(450) NOT NULL,
  `email` varchar(245) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'parth','anik@gmail.com','$2a$10$fVaEkj4rnRPXgslExZUQ9u5ZvectIrwUsUJjxkxDQWzsiWakaNYKu'),(2,'nisarg_25','nisarg@gmail.com','$2a$10$uXZLm4vMqx5JIzZypFu5s.mFzkjWN/vnhkSkBFTFsLCkwuzB9xj.i'),(3,'test','test@user.com','$2a$10$R.wCS2m2v11Fsmy2imhHGuEdXE1eKIDzuh3n7QLWSXk4VoLjTYw46'),(4,'HARDI','HARDI@GMAIL.COM','$2a$10$MD44qbVxwAq6I3VMKETHFeH.vGudkhWuL728Uk3h87M8nG0OT82x.'),(5,'hetul','hetul@gmail.com','$2a$10$Gp2bLGwqcyQeIGkLvi7Co.q8ad/AaZOV2DA1WXhLb2VS3ac59WKv2'),(6,'asdd','asd@gmail.com','$2a$10$JwW3ndggZ7EwNDvxXSmpeOT0V3IZdzoKtojO0MtrHa428mv3oaJma'),(7,'smit','smit@gmail.com','$2a$10$SNYIkOqcvD0jKvbQkHFCoOQm0IinCO6isj10h3IJB8sojw/wVou7C'),(8,'testhardi','testhardi@gmail.com','$2a$10$6BcLh23otHHo8LwfSmY.iua/OYk68wT0AfUZkqAX2gDA9jt.1K1rW'),(9,'jeet','ani@gmail.com','$2a$10$nfTyeVZ./apxfhOGPY2q4eMz76ge5T5V0yXXaviLLR.DcchBsn792'),(10,'neel','neel@gmail.com','$2a$10$yelSklbconl919u80YAmsu4L5k2JvT5N/63E8A8QoJuKufODoBete'),(11,'prem','aniket@gmail.com','$2a$10$lwVcQnLU/YXCN5Yg4RCkleZK4Dd4Odm67k4orJ3Qr9Z6tKEhOO6Yy');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-21 20:49:36
