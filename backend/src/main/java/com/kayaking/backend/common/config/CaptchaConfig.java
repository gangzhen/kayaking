package com.kayaking.backend.common.config;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class CaptchaConfig {
    public static Map<Long, String> CAPTCHA_MAP = new HashMap<>();
}
