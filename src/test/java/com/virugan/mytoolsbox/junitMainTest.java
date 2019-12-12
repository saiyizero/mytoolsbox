package com.virugan.mytoolsbox;

import com.teamdev.jxbrowser.chromium.Browser;
import com.teamdev.jxbrowser.chromium.events.*;
import com.teamdev.jxbrowser.chromium.swing.BrowserView;

import javax.swing.*;
import java.awt.*;

public class junitMainTest {

    public static void main(String[] args) {
        Browser browser=new Browser();
        BrowserView view = new BrowserView(browser);
        JFrame frame = new JFrame("myOfficeV2.0");
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.getContentPane().add(view, BorderLayout.CENTER);
        frame.setSize(1200, 700);
        frame.setMinimumSize(new Dimension(1200, 700));
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);

        browser.addLoadListener(new LoadAdapter() {
            public void onFinishLoadingFrame(FinishLoadingEvent event) {
            }
            public void onProvisionalLoadingFrame(ProvisionalLoadingEvent event) {
            }
        });

        browser.addScriptContextListener(new ScriptContextListener() {
            public void onScriptContextDestroyed(ScriptContextEvent event) {
            }
            public void onScriptContextCreated(ScriptContextEvent arg0) {
            }
        } );

        browser.loadURL("http://localhost:8080/index.html");
//        browser.loadURL("C:\\Users\\86159\\IdeaProjects\\mytoolsbox\\src\\main\\resources\\static\\index.html");
    }
}
