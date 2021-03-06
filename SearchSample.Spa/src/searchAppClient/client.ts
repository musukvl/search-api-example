﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.6.0 (NJsonSchema v10.0.23.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export module SearchApi {

export class SearchApiClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }

    search_StartSearch(request: StartSearchRequest): Promise<StartSearchResponse> {
        let url_ = this.baseUrl + "/api/search/start";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processSearch_StartSearch(_response);
        });
    }

    protected processSearch_StartSearch(response: AxiosResponse): Promise<StartSearchResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = StartSearchResponse.fromJS(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<StartSearchResponse>(<any>null);
    }

    search_GetSearchStatus(request: GetSearchStatusRequest): Promise<GetSearchStatusResponse> {
        let url_ = this.baseUrl + "/api/search/get-status";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processSearch_GetSearchStatus(_response);
        });
    }

    protected processSearch_GetSearchStatus(response: AxiosResponse): Promise<GetSearchStatusResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = GetSearchStatusResponse.fromJS(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<GetSearchStatusResponse>(<any>null);
    }

    search_GetSearchResult(request: GetSearchResultRequest): Promise<SearchResult> {
        let url_ = this.baseUrl + "/api/search/get-result";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processSearch_GetSearchResult(_response);
        });
    }

    protected processSearch_GetSearchResult(response: AxiosResponse): Promise<SearchResult> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = SearchResult.fromJS(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<SearchResult>(<any>null);
    }

    search_Cancel(request: CancelSearchRequest): Promise<FileResponse> {
        let url_ = this.baseUrl + "/api/search/cancel";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            responseType: "blob",
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/octet-stream"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processSearch_Cancel(_response);
        });
    }

    protected processSearch_Cancel(response: AxiosResponse): Promise<FileResponse> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers["content-disposition"] : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Promise.resolve({ fileName: fileName, status: status, data: response.data as Blob, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<FileResponse>(<any>null);
    }
}

export class StartSearchResponse implements IStartSearchResponse {
    searchId?: string | undefined;

    constructor(data?: IStartSearchResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.searchId = data["searchId"];
        }
    }

    static fromJS(data: any): StartSearchResponse {
        data = typeof data === 'object' ? data : {};
        let result = new StartSearchResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchId"] = this.searchId;
        return data; 
    }
}

export interface IStartSearchResponse {
    searchId?: string | undefined;
}

export class StartSearchRequest implements IStartSearchRequest {
    queue?: string | undefined;

    constructor(data?: IStartSearchRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.queue = data["queue"];
        }
    }

    static fromJS(data: any): StartSearchRequest {
        data = typeof data === 'object' ? data : {};
        let result = new StartSearchRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["queue"] = this.queue;
        return data; 
    }
}

export interface IStartSearchRequest {
    queue?: string | undefined;
}

export class GetSearchStatusResponse implements IGetSearchStatusResponse {
    searchId?: string | undefined;
    status?: SearchStatus;

    constructor(data?: IGetSearchStatusResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.searchId = data["searchId"];
            this.status = data["status"];
        }
    }

    static fromJS(data: any): GetSearchStatusResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GetSearchStatusResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchId"] = this.searchId;
        data["status"] = this.status;
        return data; 
    }
}

export interface IGetSearchStatusResponse {
    searchId?: string | undefined;
    status?: SearchStatus;
}

export enum SearchStatus {
    Unknown = 0,
    Queued = 1,
    InProgress = 2,
    Completed = 3,
    Failed = 4,
    Canceled = 5,
}

export class GetSearchStatusRequest implements IGetSearchStatusRequest {
    searchId?: string | undefined;

    constructor(data?: IGetSearchStatusRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.searchId = data["searchId"];
        }
    }

    static fromJS(data: any): GetSearchStatusRequest {
        data = typeof data === 'object' ? data : {};
        let result = new GetSearchStatusRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchId"] = this.searchId;
        return data; 
    }
}

export interface IGetSearchStatusRequest {
    searchId?: string | undefined;
}

export class SearchResult implements ISearchResult {
    searchId?: string | undefined;
    data?: string | undefined;
    isCanceled?: boolean;
    error?: string | undefined;
    isSuccess?: boolean;

    constructor(data?: ISearchResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.searchId = data["searchId"];
            this.data = data["data"];
            this.isCanceled = data["isCanceled"];
            this.error = data["error"];
            this.isSuccess = data["isSuccess"];
        }
    }

    static fromJS(data: any): SearchResult {
        data = typeof data === 'object' ? data : {};
        let result = new SearchResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchId"] = this.searchId;
        data["data"] = this.data;
        data["isCanceled"] = this.isCanceled;
        data["error"] = this.error;
        data["isSuccess"] = this.isSuccess;
        return data; 
    }
}

export interface ISearchResult {
    searchId?: string | undefined;
    data?: string | undefined;
    isCanceled?: boolean;
    error?: string | undefined;
    isSuccess?: boolean;
}

export class GetSearchResultRequest implements IGetSearchResultRequest {
    searchId?: string | undefined;

    constructor(data?: IGetSearchResultRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.searchId = data["searchId"];
        }
    }

    static fromJS(data: any): GetSearchResultRequest {
        data = typeof data === 'object' ? data : {};
        let result = new GetSearchResultRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchId"] = this.searchId;
        return data; 
    }
}

export interface IGetSearchResultRequest {
    searchId?: string | undefined;
}

export class CancelSearchRequest implements ICancelSearchRequest {
    searchId?: string | undefined;

    constructor(data?: ICancelSearchRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.searchId = data["searchId"];
        }
    }

    static fromJS(data: any): CancelSearchRequest {
        data = typeof data === 'object' ? data : {};
        let result = new CancelSearchRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["searchId"] = this.searchId;
        return data; 
    }
}

export interface ICancelSearchRequest {
    searchId?: string | undefined;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

}