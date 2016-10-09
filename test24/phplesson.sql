-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-09-16 23:43:02
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `addtime` datetime NOT NULL,
  `newstype` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `addtime`, `newstype`) VALUES
(7, ' 媒体：中纪委打老虎，时间有啥讲究吗？', 'img/01.jpg', '2016-08-27 00:11:01', 1),
(8, '公安部:千万以上大案多是台湾电信诈骗集团实施', 'img/02.jpg', '2015-08-27 00:00:20', 1),
(9, ' 中石油原高管陶玉春案再开庭 涉4罪金额超3亿', 'img/03.jpg', '2016-08-27 00:00:30', 1),
(10, '起底假钞产业链:一条龙生产 一天最多卖百万', 'img/04.jpg', '2016-08-27 00:00:40', 1),
(11, '台风红色预警:"莫兰蒂"明登陆闽粤 狂风暴雨来袭', 'img/05.jpg', '2016-08-27 00:00:50', 1),
(13, '铁路职工因赌球欠钱 用同事手机转走10万余元', 'img/001.JPEG', '2016-08-27 00:00:00', 2),
(14, '33岁中国女教师美国街头遭抢 头部中弹生命垂危', 'img/003.PNG', '2016-08-27 00:00:00', 2),
(15, '男子为救蟑螂袭击清洁员:它也是有生命的', 'img/002.JPEG', '2016-08-27 00:00:00', 2),
(16, ' 郑州一司机交通违法共计309次 罚款额比车价还高', 'img/005.JPEG', '2016-08-27 00:00:00', 2),
(17, '中央军委联勤保障部队成立大会在京举行', 'img/006.JPEG', '2016-08-27 00:00:00', 2),
(19, '习近平向联勤部队', 'img/02.jpg', '2016-08-27 00:00:01', 3),
(20, 'A股史上最贵离婚案', 'img/3.jpg', '2016-08-27 00:00:00', 3),
(21, ' 大学新生发邮件给室友 指定要上铺否则绝不善罢甘休', 'img/5.jpg', '2016-08-27 00:00:00', 3),
(22, '牛津英语词典收录千余新词条 "流性人""男乳"入选', 'img/01.jpg', '2016-08-27 00:00:00', 3),
(23, '山西官场“大换血”：7个月内逾2千名官员被调整', 'img/1.jpg', '2016-08-27 00:00:00', 3),
(24, '韩媒：8名中国游客在韩国餐馆殴打女同胞', 'img/2.jpg', '2016-08-27 00:00:00', 3),
(25, '高校招生负责人为完成指标 篡改考生志愿被抓获', 'img/2.jpg', '2016-08-27 00:00:01', 4),
(26, ' 31省会城市房价曝光 北京1间厕所能换银川1套房', 'img/3.jpg', '2016-08-27 00:00:00', 4),
(27, '韩媒：8名中国游客在韩国餐馆殴打女同胞', 'img/4.jpg', '2016-08-27 00:00:00', 4),
(28, '湖南省高院官员肖明被查 曾被曝与多名女子开房', 'img/5.jpg', '2016-08-27 00:00:00', 4),
(29, '揭小额借贷黑色连环债务链：阴阳合同陷阱重重', 'img/6.jpg', '2016-08-27 00:00:00', 4),
(53, '增加测试1', 'img/02.jpg', '2016-08-08 00:00:00', 1),
(54, '修改测试', 'img/04.jpg', '2016-08-20 00:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=58;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
