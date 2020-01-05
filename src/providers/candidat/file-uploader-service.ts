import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileUploaderService {
    constructor(private _http: HttpClient) {}

    public  uploadImage(formdata: any ) {
        let _url: string = 'http://localhost/fm-api/upload/fileUpload.php';
        return this._http.post(_url, formdata).catch(this._errorHandler) ;
    }

    public uploadcv(formdata: any ) {
        let _url: string = 'http://localhost/fm-api/upload/cvUpload.php';
        return this._http.post(_url, formdata).catch(this._errorHandler) ;
    }

    public  uploadImageupdate(formdata: any ) {
        let _url: string = 'http://localhost/fm-api/upload/updateFile.php';
        return this._http.post(_url, formdata);
    }

    public uploadcvupdate(formdata: any ) {
        let _url: string = 'http://localhost/fm-api/upload/cvUploadupdate.php';
        return this._http.post(_url, formdata);
    }
    
    private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');
    }

    public  getFilesList() {
        let _url: string = 'http://192.168.1.96/fm-api/upload/getFilesFromDirectory.php';
        return this._http.get(_url).catch(this._errorHandler) ;
    }
}