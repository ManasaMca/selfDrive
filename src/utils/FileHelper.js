import { isNullOrUndefined } from "util";
import ImageCropPicker from 'react-native-image-crop-picker';


export function openPickerImage(callback) {
    return new Promise(function (resolve, reject) {
      ImageCropPicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            includeBase64:true,
            freeStyleCropEnabled: true,
            avoidEmptySpaceAroundImage: true,
        }).then(response => {
          let fileName;
          const base64 = {uri: `data:${response.mime};base64,` + response.data};
          if(!isNullOrUndefined(response.path)){
            var getFilename = response.path.split("/");
            fileName = getFilename[getFilename.length - 1];
          }
          const data = {
              status: true,
              fileUri: response.path,
              fileName: fileName,
              type: response.mime,
              path:response.path,
              base64: base64, 
              size: response.size
          };
          callback(data);
          resolve()
        }).catch(e => {
            //alert(e);
            callback({status: false});
            reject()
        });
    });
}

export function openCameraCrop(callback) {
  return new Promise(function (resolve, reject) {
    ImageCropPicker.openCamera({
          width: 400,
          height: 400,
          cropping: true,
          includeBase64:true,
          mediaType: 'photo'
      }).then(response => {
        let fileName;
        const base64 = {uri: 'data:image/jpeg;base64,' + response.data};
        if(!isNullOrUndefined(response.path)){
          var getFilename = response.path.split("/");
          fileName = getFilename[getFilename.length - 1];
        }
        const data = {
            status: true,
            fileUri: response.path,
            fileName: fileName,
            type: response.mime,
            path:response.path,
            base64: base64, 
            size: response.size
        };
        callback(data);
        resolve()
      }).catch(e => {
          //alert(e);
          callback({status: false});
          reject();
      });
  });
}