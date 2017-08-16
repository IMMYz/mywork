/**
 * Created by Yz on 2017/8/9.
 */

var pointMapData1 = {
    "张三":[
        {'call':'14787820705','called':'13099412333','date':'2015/10/02 00:00:04','x':103.195541,'y':23.27833},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:10:05','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:20:05','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:30:05','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:40:05','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:00:05','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:00:05','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/03 00:00:09','x':104.305541,'y':24.80},
        {'call':'14787820705','called':'13099412333','date':'2015/10/04 00:00:04','x':105.195541,'y':25.27833}
        ],
    "李四":[
        {'call':'13099412333','called':'14787820705','date':'2015/9/01 00:56:04','x':102.39,'y':22.8},
        {'call':'13099412333','called':'14787820705','date':'2015/10/02 00:56:04','x':102.7,'y':22.8},
        {'call':'13099412333','called':'14787820705','date':'2015/10/03 00:56:04','x':103.195541,'y':21.27833}]
}
var phoneList = {
    list:[
        {"call":"13099412333","called":"14787820705","line":"line1"},
        {"call":"14787820705","called":"13099412333","line":"line2"}
        ]
}
var pointMapData2 = {
    "line1": [{'date':'2015/10/01 00:56:04','x':103.195541,'y':23.27833},{'date':'2015/10/01 09:00:03','x':103.195541,'y':23.27833},{'date':'2015/10/01 10:51:34','x':103.195541,'y':23.27833},{'date':'2015/10/01 10:51:35','x':103.195541,'y':23.27833},{'date':'2015/10/01 10:57:30','x':103.195541,'y':23.27833},{'date':'2015/10/01 11:34:52','x':103.195541,'y':23.27833},{'date':'2015/10/01 12:02:47','x':103.195541,'y':23.27833},{'date':'2015/10/01 12:14:24','x':103.195541,'y':23.27833},{'date':'2015/10/01 15:57:34','x':103.195541,'y':23.27833},{'date':'2015/10/01 16:17:25','x':103.195541,'y':23.27833},{'date':'2015/10/01 16:49:09','x':103.195541,'y':23.27833},{'date':'2015/10/01 19:02:35','x':103.195541,'y':23.27833},{'date':'2015/10/01 19:02:35','x':103.195541,'y':23.27833},{'date':'2015/10/01 19:02:35','x':103.195541,'y':23.27833},{'date':'2015/10/01 19:02:35','x':103.195541,'y':23.27833},{'date':'2015/10/01 19:27:28','x':103.195541,'y':23.27833},{'date':'2015/10/01 20:06:42','x':103.195541,'y':23.27833},{'date':'2015/10/01 20:06:43','x':103.195541,'y':23.27833},{'date':'2015/10/01 20:45:15','x':103.195541,'y':23.27833},{'date':'2015/10/01 20:45:15','x':103.195541,'y':23.27833},{'date':'2015/10/01 21:22:52','x':103.195541,'y':23.27833},{'date':'2015/10/01 21:22:52','x':103.195541,'y':23.27833},{'date':'2015/10/01 22:18:04','x':103.195541,'y':23.27833},{'date':'2015/10/01 22:50:31','x':103.195541,'y':23.27833},{'date':'2015/10/01 22:54:09','x':103.195541,'y':23.27833},{'date':'2015/10/01 22:54:09','x':103.195541,'y':23.27833},{'date':'2015/10/01 22:59:00','x':103.185593,'y':23.282551},{'date':'2015/10/01 22:59:00','x':103.185593,'y':23.282551},{'date':'2015/10/01 23:12:22','x':103.185593,'y':23.282551},{'date':'2015/10/01 23:28:37','x':103.195541,'y':23.27833},{'date':'2015/10/01 23:35:30','x':103.185593,'y':23.282551},{'date':'2015/10/01 23:35:30','x':103.185593,'y':23.282551},{'date':'2015/10/01 23:49:51','x':103.195541,'y':23.27833},{'date':'2015/10/01 23:54:22','x':103.195541,'y':23.27833},{'date':'2015/10/02 00:04:45','x':103.195541,'y':23.27833},{'date':'2015/10/02 08:37:49','x':103.195541,'y':23.27833},{'date':'2015/10/02 09:12:45','x':103.185593,'y':23.282551},{'date':'2015/10/02 09:25:37','x':103.195541,'y':23.27833},{'date':'2015/10/02 10:16:04','x':103.195541,'y':23.27833},{'date':'2015/10/02 10:20:59','x':103.195541,'y':23.27833},{'date':'2015/10/02 10:22:36','x':103.195541,'y':23.27833},{'date':'2015/10/02 10:22:36','x':103.195541,'y':23.27833},{'date':'2015/10/02 10:31:05','x':103.195541,'y':23.27833},{'date':'2015/10/02 10:32:36','x':103.185593,'y':23.282551},{'date':'2015/10/02 10:32:37','x':103.185593,'y':23.282551},{'date':'2015/10/02 10:36:27','x':103.183449,'y':23.286079},{'date':'2015/10/02 13:39:02','x':103.183449,'y':23.286079},{'date':'2015/10/02 13:39:03','x':103.183449,'y':23.286079},{'date':'2015/10/02 13:53:52','x':103.183449,'y':23.286079},{'date':'2015/10/02 13:58:49','x':103.185593,'y':23.282551},{'date':'2015/10/02 15:47:05','x':103.195541,'y':23.27833},{'date':'2015/10/02 17:58:03','x':103.195541,'y':23.27833},{'date':'2015/10/02 18:17:18','x':103.185593,'y':23.282551},{'date':'2015/10/02 18:53:52','x':103.195541,'y':23.27833},{'date':'2015/10/02 21:46:38','x':103.185593,'y':23.282551},{'date':'2015/10/02 21:46:38','x':103.185593,'y':23.282551},{'date':'2015/10/03 16:26:05','x':103.157013,'y':23.360029},{'date':'2015/10/04 04:14:16','x':103.195541,'y':23.27833},{'date':'2015/10/04 04:24:33','x':103.195541,'y':23.27833},{'date':'2015/10/04 09:08:42','x':103.195541,'y':23.27833},{'date':'2015/10/04 09:11:16','x':103.195541,'y':23.27833},{'date':'2015/10/04 09:46:32','x':103.195541,'y':23.27833},{'date':'2015/10/04 10:54:44','x':103.195541,'y':23.27833},{'date':'2015/10/04 11:03:31','x':103.195541,'y':23.27833},{'date':'2015/10/04 12:23:45','x':103.185593,'y':23.282551},{'date':'2015/10/04 13:16:38','x':103.195541,'y':23.27833},{'date':'2015/10/04 13:16:39','x':103.195541,'y':23.27833},{'date':'2015/10/04 14:34:28','x':103.195541,'y':23.27833},{'date':'2015/10/04 18:59:59','x':103.195541,'y':23.27833},{'date':'2015/10/04 20:31:19','x':103.195541,'y':23.27833},{'date':'2015/10/05 00:19:22','x':103.195541,'y':23.27833},{'date':'2015/10/05 00:19:22','x':103.195541,'y':23.27833},{'date':'2015/10/05 04:14:44','x':103.195541,'y':23.27833},{'date':'2015/10/05 08:07:01','x':103.195541,'y':23.27833},{'date':'2015/10/05 08:08:07','x':103.195541,'y':23.27833},{'date':'2015/10/05 08:08:08','x':103.195541,'y':23.27833},{'date':'2015/10/05 09:00:30','x':103.195541,'y':23.27833},{'date':'2015/10/05 12:46:58','x':103.195541,'y':23.27833},{'date':'2015/10/05 12:46:58','x':103.195541,'y':23.27833},{'date':'2015/10/05 12:46:58','x':103.195541,'y':23.27833},{'date':'2015/10/05 12:46:59','x':103.195541,'y':23.27833},{'date':'2015/10/05 12:46:59','x':103.195541,'y':23.27833},{'date':'2015/10/05 13:48:56','x':103.195541,'y':23.27833},{'date':'2015/10/05 13:48:56','x':103.195541,'y':23.27833},{'date':'2015/10/05 13:48:56','x':103.195541,'y':23.27833},{'date':'2015/10/05 13:48:56','x':103.195541,'y':23.27833},{'date':'2015/10/05 16:57:05','x':103.195541,'y':23.27833},{'date':'2015/10/05 19:55:52','x':103.195541,'y':23.27833},{'date':'2015/10/05 20:10:31','x':103.195541,'y':23.27833},{'date':'2015/10/05 22:46:23','x':103.195541,'y':23.27833},{'date':'2015/10/06 04:10:48','x':103.185593,'y':23.282551},{'date':'2015/10/06 07:39:50','x':103.195541,'y':23.27833},{'date':'2015/10/06 09:15:58','x':103.195541,'y':23.27833},{'date':'2015/10/06 12:14:17','x':103.195541,'y':23.27833},{'date':'2015/10/06 13:01:35','x':103.195541,'y':23.27833},{'date':'2015/10/06 15:45:34','x':103.195541,'y':23.27833},{'date':'2015/10/06 18:59:45','x':103.195541,'y':23.27833},{'date':'2015/10/06 18:59:45','x':103.195541,'y':23.27833},{'date':'2015/10/06 18:59:45','x':103.195541,'y':23.27833},{'date':'2015/10/06 19:06:09','x':103.195541,'y':23.27833},{'date':'2015/10/06 19:06:09','x':103.195541,'y':23.27833},{'date':'2015/10/06 19:06:09','x':103.195541,'y':23.27833},{'date':'2015/10/06 19:06:39','x':103.195541,'y':23.27833},{'date':'2015/10/06 19:06:39','x':103.195541,'y':23.27833},{'date':'2015/10/06 19:06:39','x':103.195541,'y':23.27833},{'date':'2015/10/07 04:07:47','x':103.195541,'y':23.27833},{'date':'2015/10/07 04:07:47','x':103.195541,'y':23.27833},{'date':'2015/10/07 04:12:40','x':103.195541,'y':23.27833},{'date':'2015/10/07 04:12:40','x':103.195541,'y':23.27833},{'date':'2015/10/07 09:08:32','x':103.195541,'y':23.27833},{'date':'2015/10/07 09:32:00','x':103.185593,'y':23.282551},{'date':'2015/10/07 10:00:25','x':103.195541,'y':23.27833},{'date':'2015/10/07 10:30:16','x':103.185593,'y':23.282551},{'date':'2015/10/07 12:06:32','x':103.185593,'y':23.282551},{'date':'2015/10/07 12:58:58','x':103.195541,'y':23.27833},{'date':'2015/10/07 14:16:35','x':103.185593,'y':23.282551},{'date':'2015/10/07 17:12:17','x':103.195541,'y':23.27833},{'date':'2015/10/07 17:22:58','x':103.195541,'y':23.27833},{'date':'2015/10/07 19:59:05','x':103.195541,'y':23.27833},{'date':'2015/10/08 02:26:56','x':103.195541,'y':23.27833},{'date':'2015/10/08 07:36:52','x':103.195541,'y':23.27833},{'date':'2015/10/08 07:36:52','x':103.195541,'y':23.27833},{'date':'2015/10/08 14:50:39','x':103.185593,'y':23.282551},{'date':'2015/10/08 15:04:41','x':103.195541,'y':23.27833},{'date':'2015/10/08 15:07:37','x':103.195541,'y':23.27833},{'date':'2015/10/08 15:38:58','x':103.195541,'y':23.27833},{'date':'2015/10/08 16:15:59','x':103.195541,'y':23.27833},{'date':'2015/10/08 16:16:00','x':103.195541,'y':23.27833},{'date':'2015/10/08 17:02:53','x':103.185593,'y':23.282551},{'date':'2015/10/08 17:08:58','x':103.195541,'y':23.27833},{'date':'2015/10/08 17:44:41','x':103.195541,'y':23.27833},{'date':'2015/10/08 18:35:16','x':103.195541,'y':23.27833},{'date':'2015/10/08 19:28:03','x':103.195541,'y':23.27833},{'date':'2015/10/08 20:16:51','x':103.195541,'y':23.27833},{'date':'2015/10/08 20:28:19','x':103.195541,'y':23.27833},{'date':'2015/10/08 21:04:56','x':103.195541,'y':23.27833},{'date':'2015/10/08 22:54:59','x':103.195541,'y':23.27833},{'date':'2015/10/08 22:55:43','x':103.195541,'y':23.27833},{'date':'2015/10/08 23:25:43','x':103.195541,'y':23.27833},{'date':'2015/10/09 03:30:09','x':103.195541,'y':23.27833},{'date':'2015/10/09 09:16:01','x':103.185593,'y':23.282551},{'date':'2015/10/09 11:36:07','x':103.195541,'y':23.27833},{'date':'2015/10/09 11:36:08','x':103.195541,'y':23.27833},{'date':'2015/10/09 11:42:48','x':103.195541,'y':23.27833},{'date':'2015/10/09 11:46:06','x':103.183449,'y':23.286079},{'date':'2015/10/09 15:01:02','x':103.195541,'y':23.27833},{'date':'2015/10/09 15:01:08','x':103.195541,'y':23.27833},{'date':'2015/10/09 17:32:32','x':103.195541,'y':23.27833},{'date':'2015/10/09 17:32:32','x':103.195541,'y':23.27833},{'date':'2015/10/09 17:43:15','x':103.185593,'y':23.282551},{'date':'2015/10/09 17:56:15','x':103.195541,'y':23.27833},{'date':'2015/10/09 18:45:06','x':103.195541,'y':23.27833},{'date':'2015/10/09 20:17:26','x':103.185593,'y':23.282551},{'date':'2015/10/09 21:15:23','x':103.195541,'y':23.27833},{'date':'2015/10/10 09:58:55','x':103.195541,'y':23.27833},{'date':'2015/10/10 10:29:46','x':103.195541,'y':23.27833},{'date':'2015/10/10 13:35:03','x':103.195541,'y':23.27833},{'date':'2015/10/10 13:35:04','x':103.195541,'y':23.27833},{'date':'2015/10/10 14:13:07','x':103.185593,'y':23.282551},{'date':'2015/10/10 14:32:54','x':103.195541,'y':23.27833},{'date':'2015/10/10 16:35:00','x':103.195541,'y':23.27833},{'date':'2015/10/10 16:35:01','x':103.195541,'y':23.27833},{'date':'2015/10/10 16:38:40','x':103.195541,'y':23.27833},{'date':'2015/10/10 16:38:40','x':103.195541,'y':23.27833},{'date':'2015/10/10 17:42:34','x':103.195541,'y':23.27833},{'date':'2015/10/10 17:54:54','x':103.195541,'y':23.27833},{'date':'2015/10/10 18:02:29','x':103.195541,'y':23.27833},{'date':'2015/10/10 18:10:36','x':103.185593,'y':23.282551},{'date':'2015/10/10 19:15:25','x':103.195541,'y':23.27833},{'date':'2015/10/10 19:18:36','x':103.195541,'y':23.27833},{'date':'2015/10/10 19:36:08','x':103.185593,'y':23.282551},{'date':'2015/10/10 19:38:24','x':103.195541,'y':23.27833},{'date':'2015/10/10 19:39:40','x':103.195541,'y':23.27833},{'date':'2015/10/10 19:46:17','x':103.185593,'y':23.282551},{'date':'2015/10/10 19:50:25','x':103.195541,'y':23.27833},{'date':'2015/10/10 19:50:26','x':103.195541,'y':23.27833},{'date':'2015/10/10 19:56:33','x':103.185593,'y':23.282551},{'date':'2015/10/10 19:56:34','x':103.185593,'y':23.282551},{'date':'2015/10/11 04:34:02','x':103.195541,'y':23.27833},{'date':'2015/10/11 04:34:02','x':103.195541,'y':23.27833},{'date':'2015/10/11 04:59:21','x':103.195541,'y':23.27833},{'date':'2015/10/11 04:59:22','x':103.195541,'y':23.27833},{'date':'2015/10/11 05:43:09','x':103.195541,'y':23.27833},{'date':'2015/10/11 06:01:22','x':103.195541,'y':23.27833},{'date':'2015/10/11 06:57:00','x':103.183449,'y':23.286079},{'date':'2015/10/11 06:57:01','x':103.183449,'y':23.286079},{'date':'2015/10/11 08:15:48','x':103.195541,'y':23.27833},{'date':'2015/10/11 11:54:19','x':103.195541,'y':23.27833},{'date':'2015/10/11 12:09:02','x':103.183449,'y':23.286079},{'date':'2015/10/11 13:39:37','x':103.195541,'y':23.27833},{'date':'2015/10/11 13:49:27','x':103.195541,'y':23.27833},{'date':'2015/10/11 14:47:17','x':103.183449,'y':23.286079},{'date':'2015/10/11 14:57:47','x':103.195541,'y':23.27833},{'date':'2015/10/11 15:35:01','x':103.195541,'y':23.27833},{'date':'2015/10/11 19:57:18','x':103.195541,'y':23.27833},{'date':'2015/10/11 19:57:19','x':103.195541,'y':23.27833},{'date':'2015/10/11 21:35:35','x':103.195541,'y':23.27833},{'date':'2015/10/12 04:40:09','x':103.195541,'y':23.27833},{'date':'2015/10/12 04:40:09','x':103.195541,'y':23.27833},{'date':'2015/10/12 06:48:54','x':103.185593,'y':23.282551},{'date':'2015/10/12 07:13:08','x':103.195541,'y':23.27833},{'date':'2015/10/12 09:52:08','x':103.195541,'y':23.27833},{'date':'2015/10/12 10:09:25','x':103.195541,'y':23.27833},{'date':'2015/10/12 10:59:12','x':103.195541,'y':23.27833},{'date':'2015/10/12 14:25:06','x':103.185593,'y':23.282551},{'date':'2015/10/12 15:03:11','x':103.195541,'y':23.27833},{'date':'2015/10/12 15:43:15','x':103.185593,'y':23.282551},{'date':'2015/10/12 16:23:59','x':103.195541,'y':23.27833},{'date':'2015/10/12 16:31:08','x':103.195541,'y':23.27833},{'date':'2015/10/12 16:33:58','x':103.195541,'y':23.27833},{'date':'2015/10/12 16:33:58','x':103.195541,'y':23.27833},{'date':'2015/10/12 16:46:51','x':103.195541,'y':23.27833},{'date':'2015/10/12 16:55:46','x':103.195541,'y':23.27833},{'date':'2015/10/12 18:06:26','x':103.195541,'y':23.27833},{'date':'2015/10/12 18:57:56','x':103.185593,'y':23.282551},{'date':'2015/10/12 21:07:43','x':103.195541,'y':23.27833},{'date':'2015/10/13 06:59:08','x':103.195541,'y':23.27833},{'date':'2015/10/13 07:51:33','x':103.195541,'y':23.27833},{'date':'2015/10/13 09:58:20','x':103.195541,'y':23.27833},{'date':'2015/10/13 10:01:08','x':103.195541,'y':23.27833},{'date':'2015/10/13 10:08:43','x':103.195541,'y':23.27833},{'date':'2015/10/13 10:35:56','x':103.195541,'y':23.27833},{'date':'2015/10/13 11:24:24','x':103.195541,'y':23.27833},{'date':'2015/10/13 11:24:25','x':103.195541,'y':23.27833},{'date':'2015/10/13 11:30:36','x':103.195541,'y':23.27833},{'date':'2015/10/13 11:30:36','x':103.195541,'y':23.27833},{'date':'2015/10/13 11:47:05','x':103.195541,'y':23.27833},{'date':'2015/10/13 12:11:54','x':103.195541,'y':23.27833},{'date':'2015/10/13 12:11:55','x':103.195541,'y':23.27833},{'date':'2015/10/13 12:15:40','x':103.185593,'y':23.282551},{'date':'2015/10/13 12:28:59','x':103.195541,'y':23.27833},{'date':'2015/10/13 12:28:59','x':103.195541,'y':23.27833},{'date':'2015/10/13 13:31:32','x':103.207108,'y':23.302679},{'date':'2015/10/13 13:32:12','x':103.208366,'y':23.299665},{'date':'2015/10/13 13:42:56','x':103.207108,'y':23.302679},{'date':'2015/10/13 14:24:00','x':103.208366,'y':23.299665},{'date':'2015/10/13 14:26:52','x':103.205872,'y':23.297991},{'date':'2015/10/13 14:43:16','x':103.205872,'y':23.297991},{'date':'2015/10/13 14:46:23','x':103.205872,'y':23.297991},{'date':'2015/10/13 14:48:58','x':103.205872,'y':23.297991},{'date':'2015/10/13 15:50:29','x':103.195541,'y':23.27833},{'date':'2015/10/13 18:02:06','x':103.195541,'y':23.27833},{'date':'2015/10/13 19:03:39','x':103.195541,'y':23.27833},{'date':'2015/10/13 19:37:39','x':103.195541,'y':23.27833},{'date':'2015/10/13 19:37:39','x':103.195541,'y':23.27833},{'date':'2015/10/13 19:40:37','x':103.185593,'y':23.282551},{'date':'2015/10/13 19:41:56','x':103.195541,'y':23.27833},{'date':'2015/10/13 20:30:36','x':103.185593,'y':23.282551},{'date':'2015/10/13 20:40:46','x':103.183449,'y':23.286079},{'date':'2015/10/13 20:40:59','x':103.183449,'y':23.286079},{'date':'2015/10/13 21:55:54','x':103.195541,'y':23.27833},{'date':'2015/10/13 23:42:26','x':103.195541,'y':23.27833},{'date':'2015/10/14 08:22:05','x':103.195541,'y':23.27833},{'date':'2015/10/14 13:56:26','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:02:18','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:06:07','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:09:28','x':103.183449,'y':23.286079},{'date':'2015/10/14 14:09:40','x':103.183449,'y':23.286079},{'date':'2015/10/14 14:22:03','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:32:36','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:41:04','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:41:05','x':103.195541,'y':23.27833},{'date':'2015/10/14 14:44:25','x':103.195541,'y':23.27833},{'date':'2015/10/14 15:08:52','x':103.195541,'y':23.27833},{'date':'2015/10/14 15:19:57','x':103.195541,'y':23.27833},{'date':'2015/10/14 15:28:48','x':103.195541,'y':23.27833},{'date':'2015/10/14 16:15:34','x':103.195541,'y':23.27833},{'date':'2015/10/14 16:35:32','x':103.195541,'y':23.27833},{'date':'2015/10/14 18:17:31','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:12:57','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:29:55','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:33:09','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:33:09','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:38:37','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:38:38','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:51:50','x':103.195541,'y':23.27833},{'date':'2015/10/14 19:52:24','x':103.185593,'y':23.282551},{'date':'2015/10/14 20:12:44','x':103.195541,'y':23.27833},{'date':'2015/10/14 20:15:39','x':103.195541,'y':23.27833},{'date':'2015/10/14 20:21:33','x':103.195541,'y':23.27833},{'date':'2015/10/14 20:35:56','x':103.195541,'y':23.27833},{'date':'2015/10/14 20:42:58','x':103.195541,'y':23.27833},{'date':'2015/10/15 02:17:59','x':103.185593,'y':23.282551},{'date':'2015/10/15 08:11:35','x':103.195541,'y':23.27833},{'date':'2015/10/15 08:12:21','x':103.195541,'y':23.27833},{'date':'2015/10/15 08:12:21','x':103.195541,'y':23.27833},{'date':'2015/10/15 08:28:09','x':103.195541,'y':23.27833},{'date':'2015/10/15 08:53:28','x':103.195541,'y':23.27833},{'date':'2015/10/15 08:54:43','x':103.183449,'y':23.286079},{'date':'2015/10/15 08:54:44','x':103.183449,'y':23.286079},{'date':'2015/10/15 10:16:35','x':103.185593,'y':23.282551},{'date':'2015/10/15 11:43:08','x':103.195541,'y':23.27833},{'date':'2015/10/15 11:43:08','x':103.195541,'y':23.27833},{'date':'2015/10/15 17:39:27','x':103.195541,'y':23.27833},{'date':'2015/10/15 19:05:00','x':103.195541,'y':23.27833},{'date':'2015/10/15 19:05:00','x':103.195541,'y':23.27833},{'date':'2015/10/15 19:09:14','x':103.183449,'y':23.286079},{'date':'2015/10/15 19:10:13','x':103.183449,'y':23.286079},{'date':'2015/10/15 19:10:13','x':103.183449,'y':23.286079},{'date':'2015/10/15 19:27:32','x':103.195541,'y':23.27833},{'date':'2015/10/15 20:02:43','x':103.195541,'y':23.27833},{'date':'2015/10/15 20:07:53','x':103.195541,'y':23.27833},{'date':'2015/10/15 20:07:54','x':103.195541,'y':23.27833},{'date':'2015/10/15 20:22:19','x':103.195541,'y':23.27833},{'date':'2015/10/15 20:22:20','x':103.195541,'y':23.27833},{'date':'2015/10/16 07:23:17','x':103.195541,'y':23.27833},{'date':'2015/10/16 09:51:55','x':103.185593,'y':23.282551},{'date':'2015/10/16 11:14:51','x':103.195541,'y':23.27833},{'date':'2015/10/16 13:27:23','x':103.185593,'y':23.282551},{'date':'2015/10/16 13:27:23','x':103.185593,'y':23.282551},{'date':'2015/10/16 13:47:45','x':103.195541,'y':23.27833},{'date':'2015/10/16 14:27:53','x':103.195541,'y':23.27833},{'date':'2015/10/16 14:31:55','x':103.195541,'y':23.27833},{'date':'2015/10/16 15:01:48','x':103.190659,'y':23.35076},{'date':'2015/10/16 16:00:38','x':103.171013,'y':23.473709},{'date':'2015/10/16 19:14:56','x':103.244652,'y':23.527491},{'date':'2015/10/16 19:14:57','x':103.244652,'y':23.527491},{'date':'2015/10/16 20:21:17','x':103.154068,'y':23.35907},{'date':'2015/10/16 20:38:49','x':103.134338,'y':23.313931},{'date':'2015/10/16 20:52:18','x':103.178711,'y':23.30715},{'date':'2015/10/16 21:18:37','x':103.185593,'y':23.282551},{'date':'2015/10/16 21:29:39','x':103.195541,'y':23.27833},{'date':'2015/10/16 21:32:18','x':103.195541,'y':23.27833},{'date':'2015/10/16 21:32:18','x':103.195541,'y':23.27833},{'date':'2015/10/16 23:08:07','x':103.195541,'y':23.27833},{'date':'2015/10/17 08:55:42','x':103.195541,'y':23.27833},{'date':'2015/10/17 10:27:35','x':103.185593,'y':23.282551},{'date':'2015/10/17 12:41:11','x':103.195541,'y':23.27833},{'date':'2015/10/17 20:28:53','x':103.195541,'y':23.27833},{'date':'2015/10/18 09:57:25','x':103.195541,'y':23.27833},{'date':'2015/10/18 12:47:36','x':103.195541,'y':23.27833},{'date':'2015/10/18 19:03:49','x':103.195541,'y':23.27833},{'date':'2015/10/18 19:36:59','x':103.195541,'y':23.27833},{'date':'2015/10/18 19:37:00','x':103.195541,'y':23.27833},{'date':'2015/10/18 19:41:10','x':103.183449,'y':23.286079},{'date':'2015/10/18 20:50:24','x':103.195541,'y':23.27833},{'date':'2015/10/19 11:54:51','x':103.195541,'y':23.27833},{'date':'2015/10/19 12:43:33','x':103.195541,'y':23.27833},{'date':'2015/10/19 12:43:34','x':103.195541,'y':23.27833},{'date':'2015/10/19 13:57:53','x':103.185593,'y':23.282551},{'date':'2015/10/19 15:15:38','x':103.195541,'y':23.27833},{'date':'2015/10/19 16:11:38','x':103.195541,'y':23.27833},{'date':'2015/10/19 16:21:21','x':103.183449,'y':23.286079},{'date':'2015/10/19 16:21:21','x':103.183449,'y':23.286079},{'date':'2015/10/19 17:29:55','x':103.185593,'y':23.282551},{'date':'2015/10/19 17:29:55','x':103.185593,'y':23.282551},{'date':'2015/10/19 17:31:16','x':103.185593,'y':23.282551},{'date':'2015/10/19 17:33:41','x':103.195541,'y':23.27833},{'date':'2015/10/20 11:08:19','x':103.195541,'y':23.27833},{'date':'2015/10/20 11:31:29','x':103.195541,'y':23.27833},{'date':'2015/10/20 13:02:26','x':103.195541,'y':23.27833},{'date':'2015/10/20 14:24:04','x':103.185593,'y':23.282551},{'date':'2015/10/20 14:51:03','x':103.195541,'y':23.27833},{'date':'2015/10/20 14:57:26','x':103.195541,'y':23.27833},{'date':'2015/10/20 18:45:27','x':103.195541,'y':23.27833},{'date':'2015/10/20 21:12:41','x':103.195541,'y':23.27833},{'date':'2015/10/21 02:25:21','x':103.195541,'y':23.27833},{'date':'2015/10/21 02:39:39','x':103.195541,'y':23.27833},{'date':'2015/10/21 09:03:20','x':103.195541,'y':23.27833},{'date':'2015/10/21 09:07:19','x':103.195541,'y':23.27833},{'date':'2015/10/21 13:43:27','x':103.134338,'y':23.313931},{'date':'2015/10/21 13:47:44','x':103.134338,'y':23.313931},{'date':'2015/10/21 13:47:44','x':103.134338,'y':23.313931},{'date':'2015/10/21 14:27:45','x':103.171013,'y':23.473709},{'date':'2015/10/21 15:18:25','x':103.257988,'y':23.615576},{'date':'2015/10/21 15:18:30','x':103.257988,'y':23.615576},{'date':'2015/10/21 15:18:34','x':103.257988,'y':23.615576},{'date':'2015/10/21 15:20:22','x':103.257988,'y':23.615576},{'date':'2015/10/21 19:17:45','x':103.184746,'y':23.501831},{'date':'2015/10/21 20:29:45','x':103.195541,'y':23.27833},{'date':'2015/10/21 20:33:39','x':103.195541,'y':23.27833},{'date':'2015/10/21 21:01:38','x':103.195541,'y':23.27833},{'date':'2015/10/21 22:31:20','x':103.185593,'y':23.282551},{'date':'2015/10/21 22:35:33','x':103.195541,'y':23.27833},{'date':'2015/10/21 22:35:33','x':103.195541,'y':23.27833},{'date':'2015/10/21 22:54:00','x':103.195541,'y':23.27833},{'date':'2015/10/21 22:55:47','x':103.195541,'y':23.27833},{'date':'2015/10/21 23:07:09','x':103.195541,'y':23.27833},{'date':'2015/10/21 23:07:09','x':103.195541,'y':23.27833},{'date':'2015/10/22 07:26:09','x':103.195541,'y':23.27833},{'date':'2015/10/22 07:42:27','x':103.195541,'y':23.27833},{'date':'2015/10/22 07:43:45','x':103.195541,'y':23.27833},{'date':'2015/10/22 07:43:46','x':103.195541,'y':23.27833},{'date':'2015/10/22 07:44:59','x':103.183449,'y':23.286079},{'date':'2015/10/22 07:47:43','x':103.183449,'y':23.286079},{'date':'2015/10/22 07:47:43','x':103.183449,'y':23.286079},{'date':'2015/10/22 07:51:34','x':103.195541,'y':23.27833},{'date':'2015/10/22 07:52:37','x':103.185593,'y':23.282551},{'date':'2015/10/22 07:52:38','x':103.185593,'y':23.282551},{'date':'2015/10/22 07:56:14','x':103.195541,'y':23.27833},{'date':'2015/10/22 08:02:27','x':103.195541,'y':23.27833},{'date':'2015/10/22 08:02:28','x':103.195541,'y':23.27833},{'date':'2015/10/22 08:52:30','x':103.195541,'y':23.27833},{'date':'2015/10/22 09:25:44','x':103.195541,'y':23.27833},{'date':'2015/10/22 09:29:31','x':103.195541,'y':23.27833},{'date':'2015/10/22 09:31:52','x':103.185593,'y':23.282551},{'date':'2015/10/22 09:35:56','x':103.195541,'y':23.27833},{'date':'2015/10/22 09:35:57','x':103.195541,'y':23.27833},{'date':'2015/10/22 09:37:47','x':103.195541,'y':23.27833},{'date':'2015/10/22 09:37:48','x':103.195541,'y':23.27833},{'date':'2015/10/22 11:09:54','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:15:46','x':103.183449,'y':23.286079},{'date':'2015/10/22 12:16:59','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:18:42','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:18:42','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:19:45','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:19:46','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:31:03','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:31:03','x':103.195541,'y':23.27833},{'date':'2015/10/22 12:54:42','x':103.183449,'y':23.286079},{'date':'2015/10/22 13:08:12','x':103.183449,'y':23.286079},{'date':'2015/10/22 14:28:15','x':103.195541,'y':23.27833},{'date':'2015/10/22 14:28:15','x':103.195541,'y':23.27833},{'date':'2015/10/22 14:41:23','x':103.195541,'y':23.27833},{'date':'2015/10/22 14:41:24','x':103.195541,'y':23.27833},{'date':'2015/10/22 16:21:41','x':103.195541,'y':23.27833},{'date':'2015/10/22 16:31:57','x':103.185593,'y':23.282551},{'date':'2015/10/22 16:31:57','x':103.185593,'y':23.282551},{'date':'2015/10/22 16:37:15','x':103.195541,'y':23.27833},{'date':'2015/10/22 16:39:56','x':103.195541,'y':23.27833},{'date':'2015/10/22 17:09:33','x':103.183449,'y':23.286079},{'date':'2015/10/22 17:32:55','x':103.195541,'y':23.27833},{'date':'2015/10/22 18:22:36','x':103.183449,'y':23.286079},{'date':'2015/10/22 19:51:52','x':103.195541,'y':23.27833},{'date':'2015/10/22 19:56:59','x':103.195541,'y':23.27833},{'date':'2015/10/22 19:56:59','x':103.195541,'y':23.27833},{'date':'2015/10/22 20:03:19','x':103.195541,'y':23.27833},{'date':'2015/10/22 20:03:20','x':103.195541,'y':23.27833},{'date':'2015/10/22 20:07:37','x':103.185593,'y':23.282551},{'date':'2015/10/22 21:22:36','x':103.195541,'y':23.27833},{'date':'2015/10/23 07:54:28','x':103.195541,'y':23.27833},{'date':'2015/10/23 07:57:03','x':103.195541,'y':23.27833},{'date':'2015/10/23 07:58:48','x':103.195541,'y':23.27833},{'date':'2015/10/23 07:59:35','x':103.195541,'y':23.27833},{'date':'2015/10/23 07:59:36','x':103.195541,'y':23.27833},{'date':'2015/10/23 08:01:19','x':103.195541,'y':23.27833},{'date':'2015/10/23 08:01:56','x':103.195541,'y':23.27833},{'date':'2015/10/23 08:29:18','x':103.185593,'y':23.282551},{'date':'2015/10/23 08:50:06','x':103.195541,'y':23.27833},{'date':'2015/10/23 08:50:06','x':103.195541,'y':23.27833},{'date':'2015/10/23 09:27:40','x':103.195541,'y':23.27833},{'date':'2015/10/23 10:15:30','x':103.195541,'y':23.27833},{'date':'2015/10/23 11:09:22','x':103.195541,'y':23.27833},{'date':'2015/10/23 12:58:23','x':103.195541,'y':23.27833},{'date':'2015/10/23 12:58:23','x':103.195541,'y':23.27833},{'date':'2015/10/23 14:53:36','x':103.195541,'y':23.27833},{'date':'2015/10/23 17:39:33','x':103.195541,'y':23.27833},{'date':'2015/10/23 19:09:39','x':103.185593,'y':23.282551},{'date':'2015/10/24 08:35:39','x':103.195541,'y':23.27833},{'date':'2015/10/24 08:56:17','x':103.195541,'y':23.27833},{'date':'2015/10/24 08:57:27','x':103.195541,'y':23.27833},{'date':'2015/10/24 13:42:49','x':103.185593,'y':23.282551},{'date':'2015/10/24 14:49:01','x':103.195541,'y':23.27833},{'date':'2015/10/24 15:17:11','x':103.195541,'y':23.27833},{'date':'2015/10/24 18:47:48','x':103.195541,'y':23.27833},{'date':'2015/10/24 18:47:48','x':103.195541,'y':23.27833},{'date':'2015/10/24 22:15:31','x':103.195541,'y':23.27833},{'date':'2015/10/25 12:27:26','x':103.195541,'y':23.27833},{'date':'2015/10/25 13:38:37','x':103.195541,'y':23.27833},{'date':'2015/10/25 17:04:11','x':103.195541,'y':23.27833},{'date':'2015/10/25 17:31:42','x':103.195541,'y':23.27833},{'date':'2015/10/25 17:31:43','x':103.195541,'y':23.27833},{'date':'2015/10/25 17:44:49','x':103.195541,'y':23.27833},{'date':'2015/10/25 18:08:46','x':103.195541,'y':23.27833},{'date':'2015/10/25 18:58:32','x':103.195541,'y':23.27833},{'date':'2015/10/25 19:53:06','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:16:40','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:16:40','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:22:58','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:44:15','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:44:16','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:46:34','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:49:08','x':103.195541,'y':23.27833},{'date':'2015/10/25 21:49:09','x':103.195541,'y':23.27833},{'date':'2015/10/25 23:27:44','x':103.195541,'y':23.27833},{'date':'2015/10/26 08:56:44','x':103.195541,'y':23.27833},{'date':'2015/10/26 08:58:52','x':103.195541,'y':23.27833},{'date':'2015/10/26 09:35:09','x':103.185593,'y':23.282551},{'date':'2015/10/26 09:55:46','x':103.185593,'y':23.282551},{'date':'2015/10/26 09:55:47','x':103.185593,'y':23.282551},{'date':'2015/10/26 10:07:32','x':103.195541,'y':23.27833},{'date':'2015/10/26 10:40:47','x':103.273521,'y':23.29442},{'date':'2015/10/26 10:43:38','x':103.272408,'y':23.290131},{'date':'2015/10/26 11:15:02','x':103.281113,'y':23.39736},{'date':'2015/10/26 11:15:03','x':103.281113,'y':23.39736},{'date':'2015/10/26 12:42:39','x':103.178711,'y':23.30715},{'date':'2015/10/26 13:04:56','x':103.183449,'y':23.286079},{'date':'2015/10/26 13:05:39','x':103.195541,'y':23.27833},{'date':'2015/10/26 13:20:36','x':103.195541,'y':23.27833},{'date':'2015/10/26 13:20:36','x':103.195541,'y':23.27833},{'date':'2015/10/26 13:22:05','x':103.195541,'y':23.27833},{'date':'2015/10/26 16:07:51','x':103.195541,'y':23.27833},{'date':'2015/10/26 16:53:04','x':103.195541,'y':23.27833},{'date':'2015/10/26 16:53:56','x':103.195541,'y':23.27833},{'date':'2015/10/26 17:13:04','x':103.195541,'y':23.27833},{'date':'2015/10/26 17:13:42','x':103.195541,'y':23.27833},{'date':'2015/10/26 17:18:26','x':103.195541,'y':23.27833},{'date':'2015/10/26 17:22:42','x':103.195541,'y':23.27833},{'date':'2015/10/26 20:13:30','x':103.185593,'y':23.282551},{'date':'2015/10/26 21:25:37','x':103.195541,'y':23.27833}]
};