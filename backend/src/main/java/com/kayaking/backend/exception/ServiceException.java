package com.kayaking.backend.exception;

import com.kayaking.backend.common.enumerate.ApiCodesEnum;
import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException{

    private final String code;

    public ServiceException(String msg) {
        super(msg);
        this.code = ApiCodesEnum.ERROR_500.getCode();
    }

    public ServiceException(String code ,String msg) {
        super(msg);
        this.code = code;
    }
}
