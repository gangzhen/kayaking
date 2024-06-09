package com.kayaking.backend.common.enumerate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public enum ApiCodesEnum {

    /**
     * 接口调用返回代码
     */
    SUCCESS_200("200", "请求成功"),
    ERROR_500("500", "系统错误"),
    ERROR_401("401", "无权限"),
    ERROR_403("403", "禁止访问"),
    ;

    /**
     * 枚举类字段
     */
    private final String code;
    private final String msg;
}
