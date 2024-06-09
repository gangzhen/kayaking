package com.kayaking.backend.controller;

import com.kayaking.backend.common.config.CaptchaConfig;
import com.wf.captcha.SpecCaptcha;
import com.wf.captcha.base.Captcha;
import com.wf.captcha.utils.CaptchaUtil;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping
public class CaptchaController {

    @RequestMapping("/captcha")
    public void captcha(@RequestParam Long key, HttpServletRequest request, HttpServletResponse response) throws Exception {
        SpecCaptcha captcha = new SpecCaptcha(128, 32, 5);
        captcha.setCharType(Captcha.TYPE_NUM_AND_UPPER);
        CaptchaConfig.CAPTCHA_MAP.put(key, captcha.text().toLowerCase());
        CaptchaUtil.out(captcha, request, response);
    }
}
