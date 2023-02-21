import request from '../utils/request';

export const login = (data: Object) => {
    return request({
        url: 'user/login',
        method: 'POST',
        data
    });
};
