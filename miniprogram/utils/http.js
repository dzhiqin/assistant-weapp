"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("./env");
var http = function (_a) {
    var _b = (_a === void 0 ? {} : _a).param, param = _b === void 0 ? {} : _b;
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            return [2, new Promise(function (resolve, reject) {
                    wx.request({
                        url: env_1.httpUrl + '/mapi/graphql',
                        data: param,
                        header: {
                            'content-type': 'application/json',
                            Authorization: 'Bearer ' + wx.getStorageSync('token'),
                            'x-mina-version': '1.5.7',
                            'x-client': 'User',
                        },
                        method: 'POST',
                        complete: function (res) {
                            wx.hideLoading();
                            if (res.statusCode >= 200 && res.statusCode < 300) {
                                resolve(res.data);
                            }
                            else {
                                reject(res);
                                wx.showToast({
                                    title: '网络请求失败',
                                    icon: 'none',
                                    duration: 2000,
                                });
                            }
                        },
                    });
                })];
        });
    });
};
var post = function (param) {
    if (param === void 0) { param = {}; }
    return http({
        param: param,
    });
};
module.exports = {
    post: post,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBK0RBOztBQS9EQSw2QkFBZ0M7QUFFaEMsSUFBTSxJQUFJLEdBQUcsVUFBTyxFQUFtQjtRQUFqQixvQ0FBVSxFQUFWLCtCQUFVOzs7WUFNOUIsV0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUNULEdBQUcsRUFBRSxhQUFPLEdBQUcsZUFBZTt3QkFDOUIsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsTUFBTSxFQUFFOzRCQUNOLGNBQWMsRUFBRSxrQkFBa0I7NEJBRWxDLGFBQWEsRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7NEJBQ3JELGdCQUFnQixFQUFFLE9BQU87NEJBQ3pCLFVBQVUsRUFBRSxNQUFNO3lCQUNuQjt3QkFDRCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxRQUFRLEVBQUUsVUFBQyxHQUFROzRCQUNqQixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7NEJBRWpCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0NBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ25CO2lDQUFNO2dDQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FFWixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUVYLEtBQUssRUFBRSxRQUFRO29DQUNmLElBQUksRUFBRSxNQUFNO29DQUNaLFFBQVEsRUFBRSxJQUFJO2lDQUNmLENBQUMsQ0FBQzs2QkFDSjt3QkFDSCxDQUFDO3FCQUNGLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsRUFBQzs7O0NBQ0osQ0FBQztBQWdCRixJQUFNLElBQUksR0FBRyxVQUFDLEtBQVU7SUFBVixzQkFBQSxFQUFBLFVBQVU7SUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDVixLQUFLLE9BQUE7S0FDTixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSSxNQUFBO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBVcmwgfSBmcm9tICcuL2Vudic7XG5cbmNvbnN0IGh0dHAgPSBhc3luYyAoeyBwYXJhbSA9IHt9IH0gPSB7fSkgPT4ge1xuICAvLyB3eC5zaG93TG9hZGluZyh7XG4gIC8vICAgdGl0bGU6ICfmi7zlkb3liqDovb3kuK0uLicsXG4gIC8vIH0pO1xuICAvLyBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBodHRwVXJsICsgJy9tYXBpL2dyYXBocWwnLFxuICAgICAgZGF0YTogcGFyYW0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLy8gJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKSxcbiAgICAgICAgJ3gtbWluYS12ZXJzaW9uJzogJzEuNS43JyxcbiAgICAgICAgJ3gtY2xpZW50JzogJ1VzZXInLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgY29tcGxldGU6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhg6ICX5pe2JHtEYXRlLm5vdygpIC0gdGltZVN0YXJ0fWApO1xuICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlcy5zdGF0dXNDb2RlIDwgMzAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgICAgLy/lvILluLjlpITnkIbpgLvovpFcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgLy8gaW1hZ2U6ICcvaW1hZ2VzL2ljb24vZmFpbC5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zor7fmsYLlpLHotKUnLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gY29uc3QgZ2V0VXJsID0gdXJsID0+IHtcbi8vICAgaWYgKHVybC5pbmRleE9mKCc6Ly8nKSA9PSAtMSkge1xuLy8gICAgIHVybCA9IGJhc2VVcmwgKyB1cmw7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHVybDtcbi8vIH07XG5cbi8vIGdldOaWueazlVxuLy8gY29uc3QgX2dldCA9IChwYXJhbSA9IHt9KSA9PiB7XG4vLyAgIHJldHVybiBodHRwKHtcbi8vICAgICBwYXJhbSxcbi8vICAgfSk7XG4vLyB9O1xuXG5jb25zdCBwb3N0ID0gKHBhcmFtID0ge30pID0+IHtcbiAgcmV0dXJuIGh0dHAoe1xuICAgIHBhcmFtLFxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwb3N0LFxufTtcbiJdfQ==