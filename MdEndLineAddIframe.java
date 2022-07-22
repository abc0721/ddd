package com.mytest.htmlmd;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;

public class MdEndLineAddIframe {

    public static void main(String[] args) {

        String fileDir = "D:\\Ebackup\\ws\\learn-book\\docs\\cache-pdp\\";

        String targetStr = "\\r\\n\\r\\n<iframe  height=\"500px\" width=\"100%\" frameborder=0 allowfullscreen=\"true\" :src=\"$withBase('/ads.html')\"></iframe>";

        loopDir(new File(fileDir), targetStr);
    }

    public static void loopDir(File dir, String targetStr) {
        if(dir.isDirectory()) {
            for(File subFile: dir.listFiles()) {
                loopDir(subFile,targetStr);
            }
        }else {
            if(dir.getName().endsWith(".md")) {
                try {
                    System.out.println(dir.getAbsolutePath());
                    FileUtils.writeStringToFile(dir,targetStr,true);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
