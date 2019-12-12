package com.virugan.mytoolsbox;

import com.virugan.mytoolsbox.utils.myDateUtils;
import com.virugan.mytoolsbox.utils.myFileUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;


public class MytoolsboxApplicationTests {

    @Test
    public void contextLoads() {
        System.out.println(myDateUtils.toDate("20190801","yyyyMMdd"));

    }

    @Test
    public void readableFileSize() {
        String url="C:\\Users\\86159\\Desktop\\nmelist-update.html";
        File file = new File(url);
        String size = myFileUtils.getFileSize(file);
        System.out.println(size);

    }

}
