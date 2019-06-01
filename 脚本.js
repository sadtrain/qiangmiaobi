//by sadtrain
//点击“领喵币”后运行
while (true) {

    if (text("去逛店").exists()) {
        text("去逛店").click();

        sleep(11000);
        if (text("猫猫出现啦").exists()) {
            text("猫猫出现啦").click();
            sleep(500);
            if (text("开心收下").exists()) {
                text("开心收下").click();
                sleep(500);
            }
        }
        back();

        sleep(500);
        click(900, 1800);
        sleep(300);

    }
}
